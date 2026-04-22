module.exports = [
"[project]/Desktop/yogeshwar/app/blouse/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/yogeshwar/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen customdesign bg-zinc-600  mt-25 flex justify-center items-start p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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


          /* -------------------blouse b2 means 3 */
          .textInputWrapperb3 {
            position: relative !important;
            width: 120px !important;
            
            margin: 12px 5px 0px 40px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapperb3:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapperb3:before,
          .textInputWrapperb3:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapperb3:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapperb3:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapperb3:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapperb3:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapperb3:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInputb3::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapperb3 .textInputb3 {
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

          .textInputWrapperb3 .textInputb3:focus,
          .textInputWrapperb3 .textInputb3:active {
            outline: none !important;
          }

          .textInputWrapperb3:focus-within .textInputb3,
          .textInputWrapperb3 .textInputb3:focus,
          .textInputWrapperb3 .textInputb3:active {
            background-color: #353535 !important;
          }

          .textInputWrapperb3:focus-within .textInputb3::placeholder {
            opacity: 0 !important;
          }



           /* From Uiverse.io by WhiteNervosa 4,5,6,7 */
          .textInputWrapper7 {
            position: relative !important;
            width: 85px !important;
           
            margin: 0px 0px -2px 70px !important;
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
        
           /* ---------------7 9 9- */
          .textInputWrapper3b {
            position: relative !important;
            width: 85px !important;
           
            margin: 0px 0px 0px -7px !important;
            padding-bottom: 0px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapper3b:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper3b:before,
          .textInputWrapper3b:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapper3b:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapper3b:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper3b:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper3b:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper3b:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInput3b::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapper3b .textInput3b {
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

          .textInputWrapper3b .textInput3b:focus,
          .textInputWrapper3b .textInput3b:active {
            outline: none !important;
          }

          .textInputWrapper3b:focus-within .textInput3b,
          .textInputWrapper3b .textInput3b:focus,
          .textInputWrapper3b .textInput3b:active {
            background-color: #353535 !important;
          }

          .textInputWrapper3b:focus-within .textInput3b::placeholder {
            opacity: 0 !important;
          }
            //--------------------------------------------
        

          //-----------------------------------blouse b2-------------------------------------------------------//
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

          //--------------999--------------------
          .textInputWrapper9 {
            position: relative !important;
            width: 1px !important;
           
            margin: 0px 50px 0px 0px !important;
            padding-bottom: 0px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapper9:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper9:before,
          .textInputWrapper9:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapper9:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapper9:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper9:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper9:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper9:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInput9::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapper9 .textInput9 {
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
            margin:10px 0px 0px -9px !important;
            width: 20% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper9 .textInput9:focus,
          .textInputWrapper9 .textInput9:active {
            outline: none !important;
          }

          .textInputWrapper9:focus-within .textInput9,
          .textInputWrapper9 .textInput9:focus,
          .textInputWrapper9 .textInput9:active {
            background-color: #353535 !important;
          }

          .textInputWrapper9:focus-within .textInput9::placeholder {
            opacity: 0 !important;
          } 


          //-----------------10 10 10----------------------
            .textInputWrapper10 {
            position: relative !important;
            width: 40px !important;
           
            margin: 0px 50px 0px 0px !important;
            padding-bottom: 0px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapper10:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper10:before,
          .textInputWrapper10:after {
            content: "" !important;
            left: 0 !important;
            right: 0 !important;
            position: absolute !important;
            pointer-events: none !important;
            bottom: -1px !important;
            z-index: 4 !important;
            width: 100% !important;
          }

          .textInputWrapper10:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
          }

          /* This block is a duplicate of the one above, but updated as requested */
          .textInputWrapper10:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper10:focus-within:before {
            border-bottom: 1px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper10:focus-within:after {
            border-bottom: 2px solid var(--accent-color) !important;
            transform: scaleX(1) !important;
          }

          .textInputWrapper10:after {
            content: "" !important;
            transform: scaleX(0) !important;
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            will-change: transform !important;
            border-bottom: 2px solid var(--accent-color) !important;
            border-bottom-color: var(--accent-color) !important;
          }

          .textInput10::placeholder {
            transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
            opacity: 1 !important;
            user-select: none !important;
            color: rgba(255, 255, 255, 0.582) !important;
          }

          .textInputWrapper10 .textInput10 {
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
            margin:10px 0px 0px -9px !important;
            width: 45% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper10 .textInput10:focus,
          .textInputWrapper10 .textInput10:active {
            outline: none !important;
          }

          .textInputWrapper10:focus-within .textInput10,
          .textInputWrapper10 .textInput10:focus,
          .textInputWrapper10 .textInput10:active {
            background-color: #353535 !important;
          }

          .textInputWrapper10:focus-within .textInput10::placeholder {
            opacity: 0 !important;
          }
            


          //----------------11 11 11----------------------  

            .textInputWrapper11 {
            position: relative !important;
            width: 70px !important;
           
            padding-bottom: 0px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapper11:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper11:before,
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
            margin:10px 0px 0px 55px !important;
            width: 30% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper11 .textInput11:focus,
          .textInputWrapper11 .textInput11:active {
            outline: none !important;
          }

          .textInputWrapper11:focus-within .textInput10,
          .textInputWrapper11 .textInput11:focus,
          .textInputWrapper11 .textInput11:active {
            background-color: #353535 !important;
          }

          .textInputWrapper11:focus-within .textInput11::placeholder {
            opacity: 0 !important;
          }
            
           //----------------12 12 12----------------------  

            .textInputWrapper11 {
            position: relative !important;
            width: 70px !important;
           
            padding-bottom: 0px !important;
            --accent-color: #a3e583 !important;
          }

          .textInputWrapper11:before {
            transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.42) !important;
          }

          .textInputWrapper11:before,
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
            margin:10px 0px 0px 55px !important;
            width: 30% !important;
            border-left: none !important;
            border-bottom: none !important;
            border-right: none !important;
          }

          .textInputWrapper11 .textInput11:focus,
          .textInputWrapper11 .textInput11:active {
            outline: none !important;
          }

          .textInputWrapper11:focus-within .textInput10,
          .textInputWrapper11 .textInput11:focus,
          .textInputWrapper11 .textInput11:active {
            background-color: #353535 !important;
          }

          .textInputWrapper11:focus-within .textInput11::placeholder {
            opacity: 0 !important;
          }
         
        `
            }, void 0, false, {
                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full customdesign max-w-3xl  overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " customdesign bg-zinc-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            id: "send_customer_measurement",
                            className: "w-full  border-collapse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-30 ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1026,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "pt-4 pb-4 px-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "py-2 px-6   text-[#a8aabc]   border  border-[#4a4e69] rounded-xl font-bold shadow-lg transition-all hover:border-[#d4af37] hover:text-[#d4af37] hover:text-[#1a1c23] active:scale-95",
                                                            children: "Dress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1031,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "py-2 px-6 bg-[#343a40] text-[#d4af37] border border-[#d4af37]  rounded-xl font-bold shadow-md transition-all   hover:bg-[#d4af37] active:scale-95",
                                                            children: "Blouse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1035,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1029,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1042,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1024,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1046,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "textInputWrapper",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "textInput "
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1049,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1048,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1047,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1045,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1055,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "textInputWrapper2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "textInput2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1058,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1056,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1054,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1064,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "textInputWrapperb3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "textInputb3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1067,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1065,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1063,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1072,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500 "
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1073,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1071,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1076,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 2,
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "textInputWrapper7",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "textInput7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1081,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1080,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1078,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1075,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1087,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "textInputWrapper7",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "textInput7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1090,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1088,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1086,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1095,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 2,
                                                className: "border-gray-500 ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "textInputWrapper7",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "textInput7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1100,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1098,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1097,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1094,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1106,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 2,
                                                className: "border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper3b",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "4th ",
                                                                className: "textInput3b"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1111,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1110,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper3b",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "4th ",
                                                                className: "textInput3b"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1118,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper3b",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: "textInput3b"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1125,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1124,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1108,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1105,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1131,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1132,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1130,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1135,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: " "
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1136,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1134,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1139,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "textInputWrapper9",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "9",
                                                            className: "textInput9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1142,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1140,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1138,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1151,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 2,
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "10",
                                                                className: "textInput10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1156,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "10",
                                                                className: "textInput10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1163,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1162,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1153,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1150,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1173,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 2,
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper11",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                className: "textInput11"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1178,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1177,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "textInputWrapper12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "10",
                                                                className: "textInput12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1181,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1176,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1175,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1172,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1191,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1192,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1190,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1195,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 2,
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "textInputWrapper11",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "textInput11"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1200,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1199,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1198,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1197,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1194,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1206,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1207,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1205,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1210,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1211,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1209,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1214,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 5,
                                                    placeholder: "Write your details here...",
                                                    className: "resize-none border-2 rounded-xl outline-none px-4 py-2 border-[#d4af37] w-80 bg-[#252525] text-[#e8e8e8] transition-colors duration-200 focus:bg-[#353535] focus:border-[#a3e583] focus:ring-1 focus:ring-[#a3e583]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1215,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1213,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1224,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "textInputWrapper",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "textInput "
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1226,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1225,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1223,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1232,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-10 mb-5 flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "flex items-center gap-2 px-4 py-1.5 bg-[#fffff] text-gray-300 text-sm font-semibold border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-blue-200 transition-all duration-200 active:scale-95",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    viewBox: "0 0 48 48",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "#FFC107",
                                                                            d: "M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                            lineNumber: 1239,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "#FF3D00",
                                                                            d: "m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                            lineNumber: 1243,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "#4CAF50",
                                                                            d: "M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                            lineNumber: 1247,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            fill: "#1976D2",
                                                                            d: "M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                            lineNumber: 1251,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                    lineNumber: 1238,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Save with Google"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                    lineNumber: 1256,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1237,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "px-4 py-1.5 ml-10 border border-gray-500 text-sm text-gray-500 font-medium rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 active:bg-gray-200",
                                                            children: "Reset"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1260,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1235,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1234,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1231,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-14",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1267,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between w-full max-w-[200px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://wa.me/919998453537",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[#25d36577] !text-[42px]",
                                                                    children: "shortcut"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                    lineNumber: 1277,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1271,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1270,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg ml-50",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "https://wa.me/919998453537",
                                                                target: "_blank",
                                                                className: "transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-[#ddac38] !text-[42px]",
                                                                    children: "send"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                    lineNumber: 1289,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                                lineNumber: 1284,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                            lineNumber: 1283,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                    lineNumber: 1269,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1268,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1266,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1298,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1299,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1297,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1302,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1303,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1301,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1306,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1307,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1305,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1310,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1311,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1309,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1314,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1315,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1313,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1318,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1319,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1317,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1322,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$yogeshwar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: " border-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                                lineNumber: 1323,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                        lineNumber: 1321,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                                lineNumber: 1023,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                            lineNumber: 1019,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                        lineNumber: 1018,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
                    lineNumber: 1014,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/yogeshwar/app/blouse/page.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Page;
}),
];

//# sourceMappingURL=Desktop_yogeshwar_app_blouse_page_jsx_13xp4-y._.js.map