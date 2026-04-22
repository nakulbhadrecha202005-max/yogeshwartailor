module.exports = [
"[project]/Desktop/yogeshwar/app/signup/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/app/lib/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript) <export ab as createUserWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript) <export Y as GoogleAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript) <export d as signInWithPopup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// export const metadata = {
//   title: "Signup – Yogeshwar Tailor Porbandar",
//   description:
//     "Create an account with Yogeshwar Tailor Porbandar to book stitching services, track orders, and get updates on your custom ladies wear designs.",
//   metadataBase: new URL("https://yogeshwartailor.vercel.app"),
//   keywords: [
//     "yogeshwar tailor signup",
//     "tailor porbandar account",
//     "ladies tailor porbandar login",
//     "custom stitching booking porbandar",
//     "yogeshwar tailor portal",
//   ],
//   authors: [{ name: "Yogeshwar Tailor" }],
// };
const page = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [FormData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        username: "",
        password: ""
    });
    const [Error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ErrorsObj, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        username: "",
        password: ""
    });
    const [Loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [GoogleLoading, setGoogleLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
        // Clear the error for this field when the user starts typing
        setErrors((prevErrors)=>({
                ...prevErrors,
                [name]: ""
            }));
    };
    const Validation = ()=>{
        const { email, username, password } = FormData;
        let newError = {};
        const Emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newError.email = "Email is required";
        } else if (!Emailregex.test(email)) {
            newError.email = "Invalid email format";
        }
        // 3. If Email is fine, check Username
        if (!username.trim()) {
            newError.username = "Username is required";
        } else if (username.length < 3) {
            newError.username = "Username must be at least 3 characters";
        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            newError.username = "Username can only contain letters and numbers";
        }
        if (!password) {
            newError.password = "Password is required";
        } else if (password.length < 6) {
            newError.password = "Password must be at least 6 characters";
        }
        return newError;
    };
    const HandleSubmit = async (e)=>{
        e.preventDefault();
        const validationErrors = Validation();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
        setLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__ab__as__createUserWithEmailAndPassword$3e$__["createUserWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], FormData.email.trim(), FormData.password.trim());
            //console.log("User created ");
            // Redirect to home page or any other page
            router.push("/login");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("This email is already registered. Please login instead.");
            } else {
                setError(error.message);
            }
        } finally{
            setLoading(false);
        }
    };
    const signinWithGoogle = async ()=>{
        setGoogleLoading(true);
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Y__as__GoogleAuthProvider$3e$__["GoogleAuthProvider"]();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__d__as__signInWithPopup$3e$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], provider);
            // Redirect to home page
            router.push("/");
        } catch (error) {
            //console.error(error.message);
            setError("Something went wrong On Google Sign-In. Please try Later.");
        } finally{
            setGoogleLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F1EDEE] flex flex-col items-center justify-center p-6 font-sans text-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-200 p-10 relative overflow-hidden mt-40",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 w-full h-2 bg-[#C08552]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-extrabold text-[#A376A2] tracking-tight ",
                            children: "Yogeshwar Tailoring"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 w-34 bg-[#C08552]/20 mt-1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-stone-500 text-sm mt-3 font-medium",
                            children: "1000+ Clients Served currently. Join us and experience the best tailoring services in town!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-start gap-3 bg-[#F1EDEE] border border-[#A376A2]/20 p-4 rounded-lg shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined text-[#A376A2] text-xl",
                            children: "report"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-[#A376A2]",
                                    children: "Action Required"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-600 opacity-90",
                                    children: Error
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: HandleSubmit,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[13px] font-bold text-[#A376A2] uppercase tracking-wide flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-lg",
                                            children: "mail"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        "Email Address"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "email",
                                    onChange: handleChange,
                                    disabled: Loading,
                                    spellCheck: false,
                                    value: FormData.email,
                                    placeholder: "e.g. customer@tailor.com",
                                    className: "w-full px-4 py-3 bg-[#F1EDEE] border text-slate-800 border-[#A376A2]/20 rounded-md focus:ring-1 focus:ring-[#C08552] focus:border-[#C08552] outline-none transition-all text-sm pr-12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                ErrorsObj.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[#C08552] font-bold flex items-center gap-1 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm",
                                            children: "error"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        ErrorsObj.email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[13px] font-bold text-[#A376A2] uppercase tracking-wide flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-lg",
                                            children: "person"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        "Username"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "username",
                                    disabled: Loading,
                                    spellCheck: false,
                                    onChange: handleChange,
                                    value: FormData.username,
                                    placeholder: "Enter your full name",
                                    className: "w-full px-4 py-3 bg-[#F1EDEE] border text-slate-800 border-[#A376A2]/20 rounded-md focus:ring-1 focus:ring-[#C08552] focus:border-[#C08552] outline-none transition-all text-sm pr-12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                ErrorsObj.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[#C08552] font-bold flex items-center gap-1 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm",
                                            children: "error"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        ErrorsObj.username
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 202,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[13px] font-bold text-[#A376A2] uppercase tracking-wide flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-lg",
                                            children: "lock"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        "Password"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: showPassword ? "text" : "password",
                                            name: "password",
                                            spellCheck: false,
                                            disabled: Loading,
                                            onChange: handleChange,
                                            value: FormData.password,
                                            placeholder: "••••••••",
                                            className: "w-full px-4 py-3 bg-[#F1EDEE] border text-slate-800 border-[#A376A2]/20 rounded-md focus:ring-1 focus:ring-[#C08552] focus:border-[#C08552] outline-none transition-all text-sm pr-12"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPassword(!showPassword),
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#A376A2] hover:text-[#C08552] transition-colors flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                children: showPassword ? "visibility_off" : "visibility"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                ErrorsObj.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-[#C08552] font-bold flex items-center gap-1 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm",
                                            children: "error"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        ErrorsObj.password
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: Loading,
                            type: "submit",
                            className: "w-full py-3 bg-[#A376A2] hover:bg-[#C08552] text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:grayscale flex items-center justify-center gap-2",
                            children: Loading ? "Processing..." : "Secure Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative my-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-full border-t border-stone-300"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex justify-center text-xs uppercase",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-white px-3 text-stone-400 font-semibold tracking-widest",
                                children: "Or"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: signinWithGoogle,
                    disabled: GoogleLoading,
                    className: "w-full py-3 border border-stone-300 bg-[#F1EDEE] hover:bg-stone-200 text-stone-700 text-sm font-bold rounded-full flex items-center justify-center gap-3 transition-all shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
                            alt: "Google",
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        GoogleLoading ? "Verifying..." : "Continue with Google"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 text-center text-[11px] text-stone-800 tracking-widest",
                    children: [
                        "Already Having An Account ?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "font-bold text-[#A376A2] underline underline-offset-4 transition-all",
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
            lineNumber: 130,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/yogeshwar/app/signup/page.jsx",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = page;
}),
"[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript) <export ab as createUserWithEmailAndPassword>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createUserWithEmailAndPassword",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ab"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript) <export Y as GoogleAuthProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleAuthProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Y"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript) <export d as signInWithPopup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signInWithPopup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_yogeshwar_0ac_d1v._.js.map