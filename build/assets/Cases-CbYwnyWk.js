import{r as c,j as s,L as n}from"./index-DYYbCz4k.js";import{c as o,d as m,g as x}from"./FirebaseConfig-BfNWVVN1.js";const p=()=>{const[t,i]=c.useState([]),r=o(m,"cases"),l=async()=>{try{const d=(await x(r)).docs.map(a=>({...a.data(),id:a.id}));i(d)}catch(e){console.error(e)}};return c.useEffect(()=>{l()},[]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"cases-wrapper",children:[s.jsx("h3",{className:"cases-title",children:"Готовые кейсы"}),s.jsx("div",{className:"cases-body",children:t.map(e=>s.jsxs("div",{className:"case-item",children:[s.jsx("div",{className:"white-back",style:{backgroundImage:`url(${e.imageUrl})`}}),s.jsxs("div",{className:"caseItemInfo",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"caseItemTitle",children:e.title||"Пропорция"}),s.jsx("p",{className:"caseItemDesc",children:e.desc||"Салон красоты"})]}),s.jsx(n,{to:"/Site",children:s.jsx("button",{className:"caseItemBtn",children:"Сайт"})})]})]},e.id))})]})})};export{p as default};