import{i as g,a as v,w as z,r as b,b as I,c as i,u as V,g as C,e as w,p as E,d as N,f as _,j as h}from"./@vue-BElfA4Ex.js";import{f as k}from"./lodash-es-Dx9PT-t0.js";const m=e=>Object.keys(e),x="__epPropKey",d=e=>e,F=e=>g(e)&&!!e[x],S=(e,o)=>{if(!g(e)||F(e))return e;const{values:t,required:n,default:s,type:u,validator:a}=e,c={type:u,required:!!n,validator:t||a?y=>{let r=!1,f=[];if(t&&(f=Array.from(t),v(e,"default")&&f.push(s),r||(r=f.includes(y))),a&&(r||(r=a(y))),!r&&f.length>0){const j=[...new Set(f)].map(K=>JSON.stringify(K)).join(", ");z(`Invalid prop: validation failed${o?` for prop "${o}"`:""}. Expected one of [${j}], got value ${JSON.stringify(y)}.`)}return r}:void 0,[x]:!0};return v(e,"default")&&(c.default=s),c},O=e=>k(Object.entries(e).map(([o,t])=>[o,S(t,o)])),$=(e,o)=>(e.install=t=>{for(const n of[e,...Object.values({})])t.component(n.name,n)},e),q=["","default","small","large"],B=Symbol("localeContextKey"),J=Symbol("namespaceContextKey");b(0);const T=Symbol("zIndexContextKey"),A=S({type:String,values:q,required:!1}),G=Symbol("size"),Y=Symbol("emptyValuesContextKey"),Z=O({emptyValues:Array,valueOnClear:{type:[String,Number,Boolean,Function],default:void 0,validator:e=>I(e)?!e():!e}}),P=Symbol(),p=b();function D(e,o=void 0){return C()?w(P,p):p}const H=(e,o,t=!1)=>{var n;const s=!!C(),u=s?D():void 0,a=(n=void 0)!=null?n:s?E:void 0;if(!a)return;const l=i(()=>{const c=V(e);return u!=null&&u.value?L(u.value,c):c});return a(P,l),a(B,i(()=>l.value.locale)),a(J,i(()=>l.value.namespace)),a(T,i(()=>l.value.zIndex)),a(G,{size:i(()=>l.value.size||"")}),a(Y,i(()=>({emptyValues:l.value.emptyValues,valueOnClear:l.value.valueOnClear}))),(t||!p.value)&&(p.value=l.value),l},L=(e,o)=>{const t=[...new Set([...m(e),...m(o)])],n={};for(const s of t)n[s]=o[s]!==void 0?o[s]:e[s];return n},M=O({a11y:{type:Boolean,default:!0},locale:{type:d(Object)},size:A,button:{type:d(Object)},experimentalFeatures:{type:d(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:d(Object)},zIndex:Number,namespace:{type:String,default:"el"},...Z}),Q={},R=N({name:"ElConfigProvider",props:M,setup(e,{slots:o}){_(()=>e.message,n=>{Object.assign(Q,n??{})},{immediate:!0,deep:!0});const t=H(e);return()=>h(o,"default",{config:t==null?void 0:t.value})}}),X=$(R);export{X as E};
