(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SimpleForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aO__as__collection$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/common-edb5d170.esm.js [app-client] (ecmascript) <export aO as collection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/app/lib/firebase.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SimpleForm() {
    _s();
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
            // ✅ make ID from name
            const docId = customerName.toLowerCase().replace(/\s+/g, "_");
            const customerRef = doc(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customers", docId);
            // ✅ check if customer exists
            const customerSnap = await getDoc(customerRef);
            // 👉 1. If NOT exists → create customer
            if (!customerSnap.exists()) {
                await setDoc(customerRef, {
                    name: customerName
                });
            }
            // 👉 2. ALWAYS insert measurement (dress or blouse)
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$edb5d170$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aO__as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "customers", docId, "measurement"), {
                type: formData.type,
                ...formData,
                createdAt: new Date()
            });
            alert("Measurement saved successfully");
            clearForm();
        } catch (error) {
            console.log(error);
            alert("Error saving data");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "mt-40 mb-30 p-4 space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_1",
                placeholder: "Customer Name",
                value: formData._1,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>navigator.push(`/yourpage?id=${customer}&type=dress`),
                        className: `px-4 py-2 rounded border transition ${formData.type === "dress" ? "bg-[#343a40] text-[#d4af37] border-[#d4af37]" : "bg-transparent text-gray-400 border-gray-500"}`,
                        children: "Dress"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>navigator.push(`/yourpage?id=${customer}&type=blouse`),
                        className: `px-4 py-2 rounded border transition ${formData.type === "blouse" ? "bg-[#343a40] text-[#d4af37] border-[#d4af37]" : "bg-transparent text-gray-400 border-gray-500"}`,
                        children: "Blouse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_2",
                placeholder: "Field _2",
                value: formData._2,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_3",
                placeholder: "Field _3",
                value: formData._3,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_4",
                placeholder: "Field _4",
                value: formData._4,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_5",
                placeholder: "Field _5",
                value: formData._5,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_6",
                placeholder: "Field _6",
                value: formData._6,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_7",
                placeholder: "Field _7",
                value: formData._7,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_8",
                placeholder: "Field _8",
                value: formData._8,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_9",
                placeholder: "Field _9",
                value: formData._9,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_10",
                placeholder: "Field _10",
                value: formData._10,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_11",
                placeholder: "Field _11",
                value: formData._11,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_12",
                placeholder: "Field _12",
                value: formData._12,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_13",
                placeholder: "Field _13",
                value: formData._13,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_14",
                placeholder: "Field _14",
                value: formData._14,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_15",
                placeholder: "Field _15",
                value: formData._15,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "_16",
                placeholder: "Notes",
                value: formData._16,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "_17",
                placeholder: "Field _17",
                value: formData._17,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "_16",
                placeholder: "Notes",
                value: formData._16,
                onChange: handleChange,
                className: "border p-2 w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-600 text-white px-4 py-2 rounded",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearForm,
                        className: "bg-gray-400 text-white px-4 py-2 rounded",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/yogeshwar/app/admin2/NewCustomerRecord/page.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(SimpleForm, "T4yXvXp9ZUeg/I2tM6GijGKf8Os=");
_c = SimpleForm;
var _c;
__turbopack_context__.k.register(_c, "SimpleForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_yogeshwar_app_admin2_NewCustomerRecord_page_jsx_0z_o84r._.js.map