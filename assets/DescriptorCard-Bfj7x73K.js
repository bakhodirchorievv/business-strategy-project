import{r,j as t}from"./index-BTrklhSw.js";import{N as M,A as P}from"./NavBar-DvTkcbrR.js";import{c as Q,o as V,C as X,d as c,g as Y,a as A,r as d,u as $,b as F,e as Z,f as u,h as _,s as m,i as b,j as g}from"./ClipLoader-BTiPzNBm.js";const se=()=>{const[W,q]=r.useState([]),[h,y]=r.useState(""),[D,I]=r.useState(""),[v,U]=r.useState(""),[S,R]=r.useState(""),[p,E]=r.useState(null),[f,L]=r.useState(null),[x,T]=r.useState(null),C=r.useRef(null),j=r.useRef(null),k=Q(c,"DescriptorCards"),[w,n]=r.useState(!0),i=async()=>{n(!0);try{const a=(await Y(k)).docs.map(s=>({...s.data(),id:s.id}));q(a),n(!1)}catch(e){console.error(e),n(!1)}};r.useEffect(()=>{i();const e=V(A,a=>{E(a?a.email:null)});return()=>e()},[]);const B=async()=>{var e,a;if(f&&D&&h){n(!0);const s=`${Date.now()}-${f.name}`,o=d(m,`images/${s}`);await $(o,f);const l=await F(o);try{await Z(k,{title:h,desc:D,imageUrl:l,userId:(a=(e=A)==null?void 0:e.currentUser)==null?void 0:a.uid}),i(),y(""),I(""),L(null),C.current&&(C.current.value=""),n(!1)}catch(N){console.error(N),n(!1)}}else console.error("Something is not selected (image or title or desc)")},z=async(e,a)=>{try{const s=u(c,"DescriptorCards",e);if(await _(s),a){const o=d(m,a);try{await b(o),console.log("Image deleted successfully")}catch(l){console.error("Error deleting image: ",l)}}i(),console.log("DescriptorCard and image deleted")}catch(s){console.error("Error deleting DescriptorCard or image: ",s)}},O=async e=>{try{const a=u(c,"DescriptorCards",e);await g(a,{title:S}),i(),R(""),console.log("DescriptorCard updated")}catch(a){console.error("while updating title",a)}},G=async(e,a)=>{if(x)try{const s=`${Date.now()}-${x.name}`,o=d(m,`images/${s}`);await $(o,x);const l=await F(o),N=u(c,"DescriptorCards",e);if(a){const K=d(m,a);await b(K)}await g(N,{imageUrl:l}),i(),T(null),j.current&&(j.current.value=""),console.log("Image updated")}catch(s){console.error("Error updating image: ",s)}else console.error("No image selected for update")},H=async(e,a)=>{const s=d(m,a);try{await b(s);const o=u(c,"DescriptorCards",e);await g(o,{imageUrl:""}),i(),console.log("Image deleted")}catch(o){console.error("Error deleting image: ",o)}},J=async e=>{try{const a=u(c,"DescriptorCards",e);await g(a,{desc:v}),i(),U(""),console.log("DescriptorCard date updated")}catch(a){console.error("while updating release date",a)}};return t.jsxs("div",{className:"DescriptorCard-admin-wrapper",children:[p&&t.jsx(M,{}),t.jsxs("div",{className:"right-side-wrapper",children:[t.jsx(P,{}),p&&t.jsxs("div",{className:"controlAuthWrapper",children:[t.jsx("h2",{className:"addDescriptorCardTitle",children:"Add New Descriptor Card"}),t.jsx("input",{className:"admin-input",type:"text",placeholder:"Descriptor Card title...",value:h,onChange:e=>y(e.target.value)}),t.jsx("input",{className:"admin-input",type:"text",placeholder:"Descriptor Card desc...",value:D,onChange:e=>I(e.target.value)}),t.jsx("input",{className:"admin-input",type:"file",ref:C,onChange:e=>L(e.target.files?e.target.files[0]:null)}),t.jsx("button",{className:"admin-btn",onClick:B,disabled:w,children:"Submit Descriptor Card"})]}),p&&(w?t.jsx("div",{className:"loading-indicator",children:t.jsx(X,{size:50,color:"#eee",loading:w})}):t.jsx("div",{className:"controlDataWrapper",children:W.map(e=>t.jsx("div",{className:"DescriptorCardItemWrapperFire",children:p&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{style:{color:"white"},children:e.title}),t.jsx("p",{children:e.desc}),e.imageUrl&&t.jsx("img",{className:"DescriptorCardImgFire",src:e.imageUrl,alt:e.title,width:"500"}),t.jsx("button",{className:"admin-btn",onClick:()=>z(e.id,e.imageUrl),children:"Delete Descriptor Card"}),t.jsx("br",{}),t.jsx("input",{className:"admin-input",onChange:a=>R(a.target.value),type:"text",value:S,placeholder:"new title..."}),t.jsx("button",{className:"admin-btn",onClick:()=>O(e.id),children:"Update Title"}),t.jsx("br",{}),t.jsx("input",{className:"admin-input",type:"file",ref:j,onChange:a=>T(a.target.files?a.target.files[0]:null)}),t.jsx("button",{className:"admin-btn",onClick:()=>G(e.id,e.imageUrl),children:"Update Image"}),t.jsx("br",{}),t.jsx("button",{className:"admin-btn",onClick:()=>H(e.id,e.imageUrl),children:"Delete Image"}),t.jsx("br",{}),t.jsx("input",{className:"admin-input",type:"text",onChange:a=>U(a.target.value),value:v,placeholder:"new desc..."}),t.jsx("button",{className:"admin-btn",onClick:()=>J(e.id),children:"Update Desc"})]})},e.id))}))]})]})};export{se as default};