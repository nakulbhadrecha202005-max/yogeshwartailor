module.exports=[98679,a=>{"use strict";var b=a.i(10361),c=a.i(35130),d=a.i(22913),e=a.i(58692);a.i(75804);var f=a.i(76734);a.i(47824);var g=a.i(63994),h=a.i(71890),i=a.i(54137);let j=()=>{let a=(0,d.useRouter)(),[j,k]=(0,c.useState)([]),[l,m]=(0,c.useState)(null),n=(0,d.useSearchParams)(),o=n.get("id"),p=n.get("type");(0,c.useEffect)(()=>{let a=(0,g.onAuthStateChanged)(e.auth,a=>{m(a)});return()=>a()},[]),(0,c.useEffect)(()=>{(async()=>{k((await (0,h.getDocs)((0,f.collection)(e.db,"admin_users"))).docs.map(a=>({id:a.id,...a.data()})))})()},[]),(0,c.useMemo)(()=>!!l&&j.some(a=>a.email===l.email),[j,l]);let q={customerId:"",_1:"",type:"blouse",_2:"",_3:"",_4:"",_5:"",_6:"",_7:"",_8:"",_9:"",_10:"",_11:"",_12:"",_13:"",_14:"",_15:"",_16:"",_17:"",_18:"",_19:""},[r,s]=(0,c.useState)(q),t=()=>{s({...q,customerId:o||""})},u=a=>{let{name:b,value:c}=a.target;s(a=>({...a,[b]:c}))},v=async a=>{a.preventDefault();let b=r._1?.trim();if(!b)return void alert("Customer name required");try{let a=b.toLowerCase().replace(/\s+/g,"_"),c=(0,i.doc)(e.db,"customers",a);(await (0,h.getDoc)(c)).exists()||await (0,h.setDoc)(c,{name:b});let d=(0,i.doc)(e.db,"customers",a,"measurement",r.type);if((await (0,h.getDoc)(d)).exists())return void alert(`${r.type} already exists`);await (0,h.setDoc)(d,{...r,createdAt:new Date}),alert("Saved successfully"),t()}catch(a){console.log(a),alert("Error saving data")}},w=async()=>{let a=r._1?.trim();if(!a)return void alert("Customer name required");try{let b=a.toLowerCase().replace(/\s+/g,"_"),c=(0,i.doc)(e.db,"customers",b,"measurement",r.type);if(!(await (0,h.getDoc)(c)).exists())return void alert("No existing record found to update");await (0,h.setDoc)(c,{...r,updatedAt:new Date},{merge:!0}),alert("Updated successfully")}catch(a){console.log(a),alert("Error updating data")}};return(0,c.useEffect)(()=>{o&&p&&(async()=>{try{let a=(0,i.doc)(e.db,"customers",o,"measurement",p),b=await (0,h.getDoc)(a);b.exists()?s(a=>({...a,...b.data(),type:p})):s(a=>({...a,type:p,_2:"",_3:"",_4:"",_5:"",_6:"",_7:"",_8:"",_9:"",_10:"",_11:"",_12:"",_13:"",_14:"",_15:"",_16:"",_17:"",_18:"",_19:""}))}catch(a){console.log(a)}})()},[o,p]),(0,b.jsxs)("div",{className:"min-h-screen customdesign bg-zinc-600  mt-25 flex justify-center items-start p-4",children:[(0,b.jsx)("style",{children:`
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

                .textInputWrapper {
                position: relative;
                --accent-color: #a3e583;
                }

                .textInputWrapper:before,
                .textInputWrapper:after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -1px;
                pointer-events: none;
                z-index: 4;
                width: 100%;
                }

                .textInputWrapper:before {
                border-bottom: 1px solid rgba(0, 0, 0, 0.42);
                transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                }

                .textInputWrapper:after {
                transform: scaleX(0);
                transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
                border-bottom: 2px solid var(--accent-color);
                }

                .textInputWrapper:focus-within:before {
                border-bottom: 1px solid var(--accent-color);
                transform: scaleX(1);
                }

                .textInputWrapper:focus-within:after {
                transform: scaleX(1);
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
                transition: background-color 200ms cubic-bezier(0.25, 0.8, 0.25, 1);
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
                background-color: #353535;
                }

                .textInputWrapper:focus-within .textInput::placeholder {
                  opacity: 0;
                  }
                .firstinput {
                  width:270px;
                  margin: 8px 5px 10px 0px;
                }
                .secondinput {
                  width:100px;
                  margin: 8px 5px 10px 30px;
                }
                .secondinput_2{
                    width:50px;
                  margin: 8px 5px 10px 185px;
                }
                   .secondinput_3{
                    width:50px;
                  margin: 8px 5px 10px 3px;
                }
                  

                .thirdinput {
                  width:115px;
                  margin: 8px 5px 10px 22px;
                }
                .fourtosix{
                  width:90px;
                  margin: 0px 0px 10px 35px;
                }
                .five{
                  width:90px;
                  margin: 0px 0px 10px 35px;
                }
                .six{
                  width:90px;
                  margin: 0px 0px 00px 24px;
                }
                .seven{
                  width:90px;
                  margin: 0px 0px 0px 0px;
                }
                .eight{
                  width:90px;
                  margin: 0px 0px 0px 0px;
                }
                  .ten{
                    width:90px;
                    margin: 0px 0px 10px 218px;
                  }
                    .ten{
                    width:90px;
                    margin: 0px 0px 10px 218px;
                  }
                    .eleven{
                      width:50px;
                      margin: 0px 0px 0px 28px;
                    }
                    .twelve{
                      width:50px;
                      margin: 0px 0px 0px 130px;
                    }
                      .thirteen{
                        width:50px;
                        margin: 0px 0px 0px 80px;
                      }
                      .fourteen{
                        width:50px;
                        margin: 0px 0px 0px 80px;
                      }
                      .fifteen{
                        width:50px;
                        margin: 0px 0px 0px 0px;
                      }
                      
                      .sixteen{
                        width:50px;
                        margin: 0px 0px 0px 218px;
                      }
                .contact{
                  width:220px;
                  margin: 8px 5px 0px 50px;
                }
            
              `}),(0,b.jsx)("div",{className:"w-full customdesign max-w-3xl  overflow-hidden",children:(0,b.jsx)("div",{className:" customdesign bg-zinc-600",children:(0,b.jsxs)("form",{onSubmit:v,children:[(0,b.jsx)("input",{type:"text",style:{marginLeft:"90px"},name:"customerId",hidden:!0,value:r.customerId,onChange:u}),(0,b.jsx)("table",{id:"send_customer_measurement",className:"w-full  border-collapse",children:(0,b.jsxs)("tbody",{children:[(0,b.jsxs)("tr",{className:"h-30 ",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:"pt-4 pb-4 px-12",children:(0,b.jsxs)("div",{className:"flex items-center gap-6",children:[(0,b.jsx)("button",{type:"button",onClick:()=>a.push(`/customDesign?id=${o}&type=dress`),className:"py-2 px-6 bg-transparent text-[#a8aabc] border border-[#4a4e69] rounded-xl font-bold shadow-md transition-all hover:border-[#d4af37] hover:text-[#d4af37] active:scale-95",children:"Dress"}),(0,b.jsx)("button",{type:"button",onClick:()=>a.push(`/blousetwo?id=${o}&type=blouse`),className:"py-2 px-6 bg-[#343a40] text-[#d4af37] border border-[#d4af37] rounded-xl font-bold shadow-lg transition-all hover:bg-[#d4af37] hover:text-[#1a1c23] active:scale-95",children:"blouse"})]})}),(0,b.jsx)("td",{className:"w-10"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper firstinput",children:(0,b.jsx)("input",{type:"text",name:"_1",value:r._1,onChange:u,className:"textInput "})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsx)("div",{className:"flex gap-2",children:(0,b.jsx)("div",{className:"textInputWrapper secondinput ",children:(0,b.jsx)("input",{type:"text",name:"_2",value:r._2,onChange:u,className:"textInput "})})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper thirdinput",children:(0,b.jsx)("input",{type:"text",className:"textInput"})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500 ",children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("div",{className:"textInputWrapper secondinput_2 ",children:(0,b.jsx)("input",{type:"text",name:"_3",value:r._3,onChange:u,className:"textInput "})}),(0,b.jsx)("div",{className:"textInputWrapper secondinput_3 ",children:(0,b.jsx)("input",{type:"text",name:"_4",value:r._4,onChange:u,className:"textInput "})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsx)("div",{className:"flex gap-2",children:(0,b.jsx)("div",{className:"textInputWrapper fourtosix",children:(0,b.jsx)("input",{type:"text",name:"_5",value:r._5,onChange:u,className:"textInput"})})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper fourtosix",children:(0,b.jsx)("input",{type:"text",name:"_6",value:r._6,onChange:u,className:"textInput "})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsx)("div",{className:"flex gap-2",children:(0,b.jsx)("div",{className:"textInputWrapper five",children:(0,b.jsx)("input",{type:"text",name:"_7",value:r._7,onChange:u,className:"textInput"})})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsxs)("div",{className:"flex gap-2 ",children:[(0,b.jsx)("div",{className:"textInputWrapper six",children:(0,b.jsx)("input",{type:"text",name:"_8",value:r._8,onChange:u,className:"textInput"})}),(0,b.jsx)("div",{className:"textInputWrapper seven",children:(0,b.jsx)("input",{type:"text",name:"_9",value:r._9,onChange:u,className:"textInput"})}),(0,b.jsx)("div",{className:"textInputWrapper eight",children:(0,b.jsx)("input",{type:"text",name:"_10",value:r._10,onChange:u,className:"textInput"})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsxs)("td",{className:" border-gray-500",children:[" ",(0,b.jsx)("div",{className:"textInputWrapper ten",children:(0,b.jsx)("input",{type:"text",name:"_11",value:r._11,onChange:u,className:"textInput"})})]})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("div",{className:"textInputWrapper eleven",children:(0,b.jsx)("input",{type:"text",name:"_12",value:r._12,onChange:u,className:"textInput"})}),(0,b.jsx)("div",{className:"textInputWrapper twelve",children:(0,b.jsx)("input",{type:"text",name:"_13",value:r._13,onChange:u,className:"textInput"})}),(0,b.jsx)("div",{className:"textInputWrapper fifteen",children:(0,b.jsx)("input",{type:"text",name:"_14",value:r._14,onChange:u,className:"textInput"})})]})})]}),(0,b.jsxs)("tr",{className:"h-2",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("div",{className:"textInputWrapper thirteen",children:(0,b.jsx)("input",{type:"text",name:"_15",value:r._15,onChange:u,className:"textInput"})}),(0,b.jsx)("div",{className:"textInputWrapper fourteen",children:(0,b.jsx)("input",{type:"text",name:"_16",value:r._16,onChange:u,className:"textInput"})})]})})]}),(0,b.jsxs)("tr",{className:"h-3",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{colSpan:2,className:" border-gray-500",children:(0,b.jsx)("div",{className:"flex gap-2",children:(0,b.jsx)("div",{className:"textInputWrapper sixteen",children:(0,b.jsx)("input",{type:"text",name:"_17",value:r._17,onChange:u,className:"textInput"})})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("textarea",{rows:5,name:"_18",value:r._18,onChange:u,placeholder:"Write your details here...",className:"resize-none border-2 rounded-xl outline-none px-4 py-2 border-[#d4af37] w-80 bg-[#252525] text-[#e8e8e8] transition-colors duration-200 focus:bg-[#353535] focus:border-[#a3e583] focus:ring-1 focus:ring-[#a3e583]"})})]}),(0,b.jsxs)("tr",{className:"h-5",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("div",{className:"textInputWrapper contact",children:(0,b.jsx)("input",{type:"text",name:"_19",value:r._19,onChange:u,className:"textInput  "})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsxs)("div",{className:"mt-10 mb-5 flex items-center gap-3",children:[(0,b.jsxs)("button",{type:"submit",className:"flex items-center gap-2 px-4 py-1.5 bg-[#fffff] text-gray-300 text-sm font-semibold border border-gray-300 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 hover:border-blue-200 transition-all duration-200 active:scale-95",children:[(0,b.jsxs)("svg",{className:"w-4 h-4",viewBox:"0 0 48 48",children:[(0,b.jsx)("path",{fill:"#FFC107",d:"M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"}),(0,b.jsx)("path",{fill:"#FF3D00",d:"m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"}),(0,b.jsx)("path",{fill:"#4CAF50",d:"M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"}),(0,b.jsx)("path",{fill:"#1976D2",d:"M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"})]}),(0,b.jsx)("span",{children:"Save with Google"})]}),(0,b.jsx)("button",{type:"button",onClick:t,className:"px-4 py-1.5 ml-10 border border-gray-500 text-sm text-gray-500 font-medium rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200 active:bg-gray-200",children:"Reset"})]})})]}),(0,b.jsxs)("tr",{className:"h-14",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:"p-4",children:(0,b.jsxs)("div",{className:"flex items-center justify-between w-full max-w-[200px]",children:[(0,b.jsx)("div",{className:"rounded-lg",children:(0,b.jsx)("a",{href:"https://wa.me/919998453537",target:"_blank",rel:"noopener noreferrer",className:"transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-[#25d36577] !text-[42px]",children:"shortcut"})})}),(0,b.jsx)("div",{className:"rounded-lg ml-50",children:(0,b.jsx)("a",{href:"https://wa.me/919998453537",target:"_blank",className:"transition-all duration-200 active:scale-90 no-underline inline-flex hover:opacity-80",children:(0,b.jsx)("span",{className:"material-symbols-outlined text-[#ddac38] !text-[42px]",children:"send"})})})]})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("button",{type:"button",style:{marginLeft:"52.5px",marginTop:"20px"},className:"flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg border transition-all duration-300 ease-in-out   bg-[#1a1c23]    text-[#d4af37]    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]   active:scale-95",onClick:()=>a.push("newCustomer"),children:(0,b.jsx)("span",{className:"font-semibold text-sm",children:"Back to User Dashboard"})})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500",children:(0,b.jsx)("button",{type:"button",style:{marginLeft:"52.5px",marginTop:"20px"},className:"flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg text-bold border transition-all duration-300 ease-in-out   bg-[#d4af37]    text-emerald-800    border-[#4a4e69]    hover:border-[#d4af37]    hover:bg-[#2d303e]    hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]   active:scale-95",onClick:w,children:"Update Record"})})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]}),(0,b.jsxs)("tr",{className:"h-8",children:[(0,b.jsx)("td",{className:"w-10"}),(0,b.jsx)("td",{className:" border-gray-500"})]})]})})]})})})]})};a.s(["default",0,function(){return(0,b.jsx)(c.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(j,{})})}])}];

//# sourceMappingURL=Desktop_yogeshwar_app_blousetwo_page_jsx_0939f.e._.js.map