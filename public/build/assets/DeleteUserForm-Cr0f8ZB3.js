import{m as p,r as s,c as rt,e as oe,j as m,G as ot}from"./app-pM1GIizI.js";import{T as lt,I as at}from"./TextInput-DySmUlJu.js";import{I as ut}from"./InputLabel-DoJ5WFJ6.js";import{l as Z,s as B,a as A,u as O,b as de,o as w,U as T,C as S,t as fe,y as L,p as it,f as Se,T as st,c as Pe,d as ct,e as K,O as ye,q as te}from"./transition--ojk00m8.js";var be;let k=(be=p.useId)!=null?be:function(){let e=Z(),[t,n]=p.useState(e?()=>B.nextId():null);return A(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function Le(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var C=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(C||{}),De=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(De||{}),dt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(dt||{});function ft(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{});function mt(e,t=0){var n;return e===((n=Le(e))==null?void 0:n.body)?!1:O(t,{0(){return e.matches(le)},1(){let r=e;for(;r!==null;){if(r.matches(le))return!0;r=r.parentElement}return!1}})}var pt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(pt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let gt=["textarea","input"].join(",");function vt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,gt))!=null?n:!1}function ht(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?ht(e):e:ft(e);o.length>0&&l.length>1&&(l=l.filter(v=>!o.includes(v))),r=r??a.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=l.length,h;do{if(c>=d||c+d<=0)return 0;let v=i+c;if(t&16)v=(v+d)%d;else{if(v<0)return 3;if(v>=d)return 1}h=l[v],h==null||h.focus(f),c+=u}while(h!==a.activeElement);return t&6&&vt(h)&&h.select(),2}function Ce(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function wt(){return/Android/gi.test(window.navigator.userAgent)}function Et(){return Ce()||wt()}function X(e,t,n){let r=de(t);s.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Ne(e,t,n){let r=de(t);s.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function yt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,u){if(!r.current||l.defaultPrevented)return;let i=u(l);if(i===null||!i.getRootNode().contains(i)||!i.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(i)||l.composed&&l.composedPath().includes(d))return}return!mt(i,Fe.Loose)&&i.tabIndex!==-1&&l.preventDefault(),t(l,i)}let a=s.useRef(null);X("pointerdown",l=>{var u,i;r.current&&(a.current=((i=(u=l.composedPath)==null?void 0:u.call(l))==null?void 0:i[0])||l.target)},!0),X("mousedown",l=>{var u,i;r.current&&(a.current=((i=(u=l.composedPath)==null?void 0:u.call(l))==null?void 0:i[0])||l.target)},!0),X("click",l=>{Et()||a.current&&(o(l,()=>a.current),a.current=null)},!0),X("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Ne("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>Le(...e),[...e])}function me(e,t){let n=s.useRef([]),r=w(e);s.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let u=r(t,o);return n.current=t,u}},[r,...t])}let bt="div";var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});function xt(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return S({ourProps:a,theirProps:o,slot:{},defaultTag:bt,name:"Hidden"})}let ae=T(xt);function $t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let F=[];$t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Tt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&St(n)?!1:r}function St(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Me=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Me||{});function Ae(e,t,n,r){let o=de(n);s.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Re(e){let t=w(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,fe(()=>{n.current&&t()})}),[t])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Pt(){let e=s.useRef(0);return Ne("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Oe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Lt="div";var ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ke||{});function Dt(e,t){let n=s.useRef(null),r=L(n,t),{initialFocus:o,containers:a,features:l=30,...u}=e;Z()||(l=1);let i=U(n);Nt({ownerDocument:i},!!(l&16));let f=Mt({ownerDocument:i,container:n,initialFocus:o},!!(l&2));At({ownerDocument:i,container:n,containers:a,previousActiveElement:f},!!(l&8));let c=Pt(),d=w(x=>{let E=n.current;E&&(D=>D())(()=>{O(c.current,{[H.Forwards]:()=>{z(E,C.First,{skipElements:[x.relatedTarget]})},[H.Backwards]:()=>{z(E,C.Last,{skipElements:[x.relatedTarget]})}})})}),h=it(),v=s.useRef(!1),$={ref:r,onKeyDown(x){x.key=="Tab"&&(v.current=!0,h.requestAnimationFrame(()=>{v.current=!1}))},onBlur(x){let E=Oe(a);n.current instanceof HTMLElement&&E.add(n.current);let D=x.relatedTarget;D instanceof HTMLElement&&D.dataset.headlessuiFocusGuard!=="true"&&(je(E,D)||(v.current?z(n.current,O(c.current,{[H.Forwards]:()=>C.Next,[H.Backwards]:()=>C.Previous})|C.WrapAround,{relativeTo:x.target}):x.target instanceof HTMLElement&&M(x.target)))}};return p.createElement(p.Fragment,null,!!(l&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}),S({ourProps:$,theirProps:u,defaultTag:Lt,name:"FocusTrap"}),!!(l&4)&&p.createElement(ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:J.Focusable}))}let Ft=T(Dt),j=Object.assign(Ft,{features:ke});function Ct(e=!0){let t=s.useRef(F.slice());return me(([n],[r])=>{r===!0&&n===!1&&fe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Nt({ownerDocument:e},t){let n=Ct(t);me(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&M(n())},[t]),Re(()=>{t&&M(n())})}function Mt({ownerDocument:e,container:t,initialFocus:n},r){let o=s.useRef(null),a=Se();return me(()=>{if(!r)return;let l=t.current;l&&fe(()=>{if(!a.current)return;let u=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===u){o.current=u;return}}else if(l.contains(u)){o.current=u;return}n!=null&&n.current?M(n.current):z(l,C.First)===De.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function At({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=Se();Ae(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let u=Oe(n);t.current instanceof HTMLElement&&u.add(t.current);let i=r.current;if(!i)return;let f=l.target;f&&f instanceof HTMLElement?je(u,f)?(r.current=f,M(f)):(l.preventDefault(),l.stopPropagation(),M(i)):M(r.current)},!0)}function je(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ie=s.createContext(!1);function Rt(){return s.useContext(Ie)}function ue(e){return p.createElement(Ie.Provider,{value:e.force},e.children)}function Ot(e){let t=Rt(),n=s.useContext(He),r=U(e),[o,a]=s.useState(()=>{if(!t&&n!==null||B.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let u=r.createElement("div");return u.setAttribute("id","headlessui-portal-root"),r.body.appendChild(u)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let kt=s.Fragment;function jt(e,t){let n=e,r=s.useRef(null),o=L(st(c=>{r.current=c}),t),a=U(r),l=Ot(r),[u]=s.useState(()=>{var c;return B.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),i=s.useContext(ie),f=Z();return A(()=>{!l||!u||l.contains(u)||(u.setAttribute("data-headlessui-portal",""),l.appendChild(u))},[l,u]),A(()=>{if(u&&i)return i.register(u)},[i,u]),Re(()=>{var c;!l||!u||(u instanceof Node&&l.contains(u)&&l.removeChild(u),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),f?!l||!u?null:rt.createPortal(S({ourProps:{ref:o},theirProps:n,defaultTag:kt,name:"Portal"}),u):null}let It=s.Fragment,He=s.createContext(null);function Ht(e,t){let{target:n,...r}=e,o={ref:L(t)};return p.createElement(He.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:It,name:"Popover.Group"}))}let ie=s.createContext(null);function Bt(){let e=s.useContext(ie),t=s.useRef([]),n=w(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=w(a=>{let l=t.current.indexOf(a);l!==-1&&t.current.splice(l,1),e&&e.unregister(a)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:a}){return p.createElement(ie.Provider,{value:o},a)},[o])]}let Ut=T(jt),Wt=T(Ht),se=Object.assign(Ut,{Group:Wt});function _t(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Yt=typeof Object.is=="function"?Object.is:_t,{useState:Gt,useEffect:Vt,useLayoutEffect:qt,useDebugValue:Kt}=oe;function Xt(e,t,n){const r=t(),[{inst:o},a]=Gt({inst:{value:r,getSnapshot:t}});return qt(()=>{o.value=r,o.getSnapshot=t,ne(o)&&a({inst:o})},[e,r,t]),Vt(()=>(ne(o)&&a({inst:o}),e(()=>{ne(o)&&a({inst:o})})),[e]),Kt(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Yt(n,r)}catch{return!0}}function zt(e,t,n){return t()}const Jt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qt=!Jt,Zt=Qt?zt:Xt,en="useSyncExternalStore"in oe?(e=>e.useSyncExternalStore)(oe):Zt;function tn(e){return en(e.subscribe,e.getSnapshot,e.getSnapshot)}function nn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let l=t[o].call(n,...a);l&&(n=l,r.forEach(u=>u()))}}}function rn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function on(){return Ce()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(a=>a()).some(a=>a.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=Pe();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let i=u.target.closest("a");if(!i)return;let{hash:f}=new URL(i.href),c=e.querySelector(f);c&&!r(c)&&(l=c)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let i=u.target;for(;i.parentElement&&r(i.parentElement);)i=i.parentElement;t.style(i,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let i=u.target;for(;i.parentElement&&i.dataset.headlessuiPortal!==""&&!(i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth);)i=i.parentElement;i.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()},{passive:!1}),t.add(()=>{var u;let i=(u=window.scrollY)!=null?u:window.pageYOffset;a!==i&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function ln(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function an(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let N=nn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Pe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:an(n)},o=[on(),rn(),ln()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});N.subscribe(()=>{let e=N.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&N.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&N.dispatch("TEARDOWN",n)}});function un(e,t,n){let r=tn(N),o=e?r.get(e):void 0,a=o?o.count>0:!1;return A(()=>{if(!(!e||!t))return N.dispatch("PUSH",e,n),()=>N.dispatch("POP",e,n)},[t,e]),a}let re=new Map,I=new Map;function xe(e,t=!0){A(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let u=(l=I.get(r))!=null?l:1;if(u===1?I.delete(r):I.set(r,u-1),u!==1)return;let i=re.get(r);i&&(i["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",i["aria-hidden"]),r.inert=i.inert,re.delete(r))}let a=(n=I.get(r))!=null?n:0;return I.set(r,a+1),a!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function sn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),a=U(o),l=w(()=>{var u,i,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(u=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?u:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((f=(i=o.current)==null?void 0:i.getRootNode())==null?void 0:f.host)||c.some(h=>d.contains(h))||c.push(d));return c});return{resolveContainers:l,contains:w(u=>l().some(i=>i.contains(u))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:p.createElement(ae,{features:J.Hidden,ref:o})},[o,n])}}let pe=s.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function cn(){return s.useContext(pe)}function dn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=cn(),l=w((...u)=>{t==null||t(...u),a(...u)});return A(()=>{let u=o===void 0||o===!0;return u&&l(0,n,r),()=>{u&&l(1,n,r)}},[l,n,r,o]),p.createElement(pe.Provider,{value:l},e)}let Be=s.createContext(null);function Ue(){let e=s.useContext(Be);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return e}function fn(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=w(a=>(t(l=>[...l,a]),()=>t(l=>{let u=l.slice(),i=u.indexOf(a);return i!==-1&&u.splice(i,1),u}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return p.createElement(Be.Provider,{value:o},n.children)},[t])]}let mn="p";function pn(e,t){let n=k(),{id:r=`headlessui-description-${n}`,...o}=e,a=Ue(),l=L(t);A(()=>a.register(r),[r,a.register]);let u={ref:l,...a.props,id:r};return S({ourProps:u,theirProps:o,slot:a.slot||{},defaultTag:mn,name:a.name||"Description"})}let gn=T(pn),vn=Object.assign(gn,{});var hn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(hn||{}),wn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(wn||{});let En={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Q=s.createContext(null);Q.displayName="DialogContext";function W(e){let t=s.useContext(Q);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function yn(e,t,n=()=>[document.body]){un(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function bn(e,t){return O(t.type,En,e,t)}let xn="div",$n=ye.RenderStrategy|ye.Static;function Tn(e,t){let n=k(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:l,role:u="dialog",__demoMode:i=!1,...f}=e,[c,d]=s.useState(0),h=s.useRef(!1);u=function(){return u==="dialog"||u==="alertdialog"?u:(h.current||(h.current=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let v=ct();o===void 0&&v!==null&&(o=(v&K.Open)===K.Open);let $=s.useRef(null),x=L($,t),E=U($),D=e.hasOwnProperty("open")||v!==null,ge=e.hasOwnProperty("onClose");if(!D&&!ge)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ge)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let y=o?0:1,[_,We]=s.useReducer(bn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),R=w(()=>a(!1)),ve=w(g=>We({type:0,id:g})),Y=Z()?i?!1:y===0:!1,G=c>1,he=s.useContext(Q)!==null,[_e,Ye]=Bt(),Ge={get current(){var g;return(g=_.panelRef.current)!=null?g:$.current}},{resolveContainers:ee,mainTreeNodeRef:V,MainTreeNode:Ve}=sn({portals:_e,defaultContainers:[Ge]}),qe=G?"parent":"leaf",we=v!==null?(v&K.Closing)===K.Closing:!1,Ke=he||we?!1:Y,Xe=s.useCallback(()=>{var g,P;return(P=Array.from((g=E==null?void 0:E.querySelectorAll("body > *"))!=null?g:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(V.current)&&b instanceof HTMLElement))!=null?P:null},[V]);xe(Xe,Ke);let ze=G?!0:Y,Je=s.useCallback(()=>{var g,P;return(P=Array.from((g=E==null?void 0:E.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(b=>b.contains(V.current)&&b instanceof HTMLElement))!=null?P:null},[V]);xe(Je,ze),yt(ee,g=>{g.preventDefault(),R()},!(!Y||G));let Qe=!(G||y!==0);Ae(E==null?void 0:E.defaultView,"keydown",g=>{Qe&&(g.defaultPrevented||g.key===Me.Escape&&(g.preventDefault(),g.stopPropagation(),R()))}),yn(E,!(we||y!==0||he),ee),s.useEffect(()=>{if(y!==0||!$.current)return;let g=new ResizeObserver(P=>{for(let b of P){let q=b.target.getBoundingClientRect();q.x===0&&q.y===0&&q.width===0&&q.height===0&&R()}});return g.observe($.current),()=>g.disconnect()},[y,$,R]);let[Ze,et]=fn(),tt=s.useMemo(()=>[{dialogState:y,close:R,setTitleId:ve},_],[y,_,R,ve]),Ee=s.useMemo(()=>({open:y===0}),[y]),nt={ref:x,id:r,role:u,"aria-modal":y===0?!0:void 0,"aria-labelledby":_.titleId,"aria-describedby":Ze};return p.createElement(dn,{type:"Dialog",enabled:y===0,element:$,onUpdate:w((g,P)=>{P==="Dialog"&&O(g,{[ce.Add]:()=>d(b=>b+1),[ce.Remove]:()=>d(b=>b-1)})})},p.createElement(ue,{force:!0},p.createElement(se,null,p.createElement(Q.Provider,{value:tt},p.createElement(se.Group,{target:$},p.createElement(ue,{force:!1},p.createElement(et,{slot:Ee,name:"Dialog.Description"},p.createElement(j,{initialFocus:l,containers:ee,features:Y?O(qe,{parent:j.features.RestoreFocus,leaf:j.features.All&~j.features.FocusLock}):j.features.None},p.createElement(Ye,null,S({ourProps:nt,theirProps:f,slot:Ee,defaultTag:xn,features:$n,visible:y===0,name:"Dialog"}))))))))),p.createElement(Ve,null))}let Sn="div";function Pn(e,t){let n=k(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=W("Dialog.Overlay"),u=L(t),i=w(c=>{if(c.target===c.currentTarget){if(Tt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),f=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:u,id:r,"aria-hidden":!0,onClick:i},theirProps:o,slot:f,defaultTag:Sn,name:"Dialog.Overlay"})}let Ln="div";function Dn(e,t){let n=k(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=W("Dialog.Backdrop"),u=L(t);s.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let i=s.useMemo(()=>({open:a===0}),[a]);return p.createElement(ue,{force:!0},p.createElement(se,null,S({ourProps:{ref:u,id:r,"aria-hidden":!0},theirProps:o,slot:i,defaultTag:Ln,name:"Dialog.Backdrop"})))}let Fn="div";function Cn(e,t){let n=k(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=W("Dialog.Panel"),u=L(t,l.panelRef),i=s.useMemo(()=>({open:a===0}),[a]),f=w(c=>{c.stopPropagation()});return S({ourProps:{ref:u,id:r,onClick:f},theirProps:o,slot:i,defaultTag:Fn,name:"Dialog.Panel"})}let Nn="h2";function Mn(e,t){let n=k(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=W("Dialog.Title"),u=L(t);s.useEffect(()=>(l(r),()=>l(null)),[r,l]);let i=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:u,id:r},theirProps:o,slot:i,defaultTag:Nn,name:"Dialog.Title"})}let An=T(Tn),Rn=T(Dn),On=T(Cn),kn=T(Pn),jn=T(Mn),$e=Object.assign(An,{Backdrop:Rn,Panel:On,Overlay:kn,Title:jn,Description:vn});function Te({className:e="",disabled:t,children:n,...r}){return m.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function In({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return m.jsx(te,{show:t,as:s.Fragment,leave:"duration-200",children:m.jsxs($e,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[m.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:m.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),m.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:m.jsx($e.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function Hn({type:e="button",className:t="",disabled:n,children:r,...o}){return m.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Vn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:a,delete:l,processing:u,reset:i,errors:f}=ot({password:""}),c=()=>{n(!0)},d=v=>{v.preventDefault(),l(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>r.current.focus(),onFinish:()=>i()})},h=()=>{n(!1),i()};return m.jsxs("section",{className:`space-y-6 ${e}`,children:[m.jsxs("header",{children:[m.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),m.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),m.jsx(Te,{onClick:c,children:"Delete Account"}),m.jsx(In,{show:t,onClose:h,children:m.jsxs("form",{onSubmit:d,className:"p-6",children:[m.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),m.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),m.jsxs("div",{className:"mt-6",children:[m.jsx(ut,{htmlFor:"password",value:"Password",className:"sr-only"}),m.jsx(lt,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:v=>a("password",v.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),m.jsx(at,{message:f.password,className:"mt-2"})]}),m.jsxs("div",{className:"mt-6 flex justify-end",children:[m.jsx(Hn,{onClick:h,children:"Cancel"}),m.jsx(Te,{className:"ms-3",disabled:u,children:"Delete Account"})]})]})})]})}export{Vn as default};
