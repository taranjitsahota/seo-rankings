import{r as l,m as y,e as se}from"./app-pM1GIizI.js";var Ce=Object.defineProperty,Oe=(e,t,r)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t,r)=>(Oe(e,typeof t!="symbol"?t+"":t,r),r);let Ne=class{constructor(){W(this,"current",this.detect()),W(this,"handoffState","pending"),W(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},U=new Ne,L=(e,t)=>{U.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function x(e){let t=l.useRef(e);return L(()=>{t.current=e},[e]),t}let F=function(e){let t=x(e);return y.useCallback((...r)=>t.current(...r),[t])};function $e(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function k(){let e=[],t={addEventListener(r,n,a,f){return r.addEventListener(n,a,f),t.add(()=>r.removeEventListener(n,a,f))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return $e(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,a){let f=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:a}),this.add(()=>{Object.assign(r.style,{[n]:f})})},group(r){let n=k();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let a of e.splice(n,1))a()}},dispose(){for(let r of e.splice(0))r()}};return t}function oe(){let[e]=l.useState(k);return l.useEffect(()=>()=>e.dispose(),[e]),e}function Re(){let e=typeof document>"u";return"useSyncExternalStore"in se?(t=>t.useSyncExternalStore)(se)(()=>()=>{},()=>!1,()=>!e):!1}function ce(){let e=Re(),[t,r]=l.useState(U.isHandoffComplete);return t&&U.isHandoffComplete===!1&&r(!1),l.useEffect(()=>{t!==!0&&r(!0)},[t]),l.useEffect(()=>U.handoff(),[]),e?!1:t}function E(e,t,...r){if(e in t){let a=t[e];return typeof a=="function"?a(...r):a}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,E),n}let fe=Symbol();function _e(e,t=!0){return Object.assign(e,{[fe]:t})}function de(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let r=F(n=>{for(let a of t.current)a!=null&&(typeof a=="function"?a(n):a.current=n)});return e.every(n=>n==null||(n==null?void 0:n[fe]))?void 0:r}function I(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var me=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(me||{}),C=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(C||{});function pe({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:a,visible:f=!0,name:m,mergeRefs:c}){c=c??je;let s=he(t,e);if(f)return M(s,r,n,m,c);let i=a??0;if(i&2){let{static:u=!1,...g}=s;if(u)return M(g,r,n,m,c)}if(i&1){let{unmount:u=!0,...g}=s;return E(u?0:1,{0(){return null},1(){return M({...g,hidden:!0,style:{display:"none"}},r,n,m,c)}})}return M(s,r,n,m,c)}function M(e,t={},r,n,a){let{as:f=r,children:m,refName:c="ref",...s}=_(e,["unmount","static"]),i=e.ref!==void 0?{[c]:e.ref}:{},u=typeof m=="function"?m(t):m;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let g={};if(t){let v=!1,h=[];for(let[d,p]of Object.entries(t))typeof p=="boolean"&&(v=!0),p===!0&&h.push(d);v&&(g["data-headlessui-state"]=h.join(" "))}if(f===l.Fragment&&Object.keys(ie(s)).length>0){if(!l.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let v=u.props,h=typeof(v==null?void 0:v.className)=="function"?(...p)=>I(v==null?void 0:v.className(...p),s.className):I(v==null?void 0:v.className,s.className),d=h?{className:h}:{};return l.cloneElement(u,Object.assign({},he(u.props,ie(_(s,["ref"]))),g,i,{ref:a(u.ref,i.ref)},d))}return l.createElement(f,Object.assign({},_(s,["ref"]),f!==l.Fragment&&i,f!==l.Fragment&&g),u)}function je(...e){return e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}function he(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let a in n)a.startsWith("on")&&typeof n[a]=="function"?(r[a]!=null||(r[a]=[]),r[a].push(n[a])):t[a]=n[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](a,...f){let m=r[n];for(let c of m){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;c(a,...f)}}});return t}function ee(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ie(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function _(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let te=l.createContext(null);te.displayName="OpenClosedContext";var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function ve(){return l.useContext(te)}function xe({value:e,children:t}){return y.createElement(te.Provider,{value:e},t)}function re(){let e=l.useRef(!1);return L(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Pe(e=0){let[t,r]=l.useState(e),n=re(),a=l.useCallback(s=>{n.current&&r(i=>i|s)},[t,n]),f=l.useCallback(s=>!!(t&s),[t]),m=l.useCallback(s=>{n.current&&r(i=>i&~s)},[r,n]),c=l.useCallback(s=>{n.current&&r(i=>i^s)},[r]);return{flags:t,addFlag:a,hasFlag:f,removeFlag:m,toggleFlag:c}}function Le(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function J(e,...t){e&&t.length>0&&e.classList.add(...t)}function X(e,...t){e&&t.length>0&&e.classList.remove(...t)}function ke(e,t){let r=k();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[f,m]=[n,a].map(s=>{let[i=0]=s.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,g)=>g-u);return i}),c=f+m;if(c!==0){r.group(i=>{i.setTimeout(()=>{t(),i.dispose()},c),i.addEventListener(e,"transitionrun",u=>{u.target===u.currentTarget&&i.dispose()})});let s=r.addEventListener(e,"transitionend",i=>{i.target===i.currentTarget&&(t(),s())})}else t();return r.add(()=>t()),r.dispose}function Ae(e,t,r,n){let a=r?"enter":"leave",f=k(),m=n!==void 0?Le(n):()=>{};a==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let c=E(a,{enter:()=>t.enter,leave:()=>t.leave}),s=E(a,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),i=E(a,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return X(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),J(e,...t.base,...c,...i),f.nextFrame(()=>{X(e,...t.base,...c,...i),J(e,...t.base,...c,...s),ke(e,()=>(X(e,...t.base,...c),J(e,...t.base,...t.entered),m()))}),f.dispose}function He({immediate:e,container:t,direction:r,classes:n,onStart:a,onStop:f}){let m=re(),c=oe(),s=x(r);L(()=>{e&&(s.current="enter")},[e]),L(()=>{let i=k();c.add(i.dispose);let u=t.current;if(u&&s.current!=="idle"&&m.current)return i.dispose(),a.current(s.current),i.add(Ae(u,n.current,s.current==="enter",()=>{i.dispose(),f.current(s.current)})),i.dispose},[r])}function w(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let B=l.createContext(null);B.displayName="TransitionContext";var qe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(qe||{});function De(){let e=l.useContext(B);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Me(){let e=l.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let V=l.createContext(null);V.displayName="NestingContext";function Y(e){return"children"in e?Y(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ge(e,t){let r=x(e),n=l.useRef([]),a=re(),f=oe(),m=F((h,d=C.Hidden)=>{let p=n.current.findIndex(({el:o})=>o===h);p!==-1&&(E(d,{[C.Unmount](){n.current.splice(p,1)},[C.Hidden](){n.current[p].state="hidden"}}),f.microTask(()=>{var o;!Y(n)&&a.current&&((o=r.current)==null||o.call(r))}))}),c=F(h=>{let d=n.current.find(({el:p})=>p===h);return d?d.state!=="visible"&&(d.state="visible"):n.current.push({el:h,state:"visible"}),()=>m(h,C.Unmount)}),s=l.useRef([]),i=l.useRef(Promise.resolve()),u=l.useRef({enter:[],leave:[],idle:[]}),g=F((h,d,p)=>{s.current.splice(0),t&&(t.chains.current[d]=t.chains.current[d].filter(([o])=>o!==h)),t==null||t.chains.current[d].push([h,new Promise(o=>{s.current.push(o)})]),t==null||t.chains.current[d].push([h,new Promise(o=>{Promise.all(u.current[d].map(([$,R])=>R)).then(()=>o())})]),d==="enter"?i.current=i.current.then(()=>t==null?void 0:t.wait.current).then(()=>p(d)):p(d)}),v=F((h,d,p)=>{Promise.all(u.current[d].splice(0).map(([o,$])=>$)).then(()=>{var o;(o=s.current.shift())==null||o()}).then(()=>p(d))});return l.useMemo(()=>({children:n,register:c,unregister:m,onStart:g,onStop:v,wait:i,chains:u}),[c,m,n,g,v,u,i])}function Ue(){}let Ie=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ue(e){var t;let r={};for(let n of Ie)r[n]=(t=e[n])!=null?t:Ue;return r}function Be(e){let t=l.useRef(ue(e));return l.useEffect(()=>{t.current=ue(e)},[e]),t}let Ve="div",be=me.RenderStrategy;function Ye(e,t){var r,n;let{beforeEnter:a,afterEnter:f,beforeLeave:m,afterLeave:c,enter:s,enterFrom:i,enterTo:u,entered:g,leave:v,leaveFrom:h,leaveTo:d,...p}=e,o=l.useRef(null),$=de(o,t),R=(r=p.unmount)==null||r?C.Unmount:C.Hidden,{show:b,appear:O,initial:ne}=De(),[N,z]=l.useState(b?"visible":"hidden"),ae=Me(),{register:A,unregister:H}=ae;l.useEffect(()=>A(o),[A,o]),l.useEffect(()=>{if(R===C.Hidden&&o.current){if(b&&N!=="visible"){z("visible");return}return E(N,{hidden:()=>H(o),visible:()=>A(o)})}},[N,o,A,H,b,R]);let G=x({base:w(p.className),enter:w(s),enterFrom:w(i),enterTo:w(u),entered:w(g),leave:w(v),leaveFrom:w(h),leaveTo:w(d)}),q=Be({beforeEnter:a,afterEnter:f,beforeLeave:m,afterLeave:c}),K=ce();l.useEffect(()=>{if(K&&N==="visible"&&o.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[o,N,K]);let Ee=ne&&!O,le=O&&b&&ne,Te=!K||Ee?"idle":b?"enter":"leave",P=Pe(0),Fe=F(S=>E(S,{enter:()=>{P.addFlag(T.Opening),q.current.beforeEnter()},leave:()=>{P.addFlag(T.Closing),q.current.beforeLeave()},idle:()=>{}})),Se=F(S=>E(S,{enter:()=>{P.removeFlag(T.Opening),q.current.afterEnter()},leave:()=>{P.removeFlag(T.Closing),q.current.afterLeave()},idle:()=>{}})),D=ge(()=>{z("hidden"),H(o)},ae),Q=l.useRef(!1);He({immediate:le,container:o,classes:G,direction:Te,onStart:x(S=>{Q.current=!0,D.onStart(o,S,Fe)}),onStop:x(S=>{Q.current=!1,D.onStop(o,S,Se),S==="leave"&&!Y(D)&&(z("hidden"),H(o))})});let j=p,we={ref:$};return le?j={...j,className:I(p.className,...G.current.enter,...G.current.enterFrom)}:Q.current&&(j.className=I(p.className,(n=o.current)==null?void 0:n.className),j.className===""&&delete j.className),y.createElement(V.Provider,{value:D},y.createElement(xe,{value:E(N,{visible:T.Open,hidden:T.Closed})|P.flags},pe({ourProps:we,theirProps:j,defaultTag:Ve,features:be,visible:N==="visible",name:"Transition.Child"})))}function ze(e,t){let{show:r,appear:n=!1,unmount:a=!0,...f}=e,m=l.useRef(null),c=de(m,t);ce();let s=ve();if(r===void 0&&s!==null&&(r=(s&T.Open)===T.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[i,u]=l.useState(r?"visible":"hidden"),g=ge(()=>{u("hidden")}),[v,h]=l.useState(!0),d=l.useRef([r]);L(()=>{v!==!1&&d.current[d.current.length-1]!==r&&(d.current.push(r),h(!1))},[d,r]);let p=l.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);l.useEffect(()=>{if(r)u("visible");else if(!Y(g))u("hidden");else{let b=m.current;if(!b)return;let O=b.getBoundingClientRect();O.x===0&&O.y===0&&O.width===0&&O.height===0&&u("hidden")}},[r,g]);let o={unmount:a},$=F(()=>{var b;v&&h(!1),(b=e.beforeEnter)==null||b.call(e)}),R=F(()=>{var b;v&&h(!1),(b=e.beforeLeave)==null||b.call(e)});return y.createElement(V.Provider,{value:g},y.createElement(B.Provider,{value:p},pe({ourProps:{...o,as:l.Fragment,children:y.createElement(ye,{ref:c,...o,...f,beforeEnter:$,beforeLeave:R})},theirProps:{},defaultTag:l.Fragment,features:be,visible:i==="visible",name:"Transition"})))}function Ge(e,t){let r=l.useContext(B)!==null,n=ve()!==null;return y.createElement(y.Fragment,null,!r&&n?y.createElement(Z,{ref:t,...e}):y.createElement(ye,{ref:t,...e}))}let Z=ee(ze),ye=ee(Ye),Ke=ee(Ge),Je=Object.assign(Z,{Child:Ke,Root:Z});export{pe as C,me as O,_e as T,ee as U,L as a,x as b,k as c,ve as d,T as e,re as f,ce as l,F as o,oe as p,Je as q,U as s,$e as t,E as u,de as y};
