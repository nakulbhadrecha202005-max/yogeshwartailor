module.exports = [
"[project]/Desktop/yogeshwar/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/app/lib/firebase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/@firebase/auth/dist/node-esm/totp-ed01b91b.js [app-ssr] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function page() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [User, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const CheckingUser_login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$ed01b91b$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"], (user)=>{
            if (user) {
                setUser(user);
            }
        });
        return ()=>CheckingUser_login();
    }, [
        router
    ]);
    const SignoutUser = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$app$2f$lib$2f$firebase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].signOut();
        router.push("/login");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            User && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    backgroundColor: 'rgba(163, 118, 162, 0.08)',
                    backdropFilter: 'blur(8px)',
                    borderBottom: '1px solid rgba(163, 118, 162, 0.2)',
                    paddingTop: 'calc(120px + 1rem)',
                    paddingBottom: '1rem',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                    fontFamily: 'sans-serif',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    marginTop: '10px',
                    marginBottom: '-80px'
                },
                className: "relative z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: '80rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '9px',
                                                backgroundColor: '#A376A2',
                                                color: '#ffffff',
                                                fontWeight: 900,
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em'
                                            },
                                            children: "Live Session"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 69,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: 'clamp(0.875rem, 4vw, 1rem)',
                                                fontWeight: 800,
                                                color: '#2d1a24',
                                                margin: 0,
                                                letterSpacing: '-0.025em',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            },
                                            children: [
                                                "Hello, ",
                                                User?.displayName || User?.email.split('@')[0],
                                                "!"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 83,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                    lineNumber: 68,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#78716c',
                                        fontSize: '11px',
                                        fontWeight: 500,
                                        margin: '4px 0 0 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        opacity: 0.8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            style: {
                                                fontSize: '12px',
                                                color: '#A376A2'
                                            },
                                            children: "verified_user"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 110,
                                            columnNumber: 11
                                        }, this),
                                        "Logged in: ",
                                        User?.email
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                    lineNumber: 98,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                            lineNumber: 67,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative',
                                        cursor: 'pointer'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '45px',
                                                height: '45px',
                                                borderRadius: '50%',
                                                border: '2px solid rgba(163, 118, 162, 0.3)',
                                                padding: '2px',
                                                transition: 'all 0.3s ease'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: User?.photoURL || `https://ui-avatars.com/api/?name=${User?.displayName || User?.email.split('@')[0]}&background=A376A2&color=fff`,
                                                alt: "Profile",
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 132,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 122,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                bottom: '2px',
                                                right: '2px',
                                                width: '10px',
                                                height: '10px',
                                                backgroundColor: '#10b981',
                                                border: '2px solid #ffffff',
                                                borderRadius: '50%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 139,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                    lineNumber: 121,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: SignoutUser,
                                    style: {
                                        background: 'none',
                                        border: 'none',
                                        padding: '8px',
                                        color: '#78716c',
                                        cursor: 'pointer',
                                        transition: 'color 0.2s ease',
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    onMouseOver: (e)=>e.currentTarget.style.color = '#2d1a24',
                                    onMouseOut: (e)=>e.currentTarget.style.color = '#78716c',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontSize: '24px'
                                        },
                                        children: "logout"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 169,
                                        columnNumber: 11
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                    lineNumber: 154,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                            lineNumber: 118,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                    lineNumber: 55,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 38,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    // Softens the "blobs"
                    background: `
            radial-gradient(circle at 20% 20%, rgba(240, 236, 246, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 0%, rgba(132, 89, 79, 1) 0%, transparent 50%),
            radial-gradient(circle at 0% 80%, rgba(110, 73, 75, 1) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(85, 54, 70, 1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(96, 62, 72, 0.5) 0%, transparent 70%)
          `
                },
                className: "border-violet-900/30 bg-[#f0ecf6cb] mt-20 min-h-screen flex items-center pt-28 pb-12 lg:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 h-[2px] bg-[#C08552]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 192,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#904B1B] font-black text-[10px] md:text-[11px] uppercase tracking-[0.35em]",
                                                children: "Premium Tailoring Since 1999"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 193,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 h-[2px] bg-[#C08552] lg:hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 197,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 191,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-outfit text-[#472A38] text-4xl sm:text-5xl xl:text-7xl font-extrabold text-midnight leading-[1.1] mb-6",
                                        children: [
                                            "Outfits Crafted ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 202,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#904B1B]",
                                                children: "For You,"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 203,
                                                columnNumber: 25
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 203,
                                                columnNumber: 74
                                            }, this),
                                            "Not the Rack."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 200,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#904B1B] text-base md:text-lg font-medium leading-relaxed mb-8 max-w-md mx-auto lg:mx-0",
                                        children: "Yogeshwar Tailor has been crafting perfect-fitting ladies garments for over two decades. From bridal blouses to designer kurtis — every stitch tells story."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 207,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#contact",
                                                className: "bg-[#A376A2] text-rose-50 px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-[#C08552] transition-all shadow-xl shadow-blue-950/20 active:scale-95 flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "calendar_month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 217,
                                                        columnNumber: 29
                                                    }, this),
                                                    "Book Appointment"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 215,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#why-us",
                                                className: "bg-[#C08552] text-slate-800 px-8 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest border border-stone-200  hover:text-slate-800 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "explore"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 222,
                                                        columnNumber: 29
                                                    }, this),
                                                    "Explore Shop"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 220,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 213,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-stone-200 w-full lg:w-max",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center lg:text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-outfit text-xl sm:text-2xl font-black text-midnight",
                                                        children: [
                                                            "5000",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#C08552]",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                lineNumber: 231,
                                                                columnNumber: 105
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 231,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1",
                                                        children: "Happy Customers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 233,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 230,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center lg:text-left border-x border-stone-200 px-4 sm:px-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-outfit text-xl sm:text-2xl font-black text-midnight",
                                                        children: [
                                                            "25",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#C08552]",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                lineNumber: 237,
                                                                columnNumber: 103
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 237,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1",
                                                        children: "Years Exp."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 239,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 236,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center lg:text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-outfit text-xl sm:text-2xl font-black text-midnight",
                                                        children: [
                                                            "12K",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[#C08552]",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                lineNumber: 243,
                                                                columnNumber: 104
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 243,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1",
                                                        children: "Stitched"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 242,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 228,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 190,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "order-1 lg:order-2 relative px-4 sm:px-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-white shadow-2xl bg-stone-100 aspect-square lg:aspect-[4/5]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/photo.jpg",
                                                alt: "Yogeshwar Tailor Shop",
                                                className: "absolute inset-0 w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 257,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/10 transition-opacity hover:opacity-0 duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 261,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur rounded-2xl px-4 py-2 sm:px-6 sm:py-3 shadow-lg border border-stone-100 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-outfit font-black text-lg sm:text-2xl text-[#C08552]",
                                                        children: "1999"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 267,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-500",
                                                        children: "Est. Since"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 268,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 265,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#A376A2] text-rose-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl flex items-center gap-2 shadow-lg scale-90 sm:scale-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-xs sm:text-sm text-emerald-400",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 275,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] sm:text-[10px] font-black uppercase tracking-widest",
                                                        children: "Trusted Tailor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 277,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 273,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 253,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-8 -left-8 w-32 h-32 sm:w-48 sm:h-48 bg-[#C08552]/10 rounded-full -z-10 blur-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 283,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-8 -right-3 w-24 h-24 sm:w-32 sm:h-32 bg-[#A376A2]/20 rounded-full -z-10 blur-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 286,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 252,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 176,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "why-us",
                className: "bg-[#F5F5F5] py-20 md:py-28",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 h-[1px] bg-[#C08552]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 301,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#C08552] font-black text-[11px] uppercase tracking-[0.4em]",
                                                children: "Our Promise"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 302,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 h-[1px] bg-[#C08552]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 303,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 300,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-outfit text-3xl md:text-5xl font-extrabold text-[#472A38] mb-6",
                                        children: "Why Choose Yogeshwar Tailor?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 305,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed",
                                        children: "For over 25 years, our customers return to us for one simple reason — we never compromise on fit, quality, or trust."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 308,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 299,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-white text-2xl",
                                                    children: "straighten"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 320,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 319,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-outfit font-extrabold text-xl text-[#472A38] mb-3",
                                                children: "Perfect Fitting Guarantee"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 322,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm font-medium leading-relaxed mb-6",
                                                children: "Every garment is hand-measured and tailored specifically to your body. If the fit isn't perfect, we re-stitch it — free of charge."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 323,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 328,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black uppercase tracking-widest",
                                                        children: "Satisfaction Assured"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 329,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 327,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 318,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-white text-2xl",
                                                    children: "workspace_premium"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 336,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 335,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-outfit font-extrabold text-xl text-[#472A38] mb-3",
                                                children: "Experienced Since 1999"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 338,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm font-medium leading-relaxed mb-6",
                                                children: "Our master tailors bring over 25 years of expertise. We have crafted more than 12,000 garments — each stitch reflects decades of skill."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 339,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 344,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black uppercase tracking-widest",
                                                        children: "25+ Years Legacy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 345,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 343,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 334,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-white text-2xl",
                                                    children: "person_pin"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 352,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 351,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-outfit font-extrabold text-xl text-[#472A38] mb-3",
                                                children: "Custom Records"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 354,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm font-medium leading-relaxed mb-6",
                                                children: "We record and save every customer's precise measurements. Your next order is even faster — no need for re-measurement every time."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 355,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 360,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black uppercase tracking-widest",
                                                        children: "Personalised Records"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 361,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 359,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 350,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-white text-2xl",
                                                    children: "diamond"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 368,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 367,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-outfit font-extrabold text-xl text-[#472A38] mb-3",
                                                children: "Premium Stitching"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 370,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm font-medium leading-relaxed mb-6",
                                                children: "We use only high-quality threads and hand-finishing to ensure your garment looks stunning and lasts for years."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 371,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 376,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black uppercase tracking-widest",
                                                        children: "Premium Finish"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 377,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 375,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 366,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-white text-2xl",
                                                    children: "local_florist"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 384,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 383,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-outfit font-extrabold text-xl text-[#472A38] mb-3",
                                                children: "Bridal Specialists"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 386,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm font-medium leading-relaxed mb-6",
                                                children: "From intricate bridal blouses to festive wear, we specialise in outfits that make you feel like royalty."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 387,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 392,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black uppercase tracking-widest",
                                                        children: "Wedding Experts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 393,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 391,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 382,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-[#F1EDEE] rounded-3xl p-8 border border-white/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl bg-[#472A38] flex items-center justify-center mb-6 group-hover:bg-[#C08552] transition-colors duration-500 shadow-lg shadow-black/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-white text-2xl",
                                                    children: "local_shipping"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 400,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 399,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-outfit font-extrabold text-xl text-[#472A38] mb-3",
                                                children: "On-Time Delivery"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 402,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm font-medium leading-relaxed mb-6",
                                                children: "We respect your time. Standard orders delivered within 7–10 days. Urgent stitching available on request."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 403,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-[#C08552] border-t border-[#472A38]/5 pt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-base",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 408,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-black uppercase tracking-widest",
                                                        children: "Reliable Always"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 409,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 407,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 398,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 315,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 296,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 295,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-16 md:py-36 overflow-hidden bg-[#F1EDEE]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-full h-full opacity-30",
                            style: {
                                background: 'radial-gradient(circle at 90% 10%, #A376A2 0%, transparent 40%)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                            lineNumber: 421,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 420,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-16 md:mb-28",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 md:w-12 h-[3px] rounded-full",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 430,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]",
                                                style: {
                                                    color: '#C08552'
                                                },
                                                children: "Our Workflow"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 431,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 md:w-12 h-[3px] rounded-full",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 434,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 429,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-outfit text-3xl md:text-5xl font-extrabold text-[#2d1a24] leading-tight mb-4 md:mb-6 px-2",
                                        children: [
                                            "How We Craft ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#A376A2'
                                                },
                                                children: "Your Style"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 437,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 436,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm md:text-lg font-medium max-w-xl mx-auto leading-relaxed px-4",
                                        children: "A seamless experience from your first visit to the final perfect fit."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 439,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 428,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 overflow-visible",
                                children: [
                                    {
                                        id: 1,
                                        title: "Visit Shop",
                                        icon: "storefront",
                                        desc: "Consult with our experts at your convenience",
                                        accent: "#A376A2"
                                    },
                                    {
                                        id: 2,
                                        title: "Choose Design",
                                        icon: "palette",
                                        desc: "Select from curated fabrics and patterns",
                                        accent: "#A376A2"
                                    },
                                    {
                                        id: 3,
                                        title: "Measurements",
                                        icon: "straighten",
                                        desc: "Detailed recording for a flawless drape",
                                        accent: "#A376A2"
                                    },
                                    {
                                        id: 4,
                                        title: "Expert Stitching",
                                        icon: "content_cut",
                                        desc: "Hand-crafted precision in every single seam",
                                        accent: "#40F99B"
                                    },
                                    {
                                        id: 5,
                                        title: "Trial Fitting",
                                        icon: "how_to_reg",
                                        desc: "Fine-tuning the fit for your absolute comfort",
                                        accent: "#40F99B"
                                    },
                                    {
                                        id: 6,
                                        title: "Final Delivery",
                                        icon: "celebration",
                                        desc: "Steam-pressed and ready for your occasion",
                                        accent: "#40F99B"
                                    }
                                ].map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl md:hover:-translate-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 right-4 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md border-2 md:border-4 border-white md:border-[#F1EDEE]",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-black text-[10px] md:text-xs",
                                                    children: step.id
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 463,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 461,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 transition-transform duration-500 group-hover:scale-110",
                                                        style: {
                                                            backgroundColor: `${step.accent}15`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-2xl md:text-3xl",
                                                            style: {
                                                                color: step.accent
                                                            },
                                                            children: step.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 470,
                                                            columnNumber: 15
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 468,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-outfit font-bold text-lg md:text-xl text-[#2d1a24] mb-2 md:mb-3",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 475,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 text-xs md:text-sm font-medium leading-relaxed",
                                                        children: step.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 478,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 466,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-8 md:w-12 h-1 rounded-t-full transition-all duration-500 group-hover:w-20 md:group-hover:w-24",
                                                style: {
                                                    backgroundColor: step.accent
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 484,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, step.id, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 455,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 446,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 425,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full h-px bg-slate-200/60"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 493,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 418,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "outfits",
                className: "relative py-16 md:py-32 bg-[#F1EDEE] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[120px] opacity-20",
                                style: {
                                    backgroundColor: '#A376A2'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 502,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 right-[-10%] w-[50%] h-[50%] rounded-full blur-[80px] md:blur-[120px] opacity-20",
                                style: {
                                    backgroundColor: '#C08552'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 506,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.03] mix-blend-multiply",
                                style: {
                                    backgroundImage: `url("https://www.transparenttextures.com/patterns/graphy.png")`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 512,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 500,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-12 md:mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 md:w-10 h-[2px]",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 523,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]",
                                                style: {
                                                    color: '#C08552'
                                                },
                                                children: "Our Specialities"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 524,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 md:w-10 h-[2px]",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 527,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 522,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-outfit text-3xl md:text-6xl font-extrabold text-[#2d1a24] mb-4 md:mb-6 tracking-tight",
                                        children: [
                                            "Outfits We ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#A376A2'
                                                },
                                                children: "Perfect"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 530,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 529,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm md:text-lg font-medium max-w-xl mx-auto leading-relaxed px-2",
                                        children: "Scroll through our most-loved custom designs, each tailored to your unique story."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 532,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 521,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-visible",
                                children: [
                                    {
                                        title: "Bridal Blouse",
                                        img: "/images/Bridalblouse.avif",
                                        desc: "Intricate Handwork",
                                        mt: "md:mt-0"
                                    },
                                    {
                                        title: "Bride Lehenga",
                                        img: "/images/Bridal-Lehenga.jpg",
                                        desc: "Grand Silhouettes",
                                        mt: "md:mt-12"
                                    },
                                    {
                                        title: "Kurti with Pant",
                                        img: "/images/Kurtipant.jpg",
                                        desc: "Modern Chic",
                                        mt: "md:mt-0"
                                    },
                                    {
                                        title: "Kurti with Salwar",
                                        img: "/images/krtipant.webp",
                                        desc: "Classic Comfort",
                                        mt: "md:mt-12"
                                    }
                                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `group relative bg-white/60 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 border border-white/50 transition-all duration-500 hover:shadow-2xl ${item.mt}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-[3/4] overflow-hidden rounded-[1.6rem] md:rounded-[2rem] relative bg-[#F1EDEE]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.img,
                                                        alt: item.title,
                                                        loading: "lazy",
                                                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 551,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-[#2d1a24]/40 to-transparent md:opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 558,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-3 right-3 bg-[#40F99B] text-[#2d1a24] text-[8px] md:text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg",
                                                        children: "Popular"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 560,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 550,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-4 pb-2 px-1 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-outfit font-black text-[#2d1a24] text-base md:text-lg leading-tight mb-1",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 566,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#C08552] text-[10px] md:text-xs font-bold uppercase tracking-widest",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 569,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 565,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 545,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 538,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-12 md:mt-24 pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+918200392919",
                                    className: "group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 md:px-14 py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl text-white",
                                    style: {
                                        backgroundColor: '#2d1a24'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#40F99B] animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 582,
                                            columnNumber: 9
                                        }, this),
                                        "Start Your Custom Stitching",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-sm md:text-base group-hover:translate-x-1 transition-transform",
                                            children: "east"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 584,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                    lineNumber: 579,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 578,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 518,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 497,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 md:py-32 overflow-hidden bg-[#2d1a24]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[100px] md:blur-[120px] opacity-20 translate-x-1/4 -translate-y-1/4",
                                style: {
                                    backgroundColor: '#A376A2'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 598,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full blur-[80px] md:blur-[100px] opacity-10 -translate-x-1/4 translate-y-1/4",
                                style: {
                                    backgroundColor: '#C08552'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 600,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.05]",
                                style: {
                                    backgroundImage: 'radial-gradient(#F1EDEE 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 604,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 596,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-16 md:mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 md:w-10 h-[2px]",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 616,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-white/60",
                                                children: "Our Heritage"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 617,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 md:w-10 h-[2px]",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 620,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 615,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-outfit text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight",
                                        children: [
                                            "Trusted by ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#C08552'
                                                },
                                                children: "Families"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 623,
                                                columnNumber: 20
                                            }, this),
                                            " for Decades"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 622,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#F1EDEE]/60 text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed px-4",
                                        children: "Our legacy in numbers — built on craftsmanship, trust, and thousands of perfectly fitted garments."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 625,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 614,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8",
                                children: [
                                    {
                                        val: "25",
                                        label: "Years Experience",
                                        icon: "workspace_premium"
                                    },
                                    {
                                        val: "5K",
                                        label: "Happy Customers",
                                        icon: "people"
                                    },
                                    {
                                        val: "12K",
                                        label: "Outfits Stitched",
                                        icon: "checkroom"
                                    },
                                    {
                                        val: "95",
                                        label: "Repeat Rate",
                                        icon: "favorite",
                                        unit: "%"
                                    }
                                ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-6 md:p-10 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-[#C08552]/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-white text-2xl",
                                                    children: stat.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 642,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 640,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline justify-center gap-1 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-outfit font-black text-4xl md:text-5xl text-white tracking-tighter",
                                                        children: stat.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 646,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl md:text-2xl font-bold",
                                                        style: {
                                                            color: '#40F99B'
                                                        },
                                                        children: stat.unit || "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 649,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 645,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 655,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 638,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 631,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-4xl mx-auto mt-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#2d1a24] to-transparent z-20 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 665,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar relative z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 bg-white/5 border border-white/5 rounded-2xl italic text-white/50 text-center",
                                                    children: "Real-time customer feedback appears here..."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 669,
                                                    columnNumber: 12
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 668,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#2d1a24] to-transparent z-20 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 674,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 664,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/comments/HomedisplayComments",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group relative px-10 py-4 cursor-pointer border border-[#C08552]/30 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#C08552] text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10 flex items-center justify-center gap-3",
                                                    children: [
                                                        "View Customer Reviews",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined group-hover:translate-y-1 transition-transform",
                                                            children: "expand_more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 682,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 680,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 679,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 678,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 677,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 663,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 611,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full h-px opacity-20",
                        style: {
                            background: 'linear-gradient(90deg, transparent, #C08552, transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 692,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 md:py-32 overflow-hidden bg-[#F1EDEE]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[50%] h-[50%] rounded-full blur-[120px] opacity-20",
                                style: {
                                    backgroundColor: '#A376A2'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 703,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full blur-[100px] opacity-15",
                                style: {
                                    backgroundColor: '#C08552'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 705,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.04]",
                                style: {
                                    backgroundImage: `url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 709,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 701,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(45,26,36,0.1)] border border-white p-10 md:p-14 relative overflow-hidden group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-br from-[#C08552] via-[#f3d3b6] to-[#C08552] animate-gradient-slow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 723,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-black text-5xl relative z-10 font-bold drop-shadow-sm",
                                                            children: "emoji_events"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 724,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 722,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-outfit font-black text-3xl md:text-5xl text-[#2d1a24] mb-6 leading-tight tracking-tight",
                                                    children: [
                                                        "Tailoring That ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: '#A376A2'
                                                            },
                                                            children: "Elevates"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 730,
                                                            columnNumber: 28
                                                        }, this),
                                                        " Your Presence"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 729,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 font-medium leading-relaxed mb-10 text-lg",
                                                    children: "At Yogeshwar Tailor, we don't just stitch clothes. We craft architectural fits that make you feel confident and uniquely you."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 733,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        {
                                                            num: "100%",
                                                            label: "Custom Made",
                                                            color: "#C08552",
                                                            bg: "#FDF9F3"
                                                        },
                                                        {
                                                            num: "Free",
                                                            label: "Alterations",
                                                            color: "#2d1a24",
                                                            bg: "#F1EDEE"
                                                        },
                                                        {
                                                            num: "7–10",
                                                            label: "Days Delivery",
                                                            color: "#C08552",
                                                            bg: "#FDF9F3"
                                                        },
                                                        {
                                                            num: "Saved",
                                                            label: "Measurement",
                                                            color: "#2d1a24",
                                                            bg: "#F1EDEE"
                                                        }
                                                    ].map((box, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl p-6 border border-white/50 shadow-sm transition-all hover:shadow-md",
                                                            style: {
                                                                backgroundColor: box.bg
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-outfit font-black text-3xl mb-1",
                                                                    style: {
                                                                        color: box.color
                                                                    },
                                                                    children: box.num
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                    lineNumber: 747,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black uppercase tracking-widest text-slate-400",
                                                                    children: box.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                    lineNumber: 748,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 745,
                                                            columnNumber: 15
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 738,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 719,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-6 -right-4 bg-[#2d1a24] text-[#F1EDEE] rounded-2xl p-5 shadow-2xl hidden sm:flex items-center gap-4 border border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full bg-[#40F99B]/20 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[#40F99B] text-2xl font-bold",
                                                        children: "verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 757,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 756,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-outfit font-black text-sm",
                                                            children: "Quality"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 760,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-bold uppercase tracking-widest text-[#A376A2]",
                                                            children: "Guaranteed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 761,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 759,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 755,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                    lineNumber: 717,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-12 h-[3px] rounded-full",
                                                    style: {
                                                        backgroundColor: '#C08552'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 769,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-black text-[11px] uppercase tracking-[0.4em]",
                                                    style: {
                                                        color: '#C08552'
                                                    },
                                                    children: "The Tailor Difference"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 770,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 768,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-outfit text-4xl md:text-6xl font-black text-[#2d1a24] mb-8 leading-[1.1]",
                                            children: [
                                                "Why Our Stitching",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 776,
                                                    columnNumber: 28
                                                }, this),
                                                "Is ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "italic font-medium",
                                                    children: "Legendary"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 776,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 775,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                {
                                                    icon: "straighten",
                                                    title: "Perfect Fitting Guaranteed",
                                                    desc: "Every garment tailored to your exact body shape—no loose ends, no tight spots."
                                                },
                                                {
                                                    icon: "save",
                                                    title: "Measurements Saved for Life",
                                                    desc: "We store your records securely. Future orders are faster—no re-measurement needed."
                                                },
                                                {
                                                    icon: "design_services",
                                                    title: "Free Alteration Support",
                                                    desc: "Not fully satisfied? We offer free alterations until you're completely happy."
                                                }
                                            ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-6 p-6 rounded-3xl transition-all hover:bg-white hover:shadow-xl group cursor-default",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100 group-hover:scale-110 transition-transform duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-2xl text-[#2d1a24] group-hover:text-[#A376A2] transition-colors",
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                lineNumber: 787,
                                                                columnNumber: 17
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 786,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-outfit font-black text-[#2d1a24] text-xl mb-1",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                    lineNumber: 790,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-slate-500 text-sm font-medium leading-relaxed",
                                                                    children: item.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                    lineNumber: 791,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 789,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 785,
                                                    columnNumber: 13
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                            lineNumber: 779,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                    lineNumber: 767,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                            lineNumber: 714,
                            columnNumber: 5
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 713,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 698,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "relative py-24 md:py-32 overflow-hidden bg-[#F1EDEE]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]",
                                style: {
                                    backgroundColor: '#A376A2'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 809,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.15] blur-[100px]",
                                style: {
                                    backgroundColor: '#C08552'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 812,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.05]",
                                style: {
                                    backgroundImage: `repeating-linear-gradient(45deg, #2d1a24 0, #2d1a24 1px, transparent 0, transparent 50%)`,
                                    backgroundSize: '30px 30px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 816,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 807,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-[2px]",
                                        style: {
                                            backgroundColor: '#A376A2'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 827,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#2d1a24]/60 font-black text-[11px] uppercase tracking-[0.4em]",
                                        children: "Get In Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 828,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-[2px]",
                                        style: {
                                            backgroundColor: '#A376A2'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 831,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 826,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-outfit text-4xl md:text-7xl font-black text-[#2d1a24] mb-8 leading-[1.1] tracking-tight",
                                children: [
                                    "Visit Yogeshwar Tailor",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 835,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-[#A376A2] to-[#C08552] uppercase",
                                        children: "Today"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 836,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 834,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto",
                                children: "Experience the heritage of master craftsmanship. Whether it's a wedding or a formal suit, we're here to make you look your best."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 841,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-4 mb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+918200392919",
                                        className: "flex items-center gap-3 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest bg-[#2d1a24] text-white shadow-xl hover:scale-105 transition-all active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-xl",
                                                children: "calendar_month"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 849,
                                                columnNumber: 9
                                            }, this),
                                            "Book Appointment"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 847,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+918200392919",
                                        className: "flex items-center gap-3 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest border border-[#A376A2]/30 text-[#2d1a24] hover:bg-[#A376A2]/10 transition-all active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-xl",
                                                children: "call"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 855,
                                                columnNumber: 9
                                            }, this),
                                            "Call Now"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 853,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://maps.google.com",
                                        target: "_blank",
                                        rel: "noopener",
                                        className: "flex items-center gap-3 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest border border-[#A376A2]/30 text-[#2d1a24] hover:bg-[#A376A2]/10 transition-all active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-xl",
                                                children: "location_on"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 861,
                                                columnNumber: 9
                                            }, this),
                                            "Visit Shop"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 859,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 846,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
                                children: [
                                    {
                                        icon: "location_on",
                                        label: "Shop Address",
                                        title: "Kedareshwar Road, Anand Shopping Center 27, Porbandar, Gujarat",
                                        accent: "#2d1a24"
                                    },
                                    {
                                        icon: "schedule",
                                        label: "Shop Hours",
                                        title: "Mon – Sat: 10AM-1PM & 4PM-9PM | Sunday: 10AM-1PM",
                                        accent: "#A376A2"
                                    },
                                    {
                                        icon: "alternate_email",
                                        label: "Contact Us",
                                        title: "+91 8200392919 himeshbhadrecha@gmail.com",
                                        accent: "#C08552"
                                    }
                                ].map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(45,26,36,0.02)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:rotate-[360deg] shadow-sm",
                                                style: {
                                                    backgroundColor: '#F1EDEE'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-2xl",
                                                    style: {
                                                        color: card.accent
                                                    },
                                                    children: card.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 893,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 891,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-slate-400",
                                                children: card.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 896,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[#2d1a24] font-bold text-sm leading-relaxed",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 900,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-[3px] mx-auto mt-6 rounded-full opacity-30 transition-all group-hover:w-16",
                                                style: {
                                                    backgroundColor: card.accent
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 905,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 888,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 867,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 823,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 804,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 md:py-32 overflow-hidden bg-[#F1EDEE]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]",
                                style: {
                                    backgroundColor: '#A376A2'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 919,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[100px]",
                                style: {
                                    backgroundColor: '#C08552'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 922,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 917,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 h-[2px]",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 931,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black text-[11px] uppercase tracking-[0.4em]",
                                                style: {
                                                    color: '#A376A2'
                                                },
                                                children: "Got Questions?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 932,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 h-[2px]",
                                                style: {
                                                    backgroundColor: '#C08552'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 935,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 930,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-outfit text-4xl md:text-6xl font-black text-[#2d1a24] mb-6 leading-tight",
                                        children: [
                                            "Frequently Asked ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 939,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-[#A376A2] to-[#C08552]",
                                                children: "Questions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 940,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 938,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-lg font-medium max-w-xl mx-auto leading-relaxed opacity-80",
                                        children: "Everything you need to know before your first visit — answered honestly."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 943,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 929,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    {
                                        q: "How long does stitching usually take?",
                                        a: "Standard stitching takes 7 to 10 working days. For simpler garments like blouses, it can be ready in 5–7 days.",
                                        icon: "schedule"
                                    },
                                    {
                                        q: "Do you provide urgent stitching?",
                                        a: "Yes! We offer urgent stitching on request for weddings and festivals. Additional charges may apply.",
                                        icon: "speed"
                                    },
                                    {
                                        q: "Can I bring my own fabric?",
                                        a: "Absolutely! We welcome customer-provided fabric and handle it with the same master-level care.",
                                        icon: "inventory_2"
                                    },
                                    {
                                        q: "Do you save my measurements?",
                                        a: "Yes — we maintain a digital record of your fit, making future orders much faster and consistent.",
                                        icon: "save"
                                    }
                                ].map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group bg-white rounded-[2rem] border border-[#A376A2]/10 overflow-hidden shadow-[0_4px_20px_rgba(45,26,36,0.02)] transition-all duration-300 open:shadow-xl open:border-[#C08552]/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "flex items-center justify-between gap-4 px-8 py-7 cursor-pointer list-none select-none hover:bg-[#FDF9F3] transition-colors duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all group-open:scale-110 group-open:bg-[#C08552] group-open:text-white bg-[#F1EDEE] text-[#A376A2]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-2xl",
                                                                    children: faq.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                    lineNumber: 960,
                                                                    columnNumber: 17
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                lineNumber: 959,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-outfit font-bold text-[#2d1a24] text-lg md:text-xl tracking-tight transition-colors group-open:text-[#C08552]",
                                                                children: faq.q
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                                lineNumber: 962,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 958,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all group-open:rotate-45 group-open:bg-[#2d1a24] group-open:border-[#2d1a24]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-slate-400 group-open:text-white text-xl",
                                                            children: "add"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                            lineNumber: 967,
                                                            columnNumber: 15
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 966,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 957,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-8 pb-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-0 md:pl-[68px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 font-medium leading-relaxed text-base border-l-2 border-[#C08552]/20 pl-6",
                                                        children: faq.a
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                        lineNumber: 973,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                    lineNumber: 972,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 971,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 956,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 949,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#2d1a24]/60 font-bold mb-6",
                                        children: "Still have a question? We're happy to help."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 984,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+918200392919",
                                        className: "inline-flex items-center gap-3 bg-[#2d1a24] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-[#A376A2] transition-all shadow-[0_15px_30px_rgba(45,26,36,0.2)] active:scale-95 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-xl group-hover:rotate-12 transition-transform",
                                                children: "support_agent"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                                lineNumber: 987,
                                                columnNumber: 9
                                            }, this),
                                            "Ask Us Anything"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                        lineNumber: 985,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                                lineNumber: 983,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/yogeshwar/app/page.js",
                        lineNumber: 926,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/yogeshwar/app/page.js",
                lineNumber: 914,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/yogeshwar/app/page.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_yogeshwar_app_page_0goadhk.js.map