import{r,j as a}from"./index-BXok0Ebn.js";import{N as M,A as P}from"./NavBar-0qfM60Yw.js";import{c as Q,o as V,C as X,d as o,g as Y,a as A,r as d,u as $,b as F,e as Z,f as u,h as _,s as m,i as b,j as p}from"./ClipLoader-BK_Mfgvn.js";const se=()=>{const[W,q]=r.useState([]),[N,y]=r.useState(""),[h,D]=r.useState(""),[I,U]=r.useState(""),[S,R]=r.useState(""),[g,E]=r.useState(null),[f,L]=r.useState(null),[v,T]=r.useState(null),x=r.useRef(null),C=r.useRef(null),k=Q(o,"NativeCards"),[j,l]=r.useState(!0),n=async()=>{l(!0);try{const t=(await Y(k)).docs.map(s=>({...s.data(),id:s.id}));q(t),l(!1)}catch(e){console.error(e),l(!1)}};r.useEffect(()=>{n();const e=V(A,t=>{E(t?t.email:null)});return()=>e()},[]);const B=async()=>{var e,t;if(f&&h&&N){l(!0);const s=`${Date.now()}-${f.name}`,i=d(m,`images/${s}`);await $(i,f);const c=await F(i);try{await Z(k,{title:N,desc:h,imageUrl:c,userId:(t=(e=A)==null?void 0:e.currentUser)==null?void 0:t.uid}),n(),y(""),D(""),L(null),x.current&&(x.current.value=""),l(!1)}catch(w){console.error(w),l(!1)}}else console.error("Something is not selected (image or title or desc)")},z=async(e,t)=>{try{const s=u(o,"NativeCards",e);if(await _(s),t){const i=d(m,t);try{await b(i),console.log("Image deleted successfully")}catch(c){console.error("Error deleting image: ",c)}}n(),console.log("NativeCard and image deleted")}catch(s){console.error("Error deleting NativeCard or image: ",s)}},O=async e=>{try{const t=u(o,"NativeCards",e);await p(t,{title:S}),n(),R(""),console.log("NativeCard updated")}catch(t){console.error("while updating title",t)}},G=async(e,t)=>{if(v)try{const s=`${Date.now()}-${v.name}`,i=d(m,`images/${s}`);await $(i,v);const c=await F(i),w=u(o,"NativeCards",e);if(t){const K=d(m,t);await b(K)}await p(w,{imageUrl:c}),n(),T(null),C.current&&(C.current.value=""),console.log("Image updated")}catch(s){console.error("Error updating image: ",s)}else console.error("No image selected for update")},H=async(e,t)=>{const s=d(m,t);try{await b(s);const i=u(o,"NativeCards",e);await p(i,{imageUrl:""}),n(),console.log("Image deleted")}catch(i){console.error("Error deleting image: ",i)}},J=async e=>{try{const t=u(o,"NativeCards",e);await p(t,{desc:I}),n(),U(""),console.log("NativeCard date updated")}catch(t){console.error("while updating release date",t)}};return a.jsxs("div",{className:"NativeCard-admin-wrapper",children:[g&&a.jsx(M,{}),a.jsxs("div",{className:"right-side-wrapper",children:[a.jsx(P,{}),g&&a.jsxs("div",{className:"controlAuthWrapper",children:[a.jsx("h2",{className:"addNativeCardTitle",children:"Add New Native Card"}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Native Card title...",value:N,onChange:e=>y(e.target.value)}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Native Card desc...",value:h,onChange:e=>D(e.target.value)}),a.jsx("input",{className:"admin-input",type:"file",ref:x,onChange:e=>L(e.target.files?e.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:B,disabled:j,children:"Submit Native Card"})]}),g&&(j?a.jsx("div",{className:"loading-indicator",children:a.jsx(X,{size:50,color:"#eee",loading:j})}):a.jsx("div",{className:"controlDataWrapper",children:W.map(e=>a.jsx("div",{className:"NativeCardItemWrapperFire",children:g&&a.jsxs(a.Fragment,{children:[a.jsx("h1",{style:{color:"white"},children:e.title}),a.jsx("p",{children:e.desc}),e.imageUrl&&a.jsx("img",{className:"NativeCardImgFire",src:e.imageUrl,alt:e.title,width:"500"}),a.jsx("button",{className:"admin-btn",onClick:()=>z(e.id,e.imageUrl),children:"Delete Native Card"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",onChange:t=>R(t.target.value),type:"text",value:S,placeholder:"new title..."}),a.jsx("button",{className:"admin-btn",onClick:()=>O(e.id),children:"Update Title"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"file",ref:C,onChange:t=>T(t.target.files?t.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:()=>G(e.id,e.imageUrl),children:"Update Image"}),a.jsx("br",{}),a.jsx("button",{className:"admin-btn",onClick:()=>H(e.id,e.imageUrl),children:"Delete Image"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"text",onChange:t=>U(t.target.value),value:I,placeholder:"new desc..."}),a.jsx("button",{className:"admin-btn",onClick:()=>J(e.id),children:"Update Desc"})]})},e.id))}))]})]})};export{se as default};