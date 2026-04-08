"use client";
import React, { useEffect, useState, Suspense } from "react";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSearchParams, useRouter } from "next/navigation";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import { query, where, updateDoc } from "firebase/firestore";

const PageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get("id") || "";

  //console.log("ID:", id); // ✅ now aavse
  const [authuser, setAuthuser] = useState(null);
  const [User, setUser] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false); // Track if DB fetch is DONE

  // 1. Fetch Auth User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthuser(currentUser);
      // If no one is logged in at all, kick to login immediately
      if (currentUser === null) {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // 2. Fetch Admin Collection
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUser(data);
      } catch (err) {
        // Handle error silently
      } finally {
        setIsDataLoaded(true); // Confirmation that we have the full list
      }
    };
    fetchUsers();
  }, []);

  // 3. Logic: Only redirect if Auth is ready AND DB fetch is 100% finished
  useEffect(() => {
    if (!authuser || !isDataLoaded) return;

    // Use .trim() and .toLowerCase() to prevent invisible mismatches
    const loggedInEmail = authuser.email?.toLowerCase().trim();
    const matchUser = User.find(
      (U) => U.email?.toLowerCase().trim() === loggedInEmail,
    );

    if (!matchUser) {
      router.push("/login");
    }
  }, [authuser, User, isDataLoaded, router]);

  // Prevent showing the page content while the security check is running
  if (!isDataLoaded || !authuser) {
    return null;
  }
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* <div
          id="add-measurement-form"
          className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden "
        > */}

        {/* type of cloth selection */}
        <div className="mt-20 mb-30 px-6 md:px-8 py-8 space-y-10">
          <div className="mt-4 mb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            <div
              onClick={() =>
                router.push(`/admin/measurements/Indianblowse?id=${id}`)
              }
              className="cloth-card bg-stone-50 border-2 border-stone-200 rounded-2xl p-4 flex flex-col items-center gap-2 text-center shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-red-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  checkroom
                </span>
              </div>
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-800 leading-tight">
                Indian
                <br />
                Blouse
              </p>
            </div>

            <div
              onClick={() => router.push(`/admin/measurements/dress?id=${id}`)}
              className="cloth-card bg-white border-2 border-stone-200 rounded-2xl p-4 flex flex-col items-center gap-2 text-center shadow-sm hover:border-red-800"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  style
                </span>
              </div>
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-800 leading-tight">
                Kurti +<br />
                Pant
              </p>
              <span className="text-[9px] font-medium text-slate-400 tracking-wide">
                Click to select
              </span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
