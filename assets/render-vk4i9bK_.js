var F=Object.defineProperty;var T=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>T(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();const q=()=>{const e=new Set;return{subscribe:r=>e.add(r),notify:()=>e.forEach(r=>r())}},B=(e,t)=>{const{subscribe:s,notify:r}=q();let a={...e};const l=c=>{a={...a,...c},r()},o=()=>({...a}),u=Object.fromEntries(Object.entries(t).map(([c,y])=>[c,(...m)=>l(y(o(),...m))]));return{getState:o,setState:l,subscribe:s,actions:u}},H=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:l=>t.setItem(e,JSON.stringify(l)),reset:()=>t.removeItem(e)});function n(e,t,...s){const r=a=>a.reduce((l,o)=>!o&&o!==0?l:l.concat(Array.isArray(o)?r(o):o),[]);return{type:e,props:t,children:r(s)}}const f=new Map,S=new WeakMap;function V(e){S.has(e)||S.set(e,new Set);const t=S.get(e);f.forEach((s,r)=>{t.has(r)||(e.addEventListener(r,a=>{for(const[l,o]of s)l.contains(a.target)&&o.call(l,a)}),t.add(r))})}function I(e,t,s){f.has(t)||f.set(t,new Map),f.get(t).set(e,s)}function W(e,t,s){const r=f.get(t);if(!r)return;r.get(e)===s&&r.delete(e)}function p(e){if(Array.isArray(e)){const s=document.createDocumentFragment();return e.forEach(r=>{s.appendChild(p(r))}),s}if(e==null||typeof e=="boolean")return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e.toString());const t=document.createElement(e.type);return k(t,e.props),e.children.forEach(s=>{t.appendChild(p(s))}),t}function k(e,t){t!=null&&Object.entries(t).forEach(([s,r])=>{if(s.startsWith("on")){const a=s.toLowerCase().substring(2);I(e,a,r)}else s==="className"?e.setAttribute("class",r):e.setAttribute(s,r)})}function v(e){if(e==null||typeof e=="boolean")return"";if(typeof e=="string"||typeof e=="number")return`${e}`;if(typeof e.type=="function"){const t=e.type;return v(t({...e.props,children:e.children}))}return{type:e.type,props:e.props,children:e.children.map(v).filter(t=>t!=="")}}function G(e,t={},s={}){t&&Object.entries(t).forEach(([r,a])=>{if(r.startsWith("on")){const l=r.slice(2).toLowerCase();s[r]!==a&&I(e,l,a)}else{const l=r==="className"?"class":r;s[r]!==a&&e.setAttribute(l,a)}}),s&&Object.keys(s).forEach(r=>{if(!t||!(r in t))if(r.startsWith("on")){const a=r.slice(2).toLowerCase();W(e,a,s[r])}else{const a=r==="className"?"class":r;e.removeAttribute(a)}})}function M(e,t,s,r=0){if(!e)return;const a=e.childNodes[r];if(t&&!s){const c=p(t);return e.appendChild(c),null}if(!t&&s)return e.removeChild(a),null;if(typeof t=="string"){if(typeof s=="string"){const c=e.childNodes[r];String(t)!==String(s)&&(c.nodeValue=String(t))}else{const c=document.createTextNode(String(t));e.replaceChild(c,e.childNodes[r])}return null}if(t.type!==s.type){const c=p(t);return e.replaceChild(c,a),null}G(a,t.props,s.props);const l=t.children||[],o=s.children||[],u=Math.max(l.length,o.length);for(let c=0;c<u;c++)M(a,l[c],o[c],c)}const L=new WeakMap;function J(e,t){const s=v(e),r=L.get(t);if(r)M(t,s,r);else{const a=p(s);t.replaceChildren(a)}L.set(t,s),V(t)}const z=1e3,U=z*60,A=U*60,K=A*24,Y=e=>{const t=Date.now()-e;return t<U?"방금 전":t<A?`${Math.floor(t/U)}분 전`:t<K?`${Math.floor(t/A)}시간 전`:new Date(e).toLocaleString()},g=H("user"),Q=1e3,d=Q*60,X=d*60,i=B({currentUser:g.get(),loggedIn:!!g.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*d,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*d,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*d,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*d,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*X,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return g.reset(),{...e,currentUser:null,loggedIn:!1}}}),Z=({id:e,author:t,time:s,content:r,likeUsers:a})=>{const{loggedIn:l,posts:o,currentUser:u}=i.getState(),c=()=>{if(!l)return alert("로그인 후 이용해주세요"),null;const y=o.map(m=>m.id===e?m.likeUsers.includes(u.username)?{...m,likeUsers:m.likeUsers.filter($=>$!==u.username)}:{...m,likeUsers:[...m.likeUsers,u.username]}:m);i.setState({posts:y})};return n("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},n("div",{className:"flex items-center mb-2"},n("div",null,n("div",{className:"font-bold"},t),n("div",{className:"text-gray-500 text-sm"},Y(s)))),n("p",null,r),n("div",{className:"mt-2 flex justify-between text-gray-500"},n("span",{className:`like-button cursor-pointer${u&&a.includes(u.username)?" text-blue-500":""}`,onClick:c},"좋아요 ",a.length),n("span",null,"댓글"),n("span",null,"공유")))},_=()=>{const e=i.getState().currentUser;return n("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},n("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),n("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded",onClick:s=>{s.preventDefault();const r=document.getElementById("post-content").value,a={id:i.getState().posts.length+1,author:e.username,time:Date.now(),content:r,likeUsers:[]};i.setState({posts:[...i.getState().posts,a]}),document.getElementById("post-content").value=""}},"게시"))},j=()=>n("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},n("h1",{className:"text-2xl font-bold"},"항해플러스")),P=()=>n("footer",{className:"bg-gray-200 p-4 text-center"},n("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),b={value:null,get(){return this.value},set(e){this.value=e}},R="/front_5th_chapter1-2",N=e=>window.location.pathname===R+e?"text-blue-600 font-bold":"text-gray-600";function E({onClick:e,children:t,...s}){return n("a",{onClick:a=>{a.preventDefault(),e==null||e(),b.get().push(a.target.href.replace(window.location.origin,""))},...s},t)}const O=()=>{const{loggedIn:e}=i.getState(),{logout:t}=i.actions;return n("nav",{className:"bg-white shadow-md p-2 sticky top-14"},n("ul",{className:"flex justify-around"},n("li",null,n(E,{href:"/",className:N("/")},"홈")),!e&&n("li",null,n(E,{href:"/login",className:N("/login")},"로그인")),e&&n("li",null,n(E,{href:"/profile",className:N("/profile")},"프로필")),e&&n("li",null,n("a",{href:"#",id:"logout",className:"text-gray-600",onClick:s=>{s.preventDefault(),t()}},"로그아웃"))))},re=()=>{const{posts:e,loggedIn:t}=i.getState();return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(j,null),n(O,null),n("main",{className:"p-4"},t?n(_,null):null,n("div",{id:"posts-container",className:"space-y-4"},[...e].sort((s,r)=>r.time-s.time).map(s=>n(Z,{...s})))),n(P,null)))};function ee(e){const t={username:e,email:"",bio:""};i.setState({currentUser:t,loggedIn:!0}),g.set(t)}const ae=()=>n("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},n("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),n("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const s=document.getElementById("username").value;ee(s)}},n("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),n("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),n("div",{className:"mt-4 text-center"},n("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),n("hr",{className:"my-6"}),n("div",{className:"text-center"},n("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),te=()=>n("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},n("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},n("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),n("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),n("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),n("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),n("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function ne(e){const t={...i.getState().currentUser,...e};i.setState({currentUser:t}),g.set(t),alert("프로필이 업데이트되었습니다.")}const le=()=>{const{loggedIn:e,currentUser:t}=i.getState(),{username:s="",email:r="",bio:a=""}=t??{};return n("div",{className:"bg-gray-100 min-h-screen flex justify-center"},n("div",{className:"max-w-md w-full"},n(j,null),n(O,{loggedIn:e}),n("main",{className:"p-4"},n("div",{className:"bg-white p-8 rounded-lg shadow-md"},n("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),n("form",{id:"profile-form",onSubmit:o=>{o.preventDefault();const u=new FormData(o.target),c=Object.fromEntries(u);ne(c)}},n("div",{className:"mb-4"},n("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),n("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:s,required:!0})),n("div",{className:"mb-4"},n("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),n("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:r,required:!0})),n("div",{className:"mb-6"},n("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),n("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},a)),n("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),n(P,null)))},h=class h extends Error{constructor(){super(h.MESSAGE)}};w(h,"MESSAGE","ForbiddenError");let C=h;const x=class x extends Error{constructor(){super(x.MESSAGE)}};w(x,"MESSAGE","UnauthorizedError");let D=x;function oe(){const e=b.get().getTarget()??te,t=document.querySelector("#root");try{J(n(e,null),t)}catch(s){if(s instanceof C){b.get().push("/");return}if(s instanceof D){b.get().push("/login");return}console.error(s)}}export{C as F,re as H,ae as L,le as P,D as U,oe as a,n as b,q as c,i as g,b as r};
