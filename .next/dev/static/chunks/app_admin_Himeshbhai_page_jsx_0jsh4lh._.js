(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/Himeshbhai/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function page() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        no: "",
        bust: "",
        waist: "",
        hip: "",
        shoulder: "",
        neckF: "",
        neckB: "",
        sleeve: "",
        notes: "",
        totalLength: "",
        armRound: "",
        ghera: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Measurement Saved:", formData);
        alert("Measurement Saved Successfully!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-a9c318635f43e4ef" + " " + "min-h-screen mt-30 bg-[#f8fafc] font-sans antialiased py-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
                className: "jsx-a9c318635f43e4ef"
            }, void 0, false, {
                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap",
                rel: "stylesheet",
                className: "jsx-a9c318635f43e4ef"
            }, void 0, false, {
                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a9c318635f43e4ef" + " " + "max-w-md  mx-auto font-outfit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a9c318635f43e4ef" + " " + "bg-rose-100 p-6 rounded-t-[2.5rem] border-b border-dashed border-slate-200 shadow-sm text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "w-14 h-14 bg-red-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-red-800/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-a9c318635f43e4ef" + " " + "material-symbols-outlined text-3xl",
                                    children: "edit_square"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-a9c318635f43e4ef" + " " + "text-2xl font-extrabold text-slate-900 uppercase tracking-tight",
                                children: "Measurement Form"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-a9c318635f43e4ef" + " " + "text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2",
                                children: "Yogeshwar Tailor Shop"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "jsx-a9c318635f43e4ef" + " " + "bg-blue-950 p-8 rounded-b-[2.5rem] shadow-2xl shadow-slate-200/60 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "flex items-end gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a9c318635f43e4ef" + " " + "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-a9c318635f43e4ef" + " " + "block text-[10px] font-black uppercase tracking-widest text-red-800 mb-2",
                                                children: "ID (Col 1)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "id",
                                                value: formData.id,
                                                onChange: (e)=>{
                                                    if (e.target.value.length <= 2) handleChange(e);
                                                },
                                                placeholder: "00",
                                                className: "jsx-a9c318635f43e4ef" + " " + "w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-4 font-black text-center text-xl outline-none focus:ring-2 focus:ring-red-800 focus:bg-white transition-all text-red-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a9c318635f43e4ef" + " " + "w-8 flex items-center justify-center opacity-20 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-a9c318635f43e4ef" + " " + "material-symbols-outlined text-slate-400",
                                            children: "space_bar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a9c318635f43e4ef" + " " + "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-a9c318635f43e4ef" + " " + "block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2",
                                                children: "No. (Col 3)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                name: "no",
                                                value: formData.no,
                                                onChange: (e)=>{
                                                    if (e.target.value.length <= 2) handleChange(e);
                                                },
                                                placeholder: "01",
                                                className: "jsx-a9c318635f43e4ef" + " " + "w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-4 font-black text-center text-xl outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-900"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "h-2"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "space-y-5 pt-6 border-t border-slate-100",
                                children: [
                                    {
                                        label: "Bust Size",
                                        name: "bust",
                                        col: "C5"
                                    },
                                    {
                                        label: "Waist Size",
                                        name: "waist",
                                        col: "C6"
                                    },
                                    {
                                        label: "Hip Size",
                                        name: "hip",
                                        col: "C7"
                                    },
                                    {
                                        label: "Shoulder",
                                        name: "shoulder",
                                        col: "C8"
                                    }
                                ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a9c318635f43e4ef" + " " + "flex items-center gap-4 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a9c318635f43e4ef" + " " + "w-10 text-[10px] font-black text-slate-300 group-focus-within:text-red-800 transition-colors",
                                                children: field.col
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: field.name,
                                                value: formData[field.name],
                                                onChange: handleChange,
                                                placeholder: field.label,
                                                className: "jsx-a9c318635f43e4ef" + " " + "flex-1 bg-blue-950 border-b-2 border-slate-100 py-3 outline-none focus:border-red-800 transition-all font-bold text-slate-700 placeholder:font-normal placeholder:text-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, field.name, true, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "py-4 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a9c318635f43e4ef" + " " + "w-full border-t border-dashed border-slate-200"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "grid grid-cols-3 gap-3 bg-red-50/50 p-5 rounded-[1.5rem] border border-red-100",
                                children: [
                                    {
                                        label: "Neck F",
                                        name: "neckF"
                                    },
                                    {
                                        label: "Neck B",
                                        name: "neckB"
                                    },
                                    {
                                        label: "Sleeve",
                                        name: "sleeve"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a9c318635f43e4ef",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "jsx-a9c318635f43e4ef" + " " + "block text-[9px] font-black uppercase text-red-800 mb-2 text-center",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: item.name,
                                                value: formData[item.name],
                                                onChange: handleChange,
                                                placeholder: "0.0",
                                                className: "jsx-a9c318635f43e4ef" + " " + "w-full bg-white border border-red-200 rounded-xl py-3 px-2 text-center text-sm font-black text-red-900 outline-none focus:ring-2 focus:ring-red-800 transition-all"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "jsx-a9c318635f43e4ef" + " " + "block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3",
                                        children: "Specific Design Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: "3",
                                        name: "notes",
                                        value: formData.notes,
                                        onChange: handleChange,
                                        placeholder: "Neck pattern, Dori details, etc.",
                                        className: "jsx-a9c318635f43e4ef" + " " + "w-full bg-slate-50 border border-slate-200 rounded-[1.5rem] py-4 px-5 text-sm font-medium outline-none focus:bg-white focus:ring-2 focus:ring-blue-900 transition-all text-slate-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a9c318635f43e4ef" + " " + "space-y-3 pt-6 border-t border-slate-100",
                                children: [
                                    {
                                        label: "Total Length",
                                        name: "totalLength",
                                        icon: "straight"
                                    },
                                    {
                                        label: "Arm Round",
                                        name: "armRound",
                                        icon: "restart_alt"
                                    },
                                    {
                                        label: "Ghera Size",
                                        name: "ghera",
                                        icon: "architecture"
                                    }
                                ].map((bot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a9c318635f43e4ef" + " " + "flex items-center gap-4 bg-blue-50/50 p-4 rounded-2xl border border-blue-100 group focus-within:bg-blue-50 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a9c318635f43e4ef" + " " + "material-symbols-outlined text-blue-900 text-xl group-focus-within:scale-110 transition-transform",
                                                children: bot.icon
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: bot.name,
                                                value: formData[bot.name],
                                                onChange: handleChange,
                                                placeholder: bot.label,
                                                className: "jsx-a9c318635f43e4ef" + " " + "flex-1 bg-transparent outline-none font-black text-blue-900 placeholder:text-blue-300 placeholder:font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, bot.name, true, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "jsx-a9c318635f43e4ef" + " " + "w-full bg-slate-900 text-white py-6 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.25em] shadow-xl shadow-slate-200 hover:bg-red-800 active:scale-95 transition-all flex items-center justify-center gap-3 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-a9c318635f43e4ef" + " " + "material-symbols-outlined",
                                        children: "save"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    "Save Measurement"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-a9c318635f43e4ef" + " " + "text-center mt-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]",
                        children: "Yogeshwar Tailors Digital System"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/Himeshbhai/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a9c318635f43e4ef",
                children: ".font-outfit{font-family:Outfit,sans-serif}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/Himeshbhai/page.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(page, "5GYO8OuPS3SlJnkwnwwtlHHnN4c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_Himeshbhai_page_jsx_0jsh4lh._.js.map