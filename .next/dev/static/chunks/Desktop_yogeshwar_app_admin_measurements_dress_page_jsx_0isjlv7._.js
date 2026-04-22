(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export a6 as doc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aP__as__collectionGroup$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export aP as collectionGroup>");
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
const PageContent = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const id = searchParams?.get("id") || "";
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [Error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //voice recognization input
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeFieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isListeningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    //all measurement record display
    const [allMeasurements, setAllMeasurements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [measurements, setMeasurements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customer_id: "",
        customer_Number: "",
        customer_Name: "",
        TypeCloth: "dress",
        bust: "",
        waist: "",
        shoulder: "",
        sleeveLength: "",
        blouseLength: "",
        neckDepthFront: "",
        neckDepthBack: "",
        armRound: "",
        specialNotes: "",
        // Grid and Branch fields
        m7: "",
        m8: "",
        m9: "",
        m10: "",
        m11: "",
        m12: "",
        m13: "",
        m14: "",
        m15: "",
        m16: "",
        m17: "",
        m18: "",
        m19: "",
        m20: "",
        m21: "",
        m22: "",
        m23: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setMeasurements((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const resetForm = ()=>{
        setMeasurements({
            customer_id: customer.id,
            customer_Number: customer.customerNumber,
            customer_Name: customer.customerName,
            TypeCloth: "dress",
            bust: "",
            waist: "",
            shoulder: "",
            sleeveLength: "",
            blouseLength: "",
            neckDepthFront: "",
            neckDepthBack: "",
            armRound: "",
            specialNotes: "",
            m7: "",
            m8: "",
            m9: "",
            m10: "",
            m11: "",
            m12: "",
            m13: "",
            m14: "",
            m15: "",
            m16: "",
            m17: "",
            m18: "",
            m19: "",
            m20: "",
            m21: "",
            m22: "",
            m23: ""
        });
    };
    const [SearchItem, setSearchItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [itemToDelete, setItemToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //const [selectedMeasure, setSelectedMeasure] = useState("");
    //fetch data customerName
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageContent.useEffect": ()=>{
            if (!id) return;
            const fetchCustomer = {
                "PageContent.useEffect.fetchCustomer": async ()=>{
                    try {
                        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customersName", id);
                        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(docRef);
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
            }["PageContent.useEffect.fetchCustomer"];
            fetchCustomer();
        }
    }["PageContent.useEffect"], [
        id
    ]);
    //for setting value in object
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageContent.useEffect": ()=>{
            if (customer) {
                setMeasurements({
                    "PageContent.useEffect": (prev)=>({
                            ...prev,
                            customer_id: customer.id,
                            customer_Name: customer.customerName,
                            customer_Number: customer.customerNumber
                        })
                }["PageContent.useEffect"]);
            }
        }
    }["PageContent.useEffect"], [
        customer
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            // 1. Update/Set the main customer contact info
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", customer.id), {
                name: customer.customerName,
                phone: customer.customerNumber,
                // Using the ID from the state if you want it saved at the top level
                customer_id: measurements.customer_id
            }, {
                merge: true
            });
            // 2. Add the specific measurement record to the sub-collection
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aO__as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", customer.id, "measurements"), {
                ...measurements,
                createdAt: new Date()
            });
            // 3. Reset the form with "dress" as the default type
            setMeasurements({
                customer_id: customer.id,
                customer_Name: customer.customerName,
                customer_Number: customer.customerNumber,
                TypeCloth: "dress",
                bust: "",
                waist: "",
                shoulder: "",
                sleeveLength: "",
                blouseLength: "",
                neckDepthFront: "",
                neckDepthBack: "",
                armRound: "",
                specialNotes: "",
                // Reset all custom tree/grid fields
                m7: "",
                m8: "",
                m9: "",
                m10: "",
                m11: "",
                m12: "",
                m13: "",
                m14: "",
                m15: "",
                m16: "",
                m17: "",
                m18: "",
                m19: "",
                m20: "",
                m21: "",
                m22: "",
                m23: ""
            });
            // Optional: Add a success alert or toast here
            alert("Record saved successfully!");
        } catch (error) {
            console.error("Error saving document: ", error);
            setError("Error: " + error.message);
        }
    };
    //fetching data of measurements
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageContent.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aP__as__collectionGroup$3e$__["collectionGroup"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "measurements"), {
                "PageContent.useEffect.unsubscribe": (snapshot)=>{
                    const data = snapshot.docs.map({
                        "PageContent.useEffect.unsubscribe.data": (doc)=>({
                                id: doc.id,
                                ...doc.data()
                            })
                    }["PageContent.useEffect.unsubscribe.data"]);
                    setAllMeasurements(data);
                }
            }["PageContent.useEffect.unsubscribe"]);
            return ({
                "PageContent.useEffect": ()=>unsubscribe()
            })["PageContent.useEffect"];
        }
    }["PageContent.useEffect"], []);
    const deleteMeasurement = async (id, customer_id)=>{
        // Guard check: ensure we have both IDs required for the subcollection path
        if (!id || !customer_id) {
            setError("Error: Missing ID for deletion");
            return;
        }
        try {
            // 1. Delete from Firestore
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", customer_id, "measurements", id));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", customer_id));
            // 2. Full Reset of the Measurements state (including all m-series fields)
            setMeasurements({
                customer_id: customer.id,
                customer_Number: customer.customerNumber,
                customer_Name: customer.customerName,
                TypeCloth: "dress",
                bust: "",
                waist: "",
                shoulder: "",
                sleeveLength: "",
                blouseLength: "",
                neckDepthFront: "",
                neckDepthBack: "",
                armRound: "",
                specialNotes: "",
                // Important: Clear out the pattern specs so they don't linger in the UI
                m7: "",
                m8: "",
                m9: "",
                m10: "",
                m11: "",
                m12: "",
                m13: "",
                m14: "",
                m15: "",
                m16: "",
                m17: "",
                m18: "",
                m19: "",
                m20: "",
                m21: "",
                m22: "",
                m23: ""
            });
            // 3. UI Cleanup
            setError("Record deleted successfully");
            setItemToDelete(null);
            setEditId(""); // Clear edit state if the item deleted was being edited
            // 4. Close Modals
            window.location.hash = "";
        } catch (error) {
            console.error("Delete Error:", error);
            setError("Error : " + error.message);
        }
    };
    const filterMeasurementData = ()=>{
        return allMeasurements.filter((e)=>e.customer_Name?.toLowerCase().includes(SearchItem?.toLowerCase()));
    };
    const handleEditClick = (item)=>{
        setEditId(item.id); // ✅ VERY IMPORTANT
        setMeasurements({
            // Main Identifiers
            customer_id: item?.customer_id || "",
            customer_Number: item?.customer_Number || "",
            customer_Name: item?.customer_Name || "",
            TypeCloth: item?.TypeCloth || "dress",
            // Core Measurements
            bust: item?.bust || "",
            waist: item?.waist || "",
            shoulder: item?.shoulder || "",
            sleeveLength: item?.sleeveLength || "",
            blouseLength: item?.blouseLength || "",
            neckDepthFront: item?.neckDepthFront || "",
            neckDepthBack: item?.neckDepthBack || "",
            armRound: item?.armRound || "",
            specialNotes: item?.specialNotes || "",
            // Added Grid Fields (m7 to m23)
            m7: item?.m7 || "",
            m8: item?.m8 || "",
            m9: item?.m9 || "",
            m10: item?.m10 || "",
            m11: item?.m11 || "",
            m12: item?.m12 || "",
            m13: item?.m13 || "",
            m14: item?.m14 || "",
            m15: item?.m15 || "",
            m16: item?.m16 || "",
            m17: item?.m17 || "",
            m18: item?.m18 || "",
            m19: item?.m19 || "",
            m20: item?.m20 || "",
            m21: item?.m21 || "",
            m22: item?.m22 || "",
            m23: item?.m23 || ""
        });
    };
    // hashing value clear alert close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageContent.useEffect": ()=>{
            const handleHashChange = {
                "PageContent.useEffect.handleHashChange": ()=>{
                    // If the URL no longer contains the modal ID, reset the fields
                    if (!window.location.hash.includes("modal-view-measure")) {
                        setMeasurements({
                            "PageContent.useEffect.handleHashChange": (prev)=>({
                                    ...prev,
                                    // Reset only the measurement fields
                                    TypeCloth: "blouse"
                                })
                        }["PageContent.useEffect.handleHashChange"]);
                    }
                }
            }["PageContent.useEffect.handleHashChange"];
            // Listen for the hash change event
            window.addEventListener("hashchange", handleHashChange);
            // Clean up the listener when component unmounts
            return ({
                "PageContent.useEffect": ()=>window.removeEventListener("hashchange", handleHashChange)
            })["PageContent.useEffect"];
        }
    }["PageContent.useEffect"], []);
    const Update_all_measurementData = async ()=>{
        // Guard clause to prevent updating without an ID
        if (!editId || !measurements.customer_id) {
            setError("No record selected to update");
            return;
        }
        try {
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a6__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customerMeasurement", measurements.customer_id, "measurements", editId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])(docRef, {
                ...measurements,
                lastUpdated: new Date().toISOString()
            });
            // 1. Show Success Message
            setError("Record updated successfully!");
            // 2. Reset the form to blank (including all m7-m23 fields)
            setMeasurements({
                customer_id: customer.id,
                customer_Name: customer.customerName,
                customer_Number: customer.customerNumber,
                TypeCloth: "dress",
                bust: "",
                waist: "",
                shoulder: "",
                sleeveLength: "",
                blouseLength: "",
                neckDepthFront: "",
                neckDepthBack: "",
                armRound: "",
                specialNotes: "",
                // Reset all pattern fields
                m7: "",
                m8: "",
                m9: "",
                m10: "",
                m11: "",
                m12: "",
                m13: "",
                m14: "",
                m15: "",
                m16: "",
                m17: "",
                m18: "",
                m19: "",
                m20: "",
                m21: "",
                m22: "",
                m23: ""
            });
            // 3. Clear Edit ID and close modal/form view
            setEditId("");
            window.location.hash = "#"; // Close the modal if it's open via hash
        } catch (error) {
            console.error("Update Error:", error);
            setError("Error Updating: " + error.message);
        }
    };
    const getAvatarColor = (name)=>{
        const firstLetter = name?.charAt(0).toUpperCase() || "U";
        // Map letters to specific Tailwind colors
        const colors = {
            A: "bg-red-800",
            B: "bg-blue-800",
            C: "bg-green-800",
            D: "bg-yellow-700",
            E: "bg-indigo-800",
            F: "bg-purple-800",
            G: "bg-pink-800",
            H: "bg-orange-700",
            I: "bg-teal-800",
            J: "bg-cyan-800",
            K: "bg-lime-700",
            L: "bg-amber-700",
            M: "bg-emerald-800",
            N: "bg-violet-800",
            O: "bg-fuchsia-800",
            P: "bg-rose-950",
            Q: "bg-sky-800",
            R: "bg-stone-700",
            S: "bg-neutral-700",
            T: "bg-zinc-700",
            U: "bg-gray-700",
            V: "bg-slate-700",
            W: "bg-red-600",
            X: "bg-blue-600",
            Y: "bg-green-600",
            Z: "bg-yellow-600"
        };
        return colors[firstLetter] || "bg-slate-700"; // Default color
    };
    //voice recognization input
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageContent.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (!SpeechRecognition) {
                    alert("Speech Recognition not supported");
                    return;
                }
                const recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = false;
                recognition.lang = "en-IN";
                recognition.onstart = ({
                    "PageContent.useEffect": ()=>{
                        isListeningRef.current = true;
                    }
                })["PageContent.useEffect"];
                recognition.onend = ({
                    "PageContent.useEffect": ()=>{
                        isListeningRef.current = false;
                    }
                })["PageContent.useEffect"];
                recognition.onerror = ({
                    "PageContent.useEffect": (e)=>{
                        console.log("Speech error:", e.error);
                        isListeningRef.current = false;
                    }
                })["PageContent.useEffect"];
                recognition.onresult = ({
                    "PageContent.useEffect": (event)=>{
                        const transcript = event.results[event.results.length - 1][0].transcript;
                        if (activeFieldRef.current) {
                            setMeasurements({
                                "PageContent.useEffect": (prev)=>({
                                        ...prev,
                                        [activeFieldRef.current]: transcript
                                    })
                            }["PageContent.useEffect"]);
                        }
                    }
                })["PageContent.useEffect"];
                recognitionRef.current = recognition;
            }
        }
    }["PageContent.useEffect"], []);
    const startListening = (fieldName)=>{
        if (!recognitionRef.current) return;
        const recognition = recognitionRef.current;
        // If already listening → stop first
        if (isListeningRef.current) {
            recognition.stop();
            // Wait a bit before restarting (prevents crash)
            setTimeout(()=>{
                activeFieldRef.current = fieldName;
                try {
                    recognition.start();
                } catch (err) {
                    console.log("Start error:", err);
                }
            }, 200);
        } else {
            activeFieldRef.current = fieldName;
            try {
                recognition.start();
            } catch (err) {
                console.log("Start error:", err);
            }
        }
    };
    const stopListening = ()=>{
        if (!recognitionRef.current) return;
        if (isListeningRef.current) {
            recognitionRef.current.stop();
        }
        activeFieldRef.current = null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        :root {
            --midnight: #0B0F19;
            --berry: #581C1E;
            --off-white: #F9F7F5;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--off-white);
            margin: 0;
            overflow-x: hidden;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            font-family: 'Outfit', sans-serif;
        }

        /* ── Marquee ── */
        .marquee-wrapper {
            background: var(--berry);
            white-space: nowrap;
            overflow: hidden;
            display: flex;
            align-items: center;
            height: 40px;
        }

        .marquee-content {
            display: inline-flex;
            animation: scroll-left 40s linear infinite;
        }

        @keyframes scroll-left {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        /* ── Form input focus ── */
        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
        }

        /* ── Table row hover ── */
        .table-row-hover:hover {
            background-color: #f1f5f9;
            transition: background 0.2s ease;
        }

        /* ── Action button lift ── */
        .action-btn {
            transition: all 0.18s cubic-bezier(.4, 0, .2, 1);
        }

        .action-btn:hover {
            transform: translateY(-2px);
        }

        /* ── Cloth type card selected state (CSS-only visual) ── */
        .cloth-card {
            transition: all 0.18s cubic-bezier(.4, 0, .2, 1);
            cursor: pointer;
        }

        .cloth-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.10);
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 99px;
        }

        /* ── Section divider label ── */
        .section-label {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 1.25rem;
        }

        .section-label::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #e7e5e4;
        }

        /* ── Measurement grid input ── */
        .measure-input {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            background: #f9f7f5;
            border: 1.5px solid #e7e5e4;
            font-size: 0.875rem;
            font-weight: 500;
            color: #1e293b;
            font-family: 'Plus Jakarta Sans', sans-serif;
            transition: border-color 0.15s, background 0.15s;
        }

        .measure-input:focus {
            border-color: #991b1b;
            background: #fff;
        }

        .measure-input::placeholder {
            color: #94a3b8;
        }

        /* ── Unit badge inside input wrapper ── */
        .unit-badge {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.1em;
            color: #94a3b8;
            text-transform: uppercase;
            pointer-events: none;
            font-family: 'Outfit', sans-serif;
        }

        /* ── CSS :target modals ── */
        .modal-wrap {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 200;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .modal-wrap:target {
            display: flex;
        }

        .modal-backdrop {
            backdrop-filter: blur(6px);
            background: rgba(11, 15, 25, 0.6);
            position: absolute;
            inset: 0;
        }

        .modal-in {
            animation: modalIn 0.22s cubic-bezier(.4, 0, .2, 1);
        }

        @keyframes modalIn {
            from {
                opacity: 0;
                transform: scale(0.96) translateY(16px);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        /* ── Required asterisk ── */
        .req {
            color: #991b1b;
            font-size: 11px;
            margin-left: 2px;
        }

        /* Chrome, Safari, Edge */
        .no-spinner::-webkit-outer-spin-button,
        .no-spinner::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        .no-spinner {
          -moz-appearance: textfield;
        }
    `
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 564,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            Error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: Error
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 770,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            customer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-0 mb-1 ",
                children: [
                    "ID : ",
                    customer.id,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 773,
                        columnNumber: 30
                    }, ("TURBOPACK compile-time value", void 0)),
                    customer.customerName,
                    " : ",
                    customer.customerNumber
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 772,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "add-measurement-form",
                className: "bg-slate-400 mt-10 rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden mb-10 max-w-200 mx-auto font-outfit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-950 px-8 py-8 text-white rounded-t-[2rem] shadow-2xl relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full -mr-16 -mt-16 blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 786,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-8 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[9px] font-black uppercase tracking-[0.2em] text-rose-200/40 mb-2 text-center",
                                                children: "ID No."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 791,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "customer_id",
                                                        maxLength: 2,
                                                        value: measurements?.customer_id || "",
                                                        onChange: handleChange,
                                                        spellCheck: "false",
                                                        className: "w-44 bg-white/5 border border-white/10 rounded-2xl py-1 text-center text-sm font-black text-rose-50 outline-none focus:border-rose-500/50 focus:bg-white/10 transition-all shadow-inner",
                                                        placeholder: "00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 795,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 rounded-2xl bg-rose-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 805,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 794,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 790,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-[11px] font-black uppercase tracking-[0.4em] text-rose-100 leading-none",
                                                children: "Yogeshwar Tailor"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 811,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[7px] font-bold uppercase tracking-[0.2em] text-rose-200/40 mt-1",
                                                children: "Premium Stitching Studio"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 814,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1 w-10 bg-gradient-to-r from-transparent to-rose-500 ml-auto mt-2 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 817,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 810,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 788,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[8px] font-black text-rose-200/40 uppercase tracking-widest mb-1 block ml-1",
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 824,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "customer_Name",
                                                value: measurements.customer_Name || "",
                                                onChange: handleChange,
                                                required: true,
                                                spellCheck: "false",
                                                placeholder: "Enter Customer Name",
                                                className: "w-full bg-transparent border-b-2 border-white/10 py-2 text-xl font-extrabold text-white outline-none placeholder:text-white/10 focus:border-rose-500 transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 827,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 823,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[8px] font-black text-rose-200/40 uppercase tracking-widest mb-1 block ml-1",
                                                        children: "Contact Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 842,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 border-b-2 border-white/10 focus-within:border-rose-500 transition-all duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-xs text-rose-200/30",
                                                                children: "call"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 846,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                name: "customer_Number",
                                                                value: measurements.customer_Number || "",
                                                                onChange: handleChange,
                                                                required: true,
                                                                placeholder: "98765 43210",
                                                                className: "w-full bg-transparent py-2 text-sm font-bold text-white outline-none placeholder:text-white/10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 849,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 845,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 841,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2/5 relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[8px] font-black text-rose-200/40 uppercase tracking-widest mb-1 block ml-1",
                                                        children: "Garment Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 863,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 border-b-2 border-white/10 focus-within:border-rose-500 transition-all duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-xs text-rose-200/30",
                                                                children: "styler"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 867,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                name: "TypeCloth",
                                                                value: measurements.TypeCloth || "",
                                                                onChange: handleChange,
                                                                required: true,
                                                                placeholder: "e.g. Blouse",
                                                                className: "w-full bg-transparent py-2 text-sm font-bold text-white outline-none placeholder:text-white/10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 870,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 866,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 862,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 821,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 784,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-8 bg-slate-50/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "bust",
                                        onFocus: ()=>startListening("bust"),
                                        onBlur: stopListening,
                                        value: measurements.bust,
                                        onChange: handleChange,
                                        placeholder: "Bust",
                                        className: "measure-input text-center text-2xl font-black text-red-800 border-2 border-blue-900 bg-white rounded-2xl shadow-sm outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 890,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 889,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-px border-l-2 border-dotted border-slate-300 my-1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 902,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "waist",
                                        onFocus: ()=>startListening("waist"),
                                        onBlur: stopListening,
                                        value: measurements.waist,
                                        onChange: handleChange,
                                        className: "measure-input text-center font-bold bg-white",
                                        placeholder: "Waist"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 906,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 905,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-px border-l-2 border-dotted border-slate-300 my-1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 918,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex justify-between items-start gap-4 px-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col space-y-2 w-24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "shoulder",
                                                    onFocus: ()=>startListening("shoulder"),
                                                    onBlur: stopListening,
                                                    value: measurements.shoulder,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2",
                                                    placeholder: "Shldr"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 924,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "sleeveLength",
                                                    onFocus: ()=>startListening("sleeveLength"),
                                                    onBlur: stopListening,
                                                    value: measurements.sleeveLength,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2",
                                                    placeholder: "Slve"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 934,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "blouseLength",
                                                    onFocus: ()=>startListening("blouseLength"),
                                                    onBlur: stopListening,
                                                    value: measurements.blouseLength,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2",
                                                    placeholder: "Bl-L"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 944,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "armRound",
                                                    onFocus: ()=>startListening("armRound"),
                                                    onBlur: stopListening,
                                                    value: measurements.armRound,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2",
                                                    placeholder: "Arm"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 954,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 923,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2 flex-1 max-w-[180px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m7",
                                                    onFocus: ()=>startListening("m7"),
                                                    onBlur: stopListening,
                                                    value: measurements.m7,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 968,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m8",
                                                    onFocus: ()=>startListening("m8"),
                                                    onBlur: stopListening,
                                                    value: measurements.m8,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 978,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m9",
                                                    onFocus: ()=>startListening("m9"),
                                                    onBlur: stopListening,
                                                    value: measurements.m9,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 988,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m10",
                                                    onFocus: ()=>startListening("m10"),
                                                    onBlur: stopListening,
                                                    value: measurements.m10,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 998,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m11",
                                                    onFocus: ()=>startListening("m11"),
                                                    onBlur: stopListening,
                                                    value: measurements.m11,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m12",
                                                    onFocus: ()=>startListening("m12"),
                                                    onBlur: stopListening,
                                                    value: measurements.m12,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1018,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m13",
                                                    onFocus: ()=>startListening("m13"),
                                                    onBlur: stopListening,
                                                    value: measurements.m13,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1028,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "m14",
                                                    onFocus: ()=>startListening("m14"),
                                                    onBlur: stopListening,
                                                    value: measurements.m14,
                                                    onChange: handleChange,
                                                    className: "measure-input text-center bg-white py-2 text-xs",
                                                    placeholder: "no"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 967,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 921,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-6 flex flex-col items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-px bg-slate-200"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1052,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1051,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3 w-full max-w-[320px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "neckDepthFront",
                                            onFocus: ()=>startListening("neckDepthFront"),
                                            onBlur: stopListening,
                                            value: measurements.neckDepthFront,
                                            onChange: handleChange,
                                            placeholder: "Neck F",
                                            className: "measure-input text-center text-xs py-3 bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1057,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "neckDepthBack",
                                            onFocus: ()=>startListening("neckDepthBack"),
                                            onBlur: stopListening,
                                            value: measurements.neckDepthBack,
                                            onChange: handleChange,
                                            placeholder: "Neck B",
                                            className: "measure-input text-center text-xs py-3 bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1067,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m15",
                                            onFocus: ()=>startListening("m15"),
                                            onBlur: stopListening,
                                            value: measurements.m15,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1077,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1056,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "specialNotes",
                                        rows: "2",
                                        onFocus: ()=>startListening("specialNotes"),
                                        onBlur: stopListening,
                                        value: measurements.specialNotes,
                                        onChange: handleChange,
                                        className: "w-full p-4 rounded-2xl bg-white border border-slate-200 text-sm focus:border-blue-900 transition-all outline-none italic",
                                        placeholder: "Special Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1091,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1090,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1103,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3 w-full max-w-[320px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m16",
                                            onFocus: ()=>startListening("m16"),
                                            onBlur: stopListening,
                                            value: measurements.m16,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1107,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m17",
                                            onFocus: ()=>startListening("m17"),
                                            onBlur: stopListening,
                                            value: measurements.m17,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1117,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m18",
                                            value: measurements.m18,
                                            onFocus: ()=>startListening("m18"),
                                            onBlur: stopListening,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1106,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-3 w-full max-w-[320px] mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m19",
                                            onFocus: ()=>startListening("m19"),
                                            onBlur: stopListening,
                                            value: measurements.m19,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1141,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m20",
                                            onFocus: ()=>startListening("m20"),
                                            onBlur: stopListening,
                                            value: measurements.m20,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1151,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m21",
                                            onFocus: ()=>startListening("m21"),
                                            onBlur: stopListening,
                                            value: measurements.m21,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1161,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2  gap-3 w-full max-w-[200px] mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m22",
                                            onFocus: ()=>startListening("m22"),
                                            onBlur: stopListening,
                                            value: measurements.m22,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1175,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "m23",
                                            onFocus: ()=>startListening("m23"),
                                            onBlur: stopListening,
                                            value: measurements.m23,
                                            onChange: handleChange,
                                            placeholder: "no",
                                            className: "measure-input text-center text-xs py-3 bg-white border-blue-50"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1185,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full pt-10 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full bg-blue-950 text-white py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.25em] shadow-2xl hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-base",
                                                    children: "save"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Save Record"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1199,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: Update_all_measurementData,
                                                    className: "flex-1 bg-emerald-900 text-slate-200 py-2 rounded-2xl font-bold text-[16px] hover:bg-emerald-800",
                                                    children: "Update"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1209,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: resetForm,
                                                    className: "flex-1 border bg-rose-900 border-slate-200 text-bold text-rose-200 py-3 rounded-2xl font-bold text-[16px] hover:bg-rose-950 hover:text-red-50 transition-colors",
                                                    children: "Reset"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1208,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                            lineNumber: 887,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 886,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 779,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.push("/admin/ManageCustomernameUI"),
                className: "flex items-center gap-2 px-5 py-2.5 mb-10 rounded-lg bg-gradient-to-r from-slate-800 to-blue-900 text-white font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 active:scale-95",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "w-5 h-5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M15 19l-7-7 7-7"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                            lineNumber: 1241,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 1233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Back Users ( Admin Screen )"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 1228,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-4 h-[2px] bg-red-800"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1255,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-800 font-extrabold text-[11px] uppercase tracking-[0.3em]",
                                                children: "Records"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1256,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1254,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl md:text-2xl font-extrabold text-slate-900",
                                        children: "Measurement History"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1260,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1253,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row sm:flex-row gap-2 sm:gap-3 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1 sm:flex-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]",
                                                children: "search"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1269,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: SearchItem,
                                                onChange: (e)=>setSearchItem(e.target.value),
                                                placeholder: "Search...",
                                                className: "pl-9 pr-2 py-2.5 sm:py-3 rounded-xl bg-white border border-stone-200 text-sm font-medium placeholder-slate-400 focus:border-red-800 transition-all w-full sm:w-56"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1272,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1268,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1 sm:flex-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]",
                                                children: "filter_list"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1283,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "pl-9 pr-8 py-2.5 sm:py-3 rounded-xl bg-white border border-stone-200 text-sm font-medium text-slate-700 focus:border-red-800 transition-colors appearance-none cursor-pointer w-full sm:min-w-[160px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "All Types"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1287,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Indian Blouse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1288,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Kurti/Salwar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "hidden sm:block",
                                                        children: "Kurti with Pant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1292,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "hidden sm:block",
                                                        children: "Chaniya Choli"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1293,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "hidden sm:block",
                                                        children: "Western Dress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1294,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1286,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none",
                                                children: "expand_more"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1296,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1282,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1266,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 1252,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-olive-300 rounded-2xl shadow-sm border border-stone-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-blue-950 border-b border-stone-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 w-12",
                                                        children: "#"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1310,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                        children: "Customer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1313,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                        children: "Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1316,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-4 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1328,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1309,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1308,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        filterMeasurementData().map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "table-row-hover border-b border-stone-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-4 text-slate-400 text-sm font-medium",
                                                            children: item?.id || ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1337,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `w-9 h-9 rounded-xl ${getAvatarColor(item?.customer_Name)} flex items-center justify-center text-white text-xs font-black shrink-0`,
                                                                        children: item?.customer_Name?.slice(0, 2).toUpperCase() || ""
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                        lineNumber: 1342,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-slate-800",
                                                                        children: item?.customer_Name || ""
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                        lineNumber: 1347,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1341,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1340,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 text-slate-500 font-medium text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-slate-400 text-base",
                                                                        children: "call"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                        lineNumber: 1354,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item?.customer_Number || ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1353,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1352,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-4 text-slate-500 text-sm font-medium",
                                                            children: item?.createdAt?.seconds ? new Date(item.createdAt.seconds * 1000).toLocaleDateString("en-GB", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric"
                                                            }) : "No date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1368,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-end gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#modal-view-measure",
                                                                        onClick: ()=>handleEditClick(item),
                                                                        className: "action-btn w-9 h-9 rounded-xl bg-stone-100 hover:bg-blue-950 hover:text-rose-50 flex items-center justify-center transition-all",
                                                                        title: "View Measurements",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined text-sm",
                                                                            children: "visibility"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                            lineNumber: 1396,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                        lineNumber: 1390,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#add-measurement-form",
                                                                        onClick: ()=>{
                                                                            setEditId(item.id); // Set the ID first to trigger edit mode
                                                                            setMeasurements({
                                                                                customer_id: item.customer_id || "",
                                                                                customer_Name: item.customer_Name || "",
                                                                                customer_Number: item.customer_Number || "",
                                                                                TypeCloth: item.TypeCloth || "dress",
                                                                                bust: item.bust || "",
                                                                                waist: item.waist || "",
                                                                                shoulder: item.shoulder || "",
                                                                                sleeveLength: item.sleeveLength || "",
                                                                                blouseLength: item.blouseLength || "",
                                                                                neckDepthFront: item.neckDepthFront || "",
                                                                                neckDepthBack: item.neckDepthBack || "",
                                                                                armRound: item.armRound || "",
                                                                                specialNotes: item.specialNotes || "",
                                                                                // ✅ Populate the new grid fields from the item data
                                                                                m7: item.m7 || "",
                                                                                m8: item.m8 || "",
                                                                                m9: item.m9 || "",
                                                                                m10: item.m10 || "",
                                                                                m11: item.m11 || "",
                                                                                m12: item.m12 || "",
                                                                                m13: item.m13 || "",
                                                                                m14: item.m14 || "",
                                                                                m15: item.m15 || "",
                                                                                m16: item.m16 || "",
                                                                                m17: item.m17 || "",
                                                                                m18: item.m18 || "",
                                                                                m19: item.m19 || "",
                                                                                m20: item.m20 || "",
                                                                                m21: item.m21 || "",
                                                                                m22: item.m22 || "",
                                                                                m23: item.m23 || ""
                                                                            });
                                                                        },
                                                                        className: "action-btn w-9 h-9 rounded-xl bg-stone-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-all",
                                                                        title: "Edit",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined text-sm",
                                                                            children: "edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                            lineNumber: 1444,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                        lineNumber: 1402,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#modal-delete-confirm",
                                                                        onClick: ()=>setItemToDelete(item),
                                                                        className: "action-btn w-9 h-9 rounded-xl bg-stone-100 hover:bg-red-700 hover:text-white flex items-center justify-center transition-all",
                                                                        title: "Delete",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "material-symbols-outlined text-sm",
                                                                            children: "delete"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                            lineNumber: 1456,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                        lineNumber: 1450,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1388,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1387,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1336,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, item.id, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1334,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1307,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1306,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden divide-y divide-stone-100",
                                children: filterMeasurementData().map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 hover:bg-stone-50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-11 h-11 rounded-xl ${getAvatarColor(item?.customer_Name.slice(0, 2).toUpperCase() || "NA")}  flex items-center justify-center text-white font-black shrink-0 text-sm`,
                                                        children: item?.customer_Name?.slice(0, 2).toUpperCase() || "NA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1478,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-slate-800 truncate",
                                                                children: item?.customer_Name || "Unnamed Customer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1485,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-500 flex items-center gap-1 mt-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-sm",
                                                                        children: "call"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                        lineNumber: 1489,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    item?.customer_Number || "No Number"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1488,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1484,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1.5 shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#modal-view-measure",
                                                                onClick: ()=>handleEditClick(item),
                                                                className: "w-8 h-8 rounded-lg bg-stone-100 hover:bg-blue-950 hover:text-rose-50 flex items-center justify-center transition-all",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-sm",
                                                                    children: "visibility"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1503,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1498,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#add-measurement-form",
                                                                onClick: ()=>{
                                                                    // 1. Set the Edit ID first to signal the form is in 'Update' mode
                                                                    setEditId(item.id);
                                                                    // 2. Populate the entire state object
                                                                    setMeasurements({
                                                                        // IDs and Info
                                                                        customer_id: item.customer_id || "",
                                                                        customer_Name: item.customer_Name || "",
                                                                        customer_Number: item.customer_Number || "",
                                                                        TypeCloth: item.TypeCloth || "dress",
                                                                        // Core Measurements
                                                                        bust: item.bust || "",
                                                                        waist: item.waist || "",
                                                                        shoulder: item.shoulder || "",
                                                                        sleeveLength: item.sleeveLength || "",
                                                                        blouseLength: item.blouseLength || "",
                                                                        neckDepthFront: item.neckDepthFront || "",
                                                                        neckDepthBack: item.neckDepthBack || "",
                                                                        armRound: item.armRound || "",
                                                                        specialNotes: item.specialNotes || "",
                                                                        // Added Logic: Grid and Branch fields (m7 - m23)
                                                                        m7: item.m7 || "",
                                                                        m8: item.m8 || "",
                                                                        m9: item.m9 || "",
                                                                        m10: item.m10 || "",
                                                                        m11: item.m11 || "",
                                                                        m12: item.m12 || "",
                                                                        m13: item.m13 || "",
                                                                        m14: item.m14 || "",
                                                                        m15: item.m15 || "",
                                                                        m16: item.m16 || "",
                                                                        m17: item.m17 || "",
                                                                        m18: item.m18 || "",
                                                                        m19: item.m19 || "",
                                                                        m20: item.m20 || "",
                                                                        m21: item.m21 || "",
                                                                        m22: item.m22 || "",
                                                                        m23: item.m23 || ""
                                                                    });
                                                                },
                                                                className: "w-8 h-8 rounded-lg bg-stone-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-all",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-sm",
                                                                    children: "edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1556,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1509,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#modal-delete-confirm",
                                                                onClick: ()=>setItemToDelete(item),
                                                                className: "w-8 h-8 rounded-lg bg-stone-100 hover:bg-red-700 hover:text-white flex items-center justify-center transition-all",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-sm",
                                                                    children: "delete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1567,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1562,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1496,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1476,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 bg-red-50 text-red-800 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-xs",
                                                                children: "checkroom"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                lineNumber: 1577,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            item?.TypeCloth || "General"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1576,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 font-medium",
                                                        children: item?.createdAt?.seconds ? new Date(item.createdAt.seconds * 1000).toLocaleDateString("en-GB", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric"
                                                        }) : "No date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1584,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1574,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1472,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1470,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 1304,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 1250,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "modal-view-measure",
                className: "modal-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "modal-backdrop"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 1608,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-in relative bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-stone-100 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-950 px-7 py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-black uppercase tracking-[0.3em] text-rose-200/70 mb-0.5",
                                                        children: "Measurement Record"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1614,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-extrabold text-rose-50",
                                                        children: measurements.customer_Name || "Select Record"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1617,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1613,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    // 1. Reset data
                                                    setMeasurements({
                                                        customer_id: customer.id,
                                                        customer_Name: customer.customerName,
                                                        customer_Number: customer.customerNumber,
                                                        TypeCloth: "dress",
                                                        bust: "",
                                                        waist: "",
                                                        shoulder: "",
                                                        sleeveLength: "",
                                                        blouseLength: "",
                                                        neckDepthFront: "",
                                                        neckDepthBack: "",
                                                        armRound: "",
                                                        specialNotes: "",
                                                        m7: "",
                                                        m8: "",
                                                        m9: "",
                                                        m10: "",
                                                        m11: "",
                                                        m12: "",
                                                        m13: "",
                                                        m14: "",
                                                        m15: "",
                                                        m16: "",
                                                        m17: "",
                                                        m18: "",
                                                        m19: "",
                                                        m20: "",
                                                        m21: "",
                                                        m22: "",
                                                        m23: ""
                                                    });
                                                    // 2. CLOSE THE MODAL UI
                                                    window.location.hash = "#";
                                                },
                                                className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-rose-100 hover:bg-red-800 transition-all",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-xl",
                                                    children: "close"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1661,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1621,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1612,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 bg-white/10 text-rose-100 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-sm",
                                                        children: "checkroom"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1666,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    measurements.TypeCloth
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1665,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 bg-white/10 text-rose-100 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-sm",
                                                        children: "phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                        lineNumber: 1672,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    measurements.customer_Number
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1671,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1664,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1611,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-7 py-6 overflow-y-auto max-h-[50vh] bg-slate-50/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1",
                                            children: "Bust"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1682,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 bg-white border-2 border-blue-900 rounded-2xl py-2.5 shadow-sm flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-black text-red-800 leading-none",
                                                    children: measurements.bust || "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1686,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[8px] font-bold text-slate-300 uppercase mt-0.5",
                                                    children: "inches"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1689,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1685,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 w-px border-l-2 border-dotted border-slate-300 my-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1695,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1",
                                            children: "Waist"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1698,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 bg-white border border-slate-200 rounded-xl py-2 shadow-sm text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-slate-700",
                                                children: measurements.waist || "0"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1702,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1701,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 w-px border-l-2 border-dotted border-slate-300 my-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1708,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex justify-between items-start gap-4 px-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col space-y-2 w-28",
                                                    children: [
                                                        {
                                                            label: "Shldr",
                                                            val: measurements.shoulder
                                                        },
                                                        {
                                                            label: "Slve",
                                                            val: measurements.sleeveLength
                                                        },
                                                        {
                                                            label: "Bl-L",
                                                            val: measurements.blouseLength
                                                        },
                                                        {
                                                            label: "Arm",
                                                            val: measurements.armRound
                                                        }
                                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-black text-slate-400 uppercase",
                                                                    children: item.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1724,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-extrabold text-blue-950",
                                                                    children: item.val || "0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1727,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1720,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1713,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-1.5 flex-1 max-w-[180px] bg-stone-100/50 p-2 rounded-2xl border border-stone-200",
                                                    children: [
                                                        "m7",
                                                        "m8",
                                                        "m9",
                                                        "m10",
                                                        "m11",
                                                        "m12",
                                                        "m13",
                                                        "m14"
                                                    ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white rounded-lg p-2 border border-stone-50 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[8px] font-black text-slate-300 uppercase mb-0.5",
                                                                    children: key
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1742,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-black text-blue-900 leading-none",
                                                                    children: measurements[key] || "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1745,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1738,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1735,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1711,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8 flex flex-col items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-px bg-slate-200"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1756,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1755,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-3 w-full max-w-[340px]",
                                            children: [
                                                {
                                                    label: "Neck F",
                                                    val: measurements.neckDepthFront
                                                },
                                                {
                                                    label: "Neck B",
                                                    val: measurements.neckDepthBack
                                                },
                                                {
                                                    label: "Ref m15",
                                                    val: measurements.m15
                                                }
                                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[8px] font-black text-slate-400 uppercase mb-1",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1770,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-extrabold text-slate-800",
                                                            children: item.val || "0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1773,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1766,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1760,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full mt-6 bg-amber-50/70 border border-amber-100 rounded-2xl p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-amber-600 text-sm",
                                                            children: "description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1783,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-black text-amber-700 uppercase tracking-widest",
                                                            children: "Special Instructions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1786,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1782,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-600 italic leading-relaxed",
                                                    children: measurements.specialNotes || "No specific instructions provided."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1790,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1781,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-[340px] mt-6 space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-3",
                                                    children: [
                                                        "m16",
                                                        "m17",
                                                        "m18"
                                                    ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-blue-50 rounded-xl p-2.5 text-center shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[8px] font-black text-slate-300 uppercase mb-0.5",
                                                                    children: key
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1805,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-blue-900",
                                                                    children: measurements[key] || "0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1808,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1801,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1799,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-3",
                                                    children: [
                                                        "m19",
                                                        "m20",
                                                        "m21"
                                                    ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-blue-50 rounded-xl p-2.5 text-center shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[8px] font-black text-slate-300 uppercase mb-0.5",
                                                                    children: key
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1821,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-blue-900",
                                                                    children: measurements[key] || "0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1824,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1817,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1815,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [
                                                        "m22",
                                                        "m23"
                                                    ].map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white border border-blue-50 rounded-xl p-2.5 text-center shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[8px] font-black text-slate-300 uppercase mb-0.5",
                                                                    children: key
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1837,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-blue-900",
                                                                    children: measurements[key] || "0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                                    lineNumber: 1840,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, key, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                            lineNumber: 1833,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                    lineNumber: 1831,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                            lineNumber: 1797,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1680,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1679,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-7 pb-7 flex gap-3 border-t border-stone-100 pt-5 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            window.location.hash = "add-measurement-form";
                                        },
                                        className: "flex-1 py-3.5 rounded-xl bg-blue-950 text-rose-50 font-bold text-sm hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-base",
                                                children: "edit"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1858,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            "Edit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1852,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            // 1. Reset data
                                            setMeasurements({
                                                customer_id: customer.id,
                                                customer_Name: customer.customerName,
                                                customer_Number: customer.customerNumber,
                                                TypeCloth: "dress",
                                                bust: "",
                                                waist: "",
                                                shoulder: "",
                                                sleeveLength: "",
                                                blouseLength: "",
                                                neckDepthFront: "",
                                                neckDepthBack: "",
                                                armRound: "",
                                                specialNotes: "",
                                                m7: "",
                                                m8: "",
                                                m9: "",
                                                m10: "",
                                                m11: "",
                                                m12: "",
                                                m13: "",
                                                m14: "",
                                                m15: "",
                                                m16: "",
                                                m17: "",
                                                m18: "",
                                                m19: "",
                                                m20: "",
                                                m21: "",
                                                m22: "",
                                                m23: ""
                                            });
                                            // 2. CLOSE THE MODAL UI
                                            window.location.hash = "#";
                                        },
                                        className: "flex-1 py-3.5 rounded-xl border border-stone-200 font-bold text-sm text-slate-500 hover:bg-slate-50 transition-colors",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1861,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1851,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 1609,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 1607,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "modal-delete-confirm",
                className: "modal-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "modal-backdrop"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 1911,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal-in relative bg-white rounded-3xl shadow-2xl w-full max-w-sm border border-stone-100 p-7 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-3xl text-red-700",
                                    children: "delete_forever"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                    lineNumber: 1914,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1913,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-extrabold text-slate-900 mb-2",
                                children: "Delete Measurement?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1918,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-500 mb-2",
                                children: "You are about to delete the measurement record for:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1921,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-black text-red-800 mb-6",
                                children: [
                                    itemToDelete?.customer_Name || "Customer",
                                    " —",
                                    " ",
                                    itemToDelete?.TypeCloth || "Record"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1926,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mb-7",
                                children: "This action cannot be undone. All measurement data for this customer will be permanently removed."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1931,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "flex-1 py-3.5 rounded-xl border border-stone-200 font-bold text-sm text-slate-500 hover:border-slate-400 transition-colors text-center active:scale-95",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1937,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (itemToDelete) {
                                                deleteMeasurement(itemToDelete.id, itemToDelete.customer_id);
                                            }
                                        },
                                        className: "flex-1 py-3.5 rounded-xl bg-red-700 text-white font-bold text-sm hover:bg-red-800 transition-all active:scale-95 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-base",
                                                children: "delete"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                                lineNumber: 1953,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            "Delete"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                        lineNumber: 1945,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                                lineNumber: 1936,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                        lineNumber: 1912,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
                lineNumber: 1910,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
        lineNumber: 563,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PageContent, "G4IUySVawIVDGJs2axw9wDE98cc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PageContent;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
            lineNumber: 1967,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContent, {}, void 0, false, {
            fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
            lineNumber: 1968,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/yogeshwar/app/admin/measurements/dress/page.jsx",
        lineNumber: 1967,
        columnNumber: 5
    }, this);
}
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageContent");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_yogeshwar_app_admin_measurements_dress_page_jsx_0isjlv7._.js.map