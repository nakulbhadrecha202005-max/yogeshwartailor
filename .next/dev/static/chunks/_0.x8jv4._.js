(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/measurements/Indianblouse_s/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aO__as__collection$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export aO as collection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export a6 as doc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aP__as__collectionGroup$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export aP as collectionGroup>");
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
const page = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const id = searchParams.get("id");
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [Error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //all measurement record display
    const [allMeasurements, setAllMeasurements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [measurements, setMeasurements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customer_id: "",
        customer_Number: "",
        customer_Name: "",
        TypeCloth: "",
        bust: "",
        waist: "",
        shoulder: "",
        sleeveLength: "",
        blouseLength: "",
        neckDepthFront: "",
        neckDepthBack: "",
        armRound: "",
        specialNotes: ""
    });
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //fetch data customerName
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            if (!id) return;
            const fetchCustomer = {
                "page.useEffect.fetchCustomer": async ()=>{
                    try {
                        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customersName", id);
                        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(docRef);
                        if (docSnap.exists()) {
                            setCustomer({
                                id: docSnap.id,
                                ...docSnap.data()
                            });
                        } else {
                            setError("No such document!");
                        }
                    } catch (error) {
                        setError("Error : " + error.message);
                    }
                }
            }["page.useEffect.fetchCustomer"];
            fetchCustomer();
        }
    }["page.useEffect"], [
        id
    ]);
    //for setting value in object
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            if (customer) {
                setMeasurements({
                    "page.useEffect": (prev)=>({
                            ...prev,
                            customer_id: customer.id,
                            customer_Name: customer.customerName,
                            customer_Number: customer.customerNumber
                        })
                }["page.useEffect"]);
            }
        }
    }["page.useEffect"], [
        customer
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setMeasurements((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", customer.id), {
                name: customer.customerName,
                phone: customer.customerNumber
            }, {
                merge: true
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aO__as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", customer.id, "measurements"), {
                ...measurements,
                createdAt: new Date()
            });
            setMeasurements({
                customer_id: "",
                customer_Number: "",
                customer_Name: "",
                TypeCloth: "",
                bust: "",
                waist: "",
                shoulder: "",
                sleeveLength: "",
                blouseLength: "",
                neckDepthFront: "",
                neckDepthBack: "",
                armRound: "",
                specialNotes: ""
            });
        } catch (error) {
            setError("Error:" + error.message);
        }
    };
    const Update_all_measurementData = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", measurements.customer_id, "measurements", editId), {
                ...measurements
            });
            setError("Updated successfully");
            setMeasurements({
                customer_id: "",
                customer_Number: "",
                customer_Name: "",
                bust: "",
                waist: "",
                shoulder: "",
                sleeveLength: "",
                blouseLength: "",
                neckDepthFront: "",
                neckDepthBack: "",
                armRound: "",
                specialNotes: ""
            });
            setEditId(""); // reset
        } catch (error) {
            setError("Error Update : " + error.message);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aP__as__collectionGroup$3e$__["collectionGroup"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "measurements"), {
                "page.useEffect.unsubscribe": (snapshot)=>{
                    const data = snapshot.docs.map({
                        "page.useEffect.unsubscribe.data": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["page.useEffect.unsubscribe.data"]);
                    setAllMeasurements(data);
                }
            }["page.useEffect.unsubscribe"]);
            return ({
                "page.useEffect": ()=>unsubscribe()
            })["page.useEffect"];
        }
    }["page.useEffect"], []);
    const deleteMeasurement = async (id, customer_id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", customer_id, "measurements", id));
            setMeasurements({
                customer_id: "",
                customer_Number: "",
                customer_Name: "",
                TypeCloth: "",
                bust: "",
                waist: "",
                shoulder: "",
                sleeveLength: "",
                blouseLength: "",
                neckDepthFront: "",
                neckDepthBack: "",
                armRound: "",
                specialNotes: ""
            });
            setError("Deleted successfully");
            router.push("/admin/measurements/Indianblouse_s");
        } catch (error) {
            setError("Error : " + error.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto mt-40 mb-40 p-4 border rounded",
        children: [
            Error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: Error
            }, void 0, false, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 207,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            customer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-4 mb-4 ",
                children: [
                    "ID : ",
                    customer.id,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 210,
                        columnNumber: 30
                    }, ("TURBOPACK compile-time value", void 0)),
                    customer.customerName,
                    " : ",
                    customer.customerNumber
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 209,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Measurement Form"
            }, void 0, false, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 214,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "customer_id",
                        placeholder: "id",
                        value: measurements.customer_id,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "customer_Number",
                        placeholder: "Number",
                        value: measurements.customer_Number,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "customer_Name",
                        placeholder: "Name",
                        value: measurements.customer_Name,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "TypeCloth",
                        placeholder: "TypeCloth",
                        value: measurements.TypeCloth,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "bust",
                        placeholder: "Bust",
                        value: measurements.bust,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "waist",
                        placeholder: "Waist",
                        value: measurements.waist,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "shoulder",
                        placeholder: "Shoulder",
                        value: measurements.shoulder,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "sleeveLength",
                        placeholder: "Sleeve Length",
                        value: measurements.sleeveLength,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "blouseLength",
                        placeholder: "Blouse Length",
                        value: measurements.blouseLength,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "neckDepthFront",
                        placeholder: "Neck Depth Front",
                        value: measurements.neckDepthFront,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "neckDepthBack",
                        placeholder: "Neck Depth Back",
                        value: measurements.neckDepthBack,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "armRound",
                        placeholder: "Arm Round",
                        value: measurements.armRound,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "specialNotes",
                        placeholder: "Special Notes",
                        value: measurements.specialNotes,
                        onChange: handleChange,
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-blue-500 text-white p-2 rounded",
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: Update_all_measurementData,
                        className: "w-full bg-green-500 text-white p-2 rounded",
                        children: "Update"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 333,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 334,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 335,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                lineNumber: 336,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            allMeasurements.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border text-gray-900 mt-3 mb-10 p-2 mb-2 rounded",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Name:"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                item.customer_Name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Phone:"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                item.customer_Number
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Bust:"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                item.bust
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Waist:"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                item.waist
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Notes:"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                item.specialNotes
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMeasurements({
                                        customer_id: item.customer_id || "",
                                        customer_Name: item.customer_Name || "",
                                        customer_Number: item.customer_Number || "",
                                        TypeCloth: item.TypeCloth || "",
                                        bust: item.bust || "",
                                        waist: item.waist || "",
                                        shoulder: item.shoulder || "",
                                        sleeveLength: item.sleeveLength || "",
                                        blouseLength: item.blouseLength || "",
                                        neckDepthFront: item.neckDepthFront || "",
                                        neckDepthBack: item.neckDepthBack || "",
                                        armRound: item.armRound || "",
                                        specialNotes: item.specialNotes || ""
                                    });
                                    setEditId(item.id);
                                },
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>deleteMeasurement(item.id, item.customer_id),
                                children: "delete"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, item.id, true, {
                    fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/measurements/Indianblouse_s/page.jsx",
        lineNumber: 206,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(page, "P+u3us9kbutklBCApVtN1PfrZCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export a6 as doc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "doc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a6"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export aP as collectionGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aP"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0.x8jv4._.js.map