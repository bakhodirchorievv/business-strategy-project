import{r as n,j as t}from"./index-UJLWXVPr.js";import{N as K,A as P}from"./NavBar-DFhCy2Th.js";import{c as Q,o as V,C as X,d as l,g as Y,a as k,r as d,u as A,b as $,e as Z,f as g,h as _,s as u,i as b,j as m}from"./ClipLoader-CL20A51R.js";const se=()=>{const[F,W]=n.useState([]),[p,y]=n.useState(""),[h,M]=n.useState(""),[I,v]=n.useState(""),[U,S]=n.useState(""),[D,R]=n.useState(null),[f,E]=n.useState(null),[x,L]=n.useState(null),C=n.useRef(null),j=n.useRef(null),T=Q(l,"MotionDesignCards"),[w,r]=n.useState(!0),i=async()=>{r(!0);try{const a=(await Y(T)).docs.map(s=>({...s.data(),id:s.id}));W(a),r(!1)}catch(e){console.error(e),r(!1)}};n.useEffect(()=>{i();const e=V(k,a=>{R(a?a.email:null)});return()=>e()},[]);const q=async()=>{var e,a;if(f&&h&&p){r(!0);const s=`${Date.now()}-${f.name}`,o=d(u,`images/${s}`);await A(o,f);const c=await $(o);try{await Z(T,{title:p,desc:h,imageUrl:c,userId:(a=(e=k)==null?void 0:e.currentUser)==null?void 0:a.uid}),i(),y(""),M(""),E(null),C.current&&(C.current.value=""),r(!1)}catch(N){console.error(N),r(!1)}}else console.error("Something is not selected (image or title or desc)")},B=async(e,a)=>{try{const s=g(l,"MotionDesignCards",e);if(await _(s),a){const o=d(u,a);try{await b(o),console.log("Image deleted successfully")}catch(c){console.error("Error deleting image: ",c)}}i(),console.log("MotionDesignCard and image deleted")}catch(s){console.error("Error deleting MotionDesignCard or image: ",s)}},z=async e=>{try{const a=g(l,"MotionDesignCards",e);await m(a,{title:U}),i(),S(""),console.log("MotionDesignCard updated")}catch(a){console.error("while updating title",a)}},O=async(e,a)=>{if(x)try{const s=`${Date.now()}-${x.name}`,o=d(u,`images/${s}`);await A(o,x);const c=await $(o),N=g(l,"MotionDesignCards",e);if(a){const J=d(u,a);await b(J)}await m(N,{imageUrl:c}),i(),L(null),j.current&&(j.current.value=""),console.log("Image updated")}catch(s){console.error("Error updating image: ",s)}else console.error("No image selected for update")},G=async(e,a)=>{const s=d(u,a);try{await b(s);const o=g(l,"MotionDesignCards",e);await m(o,{imageUrl:""}),i(),console.log("Image deleted")}catch(o){console.error("Error deleting image: ",o)}},H=async e=>{try{const a=g(l,"MotionDesignCards",e);await m(a,{desc:I}),i(),v(""),console.log("MotionDesignCard date updated")}catch(a){console.error("while updating release date",a)}};return t.jsxs("div",{className:"MotionDesignCard-admin-wrapper",children:[t.jsx(K,{}),t.jsxs("div",{className:"right-side-wrapper",children:[t.jsx(P,{}),D&&t.jsxs("div",{className:"controlAuthWrapper",children:[t.jsx("h2",{className:"addMotionDesignCardTitle",children:"Add New MotionDesign Card"}),t.jsx("input",{className:"admin-input",type:"text",placeholder:"MotionDesign Card title...",value:p,onChange:e=>y(e.target.value)}),t.jsx("input",{className:"admin-input",type:"text",placeholder:"MotionDesign Card desc...",value:h,onChange:e=>M(e.target.value)}),t.jsx("input",{className:"admin-input",type:"file",ref:C,onChange:e=>E(e.target.files?e.target.files[0]:null)}),t.jsx("button",{className:"admin-btn",onClick:q,disabled:w,children:"Submit MotionDesign Card"})]}),D&&(w?t.jsx("div",{className:"loading-indicator",children:t.jsx(X,{size:50,color:"#eee",loading:w})}):t.jsx("div",{className:"controlDataWrapper",children:F.map(e=>t.jsx("div",{className:"MotionDesignCardItemWrapperFire",children:D&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{style:{color:"white"},children:e.title}),t.jsx("p",{children:e.desc}),e.imageUrl&&t.jsx("img",{className:"MotionDesignCardImgFire",src:e.imageUrl,alt:e.title,width:"500"}),t.jsx("button",{className:"admin-btn",onClick:()=>B(e.id,e.imageUrl),children:"Delete MotionDesign Card"}),t.jsx("br",{}),t.jsx("input",{className:"admin-input",onChange:a=>S(a.target.value),type:"text",value:U,placeholder:"new title..."}),t.jsx("button",{className:"admin-btn",onClick:()=>z(e.id),children:"Update Title"}),t.jsx("br",{}),t.jsx("input",{className:"admin-input",type:"file",ref:j,onChange:a=>L(a.target.files?a.target.files[0]:null)}),t.jsx("button",{className:"admin-btn",onClick:()=>O(e.id,e.imageUrl),children:"Update Image"}),t.jsx("br",{}),t.jsx("button",{className:"admin-btn",onClick:()=>G(e.id,e.imageUrl),children:"Delete Image"}),t.jsx("br",{}),t.jsx("input",{className:"admin-input",type:"text",onChange:a=>v(a.target.value),value:I,placeholder:"new desc..."}),t.jsx("button",{className:"admin-btn",onClick:()=>H(e.id),children:"Update Desc"})]})},e.id))}))]})]})};export{se as default};
