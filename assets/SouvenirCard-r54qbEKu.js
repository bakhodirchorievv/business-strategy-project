import{r,j as a}from"./index-BXok0Ebn.js";import{N as M,A as P}from"./NavBar-0qfM60Yw.js";import{c as Q,o as V,C as X,d as l,g as Y,a as A,r as d,u as $,b as F,e as Z,f as u,h as _,s as m,i as N,j as p}from"./ClipLoader-BK_Mfgvn.js";const se=()=>{const[W,q]=r.useState([]),[h,b]=r.useState(""),[f,y]=r.useState(""),[D,I]=r.useState(""),[U,R]=r.useState(""),[g,E]=r.useState(null),[v,L]=r.useState(null),[x,T]=r.useState(null),C=r.useRef(null),S=r.useRef(null),k=Q(l,"SouvenirCards"),[j,i]=r.useState(!0),o=async()=>{i(!0);try{const t=(await Y(k)).docs.map(s=>({...s.data(),id:s.id}));q(t),i(!1)}catch(e){console.error(e),i(!1)}};r.useEffect(()=>{o();const e=V(A,t=>{E(t?t.email:null)});return()=>e()},[]);const B=async()=>{var e,t;if(v&&f&&h){i(!0);const s=`${Date.now()}-${v.name}`,n=d(m,`images/${s}`);await $(n,v);const c=await F(n);try{await Z(k,{title:h,desc:f,imageUrl:c,userId:(t=(e=A)==null?void 0:e.currentUser)==null?void 0:t.uid}),o(),b(""),y(""),L(null),C.current&&(C.current.value=""),i(!1)}catch(w){console.error(w),i(!1)}}else console.error("Something is not selected (image or title or desc)")},z=async(e,t)=>{try{const s=u(l,"SouvenirCards",e);if(await _(s),t){const n=d(m,t);try{await N(n),console.log("Image deleted successfully")}catch(c){console.error("Error deleting image: ",c)}}o(),console.log("SouvenirCard and image deleted")}catch(s){console.error("Error deleting SouvenirCard or image: ",s)}},O=async e=>{try{const t=u(l,"SouvenirCards",e);await p(t,{title:U}),o(),R(""),console.log("SouvenirCard updated")}catch(t){console.error("while updating title",t)}},G=async(e,t)=>{if(x)try{const s=`${Date.now()}-${x.name}`,n=d(m,`images/${s}`);await $(n,x);const c=await F(n),w=u(l,"SouvenirCards",e);if(t){const K=d(m,t);await N(K)}await p(w,{imageUrl:c}),o(),T(null),S.current&&(S.current.value=""),console.log("Image updated")}catch(s){console.error("Error updating image: ",s)}else console.error("No image selected for update")},H=async(e,t)=>{const s=d(m,t);try{await N(s);const n=u(l,"SouvenirCards",e);await p(n,{imageUrl:""}),o(),console.log("Image deleted")}catch(n){console.error("Error deleting image: ",n)}},J=async e=>{try{const t=u(l,"SouvenirCards",e);await p(t,{desc:D}),o(),I(""),console.log("SouvenirCard date updated")}catch(t){console.error("while updating release date",t)}};return a.jsxs("div",{className:"SouvenirCard-admin-wrapper",children:[g&&a.jsx(M,{}),a.jsxs("div",{className:"right-side-wrapper",children:[a.jsx(P,{}),g&&a.jsxs("div",{className:"controlAuthWrapper",children:[a.jsx("h2",{className:"addSouvenirCardTitle",children:"Add New Souvenir Card"}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Souvenir Card title...",value:h,onChange:e=>b(e.target.value)}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Souvenir Card desc...",value:f,onChange:e=>y(e.target.value)}),a.jsx("input",{className:"admin-input",type:"file",ref:C,onChange:e=>L(e.target.files?e.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:B,disabled:j,children:"Submit Souvenir Card"})]}),g&&(j?a.jsx("div",{className:"loading-indicator",children:a.jsx(X,{size:50,color:"#eee",loading:j})}):a.jsx("div",{className:"controlDataWrapper",children:W.map(e=>a.jsx("div",{className:"SouvenirCardItemWrapperFire",children:g&&a.jsxs(a.Fragment,{children:[a.jsx("h1",{style:{color:"white"},children:e.title}),a.jsx("p",{children:e.desc}),e.imageUrl&&a.jsx("img",{className:"SouvenirCardImgFire",src:e.imageUrl,alt:e.title,width:"500"}),a.jsx("button",{className:"admin-btn",onClick:()=>z(e.id,e.imageUrl),children:"Delete Souvenir Card"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",onChange:t=>R(t.target.value),type:"text",value:U,placeholder:"new title..."}),a.jsx("button",{className:"admin-btn",onClick:()=>O(e.id),children:"Update Title"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"file",ref:S,onChange:t=>T(t.target.files?t.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:()=>G(e.id,e.imageUrl),children:"Update Image"}),a.jsx("br",{}),a.jsx("button",{className:"admin-btn",onClick:()=>H(e.id,e.imageUrl),children:"Delete Image"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"text",onChange:t=>I(t.target.value),value:D,placeholder:"new desc..."}),a.jsx("button",{className:"admin-btn",onClick:()=>J(e.id),children:"Update Desc"})]})},e.id))}))]})]})};export{se as default};
