(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/yogeshwar/app/customDesign/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/app/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aO__as__collection$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export aO as collection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$dfb5c973$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/esm/index-dfb5c973.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export a6 as doc>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
//import { query, where } from "firebase/firestore";
const CustomDressDashboard = ()=>{
    _s();
    const navigator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // const [customer, setCustomer] = useState("");
    // const [names, setNames] = useState([]);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const id = searchParams.get("id"); // customer id
    const type = searchParams.get("type");
    //authetication
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomDressDashboard.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$dfb5c973$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "CustomDressDashboard.useEffect.unsubscribe": (currentUser)=>{
                    setUser(currentUser);
                }
            }["CustomDressDashboard.useEffect.unsubscribe"]);
            return ({
                "CustomDressDashboard.useEffect": ()=>unsubscribe()
            })["CustomDressDashboard.useEffect"];
        }
    }["CustomDressDashboard.useEffect"], []);
    //admin user checkin
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomDressDashboard.useEffect": ()=>{
            const fetchAdmins = {
                "CustomDressDashboard.useEffect.fetchAdmins": async ()=>{
                    const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aO__as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "admin_users"));
                    setAdminData(querySnapshot.docs.map({
                        "CustomDressDashboard.useEffect.fetchAdmins": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["CustomDressDashboard.useEffect.fetchAdmins"]));
                }
            }["CustomDressDashboard.useEffect.fetchAdmins"];
            fetchAdmins();
        }
    }["CustomDressDashboard.useEffect"], []);
    const isAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CustomDressDashboard.useMemo[isAdmin]": ()=>{
            if (!user) return false;
            return adminData.some({
                "CustomDressDashboard.useMemo[isAdmin]": (item)=>item.email === user.email
            }["CustomDressDashboard.useMemo[isAdmin]"]);
        }
    }["CustomDressDashboard.useMemo[isAdmin]"], [
        adminData,
        user
    ]);
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
        _17: ""
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const clearForm = ()=>{
        setFormData(initialState);
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const customerName = formData._1?.trim();
        if (!customerName) {
            alert("Customer name required");
            return;
        }
        try {
            const docId = customerName.toLowerCase().replace(/\s+/g, "_");
            const customerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customers", docId);
            // ✅ create customer if not exists
            const customerSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(customerRef);
            if (!customerSnap.exists()) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])(customerRef, {
                    name: customerName
                });
            }
            // 🔥 IMPORTANT CHANGE HERE
            const measurementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customers", docId, "measurement", formData.type);
            const measurementSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(measurementRef);
            // ✅ check duplicate properly
            if (measurementSnap.exists()) {
                alert(`${formData.type} already exists`);
                return;
            }
            // ✅ save (no duplicate possible now)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])(measurementRef, {
                ...formData,
                createdAt: new Date()
            });
            alert("Saved successfully");
            clearForm();
        } catch (error) {
            console.log(error);
            alert("Error saving data");
        }
    };
    const handleUpdate = async ()=>{
        const customerName = formData._1?.trim();
        if (!customerName) {
            alert("Customer name required");
            return;
        }
        try {
            const docId = customerName.toLowerCase().replace(/\s+/g, "_");
            const measurementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customers", docId, "measurement", formData.type);
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(measurementRef);
            // ❌ if not exists → can't update
            if (!snap.exists()) {
                alert("No existing record found to update");
                return;
            }
            // ✅ update existing
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])(measurementRef, {
                ...formData,
                updatedAt: new Date()
            }, {
                merge: true
            });
            alert("Updated successfully");
        } catch (error) {
            console.log(error);
            alert("Error updating data");
        }
    };
    //fetching all customer measurementt records
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomDressDashboard.useEffect": ()=>{
            if (!id || !type) return;
            const fetchData = {
                "CustomDressDashboard.useEffect.fetchData": async ()=>{
                    try {
                        const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customers", id, "measurement", type);
                        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(ref);
                        if (snap.exists()) {
                            setFormData({
                                "CustomDressDashboard.useEffect.fetchData": (prev)=>({
                                        ...prev,
                                        ...snap.data(),
                                        type: type
                                    })
                            }["CustomDressDashboard.useEffect.fetchData"]);
                        } else {
                            // 👉 if no data → clear form
                            setFormData({
                                "CustomDressDashboard.useEffect.fetchData": (prev)=>({
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
                                        _17: ""
                                    })
                            }["CustomDressDashboard.useEffect.fetchData"]);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            }["CustomDressDashboard.useEffect.fetchData"];
            fetchData();
        }
    }["CustomDressDashboard.useEffect"], [
        id,
        type
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen customdesign bg-zinc-600   flex justify-center items-start p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `

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
         
        `
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                lineNumber: 235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full customdesign max-w-3xl  overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " customdesign bg-zinc-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    style: {
                                        marginLeft: "90px"
                                    },
                                    name: "customerId",
                                    hidden: true,
                                    value: formData.customerId,
                                    onChange: handleChange
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                    lineNumber: 954,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    id: "send_customer_measurement",
                                    className: "w-full  border-collapse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-30 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 969,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "pt-4 pb-4 px-12",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>navigator.push(`/customDesign?id=${id}&type=dress`),
                                                                    type: "button",
                                                                    className: "py-2 px-6 bg-[#343a40] text-[#d4af37] border border-[#d4af37] rounded-xl font-bold shadow-lg transition-all hover:bg-[#d4af37] hover:text-[#1a1c23] active:scale-95",
                                                                    children: "Dress"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 974,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>navigator.push(`/blousetwo?id=${id}&type=blouse`),
                                                                    className: "py-2 px-6 bg-transparent text-[#a8aabc] border border-[#4a4e69] rounded-xl font-bold shadow-md transition-all hover:border-[#d4af37] hover:text-[#d4af37] active:scale-95",
                                                                    children: "Blouse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 986,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 973,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 972,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 999,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 967,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "_1",
                                                                value: formData._1,
                                                                onChange: handleChange,
                                                                className: "textInput "
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1006,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1005,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1002,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1018,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "_2",
                                                                value: formData._2,
                                                                onChange: handleChange,
                                                                className: "textInput2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1021,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1020,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1019,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1017,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1033,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "_3",
                                                                value: formData._3,
                                                                onChange: handleChange,
                                                                className: "textInput2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1035,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1034,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1032,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500 "
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1048,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1046,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 2,
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapper7",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_4",
                                                                        value: formData._4,
                                                                        onChange: handleChange,
                                                                        className: "textInput7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1056,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1055,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapper14",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_5",
                                                                        value: formData._5,
                                                                        onChange: handleChange,
                                                                        className: "textInput14"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1065,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1064,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1054,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1050,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1077,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper7",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "_6",
                                                                value: formData._6,
                                                                onChange: handleChange,
                                                                className: "textInput7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1080,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1079,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1078,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1076,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1091,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 2,
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapper7",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_7",
                                                                        value: formData._7,
                                                                        onChange: handleChange,
                                                                        className: "textInput7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1096,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1095,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapper14",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_8",
                                                                        value: formData._8,
                                                                        onChange: handleChange,
                                                                        className: "textInput14"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1104,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1094,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1093,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1090,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1117,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 2,
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapper7",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_9",
                                                                        value: formData._9,
                                                                        onChange: handleChange,
                                                                        className: "textInput7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1122,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapper14",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_10",
                                                                        value: formData._10,
                                                                        onChange: handleChange,
                                                                        className: "textInput14"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1131,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1130,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1120,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1119,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1116,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1143,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "  border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1144,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1142,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1147,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "textInputWrapper11",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "_11",
                                                                    value: formData._11,
                                                                    onChange: handleChange,
                                                                    className: "textInput11"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1151,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1148,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1146,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1162,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1163,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1161,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1166,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 2,
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapper11",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_12",
                                                                        value: formData._12,
                                                                        onChange: handleChange,
                                                                        className: "textInput11"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1171,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1170,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "textInputWrapperls",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "_13",
                                                                        value: formData._13,
                                                                        onChange: handleChange,
                                                                        className: "textInputls"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1180,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1179,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1169,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1168,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1165,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1192,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 2,
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "textInputWrapper11",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "_14",
                                                                    value: formData._14,
                                                                    onChange: handleChange,
                                                                    className: "textInput11"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1197,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1196,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1195,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1194,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1191,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1209,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1210,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1208,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1213,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 2,
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "textInputWrapper11",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "_15",
                                                                    value: formData._15,
                                                                    onChange: handleChange,
                                                                    className: "textInput11"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1218,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1217,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1216,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1215,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1212,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1230,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1231,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1229,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1234,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1235,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1233,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1238,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 5,
                                                            name: "_16",
                                                            value: formData._16,
                                                            onChange: handleChange,
                                                            placeholder: "Write your details here...",
                                                            className: "resize-none border-2 rounded-xl outline-none px-4 py-2 border-[#d4af37] w-80 bg-[#252525] text-[#e8e8e8] transition-colors duration-200 focus:bg-[#353535] focus:border-[#a3e583] focus:ring-1 focus:ring-[#a3e583]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1240,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1239,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1237,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1251,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "_17",
                                                                value: formData._17,
                                                                onChange: handleChange,
                                                                className: "textInput "
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1254,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1253,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1252,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1250,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-10 mb-5 flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "submit",
                                                                    className: "flex items-center gap-2 px-4 py-1.5 bg-[#fffff] text-gray-300 text-sm font-semibold border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-gray-200 hover:text-gray-950 transition-all duration-200 active:scale-95",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-4 h-4",
                                                                            viewBox: "0 0 48 48",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fill: "#FFC107",
                                                                                    d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                                    lineNumber: 1276,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fill: "#FF3D00",
                                                                                    d: "m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                                    lineNumber: 1280,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fill: "#4CAF50",
                                                                                    d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                                    lineNumber: 1284,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fill: "#1976D2",
                                                                                    d: "M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                                    lineNumber: 1288,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                            lineNumber: 1275,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Save Record"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                            lineNumber: 1293,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1271,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: clearForm,
                                                                    className: "px-4 py-1.5 ml-10 border border-gray-500 text-sm text-gray-500 font-medium rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 active:bg-gray-200",
                                                                    children: "Reset"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1297,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1269,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1268,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1265,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-14",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1309,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between w-full max-w-[200px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://wa.me/919998453537",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined text-[#25d36577] !text-[42px]",
                                                                            children: "shortcut"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                            lineNumber: 1319,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1313,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1312,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-lg ml-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://wa.me/919998453537",
                                                                        target: "_blank",
                                                                        className: "transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined text-[#ddac38] !text-[42px]",
                                                                            children: "send"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                            lineNumber: 1331,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                        lineNumber: 1326,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                    lineNumber: 1325,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1311,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1310,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1308,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1341,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            style: {
                                                                marginLeft: "52.5px",
                                                                marginTop: "20px"
                                                            },
                                                            className: "flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg border transition-all duration-300 ease-in-out   bg-[#1a1c23]    text-[#d4af37]    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]   active:scale-95",
                                                            onClick: ()=>navigator.push("newCustomer"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-sm",
                                                                children: "Back to User Dashboard"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                                lineNumber: 1356,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1343,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1342,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1340,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1363,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            style: {
                                                                marginLeft: "52.5px",
                                                                marginTop: "20px"
                                                            },
                                                            className: "flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg text-bold border transition-all duration-300 ease-in-out   bg-[#d4af37]    text-emerald-800    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]   active:scale-95",
                                                            onClick: handleUpdate,
                                                            children: "Update Record"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                            lineNumber: 1365,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1364,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1362,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1383,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1384,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1382,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1387,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1388,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1386,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1391,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1390,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1395,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1396,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1394,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1400,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: " border-gray-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                        lineNumber: 1401,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1399,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                        lineNumber: 966,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                    lineNumber: 962,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                            lineNumber: 953,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                        lineNumber: 952,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                    lineNumber: 948,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-screen flex items-center justify-center bg-[#1a1c23] p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full text-center space-y-8 p-10 rounded-2xl border border-[#4a4e69] bg-[#1a1c23] shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative inline-flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#d4af37] opacity-10 blur-2xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                        lineNumber: 1415,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative border-2 border-[#d4af37] rounded-full p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#d4af37",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-12 h-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "3",
                                                    y: "11",
                                                    width: "18",
                                                    height: "11",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                    lineNumber: 1427,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                    lineNumber: 1428,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                            lineNumber: 1417,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                        lineNumber: 1416,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                lineNumber: 1414,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold tracking-tight text-[#d4af37]",
                                        children: "Restricted Access"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                        lineNumber: 1435,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#888da8] text-base leading-relaxed",
                                        children: "It looks like you don’t have administrator privileges. This area is reserved for the management team."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                        lineNumber: 1438,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                lineNumber: 1434,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-6 flex flex-col items-center gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>navigator.push("/"),
                                    className: "flex items-center gap-2.5 px-8 py-3 rounded-lg border transition-all duration-300   bg-[#1a1c23]    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    group active:scale-95 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-4 h-4 text-[#d4af37] transition-transform group-hover:-translate-x-1",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                                lineNumber: 1465,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                            lineNumber: 1457,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm tracking-wide text-[#d4af37]",
                                            children: "Back to User Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                            lineNumber: 1472,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                    lineNumber: 1446,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                                lineNumber: 1445,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                        lineNumber: 1412,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
                    lineNumber: 1411,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
        lineNumber: 234,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CustomDressDashboard, "WKxWi4iZ3TFvvE6EdkEcwPkETCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CustomDressDashboard;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
            lineNumber: 1495,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomDressDashboard, {}, void 0, false, {
            fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
            lineNumber: 1496,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/yogeshwar/app/customDesign/page.jsx",
        lineNumber: 1495,
        columnNumber: 5
    }, this);
}
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomDressDashboard");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_yogeshwar_app_customDesign_page_jsx_0r2ge7j._.js.map