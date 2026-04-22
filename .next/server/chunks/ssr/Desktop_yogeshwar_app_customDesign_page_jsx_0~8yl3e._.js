module.exports=[20814,a=>{"use strict";var b=a.i(10361),c=a.i(35130),d=a.i(22913),e=a.i(58692);a.i(75804);var f=a.i(76734);a.i(47824);var g=a.i(63994),h=a.i(71890),i=a.i(54137);let j=()=>{let a=(0,d.useRouter)(),[j,k]=(0,c.useState)([]),[l,m]=(0,c.useState)(null),n=(0,d.useSearchParams)(),o=n.get("id"),p=n.get("type");(0,c.useEffect)(()=>{let a=(0,g.onAuthStateChanged)(e.auth,a=>{m(a)});return()=>a()},[]),(0,c.useEffect)(()=>{(async()=>{k((await (0,h.getDocs)((0,f.collection)(e.db,"admin_users"))).docs.map(a=>({id:a.id,...a.data()})))})()},[]);let q=(0,c.useMemo)(()=>!!l&&j.some(a=>a.email===l.email),[j,l]),r={customerId:"",_1:"",type:"dress",_2:"",_3:"",_4:"",_5:"",_6:"",_7:"",_8:"",_9:"",_10:"",_11:"",_12:"",_13:"",_14:"",_15:"",_16:"",_17:""},[s,t]=(0,c.useState)(r),u=()=>{t(r)},v=a=>{let{name:b,value:c}=a.target;t(a=>({...a,[b]:c}))},w=async a=>{a.preventDefault();let b=s._1?.trim();if(!b)return void alert("Customer name required");try{let a=b.toLowerCase().replace(/\s+/g,"_"),c=(0,i.doc)(e.db,"customers",a);(await (0,h.getDoc)(c)).exists()||await (0,h.setDoc)(c,{name:b});let d=(0,i.doc)(e.db,"customers",a,"measurement",s.type);if((await (0,h.getDoc)(d)).exists())return void alert(`${s.type} already exists`);await (0,h.setDoc)(d,{...s,createdAt:new Date}),alert("Saved successfully"),u()}catch(a){console.log(a),alert("Error saving data")}},x=async()=>{let a=s._1?.trim();if(!a)return void alert("Customer name required");try{let b=a.toLowerCase().replace(/\s+/g,"_"),c=(0,i.doc)(e.db,"customers",b,"measurement",s.type);if(!(await (0,h.getDoc)(c)).exists())return void alert("No existing record found to update");await (0,h.setDoc)(c,{...s,updatedAt:new Date},{merge:!0}),alert("Updated successfully")}catch(a){console.log(a),alert("Error updating data")}};return(0,c.useEffect)(()=>{o&&p&&(async()=>{try{let a=(0,i.doc)(e.db,"customers",o,"measurement",p),b=await (0,h.getDoc)(a);b.exists()?t(a=>({...a,...b.data(),type:p})):t(a=>({...a,type:p,_2:"",_3:"",_4:"",_5:"",_6:"",_7:"",_8:"",_9:"",_10:"",_11:"",_12:"",_13:"",_14:"",_15:"",_16:"",_17:""}))}catch(a){console.log(a)}})()},[o,p]),(0,b.jsxs)("div",{className:"min-h-screen customdesign bg-zinc-600  mt-25 flex justify-center items-start p-4",children:[(0,b.jsx)("style",{children:`

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
         
        `}),q?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"w-full customdesign max-w-3xl  overflow-hidden",children:(0,b.jsx)("div",{className:" customdesign bg-zinc-600",children:(0,b.jsxs)("form",{onSubmit:w,children:[(0,b.jsx)("input",{type:"text",style:{marginLeft:"90px"},name:"customerId",hidden:!0,value:s.customerId,onChange:v}),(0,b.jsx)("table",{id:"send_customer_measurement",className:"w-full  border-collapse",children:(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{className:"h-30 ",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:"pt-4 pb-4 px-12",children:(0,b.jsxs)("div",{className:"flex items-center gap-6",children:[(0,b.jsx)("button",{onClick:()=>a.push(`/customDesign?id=${o}&type=dress`),type:"button",className:"py-2 px-6 bg-[#343a40] text-[#d4af37] border border-[#d4af37] rounded-xl font-bold shadow-lg transition-all hover:bg-[#d4af37] hover:text-[#1a1c23] active:scale-95",children:"Dress"}),(0,b.jsx)("button",{type:"button",onClick:()=>a.push(`/blousetwo?id=${o}&type=blouse`),className:"py-2 px-6 bg-transparent text-[#a8aabc] border border-[#4a4e69] rounded-xl font-bold shadow-md transition-all hover:border-[#d4af37] hover:text-[#d4af37] active:scale-95",children:"Blouse"})]})}),(0,b.jsx)("td",{className:"w-10"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper",children:(0,b.jsx)("input",{type:"text",name:"_1",value:s._1,onChange:v,className:"textInput "})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper2",children:(0,b.jsx)("input",{type:"text",name:"_2",value:s._2,onChange:v,className:"textInput2"})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper2",children:(0,b.jsx)("input",{type:"text",name:"_3",value:s._3,onChange:v,className:"textInput2"})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500 "})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("div",{className:"textInputWrapper7",children:(0,b.jsx)("input",{type:"text",name:"_4",value:s._4,onChange:v,className:"textInput7"})}),(0,b.jsx)("div",{className:"textInputWrapper14",children:(0,b.jsx)("input",{type:"text",name:"_5",value:s._5,onChange:v,className:"textInput14"})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper7",children:(0,b.jsx)("input",{type:"text",name:"_6",value:s._6,onChange:v,className:"textInput7"})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("div",{className:"textInputWrapper7",children:(0,b.jsx)("input",{type:"text",name:"_7",value:s._7,onChange:v,className:"textInput7"})}),(0,b.jsx)("div",{className:"textInputWrapper14",children:(0,b.jsx)("input",{type:"text",name:"_8",value:s._8,onChange:v,className:"textInput14"})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("div",{className:"textInputWrapper7",children:(0,b.jsx)("input",{type:"text",name:"_9",value:s._9,onChange:v,className:"textInput7"})}),(0,b.jsx)("div",{className:"textInputWrapper14",children:(0,b.jsx)("input",{type:"text",name:"_10",value:s._10,onChange:v,className:"textInput14"})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:"  border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsxs)("td",{className:" border-gray-500",children:[" ",(0,b.jsx)("div",{className:"textInputWrapper11",children:(0,b.jsx)("input",{type:"text",name:"_11",value:s._11,onChange:v,className:"textInput11"})})]})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("div",{className:"textInputWrapper11",children:(0,b.jsx)("input",{type:"text",name:"_12",value:s._12,onChange:v,className:"textInput11"})}),(0,b.jsx)("div",{className:"textInputWrapperls",children:(0,b.jsx)("input",{type:"text",name:"_13",value:s._13,onChange:v,className:"textInputls"})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsx)("div",{className:"flex gap-2",children:(0,b.jsx)("div",{className:"textInputWrapper11",children:(0,b.jsx)("input",{type:"text",name:"_14",value:s._14,onChange:v,className:"textInput11"})})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsx)("div",{className:"flex gap-2",children:(0,b.jsx)("div",{className:"textInputWrapper11",children:(0,b.jsx)("input",{type:"text",name:"_15",value:s._15,onChange:v,className:"textInput11"})})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("textarea",{rows:5,name:"_16",value:s._16,onChange:v,placeholder:"Write your details here...",className:"resize-none border-2 rounded-xl outline-none px-4 py-2 border-[#d4af37] w-80 bg-[#252525] text-[#e8e8e8] transition-colors duration-200 focus:bg-[#353535] focus:border-[#a3e583] focus:ring-1 focus:ring-[#a3e583]"})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper",children:(0,b.jsx)("input",{type:"text",name:"_17",value:s._17,onChange:v,className:"textInput "})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsxs)("div",{className:"mt-10 mb-5 flex items-center gap-3",children:[(0,b.jsxs)("button",{type:"submit",className:"flex items-center gap-2 px-4 py-1.5 bg-[#fffff] text-gray-300 text-sm font-semibold border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-gray-200 hover:text-gray-950 transition-all duration-200 active:scale-95",children:[(0,b.jsxs)("svg",{className:"w-4 h-4",viewBox:"0 0 48 48",children:[(0,b.jsx)("path",{fill:"#FFC107",d:"M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"}),(0,b.jsx)("path",{fill:"#FF3D00",d:"m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"}),(0,b.jsx)("path",{fill:"#4CAF50",d:"M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"}),(0,b.jsx)("path",{fill:"#1976D2",d:"M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"})]}),(0,b.jsx)("span",{children:"Save Record"})]}),(0,b.jsx)("button",{type:"button",onClick:u,className:"px-4 py-1.5 ml-10 border border-gray-500 text-sm text-gray-500 font-medium rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 active:bg-gray-200",children:"Reset"})]})})]}),(0,b.jsxs)("tr",{className:"h-14",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:"p-4",children:(0,b.jsxs)("div",{className:"flex items-center justify-between w-full max-w-[200px]",children:[(0,b.jsx)("div",{className:"rounded-lg",children:(0,b.jsx)("a",{href:"https://wa.me/919998453537",target:"_blank",rel:"noopener noreferrer",className:"transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-[#25d36577] !text-[42px]",children:"shortcut"})})}),(0,b.jsx)("div",{className:"rounded-lg ml-50",children:(0,b.jsx)("a",{href:"https://wa.me/919998453537",target:"_blank",className:"transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-[#ddac38] !text-[42px]",children:"send"})})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("button",{type:"button",style:{marginLeft:"52.5px",marginTop:"20px"},className:"flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg border transition-all duration-300 ease-in-out   bg-[#1a1c23]    text-[#d4af37]    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]   active:scale-95",onClick:()=>a.push("newCustomer"),children:(0,b.jsx)("span",{className:"font-semibold text-sm",children:"Back to User Dashboard"})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("button",{type:"button",style:{marginLeft:"52.5px",marginTop:"20px"},className:"flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg text-bold border transition-all duration-300 ease-in-out   bg-[#d4af37]    text-emerald-800    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]   active:scale-95",onClick:x,children:"Update Record"})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]})]})})]})})})}):(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-[#1a1c23] p-4",children:(0,b.jsxs)("div",{className:"max-w-md w-full text-center space-y-8 p-10 rounded-2xl border border-[#4a4e69] bg-[#1a1c23] shadow-[0_20px_50px_rgba(0,0,0,0.5)]",children:[(0,b.jsxs)("div",{className:"relative inline-flex items-center justify-center",children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-[#d4af37] opacity-10 blur-2xl rounded-full"}),(0,b.jsx)("div",{className:"relative border-2 border-[#d4af37] rounded-full p-6",children:(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#d4af37",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-12 h-12",children:[(0,b.jsx)("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),(0,b.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})})]}),(0,b.jsxs)("div",{className:"space-y-3",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold tracking-tight text-[#d4af37]",children:"Restricted Access"}),(0,b.jsx)("p",{className:"text-[#888da8] text-base leading-relaxed",children:"It looks like you don’t have administrator privileges. This area is reserved for the management team."})]}),(0,b.jsx)("div",{className:"pt-6 flex flex-col items-center gap-4",children:(0,b.jsxs)("button",{type:"button",onClick:()=>a.push("/"),className:"flex items-center gap-2.5 px-8 py-3 rounded-lg border transition-all duration-300   bg-[#1a1c23]    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    group active:scale-95 shadow-lg",children:[(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-[#d4af37] transition-transform group-hover:-translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2.5",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),(0,b.jsx)("span",{className:"font-semibold text-sm tracking-wide text-[#d4af37]",children:"Back to User Dashboard"})]})})]})})})]})};a.s(["default",0,function(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(j,{})})}])}];

//# sourceMappingURL=Desktop_yogeshwar_app_customDesign_page_jsx_0~8yl3e._.js.map