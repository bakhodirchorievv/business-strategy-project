import{r as o,j as e,L as a}from"./index-DeZAD-sV.js";import{c as g,d as N,C as b,g as f}from"./ClipLoader-UcJM2utI.js";const B=()=>{const[r,v]=o.useState([]),p=g(N,"cases"),[x,u]=o.useState(!1),[h,d]=o.useState(!0),j=async()=>{d(!0);try{const s=(await f(p)).docs.map(i=>({...i.data(),id:i.id}));v(s),d(!1),u(!0)}catch(c){console.error(c),d(!1)}};return o.useEffect(()=>{j(),console.log(r)},[]),o.useEffect(()=>{if(x){const c=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.target.classList.add("show-animation")})}),s=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&n.target.classList.add("toCenter")})}),i=document.querySelectorAll(".hidden-animation");i.forEach(t=>c.observe(t));const l=document.querySelectorAll(".fromCenter");return l.forEach(t=>s.observe(t)),()=>{i.forEach(t=>c.unobserve(t)),l.forEach(t=>s.unobserve(t))}}},[x]),e.jsxs("div",{className:"cases-wrapper hidden",children:[e.jsx("h2",{className:"case-title getBlock overallTitle topTitle",children:"Кейсы"}),e.jsx("div",{className:"case-left",children:r.length&&r.slice(0,3).map((c,s)=>e.jsxs("div",{className:`left-case-item fromCenter ${s===2?"bigger":""}`,children:[e.jsx("div",{className:"whiteBack",style:{backgroundImage:`url(${c.imageUrl})`}}),e.jsx("h3",{className:"caseTitle",children:c.title||"Valor"}),e.jsx("p",{className:"case-desc",children:c.desc||"Ювелирные изделия"}),e.jsxs("div",{className:"caseBtnWrapper",children:[e.jsx(a,{to:"/Logo",children:e.jsx("button",{className:"overallBtn caseBtn",children:"Логотип"})}),e.jsx("button",{className:"overallBtn caseBtn",children:"Брендинг"}),e.jsx(a,{to:"/Site",children:e.jsx("button",{className:"overallBtn caseBtn",children:"Сайт"})})]})]},c.id))}),e.jsxs("div",{className:"case-right",children:[e.jsx("h2",{className:"case-title getNone overallTitle",children:"Кейсы"}),h?e.jsx("div",{className:"loading-indicator",children:e.jsx(b,{size:50,color:"#eee",loading:h})}):r.length&&r.slice(3,5).map((c,s)=>e.jsxs("div",{className:`left-case-item fromCenter ${s===2?"bigger":""}`,children:[e.jsx("div",{className:"whiteBack",style:{backgroundImage:`url(${c.imageUrl})`}}),e.jsx("h3",{className:"caseTitle",children:c.title||"Valor"}),e.jsx("p",{className:"case-desc",children:c.desc||"Ювелирные изделия"}),e.jsxs("div",{className:"caseBtnWrapper",children:[e.jsx(a,{to:"/Logo",children:e.jsx("button",{className:"overallBtn caseBtn",children:"Логотип"})}),e.jsx("button",{className:"overallBtn caseBtn",children:"Брендинг"}),e.jsx(a,{to:"/Site",children:e.jsx("button",{className:"overallBtn caseBtn",children:"Сайт"})})]})]},c.id)),e.jsx(a,{to:"/Cases",children:e.jsx("button",{style:{display:h?"none":"block"},className:"overallBtn hasHover moreCaseBtn hidden",children:"больше кейсов →"})})]}),x&&e.jsx("img",{src:"/business-strategy-project/MainPage/bckg-layer.png",alt:"",className:"bckg-layer CasesParthidden getNone"})]})},L=()=>{const r=document.querySelectorAll(".mainImage"),v=s=>{r.forEach(i=>{i.classList.remove("realBlock"),i.classList.remove("getNoneVideo")}),s.target.classList.contains("creativeHover")?(r[0].classList.add("getNoneVideo"),r[1].classList.add("realBlock"),r[2].classList.add("getNoneVideo")):s.target.classList.contains("designHover")?(r[0].classList.add("getNoneVideo"),r[1].classList.add("getNoneVideo"),r[2].classList.add("realBlock")):s.target.classList.contains("mailHover")&&(r[0].classList.add("realBlock"),r[1].classList.add("getNoneVideo"),r[2].classList.add("getNoneVideo"))},p=()=>{r[0].classList.add("realBlock"),r[1].classList.remove("realBlock"),r[2].classList.remove("realBlock")};o.useEffect(()=>{const s=document.querySelector(".cursor-dot"),i=document.querySelector(".cursor-outline");window.addEventListener("mousemove",l=>{const t=l.clientX,n=l.clientY;s.style.left=`${t}px`,s.style.top=`${n}px`,i.style.left=`${t}px`,i.style.top=`${n}px`,i==null||i.animate({left:`${t}px`,top:`${n}px`},{duration:500,fill:"forwards"})})},[]),o.useEffect(()=>{document.querySelectorAll("*").forEach(s=>{s.addEventListener("mouseenter",()=>{window.getComputedStyle(s).cursor==="pointer"&&document.body.classList.add("pointer-hover")}),s.addEventListener("mouseleave",()=>{document.body.classList.remove("pointer-hover")})})},[]),o.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(m=>{m.isIntersecting&&m.target.classList.add("show")})}),i=new IntersectionObserver(n=>{n.forEach(m=>{m.isIntersecting&&m.target.classList.add("toCenter")})}),l=document.querySelectorAll(".hidden");l.forEach(n=>s.observe(n));const t=document.querySelectorAll(".fromCenter");return t.forEach(n=>i.observe(n)),()=>{l.forEach(n=>s.unobserve(n)),t.forEach(n=>i.unobserve(n))}},[]);const[x,u]=o.useState(""),h=`The media landscape is changing in front of our eyes, and brands need
	 to adapt how they communicate in order to thrive. Motion is the connective tissue between
	  a brand and its audience. It is a vital component of a brand’s platform, evolving
	   its ecosystem and communications in profound new ways.`,d=o.useRef(null);o.useEffect(()=>{const s=new IntersectionObserver(i=>{i.forEach(l=>{l.isIntersecting&&(u(""),(()=>{for(let n=0;n<h.length;n++)setTimeout(()=>{u(m=>m+h[n])},n*10)})(),s.unobserve(l.target))})});return d.current&&s.observe(d.current),()=>{d.current&&s.unobserve(d.current)}},[]);const j=s=>{const i=s.target.parentElement.querySelector(".service-info"),l=s.target.parentElement.querySelector(".minus"),t=s.target.parentElement.querySelector(".plus");i.classList.contains("disappearWithAnimation")?(i.classList.remove("disappearWithAnimation"),i.classList.add("appearWithAnimation"),l.classList.remove("disappearWithAnimation"),t.classList.add("disappearWithAnimation")):(i.classList.add("disappearWithAnimation"),i.classList.remove("appearWithAnimation"),l.classList.add("disappearWithAnimation"),t.classList.remove("disappearWithAnimation"))},c=s=>{const i=s.target.parentElement.parentElement.querySelector(".service-info"),l=s.target.parentElement.parentElement.querySelector(".minus"),t=s.target.parentElement.parentElement.querySelector(".plus");i.classList.contains("disappearWithAnimation")?(i.classList.remove("disappearWithAnimation"),i.classList.add("appearWithAnimation"),l.classList.remove("disappearWithAnimation"),t.classList.add("disappearWithAnimation")):(i.classList.add("disappearWithAnimation"),i.classList.remove("appearWithAnimation"),l.classList.add("disappearWithAnimation"),t.classList.remove("disappearWithAnimation"))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"cursor-dot"}),e.jsx("div",{className:"cursor-outline"}),e.jsx("div",{className:"bottomOfHeader",children:e.jsxs("div",{className:"hidden",children:[e.jsxs("h1",{className:"head-title hidden",children:[e.jsx("span",{onMouseLeave:p,onMouseOver:v,className:"forBorder mailHover",children:"Стратегия"})," ",e.jsx("span",{onMouseLeave:p,onMouseOver:v,className:"forBorder creativeHover",children:"Креатив"})," ",e.jsx("span",{onMouseLeave:p,onMouseOver:v,className:"forBorder designHover",children:"Дизайн"})]}),e.jsx("p",{className:"head-desc hidden",children:"Комплексный подход к разработке коммуникаций между брендом и клиентом"}),e.jsx("video",{src:"/business-strategy-project/MainPage/mail.mp4",className:"mainImage mailVideo",autoPlay:!0,loop:!0,muted:!0}),e.jsx("video",{src:"/business-strategy-project/MainPage/creative.mp4",className:"mainImage creativeVideo",autoPlay:!0,loop:!0,muted:!0}),e.jsx("video",{src:"/business-strategy-project/MainPage/design.mp4",className:"mainImage designVideo",autoPlay:!0,loop:!0,muted:!0})]})}),e.jsxs("div",{className:"mainPageWrapper hidden",children:[e.jsx("div",{className:"components-wrapper hidden",children:e.jsxs("div",{className:"components",children:[e.jsx(a,{to:"Corporate",children:e.jsx("button",{className:"overallBtn hasHover component-item click-item",children:"Фирменный стиль →"})}),e.jsx(a,{to:"BrandStrategy",children:e.jsx("button",{className:"overallBtn hasHover component-item",children:"Стратегия →"})}),e.jsx(a,{to:"Descriptor",children:e.jsx("button",{className:"overallBtn hasHover component-item",children:"Слоган и дескриптор →"})}),e.jsx("button",{className:"overallBtn hasHover component-item",children:"Ребрендинг →"}),e.jsx("button",{className:"overallBtn hasHover component-item",children:"3D →"}),e.jsx(a,{to:"MDesign",children:e.jsx("button",{className:"overallBtn hasHover component-item",children:"Motio design →"})}),e.jsx(a,{to:"Logo",children:e.jsx("button",{className:"overallBtn hasHover component-item",children:"Логотип →"})}),e.jsx(a,{to:"Naming",children:e.jsxs("button",{className:"overallBtn hasHover component-item",children:["Неймиг →"," "]})}),e.jsx("button",{className:"overallBtn hasHover component-item",children:"Рекламный креатив →"}),e.jsx(a,{to:"Site",children:e.jsx("button",{className:"overallBtn hasHover component-item",children:"Сайт →"})})]})}),e.jsxs("div",{className:"timeToWrapper hidden",children:[e.jsxs("h2",{className:"timeToTitle",children:[e.jsx("span",{className:"yellowSide",children:"time to"})," - это команда экспертов,повседневная практика показывает, что консультация с широким активом"]}),e.jsxs("div",{className:"timeToBody",children:[e.jsxs("div",{className:"timeLeft hidden",children:[e.jsx("p",{ref:d,className:"timeDesc",children:x}),e.jsx("button",{className:"overallBtn hasHover timeBtn hidden",children:"время познакомиться →"})]}),e.jsxs("div",{className:"timeRight hidden",children:[e.jsxs("div",{className:"forOrder",children:[e.jsxs("div",{className:"timerightItem",children:[e.jsx("p",{className:"numberRight",children:"15+"}),e.jsx("p",{className:"textRight",children:"Человек в команде"})]}),e.jsxs("div",{className:"timerightItem ten changePlaceN hidden",children:[e.jsx("p",{className:"numberRight",children:"30+"}),e.jsx("p",{className:"textRight",children:"Успешных проектов"})]}),e.jsxs("div",{className:"timerightItem changePlaceB hidden",children:[e.jsxs("p",{className:"numberRight",children:[e.jsx("span",{className:"beSmall",children:"100"}),"%"]}),e.jsx("p",{className:"textRight",children:"Эффективности"})]})]}),e.jsxs("div",{className:"forOrder",children:[e.jsxs("div",{className:"timerightItem",children:[e.jsx("p",{className:"numberRight",children:"10"}),e.jsx("p",{className:"textRight textRight10",children:"лет опыта в маркетинге"})]}),e.jsxs("div",{className:"timerightItem changePlaceN hidden",children:[e.jsx("p",{className:"numberRight",children:"100%"}),e.jsx("p",{className:"textRight",children:"Эффективности"})]}),e.jsxs("div",{className:"timerightItem ten changePlaceB hidden",children:[e.jsx("p",{className:"numberRight",children:"30+"}),e.jsx("p",{className:"textRight",children:"Успешных проектов"})]})]})]})]})]}),e.jsx(B,{}),e.jsxs("div",{className:"yellow-wrapper fromCenter",children:[e.jsxs("div",{className:"yellow-left",children:[e.jsx("h3",{className:"yellow-title",children:"Хочешь подобное для своего бизнеса?"}),e.jsx("button",{className:"overallBtn yellowBtn",children:"время познакомиться →"})]}),e.jsx("div",{className:"yellow-right",children:e.jsx("img",{src:"/business-strategy-project/MainPage/Vector.png",alt:"",className:"yellow-tt-img"})})]}),e.jsxs("div",{className:"services-wrapper hidden",children:[e.jsx("h2",{className:"overallTitle services-title",children:"Услуги"}),e.jsxs("div",{className:"hidden",children:[e.jsxs("div",{className:"service-item ",children:[e.jsxs("div",{onClick:j,className:"service-item-face",children:[e.jsxs("div",{className:"numberWrap",children:[e.jsx("p",{className:"service-num",children:"01"}),e.jsx("h4",{className:"service-name",children:"Стратегия"})]}),e.jsx("img",{onClick:c,src:"/business-strategy-project/MainPage/plus-icon.png",alt:"",className:"plusMinus plus"}),e.jsx("img",{onClick:c,src:"/business-strategy-project/MainPage/minus-icon.png",alt:"",className:"plusMinus minus disappearWithAnimation"})]}),e.jsxs("div",{className:"service-info disappearWithAnimation",children:[e.jsx("p",{className:"service-desc",children:"The media landscape is changing in front of our eyes, and brands need to adapt how they communicate in order to thrive. Motion is the connective tissue between a brand and its audience. It is a vital component of a brand’s platform, evolving its ecosystem and communications in profound new ways."}),e.jsxs("div",{className:"service-btns",children:[e.jsx(a,{to:"Logo",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Логотип"})}),e.jsx(a,{to:"Corporate",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Фирменный стиль"})}),e.jsx(a,{to:"MDesign",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Motio design"})}),e.jsx(a,{to:"Site",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Сайт"})}),e.jsx(a,{to:"Guideline",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Брендбук и гайдлайн"})}),e.jsx(a,{to:"Packing",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Упаковка"})}),e.jsx("button",{className:"overallBtn hasHover service-btn",children:"3D"}),e.jsx(a,{to:"Presentation",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Дизайн презентаций"})}),e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Дизайн подписка"})]})]})]}),e.jsxs("div",{className:"service-item ",children:[e.jsxs("div",{onClick:j,className:"service-item-face",children:[e.jsxs("div",{className:"numberWrap",children:[e.jsx("p",{className:"service-num",children:"02"}),e.jsx("h4",{className:"service-name",children:"Креатив"})]}),e.jsx("img",{onClick:c,src:"/business-strategy-project/MainPage/plus-icon.png",alt:"",className:"plusMinus plus"}),e.jsx("img",{onClick:c,src:"/business-strategy-project/MainPage/minus-icon.png",alt:"",className:"plusMinus minus disappearWithAnimation"})]}),e.jsxs("div",{className:"service-info disappearWithAnimation",children:[e.jsx("p",{className:"service-desc",children:"The media landscape is changing in front of our eyes, and brands need to adapt how they communicate in order to thrive. Motion is the connective tissue between a brand and its audience. It is a vital component of a brand’s platform, evolving its ecosystem and communications in profound new ways."}),e.jsxs("div",{className:"service-btns",children:[e.jsx(a,{to:"Logo",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Логотип"})}),e.jsx(a,{to:"Corporate",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Фирменный стиль"})}),e.jsx(a,{to:"MDesign",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Motio design"})}),e.jsx(a,{to:"Site",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Сайт"})}),e.jsx(a,{to:"Guideline",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Брендбук и гайдлайн"})}),e.jsx(a,{to:"Packing",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Упаковка"})}),e.jsx("button",{className:"overallBtn hasHover service-btn",children:"3D"}),e.jsx(a,{to:"Presentation",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Дизайн презентаций"})}),e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Дизайн подписка"})]})]})]}),e.jsxs("div",{className:"service-item ",children:[e.jsxs("div",{onClick:j,className:"service-item-face",children:[e.jsxs("div",{className:"numberWrap",children:[e.jsx("p",{className:"service-num",children:"03"}),e.jsx("h4",{className:"service-name",children:"Дизайн"})]}),e.jsx("img",{onClick:c,src:"/business-strategy-project/MainPage/plus-icon.png",alt:"",className:"plusMinus plus"}),e.jsx("img",{onClick:c,src:"/business-strategy-project/MainPage/minus-icon.png",alt:"",className:"plusMinus minus disappearWithAnimation"})]}),e.jsxs("div",{className:"service-info disappearWithAnimation",children:[e.jsx("p",{className:"service-desc",children:"The media landscape is changing in front of our eyes, and brands need to adapt how they communicate in order to thrive. Motion is the connective tissue between a brand and its audience. It is a vital component of a brand’s platform, evolving its ecosystem and communications in profound new ways."}),e.jsxs("div",{className:"service-btns",children:[e.jsx(a,{to:"Logo",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Логотип"})}),e.jsx(a,{to:"Corporate",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Фирменный стиль"})}),e.jsx(a,{to:"MDesign",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Motio design"})}),e.jsx(a,{to:"Site",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Сайт"})}),e.jsx(a,{to:"Guideline",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Брендбук и гайдлайн"})}),e.jsx(a,{to:"Packing",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Упаковка"})}),e.jsx("button",{className:"overallBtn hasHover service-btn",children:"3D"}),e.jsx(a,{to:"Presentation",children:e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Дизайн презентаций"})}),e.jsx("button",{className:"overallBtn hasHover service-btn",children:"Дизайн подписка"})]})]})]}),e.jsxs("div",{className:"service-foot hidden",children:[e.jsx("p",{className:"service-foot-desc",children:"Про то что мы вообще много всего умеем, просто обращайтесь к нам и мы придумаем как креативно решить вашу задачу. Про то что мы вообще много всего умеем, просто обращайтесь к нам и мы Про то что мы вообще много всего умеем, просто обращайтесь"}),e.jsx("button",{className:"overallBtn hasHover service-foot-btn ",children:"подробнее →"})]})]})]}),e.jsxs("div",{className:"packing-wrapper hidden",children:[e.jsxs("div",{className:"packing-head",children:[e.jsx("h2",{className:"overallTitle packing-title",children:"Упаковка"}),e.jsx("p",{className:"packing-desc",children:"Выбери оптимально подходящий пакет для своего бизнеса. Эти три вида упаковки помогут бла бла бла и так далее и тому подобное."})]}),e.jsxs("div",{className:"packing-body hidden",children:[e.jsxs("div",{className:"packing-item",children:[e.jsx("h3",{className:"packing-item-title",children:"Дебют"}),e.jsx("h3",{className:"pack-price",children:"150 000 ₽"}),e.jsx("div",{className:"blackLine"}),e.jsxs("ul",{className:"list-wrapper",children:[e.jsx("li",{className:"packing-list",children:"Логотип"}),e.jsx("li",{className:"packing-list",children:"Фирменный стиль"}),e.jsx("li",{className:"packing-list",children:"Фирменный носители"})]}),e.jsx("button",{className:" packing-btn overallBtn",children:"Оставить заявку →"})]}),e.jsxs("div",{className:"packing-item ",children:[e.jsx("h3",{className:"packing-item-title",children:"Оптимус прайс"}),e.jsx("h3",{className:"pack-price",children:"240 000 ₽"}),e.jsx("div",{className:"blackLine"}),e.jsxs("ul",{className:"list-wrapper",children:[e.jsx("li",{className:"packing-list",children:"Нейминг"}),e.jsx("li",{className:"packing-list",children:"Логотип"}),e.jsx("li",{className:"packing-list",children:"Фирменный стиль"}),e.jsx("li",{className:"packing-list",children:"Фирменные носители"})]}),e.jsx("button",{className:" packing-btn overallBtn",children:"Оставить заявку →"})]}),e.jsxs("div",{className:"packing-item",children:[e.jsx("h3",{className:"packing-item-title",children:"Макси-секси"}),e.jsx("h3",{className:"pack-price",children:"500 000 ₽"}),e.jsx("div",{className:"blackLine"}),e.jsxs("ul",{className:"list-wrapper",children:[e.jsx("li",{className:"packing-list",children:"Бренд-платформа"}),e.jsx("li",{className:"packing-list",children:"Нейминг"}),e.jsx("li",{className:"packing-list",children:"Логотип"}),e.jsx("li",{className:"packing-list",children:"Фирменный стиль"}),e.jsx("li",{className:"packing-list",children:"Фирменный носители"}),e.jsx("li",{className:"packing-list",children:"Бренд-гайд"})]}),e.jsx("button",{className:" packing-btn overallBtn",children:"Оставить заявку →"})]})]})]}),e.jsxs("div",{className:"workWith-wrapper hidden",children:[e.jsx("h2",{className:"overallTitle workWithTitle",children:"Работали с"}),e.jsxs("div",{className:"workWithBody hidden",children:[e.jsx("img",{src:"/business-strategy-project/MainPage/screenOfMainImg.png",alt:"",className:"workWithImg"}),e.jsx("img",{src:"/business-strategy-project/MainPage/ScreenOfAdaptive.png",alt:"",className:"adaptiveParts"})]})]}),e.jsxs("div",{className:"review-wrapper hidden",children:[e.jsxs("div",{className:"review-head",children:[e.jsx("h2",{className:"review-title overallTitle",children:"Отзывы"}),e.jsx("div",{children:e.jsx("button",{className:"overallBtn hasHover review-btn ",children:"Все отзывы →"})})]}),e.jsxs("div",{className:"review-body hidden",children:[e.jsxs("div",{className:"body-content",children:[e.jsxs("div",{className:"thePerson",children:[e.jsxs("div",{className:"person-left",children:[e.jsx("img",{src:"/business-strategy-project/MainPage/the-person.png",alt:"",className:"person-img"}),e.jsxs("div",{className:"person-info",children:[e.jsx("h3",{className:"person-name",children:"Андрей Румянцев"}),e.jsx("p",{className:"person-desc",children:"Генеральный директор, Conect P"})]})]}),e.jsxs("h2",{className:"review-numbers",children:["04",e.jsx("span",{className:"overall-reviews",children:"/10"})]})]}),e.jsx("p",{className:"person-thoughts",children:"The media landscape is changing in front of our eyes, and brands need to adapt how they communicate in order to thrive. Motion is the connective tissue between a brand and its audience. It is a vital component of a brand’s platform, evolving its ecosystem The media landscape is changing in front of"}),e.jsxs("div",{className:"review-foot",children:[e.jsx("button",{className:" review-btn1 hasHover overallBtn hidden",children:"Читать весь отзыв →"}),e.jsx(a,{to:"/Cases",children:e.jsx("button",{className:" review-btn2 hasHover overallBtn hidden",children:"Кейс →"})})]})]}),e.jsx("img",{src:"/business-strategy-project/MainPage/arrow-right.svg",alt:"",className:"arrow-left"}),e.jsx("img",{src:"/business-strategy-project/MainPage/arrow-right.svg",alt:"",className:"arrow-right"})]}),e.jsx("button",{className:"overallBtn review-btn review-btn-b ",children:"Все отзывы →"})]})]})]})};export{L as default};
