import{r as i,j as a}from"./index-CRrmAjvx.js";import{N as K,A as M}from"./NavBar-B7rUSNeA.js";import{c as P,o as Q,C as X,d as o,g as Y,a as L,r as d,u as T,b as A,e as Z,f as u,h as _,s as m,i as b,j as p}from"./ClipLoader-DVXDNsnu.js";const se=()=>{const[$,F]=i.useState([]),[h,y]=i.useState(""),[f,z]=i.useState(""),[V,D]=i.useState(""),[I,v]=i.useState(""),[g,U]=i.useState(null),[x,S]=i.useState(null),[C,R]=i.useState(null),j=i.useRef(null),w=i.useRef(null),E=P(o,"VizitkaCards"),[k,l]=i.useState(!0),n=async()=>{l(!0);try{const t=(await Y(E)).docs.map(s=>({...s.data(),id:s.id}));F(t),l(!1)}catch(e){console.error(e),l(!1)}};i.useEffect(()=>{n();const e=Q(L,t=>{U(t?t.email:null)});return()=>e()},[]);const W=async()=>{var e,t;if(x&&f&&h){l(!0);const s=`${Date.now()}-${x.name}`,r=d(m,`images/${s}`);await T(r,x);const c=await A(r);try{await Z(E,{title:h,desc:f,imageUrl:c,userId:(t=(e=L)==null?void 0:e.currentUser)==null?void 0:t.uid}),n(),y(""),z(""),S(null),j.current&&(j.current.value=""),l(!1)}catch(N){console.error(N),l(!1)}}else console.error("Something is not selected (image or title or desc)")},q=async(e,t)=>{try{const s=u(o,"VizitkaCards",e);if(await _(s),t){const r=d(m,t);try{await b(r),console.log("Image deleted successfully")}catch(c){console.error("Error deleting image: ",c)}}n(),console.log("VizitkaCard and image deleted")}catch(s){console.error("Error deleting VizitkaCard or image: ",s)}},B=async e=>{try{const t=u(o,"VizitkaCards",e);await p(t,{title:I}),n(),v(""),console.log("VizitkaCard updated")}catch(t){console.error("while updating title",t)}},O=async(e,t)=>{if(C)try{const s=`${Date.now()}-${C.name}`,r=d(m,`images/${s}`);await T(r,C);const c=await A(r),N=u(o,"VizitkaCards",e);if(t){const J=d(m,t);await b(J)}await p(N,{imageUrl:c}),n(),R(null),w.current&&(w.current.value=""),console.log("Image updated")}catch(s){console.error("Error updating image: ",s)}else console.error("No image selected for update")},G=async(e,t)=>{const s=d(m,t);try{await b(s);const r=u(o,"VizitkaCards",e);await p(r,{imageUrl:""}),n(),console.log("Image deleted")}catch(r){console.error("Error deleting image: ",r)}},H=async e=>{try{const t=u(o,"VizitkaCards",e);await p(t,{desc:V}),n(),D(""),console.log("VizitkaCard date updated")}catch(t){console.error("while updating release date",t)}};return a.jsxs("div",{className:"VizitkaCard-admin-wrapper",children:[g&&a.jsx(K,{}),a.jsxs("div",{className:"right-side-wrapper",children:[a.jsx(M,{}),g&&a.jsxs("div",{className:"controlAuthWrapper",children:[a.jsx("h2",{className:"addVizitkaCardTitle",children:"Add New Vizitka Card"}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Vizitka Card title...",value:h,onChange:e=>y(e.target.value)}),a.jsx("input",{className:"admin-input",type:"text",placeholder:"Vizitka Card desc...",value:f,onChange:e=>z(e.target.value)}),a.jsx("input",{className:"admin-input",type:"file",ref:j,onChange:e=>S(e.target.files?e.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:W,disabled:k,children:"Submit Vizitka Card"})]}),g&&(k?a.jsx("div",{className:"loading-indicator",children:a.jsx(X,{size:50,color:"#eee",loading:k})}):a.jsx("div",{className:"controlDataWrapper",children:$.map(e=>a.jsx("div",{className:"VizitkaCardItemWrapperFire",children:g&&a.jsxs(a.Fragment,{children:[a.jsx("h1",{style:{color:"white"},children:e.title}),a.jsx("p",{children:e.desc}),e.imageUrl&&a.jsx("img",{className:"VizitkaCardImgFire",src:e.imageUrl,alt:e.title,width:"500"}),a.jsx("button",{className:"admin-btn",onClick:()=>q(e.id,e.imageUrl),children:"Delete Vizitka Card"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",onChange:t=>v(t.target.value),type:"text",value:I,placeholder:"new title..."}),a.jsx("button",{className:"admin-btn",onClick:()=>B(e.id),children:"Update Title"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"file",ref:w,onChange:t=>R(t.target.files?t.target.files[0]:null)}),a.jsx("button",{className:"admin-btn",onClick:()=>O(e.id,e.imageUrl),children:"Update Image"}),a.jsx("br",{}),a.jsx("button",{className:"admin-btn",onClick:()=>G(e.id,e.imageUrl),children:"Delete Image"}),a.jsx("br",{}),a.jsx("input",{className:"admin-input",type:"text",onChange:t=>D(t.target.value),value:V,placeholder:"new desc..."}),a.jsx("button",{className:"admin-btn",onClick:()=>H(e.id),children:"Update Desc"})]})},e.id))}))]})]})};export{se as default};