module.exports=[43796,a=>{"use strict";var b=a.i(10361),c=a.i(35130),d=a.i(22913),e=a.i(58692);a.i(75804);var f=a.i(76734),g=a.i(71890),h=a.i(54137),i=a.i(60812);let j=()=>{let a=(0,d.useRouter)(),j=(0,d.useSearchParams)(),k=j?.get("id")||"",[l,m]=(0,c.useState)(""),[n,o]=(0,c.useState)(""),[p,q]=(0,c.useState)(""),r=(0,c.useRef)(null),s=(0,c.useRef)(null),t=(0,c.useRef)(!1),[u,v]=(0,c.useState)([]),[w,x]=(0,c.useState)({customer_id:"",customer_Number:"",customer_Name:"",TypeCloth:"dress",bust:"",waist:"",shoulder:"",sleeveLength:"",blouseLength:"",neckDepthFront:"",neckDepthBack:"",armRound:"",specialNotes:"",m7:"",m8:"",m9:"",m10:"",m11:"",m12:"",m13:"",m14:"",m15:"",m16:"",m17:"",m18:"",m19:"",m20:"",m21:"",m22:"",m23:""}),y=a=>{let{name:b,value:c}=a.target;x(a=>({...a,[b]:c}))},[z,A]=(0,c.useState)(""),[B,C]=(0,c.useState)(null);(0,c.useEffect)(()=>{k&&(async()=>{try{let a=(0,h.doc)(e.db,"customersName",k),b=await (0,g.getDoc)(a);b.exists()?m({id:b.id,...b.data()}):o("No such document!")}catch(a){o("Error : "+a.message)}})()},[k]),(0,c.useEffect)(()=>{l&&x(a=>({...a,customer_id:l.id,customer_Name:l.customerName,customer_Number:l.customerNumber}))},[l]);let D=async a=>{a.preventDefault();try{await (0,g.setDoc)((0,h.doc)(e.db,"customerMeasurement",l.id),{name:l.customerName,phone:l.customerNumber,customer_id:w.customer_id},{merge:!0}),await (0,g.addDoc)((0,f.collection)(e.db,"customerMeasurement",l.id,"measurements"),{...w,createdAt:new Date}),x({customer_id:l.id,customer_Name:l.customerName,customer_Number:l.customerNumber,TypeCloth:"dress",bust:"",waist:"",shoulder:"",sleeveLength:"",blouseLength:"",neckDepthFront:"",neckDepthBack:"",armRound:"",specialNotes:"",m7:"",m8:"",m9:"",m10:"",m11:"",m12:"",m13:"",m14:"",m15:"",m16:"",m17:"",m18:"",m19:"",m20:"",m21:"",m22:"",m23:""}),alert("Record saved successfully!")}catch(a){console.error("Error saving document: ",a),o("Error: "+a.message)}};(0,c.useEffect)(()=>{let a=(0,g.onSnapshot)((0,i.collectionGroup)(e.db,"measurements"),a=>{v(a.docs.map(a=>({id:a.id,...a.data()})))});return()=>a()},[]);let E=async(a,b)=>{if(!a||!b)return void o("Error: Missing ID for deletion");try{await (0,g.deleteDoc)((0,h.doc)(e.db,"customerMeasurement",b,"measurements",a)),await (0,g.deleteDoc)((0,h.doc)(e.db,"customerMeasurement",b)),x({customer_id:l.id,customer_Number:l.customerNumber,customer_Name:l.customerName,TypeCloth:"dress",bust:"",waist:"",shoulder:"",sleeveLength:"",blouseLength:"",neckDepthFront:"",neckDepthBack:"",armRound:"",specialNotes:"",m7:"",m8:"",m9:"",m10:"",m11:"",m12:"",m13:"",m14:"",m15:"",m16:"",m17:"",m18:"",m19:"",m20:"",m21:"",m22:"",m23:""}),o("Record deleted successfully"),C(null),q(""),window.location.hash=""}catch(a){console.error("Delete Error:",a),o("Error : "+a.message)}},F=()=>u.filter(a=>a.customer_Name?.toLowerCase().includes(z?.toLowerCase())),G=a=>{q(a.id),x({customer_id:a?.customer_id||"",customer_Number:a?.customer_Number||"",customer_Name:a?.customer_Name||"",TypeCloth:a?.TypeCloth||"dress",bust:a?.bust||"",waist:a?.waist||"",shoulder:a?.shoulder||"",sleeveLength:a?.sleeveLength||"",blouseLength:a?.blouseLength||"",neckDepthFront:a?.neckDepthFront||"",neckDepthBack:a?.neckDepthBack||"",armRound:a?.armRound||"",specialNotes:a?.specialNotes||"",m7:a?.m7||"",m8:a?.m8||"",m9:a?.m9||"",m10:a?.m10||"",m11:a?.m11||"",m12:a?.m12||"",m13:a?.m13||"",m14:a?.m14||"",m15:a?.m15||"",m16:a?.m16||"",m17:a?.m17||"",m18:a?.m18||"",m19:a?.m19||"",m20:a?.m20||"",m21:a?.m21||"",m22:a?.m22||"",m23:a?.m23||""})};(0,c.useEffect)(()=>{let a=()=>{window.location.hash.includes("modal-view-measure")||x(a=>({...a,TypeCloth:"blouse"}))};return window.addEventListener("hashchange",a),()=>window.removeEventListener("hashchange",a)},[]);let H=async()=>{if(!p||!w.customer_id)return void o("No record selected to update");try{let a=(0,h.doc)(e.db,"customerMeasurement",w.customer_id,"measurements",p);await (0,g.updateDoc)(a,{...w,lastUpdated:new Date().toISOString()}),o("Record updated successfully!"),x({customer_id:l.id,customer_Name:l.customerName,customer_Number:l.customerNumber,TypeCloth:"dress",bust:"",waist:"",shoulder:"",sleeveLength:"",blouseLength:"",neckDepthFront:"",neckDepthBack:"",armRound:"",specialNotes:"",m7:"",m8:"",m9:"",m10:"",m11:"",m12:"",m13:"",m14:"",m15:"",m16:"",m17:"",m18:"",m19:"",m20:"",m21:"",m22:"",m23:""}),q(""),window.location.hash="#"}catch(a){console.error("Update Error:",a),o("Error Updating: "+a.message)}},I=a=>({A:"bg-red-800",B:"bg-blue-800",C:"bg-green-800",D:"bg-yellow-700",E:"bg-indigo-800",F:"bg-purple-800",G:"bg-pink-800",H:"bg-orange-700",I:"bg-teal-800",J:"bg-cyan-800",K:"bg-lime-700",L:"bg-amber-700",M:"bg-emerald-800",N:"bg-violet-800",O:"bg-fuchsia-800",P:"bg-rose-950",Q:"bg-sky-800",R:"bg-stone-700",S:"bg-neutral-700",T:"bg-zinc-700",U:"bg-gray-700",V:"bg-slate-700",W:"bg-red-600",X:"bg-blue-600",Y:"bg-green-600",Z:"bg-yellow-600"})[a?.charAt(0).toUpperCase()||"U"]||"bg-slate-700";(0,c.useEffect)(()=>{},[]);let J=a=>{if(!r.current)return;let b=r.current;if(t.current)b.stop(),setTimeout(()=>{s.current=a;try{b.start()}catch(a){console.log("Start error:",a)}},200);else{s.current=a;try{b.start()}catch(a){console.log("Start error:",a)}}},K=()=>{r.current&&(t.current&&r.current.stop(),s.current=null)};return(0,b.jsxs)("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14",children:[(0,b.jsx)("style",{children:`
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
    `}),n&&(0,b.jsx)("h1",{children:n}),l&&(0,b.jsxs)("h1",{className:"mt-0 mb-1 ",children:["ID : ",l.id," ",(0,b.jsx)("br",{}),l.customerName," : ",l.customerNumber]}),(0,b.jsxs)("div",{id:"add-measurement-form",className:"bg-slate-400 mt-10 rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden mb-10 max-w-200 mx-auto font-outfit",children:[(0,b.jsxs)("div",{className:"bg-blue-950 px-8 py-8 text-white rounded-t-[2rem] shadow-2xl relative overflow-hidden",children:[(0,b.jsx)("div",{className:"absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full -mr-16 -mt-16 blur-3xl"}),(0,b.jsxs)("div",{className:"flex justify-between items-start mb-8 relative z-10",children:[(0,b.jsxs)("div",{className:"w-20",children:[(0,b.jsx)("label",{className:"block text-[9px] font-black uppercase tracking-[0.2em] text-rose-200/40 mb-2 text-center",children:"ID No."}),(0,b.jsxs)("div",{className:"relative group",children:[(0,b.jsx)("input",{type:"text",name:"customer_id",maxLength:2,value:w?.customer_id||"",onChange:y,spellCheck:"false",className:"w-44 bg-white/5 border border-white/10 rounded-2xl py-1 text-center text-sm font-black text-rose-50 outline-none focus:border-rose-500/50 focus:bg-white/10 transition-all shadow-inner",placeholder:"00"}),(0,b.jsx)("div",{className:"absolute inset-0 rounded-2xl bg-rose-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"})]})]}),(0,b.jsxs)("div",{className:"text-right",children:[(0,b.jsx)("h1",{className:"text-[11px] font-black uppercase tracking-[0.4em] text-rose-100 leading-none",children:"Yogeshwar Tailor"}),(0,b.jsx)("p",{className:"text-[7px] font-bold uppercase tracking-[0.2em] text-rose-200/40 mt-1",children:"Premium Stitching Studio"}),(0,b.jsx)("div",{className:"h-1 w-10 bg-gradient-to-r from-transparent to-rose-500 ml-auto mt-2 rounded-full"})]})]}),(0,b.jsxs)("div",{className:"space-y-6 relative z-10",children:[(0,b.jsxs)("div",{className:"relative group",children:[(0,b.jsx)("label",{className:"text-[8px] font-black text-rose-200/40 uppercase tracking-widest mb-1 block ml-1",children:"Full Name"}),(0,b.jsx)("input",{type:"text",name:"customer_Name",value:w.customer_Name||"",onChange:y,required:!0,spellCheck:"false",placeholder:"Enter Customer Name",className:"w-full bg-transparent border-b-2 border-white/10 py-2 text-xl font-extrabold text-white outline-none placeholder:text-white/10 focus:border-rose-500 transition-all duration-300"})]}),(0,b.jsxs)("div",{className:"flex gap-8",children:[(0,b.jsxs)("div",{className:"flex-1 relative group",children:[(0,b.jsx)("label",{className:"text-[8px] font-black text-rose-200/40 uppercase tracking-widest mb-1 block ml-1",children:"Contact Number"}),(0,b.jsxs)("div",{className:"flex items-center gap-2 border-b-2 border-white/10 focus-within:border-rose-500 transition-all duration-300",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-xs text-rose-200/30",children:"call"}),(0,b.jsx)("input",{type:"number",name:"customer_Number",value:w.customer_Number||"",onChange:y,required:!0,placeholder:"98765 43210",className:"w-full bg-transparent py-2 text-sm font-bold text-white outline-none placeholder:text-white/10"})]})]}),(0,b.jsxs)("div",{className:"w-2/5 relative group",children:[(0,b.jsx)("label",{className:"text-[8px] font-black text-rose-200/40 uppercase tracking-widest mb-1 block ml-1",children:"Garment Type"}),(0,b.jsxs)("div",{className:"flex items-center gap-2 border-b-2 border-white/10 focus-within:border-rose-500 transition-all duration-300",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-xs text-rose-200/30",children:"styler"}),(0,b.jsx)("input",{type:"text",name:"TypeCloth",value:w.TypeCloth||"",onChange:y,required:!0,placeholder:"e.g. Blouse",className:"w-full bg-transparent py-2 text-sm font-bold text-white outline-none placeholder:text-white/10"})]})]})]})]})]}),(0,b.jsx)("form",{onSubmit:D,className:"p-8 bg-slate-50/30",children:(0,b.jsxs)("div",{className:"flex flex-col items-center",children:[(0,b.jsx)("div",{className:"w-20",children:(0,b.jsx)("input",{type:"text",name:"bust",onFocus:()=>J("bust"),onBlur:K,value:w.bust,onChange:y,placeholder:"Bust",className:"measure-input text-center text-2xl font-black text-red-800 border-2 border-blue-900 bg-white rounded-2xl shadow-sm outline-none"})}),(0,b.jsx)("div",{className:"h-6 w-px border-l-2 border-dotted border-slate-300 my-1"}),(0,b.jsx)("div",{className:"w-24",children:(0,b.jsx)("input",{type:"number",name:"waist",onFocus:()=>J("waist"),onBlur:K,value:w.waist,onChange:y,className:"measure-input text-center font-bold bg-white",placeholder:"Waist"})}),(0,b.jsx)("div",{className:"h-6 w-px border-l-2 border-dotted border-slate-300 my-1"}),(0,b.jsxs)("div",{className:"w-full flex justify-between items-start gap-4 px-2",children:[(0,b.jsxs)("div",{className:"flex flex-col space-y-2 w-24",children:[(0,b.jsx)("input",{type:"number",name:"shoulder",onFocus:()=>J("shoulder"),onBlur:K,value:w.shoulder,onChange:y,className:"measure-input text-center bg-white py-2",placeholder:"Shldr"}),(0,b.jsx)("input",{type:"number",name:"sleeveLength",onFocus:()=>J("sleeveLength"),onBlur:K,value:w.sleeveLength,onChange:y,className:"measure-input text-center bg-white py-2",placeholder:"Slve"}),(0,b.jsx)("input",{type:"number",name:"blouseLength",onFocus:()=>J("blouseLength"),onBlur:K,value:w.blouseLength,onChange:y,className:"measure-input text-center bg-white py-2",placeholder:"Bl-L"}),(0,b.jsx)("input",{type:"number",name:"armRound",onFocus:()=>J("armRound"),onBlur:K,value:w.armRound,onChange:y,className:"measure-input text-center bg-white py-2",placeholder:"Arm"})]}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-2 flex-1 max-w-[180px]",children:[(0,b.jsx)("input",{type:"number",name:"m7",onFocus:()=>J("m7"),onBlur:K,value:w.m7,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"}),(0,b.jsx)("input",{type:"number",name:"m8",onFocus:()=>J("m8"),onBlur:K,value:w.m8,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"}),(0,b.jsx)("input",{type:"number",name:"m9",onFocus:()=>J("m9"),onBlur:K,value:w.m9,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"}),(0,b.jsx)("input",{type:"number",name:"m10",onFocus:()=>J("m10"),onBlur:K,value:w.m10,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"}),(0,b.jsx)("input",{type:"number",name:"m11",onFocus:()=>J("m11"),onBlur:K,value:w.m11,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"}),(0,b.jsx)("input",{type:"number",name:"m12",onFocus:()=>J("m12"),onBlur:K,value:w.m12,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"}),(0,b.jsx)("input",{type:"number",name:"m13",onFocus:()=>J("m13"),onBlur:K,value:w.m13,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"}),(0,b.jsx)("input",{type:"number",name:"m14",onFocus:()=>J("m14"),onBlur:K,value:w.m14,onChange:y,className:"measure-input text-center bg-white py-2 text-xs",placeholder:"no"})]})]}),(0,b.jsx)("div",{className:"py-6 flex flex-col items-center",children:(0,b.jsx)("div",{className:"w-12 h-px bg-slate-200"})}),(0,b.jsxs)("div",{className:"grid grid-cols-3 gap-3 w-full max-w-[320px]",children:[(0,b.jsx)("input",{type:"number",name:"neckDepthFront",onFocus:()=>J("neckDepthFront"),onBlur:K,value:w.neckDepthFront,onChange:y,placeholder:"Neck F",className:"measure-input text-center text-xs py-3 bg-white"}),(0,b.jsx)("input",{type:"number",name:"neckDepthBack",onFocus:()=>J("neckDepthBack"),onBlur:K,value:w.neckDepthBack,onChange:y,placeholder:"Neck B",className:"measure-input text-center text-xs py-3 bg-white"}),(0,b.jsx)("input",{type:"number",name:"m15",onFocus:()=>J("m15"),onBlur:K,value:w.m15,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white"})]}),(0,b.jsx)("div",{className:"w-full mt-4",children:(0,b.jsx)("textarea",{name:"specialNotes",rows:"2",onFocus:()=>J("specialNotes"),onBlur:K,value:w.specialNotes,onChange:y,className:"w-full p-4 rounded-2xl bg-white border border-slate-200 text-sm focus:border-blue-900 transition-all outline-none italic",placeholder:"Special Notes"})}),(0,b.jsx)("div",{className:"h-8"}),(0,b.jsxs)("div",{className:"grid grid-cols-3 gap-3 w-full max-w-[320px]",children:[(0,b.jsx)("input",{type:"number",name:"m16",onFocus:()=>J("m16"),onBlur:K,value:w.m16,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"}),(0,b.jsx)("input",{type:"number",name:"m17",onFocus:()=>J("m17"),onBlur:K,value:w.m17,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"}),(0,b.jsx)("input",{type:"number",name:"m18",value:w.m18,onFocus:()=>J("m18"),onBlur:K,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"})]}),(0,b.jsxs)("div",{className:"grid grid-cols-3 gap-3 w-full max-w-[320px] mt-3",children:[(0,b.jsx)("input",{type:"number",name:"m19",onFocus:()=>J("m19"),onBlur:K,value:w.m19,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"}),(0,b.jsx)("input",{type:"number",name:"m20",onFocus:()=>J("m20"),onBlur:K,value:w.m20,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"}),(0,b.jsx)("input",{type:"number",name:"m21",onFocus:()=>J("m21"),onBlur:K,value:w.m21,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"})]}),(0,b.jsxs)("div",{className:"grid grid-cols-2  gap-3 w-full max-w-[200px] mt-3",children:[(0,b.jsx)("input",{type:"number",name:"m22",onFocus:()=>J("m22"),onBlur:K,value:w.m22,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"}),(0,b.jsx)("input",{type:"number",name:"m23",onFocus:()=>J("m23"),onBlur:K,value:w.m23,onChange:y,placeholder:"no",className:"measure-input text-center text-xs py-3 bg-white border-blue-50"})]}),(0,b.jsxs)("div",{className:"w-full pt-10 space-y-3",children:[(0,b.jsxs)("button",{type:"submit",className:"w-full bg-blue-950 text-white py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.25em] shadow-2xl hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-3",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-base",children:"save"}),"Save Record"]}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("button",{type:"button",onClick:H,className:"flex-1 bg-emerald-900 text-slate-200 py-2 rounded-2xl font-bold text-[16px] hover:bg-emerald-800",children:"Update"}),(0,b.jsx)("button",{type:"button",onClick:()=>{x({customer_id:l.id,customer_Number:l.customerNumber,customer_Name:l.customerName,TypeCloth:"dress",bust:"",waist:"",shoulder:"",sleeveLength:"",blouseLength:"",neckDepthFront:"",neckDepthBack:"",armRound:"",specialNotes:"",m7:"",m8:"",m9:"",m10:"",m11:"",m12:"",m13:"",m14:"",m15:"",m16:"",m17:"",m18:"",m19:"",m20:"",m21:"",m22:"",m23:""})},className:"flex-1 border bg-rose-900 border-slate-200 text-bold text-rose-200 py-3 rounded-2xl font-bold text-[16px] hover:bg-rose-950 hover:text-red-50 transition-colors",children:"Reset"})]})]})]})})]}),(0,b.jsxs)("button",{onClick:()=>a.push("/admin/ManageCustomernameUI"),className:"flex items-center gap-2 px-5 py-2.5 mb-10 rounded-lg bg-gradient-to-r from-slate-800 to-blue-900 text-white font-medium shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 active:scale-95",children:[(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),"Back Users ( Admin Screen )"]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex items-center gap-3 mb-0.5",children:[(0,b.jsx)("span",{className:"w-4 h-[2px] bg-red-800"}),(0,b.jsx)("span",{className:"text-red-800 font-extrabold text-[11px] uppercase tracking-[0.3em]",children:"Records"})]}),(0,b.jsx)("h2",{className:"text-xl md:text-2xl font-extrabold text-slate-900",children:"Measurement History"})]}),(0,b.jsxs)("div",{className:"flex flex-row sm:flex-row gap-2 sm:gap-3 items-center",children:[(0,b.jsxs)("div",{className:"relative flex-1 sm:flex-none",children:[(0,b.jsx)("span",{className:"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]",children:"search"}),(0,b.jsx)("input",{type:"text",value:z,onChange:a=>A(a.target.value),placeholder:"Search...",className:"pl-9 pr-2 py-2.5 sm:py-3 rounded-xl bg-white border border-stone-200 text-sm font-medium placeholder-slate-400 focus:border-red-800 transition-all w-full sm:w-56"})]}),(0,b.jsxs)("div",{className:"relative flex-1 sm:flex-none",children:[(0,b.jsx)("span",{className:"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]",children:"filter_list"}),(0,b.jsxs)("select",{className:"pl-9 pr-8 py-2.5 sm:py-3 rounded-xl bg-white border border-stone-200 text-sm font-medium text-slate-700 focus:border-red-800 transition-colors appearance-none cursor-pointer w-full sm:min-w-[160px]",children:[(0,b.jsx)("option",{children:"All Types"}),(0,b.jsx)("option",{children:"Indian Blouse"}),(0,b.jsx)("option",{children:"Kurti/Salwar"}),(0,b.jsx)("option",{className:"hidden sm:block",children:"Kurti with Pant"}),(0,b.jsx)("option",{className:"hidden sm:block",children:"Chaniya Choli"}),(0,b.jsx)("option",{className:"hidden sm:block",children:"Western Dress"})]}),(0,b.jsx)("span",{className:"material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none",children:"expand_more"})]})]})]}),(0,b.jsxs)("div",{className:"bg-olive-300 rounded-2xl shadow-sm border border-stone-100 overflow-hidden",children:[(0,b.jsx)("div",{className:"hidden md:block overflow-x-auto",children:(0,b.jsxs)("table",{className:"w-full text-sm",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{className:"bg-blue-950 border-b border-stone-100",children:[(0,b.jsx)("th",{className:"px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 w-12",children:"#"}),(0,b.jsx)("th",{className:"px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",children:"Customer"}),(0,b.jsx)("th",{className:"px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",children:"Contact"}),(0,b.jsx)("th",{className:"px-5 py-4 text-left text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",children:"Date"}),(0,b.jsx)("th",{className:"px-5 py-4 text-right text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",children:"Actions"})]})}),F().map(a=>(0,b.jsx)("tbody",{children:(0,b.jsxs)("tr",{className:"table-row-hover border-b border-stone-50",children:[(0,b.jsx)("td",{className:"px-5 py-4 text-slate-400 text-sm font-medium",children:a?.id||""}),(0,b.jsx)("td",{className:"px-5 py-4",children:(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("div",{className:`w-9 h-9 rounded-xl ${I(a?.customer_Name)} flex items-center justify-center text-white text-xs font-black shrink-0`,children:a?.customer_Name?.slice(0,2).toUpperCase()||""}),(0,b.jsx)("span",{className:"font-semibold text-slate-800",children:a?.customer_Name||""})]})}),(0,b.jsx)("td",{className:"px-5 py-4",children:(0,b.jsxs)("div",{className:"flex items-center gap-1.5 text-slate-500 font-medium text-sm",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-slate-400 text-base",children:"call"}),a?.customer_Number||""]})}),(0,b.jsx)("td",{className:"px-5 py-4 text-slate-500 text-sm font-medium",children:a?.createdAt?.seconds?new Date(1e3*a.createdAt.seconds).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"No date"}),(0,b.jsx)("td",{className:"px-5 py-4",children:(0,b.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,b.jsx)("a",{href:"#modal-view-measure",onClick:()=>G(a),className:"action-btn w-9 h-9 rounded-xl bg-stone-100 hover:bg-blue-950 hover:text-rose-50 flex items-center justify-center transition-all",title:"View Measurements",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"visibility"})}),(0,b.jsx)("a",{href:"#add-measurement-form",onClick:()=>{q(a.id),x({customer_id:a.customer_id||"",customer_Name:a.customer_Name||"",customer_Number:a.customer_Number||"",TypeCloth:a.TypeCloth||"dress",bust:a.bust||"",waist:a.waist||"",shoulder:a.shoulder||"",sleeveLength:a.sleeveLength||"",blouseLength:a.blouseLength||"",neckDepthFront:a.neckDepthFront||"",neckDepthBack:a.neckDepthBack||"",armRound:a.armRound||"",specialNotes:a.specialNotes||"",m7:a.m7||"",m8:a.m8||"",m9:a.m9||"",m10:a.m10||"",m11:a.m11||"",m12:a.m12||"",m13:a.m13||"",m14:a.m14||"",m15:a.m15||"",m16:a.m16||"",m17:a.m17||"",m18:a.m18||"",m19:a.m19||"",m20:a.m20||"",m21:a.m21||"",m22:a.m22||"",m23:a.m23||""})},className:"action-btn w-9 h-9 rounded-xl bg-stone-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-all",title:"Edit",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"edit"})}),(0,b.jsx)("a",{href:"#modal-delete-confirm",onClick:()=>C(a),className:"action-btn w-9 h-9 rounded-xl bg-stone-100 hover:bg-red-700 hover:text-white flex items-center justify-center transition-all",title:"Delete",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"delete"})})]})})]})},a.id))]})}),(0,b.jsx)("div",{className:"md:hidden divide-y divide-stone-100",children:F().map(a=>(0,b.jsxs)("div",{className:"p-5 hover:bg-stone-50 transition-colors",children:[(0,b.jsxs)("div",{className:"flex items-start gap-3 mb-3",children:[(0,b.jsx)("div",{className:`w-11 h-11 rounded-xl ${I(a?.customer_Name.slice(0,2).toUpperCase()||"NA")}  flex items-center justify-center text-white font-black shrink-0 text-sm`,children:a?.customer_Name?.slice(0,2).toUpperCase()||"NA"}),(0,b.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,b.jsx)("p",{className:"font-bold text-slate-800 truncate",children:a?.customer_Name||"Unnamed Customer"}),(0,b.jsxs)("p",{className:"text-sm text-slate-500 flex items-center gap-1 mt-0.5",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"call"}),a?.customer_Number||"No Number"]})]}),(0,b.jsxs)("div",{className:"flex gap-1.5 shrink-0",children:[(0,b.jsx)("a",{href:"#modal-view-measure",onClick:()=>G(a),className:"w-8 h-8 rounded-lg bg-stone-100 hover:bg-blue-950 hover:text-rose-50 flex items-center justify-center transition-all",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"visibility"})}),(0,b.jsx)("a",{href:"#add-measurement-form",onClick:()=>{q(a.id),x({customer_id:a.customer_id||"",customer_Name:a.customer_Name||"",customer_Number:a.customer_Number||"",TypeCloth:a.TypeCloth||"dress",bust:a.bust||"",waist:a.waist||"",shoulder:a.shoulder||"",sleeveLength:a.sleeveLength||"",blouseLength:a.blouseLength||"",neckDepthFront:a.neckDepthFront||"",neckDepthBack:a.neckDepthBack||"",armRound:a.armRound||"",specialNotes:a.specialNotes||"",m7:a.m7||"",m8:a.m8||"",m9:a.m9||"",m10:a.m10||"",m11:a.m11||"",m12:a.m12||"",m13:a.m13||"",m14:a.m14||"",m15:a.m15||"",m16:a.m16||"",m17:a.m17||"",m18:a.m18||"",m19:a.m19||"",m20:a.m20||"",m21:a.m21||"",m22:a.m22||"",m23:a.m23||""})},className:"w-8 h-8 rounded-lg bg-stone-100 hover:bg-emerald-700 hover:text-white flex items-center justify-center transition-all",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"edit"})}),(0,b.jsx)("a",{href:"#modal-delete-confirm",onClick:()=>C(a),className:"w-8 h-8 rounded-lg bg-stone-100 hover:bg-red-700 hover:text-white flex items-center justify-center transition-all",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"delete"})})]})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2 flex-wrap",children:[(0,b.jsxs)("span",{className:"inline-flex items-center gap-1 bg-red-50 text-red-800 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-xs",children:"checkroom"}),a?.TypeCloth||"General"]}),(0,b.jsx)("span",{className:"text-[10px] text-slate-400 font-medium",children:a?.createdAt?.seconds?new Date(1e3*a.createdAt.seconds).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"No date"})]})]},a.id))})]})]}),(0,b.jsxs)("div",{id:"modal-view-measure",className:"modal-wrap",children:[(0,b.jsx)("button",{className:"modal-backdrop"}),(0,b.jsxs)("div",{className:"modal-in relative bg-white rounded-3xl shadow-2xl w-full max-w-lg border border-stone-100 overflow-hidden",children:[(0,b.jsxs)("div",{className:"bg-blue-950 px-7 py-6",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-rose-200/70 mb-0.5",children:"Measurement Record"}),(0,b.jsx)("h2",{className:"text-2xl font-extrabold text-rose-50",children:w.customer_Name||"Select Record"})]}),(0,b.jsx)("button",{onClick:()=>{x({customer_id:l.id,customer_Name:l.customerName,customer_Number:l.customerNumber,TypeCloth:"dress",bust:"",waist:"",shoulder:"",sleeveLength:"",blouseLength:"",neckDepthFront:"",neckDepthBack:"",armRound:"",specialNotes:"",m7:"",m8:"",m9:"",m10:"",m11:"",m12:"",m13:"",m14:"",m15:"",m16:"",m17:"",m18:"",m19:"",m20:"",m21:"",m22:"",m23:""}),window.location.hash="#"},className:"w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-rose-100 hover:bg-red-800 transition-all",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-xl",children:"close"})})]}),(0,b.jsxs)("div",{className:"flex items-center gap-3 mt-3",children:[(0,b.jsxs)("span",{className:"inline-flex items-center gap-1.5 bg-white/10 text-rose-100 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"checkroom"})," ",w.TypeCloth]}),(0,b.jsxs)("span",{className:"inline-flex items-center gap-1.5 bg-white/10 text-rose-100 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-sm",children:"phone"})," ",w.customer_Number]})]})]}),(0,b.jsx)("div",{className:"px-7 py-6 overflow-y-auto max-h-[50vh] bg-slate-50/30",children:(0,b.jsxs)("div",{className:"flex flex-col items-center",children:[(0,b.jsx)("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1",children:"Bust"}),(0,b.jsxs)("div",{className:"w-24 bg-white border-2 border-blue-900 rounded-2xl py-2.5 shadow-sm flex flex-col items-center",children:[(0,b.jsx)("span",{className:"text-2xl font-black text-red-800 leading-none",children:w.bust||"0"}),(0,b.jsx)("span",{className:"text-[8px] font-bold text-slate-300 uppercase mt-0.5",children:"inches"})]}),(0,b.jsx)("div",{className:"h-6 w-px border-l-2 border-dotted border-slate-300 my-1"}),(0,b.jsx)("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1",children:"Waist"}),(0,b.jsx)("div",{className:"w-24 bg-white border border-slate-200 rounded-xl py-2 shadow-sm text-center",children:(0,b.jsx)("span",{className:"font-bold text-slate-700",children:w.waist||"0"})}),(0,b.jsx)("div",{className:"h-6 w-px border-l-2 border-dotted border-slate-300 my-1"}),(0,b.jsxs)("div",{className:"w-full flex justify-between items-start gap-4 px-2 mt-2",children:[(0,b.jsx)("div",{className:"flex flex-col space-y-2 w-28",children:[{label:"Shldr",val:w.shoulder},{label:"Slve",val:w.sleeveLength},{label:"Bl-L",val:w.blouseLength},{label:"Arm",val:w.armRound}].map((a,c)=>(0,b.jsxs)("div",{className:"bg-white border border-slate-100 p-2.5 rounded-xl shadow-sm flex justify-between items-center",children:[(0,b.jsx)("span",{className:"text-[9px] font-black text-slate-400 uppercase",children:a.label}),(0,b.jsx)("span",{className:"font-extrabold text-blue-950",children:a.val||"0"})]},c))}),(0,b.jsx)("div",{className:"grid grid-cols-2 gap-1.5 flex-1 max-w-[180px] bg-stone-100/50 p-2 rounded-2xl border border-stone-200",children:["m7","m8","m9","m10","m11","m12","m13","m14"].map(a=>(0,b.jsxs)("div",{className:"bg-white rounded-lg p-2 border border-stone-50 text-center",children:[(0,b.jsx)("p",{className:"text-[8px] font-black text-slate-300 uppercase mb-0.5",children:a}),(0,b.jsx)("p",{className:"text-sm font-black text-blue-900 leading-none",children:w[a]||"-"})]},a))})]}),(0,b.jsx)("div",{className:"py-8 flex flex-col items-center",children:(0,b.jsx)("div",{className:"w-16 h-px bg-slate-200"})}),(0,b.jsx)("div",{className:"grid grid-cols-3 gap-3 w-full max-w-[340px]",children:[{label:"Neck F",val:w.neckDepthFront},{label:"Neck B",val:w.neckDepthBack},{label:"Ref m15",val:w.m15}].map((a,c)=>(0,b.jsxs)("div",{className:"bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-sm",children:[(0,b.jsx)("p",{className:"text-[8px] font-black text-slate-400 uppercase mb-1",children:a.label}),(0,b.jsx)("p",{className:"text-sm font-extrabold text-slate-800",children:a.val||"0"})]},c))}),(0,b.jsxs)("div",{className:"w-full mt-6 bg-amber-50/70 border border-amber-100 rounded-2xl p-5",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-amber-600 text-sm",children:"description"}),(0,b.jsx)("p",{className:"text-[9px] font-black text-amber-700 uppercase tracking-widest",children:"Special Instructions"})]}),(0,b.jsx)("p",{className:"text-xs text-slate-600 italic leading-relaxed",children:w.specialNotes||"No specific instructions provided."})]}),(0,b.jsxs)("div",{className:"w-full max-w-[340px] mt-6 space-y-3",children:[(0,b.jsx)("div",{className:"grid grid-cols-3 gap-3",children:["m16","m17","m18"].map(a=>(0,b.jsxs)("div",{className:"bg-white border border-blue-50 rounded-xl p-2.5 text-center shadow-sm",children:[(0,b.jsx)("p",{className:"text-[8px] font-black text-slate-300 uppercase mb-0.5",children:a}),(0,b.jsx)("p",{className:"text-sm font-bold text-blue-900",children:w[a]||"0"})]},a))}),(0,b.jsx)("div",{className:"grid grid-cols-3 gap-3",children:["m19","m20","m21"].map(a=>(0,b.jsxs)("div",{className:"bg-white border border-blue-50 rounded-xl p-2.5 text-center shadow-sm",children:[(0,b.jsx)("p",{className:"text-[8px] font-black text-slate-300 uppercase mb-0.5",children:a}),(0,b.jsx)("p",{className:"text-sm font-bold text-blue-900",children:w[a]||"0"})]},a))}),(0,b.jsx)("div",{className:"grid grid-cols-2 gap-3",children:["m22","m23"].map(a=>(0,b.jsxs)("div",{className:"bg-white border border-blue-50 rounded-xl p-2.5 text-center shadow-sm",children:[(0,b.jsx)("p",{className:"text-[8px] font-black text-slate-300 uppercase mb-0.5",children:a}),(0,b.jsx)("p",{className:"text-sm font-bold text-blue-900",children:w[a]||"0"})]},a))})]})]})}),(0,b.jsxs)("div",{className:"px-7 pb-7 flex gap-3 border-t border-stone-100 pt-5 bg-white",children:[(0,b.jsxs)("button",{onClick:()=>{window.location.hash="add-measurement-form"},className:"flex-1 py-3.5 rounded-xl bg-blue-950 text-rose-50 font-bold text-sm hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 active:scale-95",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-base",children:"edit"})," ","Edit"]}),(0,b.jsx)("button",{onClick:()=>{x({customer_id:l.id,customer_Name:l.customerName,customer_Number:l.customerNumber,TypeCloth:"dress",bust:"",waist:"",shoulder:"",sleeveLength:"",blouseLength:"",neckDepthFront:"",neckDepthBack:"",armRound:"",specialNotes:"",m7:"",m8:"",m9:"",m10:"",m11:"",m12:"",m13:"",m14:"",m15:"",m16:"",m17:"",m18:"",m19:"",m20:"",m21:"",m22:"",m23:""}),window.location.hash="#"},className:"flex-1 py-3.5 rounded-xl border border-stone-200 font-bold text-sm text-slate-500 hover:bg-slate-50 transition-colors",children:"Close"})]})]})]}),(0,b.jsxs)("div",{id:"modal-delete-confirm",className:"modal-wrap",children:[(0,b.jsx)("a",{href:"#",className:"modal-backdrop"}),(0,b.jsxs)("div",{className:"modal-in relative bg-white rounded-3xl shadow-2xl w-full max-w-sm border border-stone-100 p-7 text-center",children:[(0,b.jsx)("div",{className:"w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-3xl text-red-700",children:"delete_forever"})}),(0,b.jsx)("h3",{className:"text-xl font-extrabold text-slate-900 mb-2",children:"Delete Measurement?"}),(0,b.jsx)("p",{className:"text-sm text-slate-500 mb-2",children:"You are about to delete the measurement record for:"}),(0,b.jsxs)("p",{className:"text-base font-black text-red-800 mb-6",children:[B?.customer_Name||"Customer"," —"," ",B?.TypeCloth||"Record"]}),(0,b.jsx)("p",{className:"text-xs text-slate-400 mb-7",children:"This action cannot be undone. All measurement data for this customer will be permanently removed."}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsx)("a",{href:"#",className:"flex-1 py-3.5 rounded-xl border border-stone-200 font-bold text-sm text-slate-500 hover:border-slate-400 transition-colors text-center active:scale-95",children:"Cancel"}),(0,b.jsxs)("button",{onClick:()=>{B&&E(B.id,B.customer_id)},className:"flex-1 py-3.5 rounded-xl bg-red-700 text-white font-bold text-sm hover:bg-red-800 transition-all active:scale-95 flex items-center justify-center gap-2",children:[(0,b.jsx)("span",{className:"material-symbols-outlined text-base",children:"delete"})," ","Delete"]})]})]})]})]})};a.s(["default",0,function(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(j,{})})}])}];

//# sourceMappingURL=Desktop_yogeshwar_app_admin_measurements_dress_page_jsx_0m8cr-k._.js.map