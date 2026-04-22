"use client";
import { Suspense } from "react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

const CustomerManager = () => {
  const navigator = useRouter();
  const [customers, setCustomers] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerToDelete, setCustomerToDelete] = useState(null);

  // Helper to format names: "john doe" -> "John Doe"
  const formatName = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const addCustomer = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const newCustomer = {
      id: Math.floor(Math.random() * 10000),
      name: searchTerm.trim(),
    };

    setCustomers([...customers, newCustomer]);
    setSearchTerm(""); // Clear search after adding
  };

  const deleteCustomer = async () => {
    try {
      if (customerToDelete === null) {
        alert("Customer ID is Null");
      }
      await deleteDoc(doc(db, "customers", customerToDelete));
      const customerId = customerToDelete;

      // 🔹 1. Get subcollection
      const measurementRef = collection(
        db,
        "customers",
        customerId,
        "measurement",
      );

      const snapshot = await getDocs(measurementRef);

      // 🔹 2. Delete all measurement docs
      snapshot.forEach(async (d) => {
        await deleteDoc(doc(db, "customers", customerId, "measurement", d.id));
      });

      // 🔹 3. Delete parent doc
      await deleteDoc(doc(db, "customers", customerId));

      setCustomerToDelete(null);
      setCustomerToDelete(null);
    } catch (error) {
      console.log("Error deleting document : ", error.message);
    }
  };

  // const watchCustomer = (customer) => {
  //   setSelectedCustomer(customer);
  // };

  //select parent collection
  useEffect(() => {
    const colRef = collection(db, "customers");

    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const customerData = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name || "", // safe fallback
        }));

        // ✅ optional: sort A → Z
        customerData.sort((a, b) => a.name.localeCompare(b.name));

        setCustomers(customerData);
      },
      (error) => {
        console.error("Error fetching customers:", error);
      },
    );

    return () => unsubscribe();
  }, []);

  // Filter logic for the list
  const filteredCustomers = customers.filter((customer) =>
    customer.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex justify-center font-sans">
      <div className="w-full mt-30 max-w-md bg-[#1a1c23] p-6 rounded-lg shadow-xl border border-gray-800">
        <h2 className="text-[#d4af37] text-xl font-semibold mb-6 tracking-wide uppercase flex items-center gap-2">
          <span className="material-symbols-outlined">group</span>
          Customer Directory
        </h2>

        {/* Combined Search and Add Row */}
        <form onSubmit={addCustomer} className="flex gap-2 relative">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#888da8] text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search or add name..."
              className="w-full bg-[#2d303e] text-[#e8e8e8] border border-[#4a4e69] pl-10 pr-4 py-2 rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-[#888da8]"
            />
          </div>
          <button
            onClick={() => {
              navigator.push("/customDesign");
            }}
            type="submit"
            title="Add this name"
            className="bg-[#d4af37] hover:bg-[#b8952d] text-[#1a1c23] font-bold px-4 rounded transition-colors flex items-center shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">
              person_add
            </span>
          </button>
        </form>

        {/* List Section with Margin Top 20 */}
        <div className="mt-[20px] space-y-3">
          <div className="flex justify-between items-center px-1">
            <p className="text-[#888da8] text-xs uppercase tracking-widest font-bold">
              Results ({filteredCustomers.length})
            </p>
          </div>

          {filteredCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between bg-[#252525] p-3 rounded border-l-4 border-[#d4af37] hover:bg-[#2d303e] transition-all"
            >
              <span className="text-[#e8e8e8] font-medium tracking-tight">
                {formatName(customer.name)}
              </span>

              <div className="flex items-center gap-1">
                {/* Watch Button */}
                <button
                  onClick={() =>
                    navigator.push(`/customDesign?id=${customer.id}&type=dress`)
                  }
                  className="text-[#888da8] hover:text-[#d4af37] transition-colors p-2 flex items-center"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    visibility
                  </span>
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => setCustomerToDelete(customer.id)}
                  className="text-[#888da8] hover:text-red-500 transition-colors p-2 flex items-center"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    delete
                  </span>
                </button>
              </div>
            </div>
          ))}

          {filteredCustomers.length === 0 && (
            <div className="text-center py-10 border border-dashed border-[#4a4e69] rounded">
              <p className="text-[#4a4e69] italic">
                No matching customers found
              </p>
            </div>
          )}
        </div>
      </div>

      {customerToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          {/* Alert Box */}
          <div className="max-w-sm w-full bg-[#1a1c23] border-2 border-red-500/50 rounded-2xl p-8 shadow-[0_0_40px_rgba(239,68,68,0.15)] animate-in fade-in zoom-in duration-200">
            {/* Warning Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-500/10 rounded-full border border-red-500/30">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-2 mb-8">
              <p className="text-red-400 text-xs uppercase tracking-widest font-bold">
                Delete Record
              </p>
              <h2 className="text-xl font-semibold text-[#d4af37]">
                Remove <span className="text-white">{customerToDelete._1}</span>{" "}
                &nbsp;?
              </h2>
              <p className="text-[#888da8] text-sm mt-2">
                This action is permanent and cannot be undone.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  // Add your Firebase delete logic here
                  // console.log("Deleting:", customerToDelete.id);
                  deleteCustomer();
                }}
                className="w-full py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors active:scale-95 shadow-lg"
              >
                Confirm Delete
              </button>

              <button
                onClick={() => setCustomerToDelete(null)}
                className="w-full py-3 bg-transparent text-[#888da8] font-semibold rounded-xl hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomerManager />
    </Suspense>
  );
}
