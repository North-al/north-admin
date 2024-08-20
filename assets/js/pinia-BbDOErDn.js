import{ak as B,r as H,al as J,A as G,w as $,J as T,B as p,am as K,ad as tt,an as et,g as st,f as nt,n as ot,K as ct,z as rt}from"./@vue-DkJDIrp-.js";var ut=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let M;const R=t=>M=t,z=Symbol();function L(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var E;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(E||(E={}));function St(){const t=B(!0),c=t.run(()=>H({}));let s=[],e=[];const r=J({install(u){R(r),r._a=u,u.provide(z,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ut?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const D=()=>{};function F(t,c,s,e=D){t.push(c);const r=()=>{const u=t.indexOf(c);u>-1&&(t.splice(u,1),e())};return!s&&st()&&nt(r),r}function P(t,...c){t.slice().forEach(s=>{s(...c)})}const at=t=>t(),V=Symbol(),I=Symbol();function O(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];L(r)&&L(e)&&t.hasOwnProperty(s)&&!p(e)&&!K(e)?t[s]=O(r,e):t[s]=e}return t}const ft=Symbol();function lt(t){return!L(t)||!t.hasOwnProperty(ft)}const{assign:y}=Object;function it(t){return!!(p(t)&&t.effect)}function ht(t,c,s,e){const{state:r,actions:u,getters:f}=c,a=s.state.value[t];let g;function b(){a||(s.state.value[t]=r?r():{});const S=ct(s.state.value[t]);return y(S,u,Object.keys(f||{}).reduce((v,m)=>(v[m]=J(rt(()=>{R(s);const _=s._s.get(t);return f[m].call(_,_)})),v),{}))}return g=q(t,b,c,s,e,!0),g}function q(t,c,s={},e,r,u){let f;const a=y({actions:{}},s),g={deep:!0};let b,S,v=[],m=[],_;const d=e.state.value[t];!u&&!d&&(e.state.value[t]={}),H({});let W;function N(o){let n;b=S=!1,typeof o=="function"?(o(e.state.value[t]),n={type:E.patchFunction,storeId:t,events:_}):(O(e.state.value[t],o),n={type:E.patchObject,payload:o,storeId:t,events:_});const l=W=Symbol();ot().then(()=>{W===l&&(b=!0)}),S=!0,P(v,n,e.state.value[t])}const Q=u?function(){const{state:n}=s,l=n?n():{};this.$patch(j=>{y(j,l)})}:D;function U(){f.stop(),v=[],m=[],e._s.delete(t)}const A=(o,n="")=>{if(V in o)return o[I]=n,o;const l=function(){R(e);const j=Array.from(arguments),w=[],k=[];function Y(i){w.push(i)}function Z(i){k.push(i)}P(m,{args:j,name:l[I],store:h,after:Y,onError:Z});let x;try{x=o.apply(this&&this.$id===t?this:h,j)}catch(i){throw P(k,i),i}return x instanceof Promise?x.then(i=>(P(w,i),i)).catch(i=>(P(k,i),Promise.reject(i))):(P(w,x),x)};return l[V]=!0,l[I]=n,l},X={_p:e,$id:t,$onAction:F.bind(null,m),$patch:N,$reset:Q,$subscribe(o,n={}){const l=F(v,o,n.detached,()=>j()),j=f.run(()=>$(()=>e.state.value[t],w=>{(n.flush==="sync"?S:b)&&o({storeId:t,type:E.direct,events:_},w)},y({},g,n)));return l},$dispose:U},h=T(X);e._s.set(t,h);const C=(e._a&&e._a.runWithContext||at)(()=>e._e.run(()=>(f=B()).run(()=>c({action:A}))));for(const o in C){const n=C[o];if(p(n)&&!it(n)||K(n))u||(d&&lt(n)&&(p(n)?n.value=d[o]:O(n,d[o])),e.state.value[t][o]=n);else if(typeof n=="function"){const l=A(n,o);C[o]=l,a.actions[o]=n}}return y(h,C),y(tt(h),C),Object.defineProperty(h,"$state",{get:()=>e.state.value[t],set:o=>{N(n=>{y(n,o)})}}),e._p.forEach(o=>{y(h,f.run(()=>o({store:h,app:e._a,pinia:e,options:a})))}),d&&u&&s.hydrate&&s.hydrate(h.$state,d),b=!0,S=!0,h}function vt(t,c,s){let e,r;const u=typeof c=="function";typeof t=="string"?(e=t,r=u?s:c):(r=t,e=t.id);function f(a,g){const b=et();return a=a||(b?G(z,null):null),a&&R(a),a=M,a._s.has(e)||(u?q(e,c,r,a):ht(e,r,a)),a._s.get(e)}return f.$id=e,f}export{St as c,vt as d};
