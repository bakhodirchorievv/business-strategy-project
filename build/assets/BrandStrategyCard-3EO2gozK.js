import{r as s,j as a}from"./index-UJLWXVPr.js";import{N as M,A as P}from"./NavBar-DFhCy2Th.js";import{c as Q,o as V,C as X,d as o,g as Y,a as k,r as c,u as A,b as $,e as Z,f as g,h as _,s as u,i as N,j as m}from"./ClipLoader-CL20A51R.js";const re=()=>{const[F,W]=s.useState([]),[p,b]=s.useState(""),[h,B]=s.useState(""),[D,I]=s.useState(""),[v,U]=s.useState(""),[y,R]=s.useState(null),[f,E]=s.useState(null),[x,L]=s.useState(null),C=s.useRef(null),S=s.useRef(null),T=Q(o,"BrandStrategyCards"),[j,d]=s.useState(!0),l=async()=>{d(!0);try{const t=(await Y(T)).docs.map(r=>({...r.data(),id:r.id}));W(t),d(!1)}catch(e){console.error(e),d(!1)}};s.useEffect(()=>{l();const e=V(k,t=>{R(t?t.email:null)});return()=>e()},[]);const q=async()=>{var e,t;if(f&&h&&p){d(!0);const r=`${Date.now()}-${f.name}`,n=c(u,`images/${r}`);await A(n,f);const i=await $(n);try{await Z(T,{title:p,desc:h,imageUrl:i,userId:(t=(e=k)==null?void 0:e.currentUser)==null?void 0:t.uid}),l(),b(""),B(""),E(null),C.current&&(C.current.value=""),d(!1)}catch(w){console.error(w),d(!1)}}else console.error("Something is not selected (image or title or desc)")},z=async(e,t)=>{try{const r=g(o,"BrandStrategyCards",e);if(await _(r),t){const n=c(u,t);try{await N(n),console.log("Image deleted successfully")}catch(i){console.error("Error deleting image: ",i)}}l(),console.log("BrandStrategyCard and image deleted")}catch(r){console.error("Error deleting BrandStrategyCard or image: ",r)}},O=async e=>{try{const t=g(o,"BrandStrategyCards",e);await m(t,{title:v}),l(),U(""),console.log("BrandStrategyCard updated")}catch(t){console.error("while updating title",t)}},G=async(e,t)=>{if(x)try{const r=`${Date.now()}-${x.name}`,n=c(u,`images/${r}`);await A(n,x);const i=await $(n),w=g(o,"BrandStrategyCards",e);if(t){const K=c(u,t);await N(K)}await m(w,{imageUrl:i}),l(),L(null),S.current&&(S.current.value=""),console.log("Image updated")}catch(r){console.error("Error updating image: ",r)}else console.error("No image selected for update")},H=async(e,t)=>{const r=c(u,t);try{await N(r);const n=g(o,"BrandStrategyCards",e);await m(n,{imageUrl:""}),l(),console.log("Image deleted")}catch(n){console.error("Error deleting image: ",n)}},J=async e=>{try{const t=g(o,"BrandStrategyCards",e);await m(t,{desc:D}),l(),I(""),console.log("BrandStrategyCard date updated")}catch(t){console.error("while updating release date",t)}};return a.jsxs("div",{className:"BrandStrategyCard-admin-wrapper",children:[a.jsx(M,{}),a.jsxs("div",{className:"right-side-wrapper",children:[a.jsx(P,{}),y&&a.jsxs("div",{className:"controlAuthWrapper",children:[a.jsx("h2",{className:"addBrandStrategyCardTitle",children:"Add New BrandStrategy Card"}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"BrandStrategy Card title...",value:p,onChange:e=>b(e.target.value)}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"BrandStrategy Card desc...",value:h,onChange:e=>B(e.target.value)}),a.jsx("input",{className:"admin-input",type:"file",ref:C,onChange:e=>E(e.target.files?e.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:q,disabled:j,children:"Submit BrandStrategy Card"})]}),y&&(j?a.jsx("div",{className:"loading-indicator",children:a.jsx(X,{size:50,color:"#eee",loading:j})}):a.jsx("div",{className:"controlDataWrapper",children:F.map(e=>a.jsx("div",{className:"BrandStrategyCardItemWrapperFire",children:y&&a.jsxs(a.Fragment,{children:[a.jsx("h1",{style:{color:"white"},children:e.title}),a.jsx("p",{children:e.desc}),e.imageUrl&&a.jsx("img",{className:"BrandStrategyCardImgFire",src:e.imageUrl,alt:e.title,width:"500"}),a.jsx("button",{className:"admin-btn",onClick:()=>z(e.id,e.imageUrl),children:"Delete BrandStrategy Card"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",onChange:t=>U(t.target.value),type:"text",value:v,placeholder:"new title..."}),a.jsx("button",{className:"admin-btn",onClick:()=>O(e.id),children:"Update Title"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"file",ref:S,onChange:t=>L(t.target.files?t.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:()=>G(e.id,e.imageUrl),children:"Update Image"}),a.jsx("br",{}),a.jsx("button",{className:"admin-btn",onClick:()=>H(e.id,e.imageUrl),children:"Delete Image"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"text",onChange:t=>I(t.target.value),value:D,placeholder:"new desc..."}),a.jsx("button",{className:"admin-btn",onClick:()=>J(e.id),children:"Update Desc"})]})},e.id))}))]})]})};export{re as default};
