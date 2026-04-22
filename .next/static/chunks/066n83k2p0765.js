(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40229,t=>{"use strict";var r=t.i(56495);t.i(55212),t.s(["default",0,()=>(0,r.jsxs)("div",{className:"min-h-screen customdesign bg-zinc-600  mt-25 flex justify-center items-start p-4",children:[(0,r.jsx)("style",{children:`

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
         
        `}),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"w-full customdesign max-w-3xl  overflow-hidden",children:(0,r.jsx)("div",{className:" customdesign bg-zinc-600",children:(0,r.jsx)("table",{id:"send_customer_measurement",className:"w-full  border-collapse",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{className:"h-30 ",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:"pt-4 pb-4 px-12",children:(0,r.jsxs)("div",{className:"flex items-center gap-6",children:[(0,r.jsx)("button",{className:"py-2 px-6   text-[#a8aabc]   border  border-[#4a4e69] rounded-xl font-bold shadow-lg transition-all hover:border-[#d4af37] hover:text-[#d4af37] hover:text-[#1a1c23] active:scale-95",children:"Dress"}),(0,r.jsx)("button",{className:"py-2 px-6 bg-[#343a40] text-[#d4af37] border border-[#d4af37]  rounded-xl font-bold shadow-md transition-all   hover:bg-[#d4af37] active:scale-95",children:"Blouse"})]})}),(0,r.jsx)("td",{className:"w-10"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:(0,r.jsx)("div",{className:"textInputWrapper",children:(0,r.jsx)("input",{type:"text",className:"textInput "})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:(0,r.jsx)("div",{className:"textInputWrapper2",children:(0,r.jsx)("input",{type:"text",className:"textInput2"})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:(0,r.jsx)("div",{className:"textInputWrapperb3",children:(0,r.jsx)("input",{type:"text",className:"textInputb3"})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500 "})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,r.jsx)("div",{className:"flex gap-2",children:(0,r.jsx)("div",{className:"textInputWrapper7",children:(0,r.jsx)("input",{type:"text",className:"textInput7"})})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:(0,r.jsx)("div",{className:"textInputWrapper7",children:(0,r.jsx)("input",{type:"text",className:"textInput7"})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{colSpan:2,className:"border-gray-500 ",children:(0,r.jsx)("div",{className:"flex gap-2",children:(0,r.jsx)("div",{className:"textInputWrapper7",children:(0,r.jsx)("input",{type:"text",className:"textInput7"})})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{colSpan:2,className:"border-gray-500",children:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("div",{className:"textInputWrapper3b",children:(0,r.jsx)("input",{type:"text",placeholder:"4th ",className:"textInput3b"})}),(0,r.jsx)("div",{className:"textInputWrapper3b",children:(0,r.jsx)("input",{type:"text",placeholder:"4th ",className:"textInput3b"})}),(0,r.jsx)("div",{className:"textInputWrapper3b",children:(0,r.jsx)("input",{type:"text",className:"textInput3b"})})]})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:" "})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:(0,r.jsxs)("div",{className:"textInputWrapper9",children:[(0,r.jsx)("input",{type:"text",placeholder:"9",className:"textInput9"})," "]})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("div",{className:"textInputWrapper10",children:(0,r.jsx)("input",{type:"text",placeholder:"10",className:"textInput10"})}),(0,r.jsx)("div",{className:"textInputWrapper10",children:(0,r.jsx)("input",{type:"text",placeholder:"10",className:"textInput10"})})]})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("div",{className:"textInputWrapper11",children:(0,r.jsx)("input",{type:"text",className:"textInput11"})}),(0,r.jsx)("div",{className:"textInputWrapper12",children:(0,r.jsx)("input",{type:"text",placeholder:"10",className:"textInput12"})})]})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,r.jsx)("div",{className:"flex gap-2",children:(0,r.jsx)("div",{className:"textInputWrapper11",children:(0,r.jsx)("input",{type:"text",className:"textInput11"})})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:(0,r.jsx)("textarea",{rows:5,placeholder:"Write your details here...",className:"resize-none border-2 rounded-xl outline-none px-4 py-2 border-[#d4af37] w-80 bg-[#252525] text-[#e8e8e8] transition-colors duration-200 focus:bg-[#353535] focus:border-[#a3e583] focus:ring-1 focus:ring-[#a3e583]"})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" ",children:(0,r.jsx)("div",{className:"textInputWrapper",children:(0,r.jsx)("input",{type:"text",className:"textInput "})})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500",children:(0,r.jsxs)("div",{className:"mt-10 mb-5 flex items-center gap-3",children:[(0,r.jsxs)("button",{className:"flex items-center gap-2 px-4 py-1.5 bg-[#fffff] text-gray-300 text-sm font-semibold border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-blue-200 transition-all duration-200 active:scale-95",children:[(0,r.jsxs)("svg",{className:"w-4 h-4",viewBox:"0 0 48 48",children:[(0,r.jsx)("path",{fill:"#FFC107",d:"M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"}),(0,r.jsx)("path",{fill:"#FF3D00",d:"m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"}),(0,r.jsx)("path",{fill:"#4CAF50",d:"M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"}),(0,r.jsx)("path",{fill:"#1976D2",d:"M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"})]}),(0,r.jsx)("span",{children:"Save with Google"})]}),(0,r.jsx)("button",{className:"px-4 py-1.5 ml-10 border border-gray-500 text-sm text-gray-500 font-medium rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 active:bg-gray-200",children:"Reset"})]})})]}),(0,r.jsxs)("tr",{className:"h-14",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:"p-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between w-full max-w-[200px]",children:[(0,r.jsx)("div",{className:"rounded-lg",children:(0,r.jsx)("a",{href:"https://wa.me/919998453537",target:"_blank",rel:"noopener noreferrer",className:"transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",children:(0,r.jsx)("span",{className:"material-symbols-outlined text-[#25d36577] !text-[42px]",children:"shortcut"})})}),(0,r.jsx)("div",{className:"rounded-lg ml-50",children:(0,r.jsx)("a",{href:"https://wa.me/919998453537",target:"_blank",className:"transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",children:(0,r.jsx)("span",{className:"material-symbols-outlined text-[#ddac38] !text-[42px]",children:"send"})})})]})})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]}),(0,r.jsxs)("tr",{className:"h-8",children:[(0,r.jsx)("td",{className:"w-10"}),(0,r.jsx)("td",{className:" border-gray-500"})]})]})})})})})]})])}]);