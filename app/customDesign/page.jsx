"use client";
import React, { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { db } from "../lib/firebase";
import { collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../lib/firebase";
import { useMemo } from "react";
import { getDocs } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import { addDoc, getDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

//select data
import { updateDoc } from "firebase/firestore";
//import { query, where } from "firebase/firestore";

const CustomDressDashboard = () => {
  const navigator = useRouter();
  const [adminData, setAdminData] = useState([]);
  const [user, setUser] = useState(null);
  // const [customer, setCustomer] = useState("");
  // const [names, setNames] = useState([]);

  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // customer id
  const type = searchParams.get("type");

  //authetication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  //admin user checkin
  useEffect(() => {
    const fetchAdmins = async () => {
      const querySnapshot = await getDocs(collection(db, "admin_users"));
      setAdminData(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      );
    };
    fetchAdmins();
  }, []);

  const isAdmin = useMemo(() => {
    if (!user) return false;
    return adminData.some((item) => item.email === user.email);
  }, [adminData, user]);

  //form state
  const initialState = {
    customerId: "",
    _1: "",
    type: "dress",
    _2: "",
    _3: "",
    _4: "",
    _5: "",
    _6: "",
    _7: "",
    _8: "",
    _9: "",
    _10: "",
    _11: "",
    _12: "",
    _13: "",
    _14: "",
    _15: "",
    _16: "",
    _17: "",
  };
  const [formData, setFormData] = useState(initialState);
  const clearForm = () => {
    setFormData(initialState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerName = formData._1?.trim();

    if (!customerName) {
      alert("Customer name required");
      return;
    }

    try {
      const docId = customerName.toLowerCase().replace(/\s+/g, "_");

      const customerRef = doc(db, "customers", docId);

      // ✅ create customer if not exists
      const customerSnap = await getDoc(customerRef);

      if (!customerSnap.exists()) {
        await setDoc(customerRef, {
          name: customerName,
        });
      }

      // 🔥 IMPORTANT CHANGE HERE
      const measurementRef = doc(
        db,
        "customers",
        docId,
        "measurement",
        formData.type, // 👈 dress / blouse as ID
      );

      const measurementSnap = await getDoc(measurementRef);

      // ✅ check duplicate properly
      if (measurementSnap.exists()) {
        alert(`${formData.type} already exists`);
        return;
      }

      // ✅ save (no duplicate possible now)
      await setDoc(measurementRef, {
        ...formData,
        createdAt: new Date(),
      });

      alert("Saved successfully");
      clearForm();
    } catch (error) {
      console.log(error);
      alert("Error saving data");
    }
  };

  const handleUpdate = async () => {
    const customerName = formData._1?.trim();

    if (!customerName) {
      alert("Customer name required");
      return;
    }

    try {
      const docId = customerName.toLowerCase().replace(/\s+/g, "_");

      const measurementRef = doc(
        db,
        "customers",
        docId,
        "measurement",
        formData.type,
      );

      const snap = await getDoc(measurementRef);

      // ❌ if not exists → can't update
      if (!snap.exists()) {
        alert("No existing record found to update");
        return;
      }

      // ✅ update existing
      await setDoc(
        measurementRef,
        {
          ...formData,
          updatedAt: new Date(),
        },
        { merge: true },
      );

      alert("Updated successfully");
    } catch (error) {
      console.log(error);
      alert("Error updating data");
    }
  };

  //fetching all customer measurementt records
  useEffect(() => {
    if (!id || !type) return;

    const fetchData = async () => {
      try {
        const ref = doc(db, "customers", id, "measurement", type);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setFormData((prev) => ({
            ...prev,
            ...snap.data(),
            type: type,
          }));
        } else {
          // 👉 if no data → clear form
          setFormData((prev) => ({
            ...prev,
            type: type,
            _2: "",
            _3: "",
            _4: "",
            _5: "",
            _6: "",
            _7: "",
            _8: "",
            _9: "",
            _10: "",
            _11: "",
            _12: "",
            _13: "",
            _14: "",
            _15: "",
            _16: "",
            _17: "",
          }));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, type]);

  return (
    <div className="min-h-screen customdesign bg-zinc-600   flex justify-center items-start p-4">
      <style>
        {`

          /* Container/Background Style */
          .customdesign {
            background-color: #1a1c23; /* Deep, professional charcoal-blue */
            padding: 20px;
            border-radius: 8px;
          }

          /* Input Fields */
          input {
            background-color: #2d303e; /* Slightly lighter than background for depth */
            color: #d4af37;            /* Soft off-white to prevent eye fatigue */
            border: 1px solid #4a4e69; /* Subtle border to define the shape */
            padding: 10px;
            border-radius: 4px;
            transition: border 0.3s ease;
            outline: none;
          }

          /* Focus State: When the tailor clicks into a box */
          input:focus {
            border: 1px solid #d4af37; /* Elegant Gold focus ring */
          }

          /* Placeholder Style */
          input::placeholder {
            color: #888da8;            /* Muted text so it doesn't distract */
            opacity: 0.8;
          }

          /* Label/Header Highlight (Optional) */
          .label-text {
            color: #d4af37;            /* Use the Gold for labels or titles */
            font-weight: 600;
          }

          /* From Uiverse.io by WhiteNervosa */ 
          .textInputWrapper {
            position: relative;
            width: 260px;
            margin: 12px 5px 0px 30px;
            --accent-color: #a3e583;
          }

          .textInputWrapper:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42);
          }

          .textInputWrapper:before,
          .textInputWrapper:after {
            content: "";
            left: 0;
            right: 0;
            position: absolute;
            pointer-events: none;
            bottom: -1px;
            z-index: 4;
            width: 100%;
          }

          .textInputWrapper:focus-within:before {
            border-bottom: 1px solid var(--accent-color);
          }

          .textInputWrapper:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42);
          }

          .textInputWrapper:focus-within:before {
            border-bottom: 1px solid var(--accent-color);
            transform: scaleX(1);
          }

          .textInputWrapper:focus-within:after {
            border-bottom: 2px solid var(--accent-color);
            transform: scaleX(1);
          }

          .textInputWrapper:after {
            content: "";
            transform: scaleX(0);
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            will-change: transform;
            border-bottom: 2px solid var(--accent-color);
            border-bottom-color: var(--accent-color);
          }

          .textInput::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            opacity: 1;
            user-select: none;
            color: rgba(255, 255, 255, 0.582);
          }

          .textInputWrapper .textInput {
            border-radius: 5px 5px 0px 0px;
            box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
            max-height: 36px;
            background-color: #252525;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
            transition-duration: 200ms;
            transition-property: background-color;
            color: #e8e8e8;
            font-size: 14px;
            font-weight: 500;
            padding: 12px;
            width: 100%;
            border-left: none;
            border-bottom: none;
            border-right: none;
          }

          .textInputWrapper .textInput:focus,
          .textInputWrapper .textInput:active {
            outline: none;
          }

          .textInputWrapper:focus-within .textInput,
          .textInputWrapper .textInput:focus,
          .textInputWrapper .textInput:active {
            background-color: #353535;
          }

          .textInputWrapper:focus-within .textInput::placeholder {
            opacity: 0;
          }

         /* From Uiverse.io by WhiteNervosa 2 and 3 */
          .textInputWrapper2 {
            position: relative !important;
            width: 85px !important;
            
            margin: 12px 5px 0px 75px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapper2:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper2:before,
          .textInputWrapper2:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapper2:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapper2:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper2:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper2:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper2:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInput2::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapper2 .textInput2 {
            border-radius: 5px 5px 0px 0px !important;
            box-shadow: 0px 2px 5px rgb(35 35 35 / 30%) !important;
            max-height: 36px !important;
            background-color: #252525 !important;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !important;
            transition-duration: 200ms !important;
            transition-property: background-color !important;
            color: #e8e8e8 !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            padding: 12px !important;
            width: 100% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper2 .textInput2:focus,
          .textInputWrapper2 .textInput2:active {
            outline: none !important;
          }

          .textInputWrapper2:focus-within .textInput2,
          .textInputWrapper2 .textInput2:focus,
          .textInputWrapper2 .textInput2:active {
            background-color: #353535 !important;
          }

          .textInputWrapper2:focus-within .textInput2::placeholder {
            opacity: 0 !important;
          }


           /* From Uiverse.io by WhiteNervosa 4,5,6,7 */
          .textInputWrapper7 {
            position: relative !important;
            width: 85px !important;
           
            margin: 0px 0px -2px 45px !important;
            padding-bottom: 0px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapper7:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper7:before,
          .textInputWrapper7:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapper7:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapper7:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper7:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper7:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper7:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInput7::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapper7 .textInput7 {
            border-radius: 5px 5px 0px 0px !important;
            box-shadow: 0px 2px 5px rgb(35 35 35 / 30%) !important;
            max-height: 36px !important;
            background-color: #252525 !important;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !important;
            transition-duration: 200ms !important;
            transition-property: background-color !important;
            color: #e8e8e8 !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            padding: 12px !important;
            width: 100% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper7 .textInput7:focus,
          .textInputWrapper7 .textInput7:active {
            outline: none !important;
          }

          .textInputWrapper7:focus-within .textInput7,
          .textInputWrapper7 .textInput7:focus,
          .textInputWrapper7 .textInput7:active {
            background-color: #353535 !important;
          }

          .textInputWrapper7:focus-within .textInput7::placeholder {
            opacity: 0 !important;
          }


          /* From Uiverse.io by WhiteNervosa 8,9,10,11 */
          .textInputWrapper11 {
            position: relative !important;
            width: 145px !important;
            margin: 0px 0px 0px 3px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrappe11:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrappe11:before,
          .textInputWrapper11:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapper11:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapper11:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper11:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper11:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper11:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInput11::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapper11 .textInput11 {
            border-radius: 5px 5px 0px 0px !important;
            box-shadow: 0px 2px 5px rgb(35 35 35 / 30%) !important;
            max-height: 36px !important;
            background-color: #252525 !important;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !important;
            transition-duration: 200ms !important;
            transition-property: background-color !important;
            color: #e8e8e8 !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            padding: 12px !important;
            width: 100% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper11 .textInput11:focus,
          .textInputWrapper11 .textInput11:active {
            outline: none !important;
          }

          .textInputWrapper11:focus-within .textInput11,
          .textInputWrapper11 .textInput11:focus,
          .textInputWrapper11 .textInput11:active {
            background-color: #353535 !important;
          }

          .textInputWrapper11:focus-within .textInput11::placeholder {
            opacity: 0 !important;
          } 
            


           /*--------------------- From Uiverse.io by WhiteNervosa 12,13,14----------------- */
          .textInputWrapper14 {
            position: relative !important;
            width: 65px !important;
            margin: 0px 0px 0px 100px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrappe14:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrappe14:before,
          .textInputWrapper14:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapper14:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapper14:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper14:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper14:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper14:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInput14::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapper14 .textInput14 {
            border-radius: 5px 5px 0px 0px !important;
            box-shadow: 0px 2px 5px rgb(35 35 35 / 30%) !important;
            max-height: 36px !important;
            background-color: #252525 !important;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !important;
            transition-duration: 200ms !important;
            transition-property: background-color !important;
            color: #e8e8e8 !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            padding: 12px !important;
            width: 100% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper14 .textInput14:focus,
          .textInputWrapper14 .textInput14:active {
            outline: none !important;
          }

          .textInputWrapper14:focus-within .textInput14,
          .textInputWrapper14 .textInput14:focus,
          .textInputWrapper14 .textInput14:active {
            background-color: #353535 !important;
          }

          .textInputWrapper14:focus-within .textInput14::placeholder {
            opacity: 0 !important;
          } 

           /*--------------------- From Uiverse.io by WhiteNervosa last small----------------- */
          .textInputWrapperls {
            position: relative !important;
            width: 80px !important;
            margin: 0px 0px 0px 0px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrappels:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrappels:before,
          .textInputWrapperls:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrappels:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapperls:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapperls:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapperls:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapperls:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInputls::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapperls .textInputls {
            border-radius: 5px 5px 0px 0px !important;
            box-shadow: 0px 2px 5px rgb(35 35 35 / 30%) !important;
            max-height: 36px !important;
            background-color: #252525 !important;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !important;
            transition-duration: 200ms !important;
            transition-property: background-color !important;
            color: #e8e8e8 !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            padding: 12px !important;
            width: 100% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapperls .textInputls:focus,
          .textInputWrapperls .textInputls:active {
            outline: none !important;
          }

          .textInputWrapperls:focus-within .textInputls,
          .textInputWrapperls .textInputls:focus,
          .textInputWrapperls .textInputls:active {
            background-color: #353535 !important;
          }

          .textInputWrapperls:focus-within .textInputls::placeholder {
            opacity: 0 !important;
          } 

          
          td{
            padding-bottom:10px !important;
          }


          //-----------------------------------blouse-------------------------------------------------------//
           .textInputWrapperb2 {
            position: relative !important;
            width: 5px !important;
            margin: 0px 0px 0px 100px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapperb2:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapperb2:before,
          .textInputWrapperb2:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapperb2:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapperb2:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapperb2:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapperb2:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapperb2:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInputWrapperb2::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapperb2 .textInputb2 {
            border-radius: 5px 5px 0px 0px !important;
            box-shadow: 0px 2px 5px rgb(35 35 35 / 30%) !important;
            max-height: 36px !important;
            background-color: #252525 !important;
            transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1) !important;
            transition-duration: 200ms !important;
            transition-property: background-color !important;
            color: #e8e8e8 !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            padding: 12px !important;
            width: 100% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapperb2 .textInputb2:focus,
          .textInputWrapperb2 .textInputb2:active {
            outline: none !important;
          }

          .textInputWrapperb2:focus-within .textInputb2,
          .textInputWrapperb2 .textInputb2:focus,
          .textInputWrapperb2 .textInputb2:active {
            background-color: #353535 !important;
          }

          .textInputWrapperb2:focus-within .textInputb2::placeholder {
            opacity: 0 !important;
          } 
         
        `}
      </style>
      {/* Notebook Paper */}
      {isAdmin ? (
        <>
          <div className="w-full customdesign max-w-3xl  overflow-hidden">
            {/* Title */}
            {/* Table */}
            {/* <div className="px-6 pb-6 bg-gray-500"> */}
            <div className=" customdesign bg-zinc-600">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  style={{ marginLeft: "90px" }}
                  name="customerId"
                  hidden
                  value={formData.customerId}
                  onChange={handleChange}
                />
                <table
                  id="send_customer_measurement"
                  className="w-full  border-collapse"
                >
                  <tbody>
                    <tr className="h-30 ">
                      {/* Left Spacer */}
                      <td className="w-10"></td>

                      {/* Buttons Container */}
                      <td className="pt-4 pb-4 px-12">
                        <div className="flex items-center gap-6">
                          <button
                            onClick={() =>
                              navigator.push(
                                `/customDesign?id=${id}&type=dress`,
                              )
                            }
                            type="button"
                            className="py-2 px-6 bg-[#343a40] text-[#d4af37] border border-[#d4af37] rounded-xl font-bold shadow-lg transition-all hover:bg-[#d4af37] hover:text-[#1a1c23] active:scale-95"
                          >
                            Dress
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              navigator.push(`/blousetwo?id=${id}&type=blouse`)
                            }
                            className="py-2 px-6 bg-transparent text-[#a8aabc] border border-[#4a4e69] rounded-xl font-bold shadow-md transition-all hover:border-[#d4af37] hover:text-[#d4af37] active:scale-95"
                          >
                            Blouse
                          </button>
                        </div>
                      </td>

                      {/* Right Spacer */}
                      <td className="w-10"></td>
                    </tr>
                    {/* Row 1 */}
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <div className="textInputWrapper">
                          <input
                            type="text"
                            name="_1"
                            value={formData._1}
                            onChange={handleChange}
                            className="textInput "
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <div className="textInputWrapper2">
                          <input
                            type="text"
                            name="_2"
                            value={formData._2}
                            onChange={handleChange}
                            className="textInput2"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <div className="textInputWrapper2">
                          <input
                            type="text"
                            name="_3"
                            value={formData._3}
                            onChange={handleChange}
                            className="textInput2"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500 "></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>

                      <td colSpan={2} className=" border-gray-500">
                        <div className="flex gap-2">
                          <div className="textInputWrapper7">
                            <input
                              type="text"
                              name="_4"
                              value={formData._4}
                              onChange={handleChange}
                              className="textInput7"
                            />
                          </div>
                          <div className="textInputWrapper14">
                            <input
                              type="text"
                              name="_5"
                              value={formData._5}
                              onChange={handleChange}
                              className="textInput14"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <div className="textInputWrapper7">
                          <input
                            type="text"
                            name="_6"
                            value={formData._6}
                            onChange={handleChange}
                            className="textInput7"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>

                      <td colSpan={2} className=" border-gray-500">
                        <div className="flex gap-2">
                          <div className="textInputWrapper7">
                            <input
                              type="text"
                              name="_7"
                              value={formData._7}
                              onChange={handleChange}
                              className="textInput7"
                            />
                          </div>
                          <div className="textInputWrapper14">
                            <input
                              type="text"
                              name="_8"
                              value={formData._8}
                              onChange={handleChange}
                              className="textInput14"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>

                      <td colSpan={2} className=" border-gray-500">
                        <div className="flex gap-2">
                          <div className="textInputWrapper7">
                            <input
                              type="text"
                              name="_9"
                              value={formData._9}
                              onChange={handleChange}
                              className="textInput7"
                            />
                          </div>
                          <div className="textInputWrapper14">
                            <input
                              type="text"
                              name="_10"
                              value={formData._10}
                              onChange={handleChange}
                              className="textInput14"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className="  border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        {" "}
                        <div className="textInputWrapper11">
                          <input
                            type="text"
                            name="_11"
                            value={formData._11}
                            onChange={handleChange}
                            className="textInput11"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>

                      <td colSpan={2} className=" border-gray-500">
                        <div className="flex gap-2">
                          <div className="textInputWrapper11">
                            <input
                              type="text"
                              name="_12"
                              value={formData._12}
                              onChange={handleChange}
                              className="textInput11"
                            />
                          </div>
                          <div className="textInputWrapperls">
                            <input
                              type="text"
                              name="_13"
                              value={formData._13}
                              onChange={handleChange}
                              className="textInputls"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>

                      <td colSpan={2} className=" border-gray-500">
                        <div className="flex gap-2">
                          <div className="textInputWrapper11">
                            <input
                              type="text"
                              name="_14"
                              value={formData._14}
                              onChange={handleChange}
                              className="textInput11"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>

                      <td colSpan={2} className=" border-gray-500">
                        <div className="flex gap-2">
                          <div className="textInputWrapper11">
                            <input
                              type="text"
                              name="_15"
                              value={formData._15}
                              onChange={handleChange}
                              className="textInput11"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <textarea
                          rows={5}
                          name="_16"
                          value={formData._16}
                          onChange={handleChange}
                          placeholder="Write your details here..."
                          className="resize-none border-2 rounded-xl outline-none px-4 py-2 border-[#d4af37] w-80 bg-[#252525] text-[#e8e8e8] transition-colors duration-200 focus:bg-[#353535] focus:border-[#a3e583] focus:ring-1 focus:ring-[#a3e583]"
                        ></textarea>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <div className="textInputWrapper">
                          <input
                            type="text"
                            name="_17"
                            value={formData._17}
                            onChange={handleChange}
                            className="textInput "
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className="h-8">
                      <td className="w-10"></td>

                      <td className=" border-gray-500">
                        <div className="mt-10 mb-5 flex items-center gap-3">
                          {/* Save with Google Button */}
                          <button
                            type="submit"
                            className="flex items-center gap-2 px-4 py-1.5 bg-[#fffff] text-gray-300 text-sm font-semibold border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-gray-200 hover:text-gray-950 transition-all duration-200 active:scale-95"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 48 48">
                              <path
                                fill="#FFC107"
                                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                              />
                              <path
                                fill="#FF3D00"
                                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                              />
                              <path
                                fill="#4CAF50"
                                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                              />
                              <path
                                fill="#1976D2"
                                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                              />
                            </svg>
                            <span>Save Record</span>
                          </button>

                          {/* Reset Button */}
                          <button
                            type="button"
                            onClick={clearForm}
                            className="px-4 py-1.5 ml-10 border border-gray-500 text-sm text-gray-500 font-medium rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 active:bg-gray-200"
                          >
                            Reset
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="h-14">
                      <td className="w-10"></td>
                      <td className="p-4">
                        <div className="flex items-center justify-between w-full max-w-[200px]">
                          <div className="rounded-lg">
                            <a
                              href="https://wa.me/919998453537"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80"
                            >
                              <span className="material-symbols-outlined text-[#25d36577] !text-[42px]">
                                shortcut
                              </span>
                            </a>
                          </div>

                          <div className="rounded-lg ml-50">
                            <a
                              href="https://wa.me/919998453537"
                              target="_blank"
                              className="transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80"
                            >
                              <span className="material-symbols-outlined text-[#ddac38] !text-[42px]">
                                send
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <button
                          type="button"
                          style={{ marginLeft: "52.5px", marginTop: "20px" }}
                          className="flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg border transition-all duration-300 ease-in-out
                          bg-[#1a1c23] 
                          text-[#d4af37] 
                          border-[#4a4e69] 
                          hover:border-[#d4af37] 
                          hover:bg-[#2d303e] 
                          hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]
                          active:scale-95"
                          onClick={() => navigator.push("newCustomer")}
                        >
                          <span className="font-semibold text-sm">
                            Back to User Dashboard
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500">
                        <button
                          type="button"
                          style={{ marginLeft: "52.5px", marginTop: "20px" }}
                          className="flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg text-bold border transition-all duration-300 ease-in-out
                          bg-[#d4af37] 
                          text-emerald-800 
                          border-[#4a4e69] 
                          hover:border-[#d4af37] 
                          hover:bg-[#2d303e] 
                          hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]
                          active:scale-95"
                          onClick={handleUpdate}
                        >
                          Update Record
                        </button>
                      </td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>

                    <tr className="h-8">
                      <td className="w-10"></td>
                      <td className=" border-gray-500"></td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen flex items-center justify-center bg-[#1a1c23] p-4">
            <div className="max-w-md w-full text-center space-y-8 p-10 rounded-2xl border border-[#4a4e69] bg-[#1a1c23] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Lock Icon Section */}
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-[#d4af37] opacity-10 blur-2xl rounded-full"></div>
                <div className="relative border-2 border-[#d4af37] rounded-full p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-[#d4af37]">
                  Restricted Access
                </h1>
                <p className="text-[#888da8] text-base leading-relaxed">
                  It looks like you don’t have administrator privileges. This
                  area is reserved for the management team.
                </p>
              </div>

              {/* Action Section */}
              <div className="pt-6 flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigator.push("/")}
                  className="flex items-center gap-2.5 px-8 py-3 rounded-lg border transition-all duration-300
        bg-[#1a1c23] 
        border-[#4a4e69] 
        hover:border-[#d4af37] 
        hover:bg-[#2d303e] 
        group active:scale-95 shadow-lg"
                >
                  {/* The UI Back Arrow SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#d4af37] transition-transform group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>

                  <span className="font-semibold text-sm tracking-wide text-[#d4af37]">
                    Back to User Dashboard
                  </span>
                </button>

                {/* <button
                  type="button"
                  onClick={() => navigator.push("/admin/requestadminaccess")}
                  className="text-xs text-[#888da8] hover:text-[#d4af37] underline transition-colors cursor-pointer"
                >
                  Request Admin Access
                </button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomDressDashboard />
    </Suspense>
  );
}
