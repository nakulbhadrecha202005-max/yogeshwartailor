(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/measurements/voiceRec/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function page() {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Convert words to numbers
    const wordsToNumber = (text)=>{
        const map = {
            zero: 0,
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
            eleven: 11,
            twelve: 12,
            thirteen: 13,
            fourteen: 14,
            fifteen: 15,
            sixteen: 16,
            seventeen: 17,
            eighteen: 18,
            nineteen: 19,
            twenty: 20,
            thirty: 30,
            forty: 40,
            fifty: 50,
            sixty: 60,
            seventy: 70,
            eighty: 80,
            ninety: 90
        };
        let words = text.toLowerCase().split(" ");
        let total = 0;
        words.forEach((word)=>{
            if (map[word] !== undefined) {
                total += map[word];
            }
        });
        return total || text; // fallback if not matched
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (!SpeechRecognition) {
                    alert("Speech Recognition not supported in this browser");
                    return;
                }
                const recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.lang = "en-US";
                recognition.onresult = ({
                    "page.useEffect": (event)=>{
                        const transcript = event.results[event.results.length - 1][0].transcript;
                        const number = wordsToNumber(transcript.trim());
                        setValue(number.toString());
                    }
                })["page.useEffect"];
                recognitionRef.current = recognition;
            }
        }
    }["page.useEffect"], []);
    const startListening = ()=>{
        recognitionRef.current?.start();
    };
    const stopListening = ()=>{
        recognitionRef.current?.stop();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "text",
        value: value,
        onChange: (e)=>setValue(e.target.value),
        onFocus: startListening,
        onBlur: stopListening,
        placeholder: "Click and speak a number...",
        className: "border p-2 mt-40 mb-40"
    }, void 0, false, {
        fileName: "[project]/app/admin/measurements/voiceRec/page.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(page, "fB55woK648BHygTu5PqThw6WIuA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_admin_measurements_voiceRec_page_jsx_06uf4dr._.js.map