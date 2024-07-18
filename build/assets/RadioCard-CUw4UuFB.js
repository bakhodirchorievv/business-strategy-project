import{r as o,j as a}from"./index-UJLWXVPr.js";import{N as M,A as P}from"./NavBar-DFhCy2Th.js";import{c as Q,o as V,C as X,d as l,g as Y,a as A,r as c,u as $,b as F,e as Z,f as u,h as _,s as m,i as b,j as g}from"./ClipLoader-CL20A51R.js";const se=()=>{const[W,q]=o.useState([]),[p,y]=o.useState(""),[h,D]=o.useState(""),[I,v]=o.useState(""),[U,S]=o.useState(""),[f,E]=o.useState(null),[x,L]=o.useState(null),[C,T]=o.useState(null),j=o.useRef(null),R=o.useRef(null),k=Q(l,"RadioCards"),[w,n]=o.useState(!0),i=async()=>{n(!0);try{const t=(await Y(k)).docs.map(s=>({...s.data(),id:s.id}));q(t),n(!1)}catch(e){console.error(e),n(!1)}};o.useEffect(()=>{i();const e=V(A,t=>{E(t?t.email:null)});return()=>e()},[]);const B=async()=>{var e,t;if(x&&h&&p){n(!0);const s=`${Date.now()}-${x.name}`,r=c(m,`images/${s}`);await $(r,x);const d=await F(r);try{await Z(k,{title:p,desc:h,imageUrl:d,userId:(t=(e=A)==null?void 0:e.currentUser)==null?void 0:t.uid}),i(),y(""),D(""),L(null),j.current&&(j.current.value=""),n(!1)}catch(N){console.error(N),n(!1)}}else console.error("Something is not selected (image or title or desc)")},z=async(e,t)=>{try{const s=u(l,"RadioCards",e);if(await _(s),t){const r=c(m,t);try{await b(r),console.log("Image deleted successfully")}catch(d){console.error("Error deleting image: ",d)}}i(),console.log("RadioCard and image deleted")}catch(s){console.error("Error deleting RadioCard or image: ",s)}},O=async e=>{try{const t=u(l,"RadioCards",e);await g(t,{title:U}),i(),S(""),console.log("RadioCard updated")}catch(t){console.error("while updating title",t)}},G=async(e,t)=>{if(C)try{const s=`${Date.now()}-${C.name}`,r=c(m,`images/${s}`);await $(r,C);const d=await F(r),N=u(l,"RadioCards",e);if(t){const K=c(m,t);await b(K)}await g(N,{imageUrl:d}),i(),T(null),R.current&&(R.current.value=""),console.log("Image updated")}catch(s){console.error("Error updating image: ",s)}else console.error("No image selected for update")},H=async(e,t)=>{const s=c(m,t);try{await b(s);const r=u(l,"RadioCards",e);await g(r,{imageUrl:""}),i(),console.log("Image deleted")}catch(r){console.error("Error deleting image: ",r)}},J=async e=>{try{const t=u(l,"RadioCards",e);await g(t,{desc:I}),i(),v(""),console.log("RadioCard date updated")}catch(t){console.error("while updating release date",t)}};return a.jsxs("div",{className:"RadioCard-admin-wrapper",children:[a.jsx(M,{}),a.jsxs("div",{className:"right-side-wrapper",children:[a.jsx(P,{}),f&&a.jsxs("div",{className:"controlAuthWrapper",children:[a.jsx("h2",{className:"addRadioCardTitle",children:"Add New Radio Card"}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Radio Card title...",value:p,onChange:e=>y(e.target.value)}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Radio Card desc...",value:h,onChange:e=>D(e.target.value)}),a.jsx("input",{className:"admin-input",type:"file",ref:j,onChange:e=>L(e.target.files?e.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:B,disabled:w,children:"Submit Radio Card"})]}),f&&(w?a.jsx("div",{className:"loading-indicator",children:a.jsx(X,{size:50,color:"#eee",loading:w})}):a.jsx("div",{className:"controlDataWrapper",children:W.map(e=>a.jsx("div",{className:"RadioCardItemWrapperFire",children:f&&a.jsxs(a.Fragment,{children:[a.jsx("h1",{style:{color:"white"},children:e.title}),a.jsx("p",{children:e.desc}),e.imageUrl&&a.jsx("img",{className:"RadioCardImgFire",src:e.imageUrl,alt:e.title,width:"500"}),a.jsx("button",{className:"admin-btn",onClick:()=>z(e.id,e.imageUrl),children:"Delete Radio Card"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",onChange:t=>S(t.target.value),type:"text",value:U,placeholder:"new title..."}),a.jsx("button",{className:"admin-btn",onClick:()=>O(e.id),children:"Update Title"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"file",ref:R,onChange:t=>T(t.target.files?t.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:()=>G(e.id,e.imageUrl),children:"Update Image"}),a.jsx("br",{}),a.jsx("button",{className:"admin-btn",onClick:()=>H(e.id,e.imageUrl),children:"Delete Image"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"text",onChange:t=>v(t.target.value),value:I,placeholder:"new desc..."}),a.jsx("button",{className:"admin-btn",onClick:()=>J(e.id),children:"Update Desc"})]})},e.id))}))]})]})};export{se as default};
