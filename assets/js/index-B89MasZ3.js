import{x as z,y as C,z as E,A as w}from"./element-plus-C_lssbKu.js";import{d as v,aw as _,ax as f,Z as N,b as B,o as x,c as k,O as l,R as d,G as M,u as n,F as U,r as b,a as y,V as h}from"./@vue-DHSbld5D.js";import"./lodash-es-Dz4Jxgv8.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-BAJ0Jqbi.js";import"./@element-plus-DJg6EqGG.js";import"./@ctrl-r5W6hzzQ.js";import"./@popperjs-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";const V=v({__name:"index",props:_({data:{default:()=>[]},total:{default:0}},{page:{type:Number,default:1},pageModifiers:{},limit:{type:Number,default:10},limitModifiers:{}}),emits:_(["change"],["update:page","update:limit"]),setup(u,{emit:t}){const s=f(u,"page"),o=f(u,"limit"),c=N(),g=t;return B(()=>{g("change",s.value,o.value)}),(a,e)=>{const i=z,m=C;return x(),k("div",null,[l(i,M({data:a.data},n(c),{height:"340"}),{default:d(()=>[U(a.$slots,"default")]),_:3},16,["data"]),l(m,{"mt-10px":"","flex-end":"","current-page":s.value,"onUpdate:currentPage":e[0]||(e[0]=r=>s.value=r),"page-size":o.value,"onUpdate:pageSize":e[1]||(e[1]=r=>o.value=r),background:"","page-sizes":[10,20,50,100],total:a.total,layout:"total, sizes, prev, pager, next, jumper"},null,8,["current-page","page-size","total"])])}}}),P=y("h1",null,"Home",-1),T=y("p",null,"Home page content",-1),Z=v({__name:"index",setup(u){const t=()=>[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],s=b([...t(),...t(),...t(),...t(),...t(),...t(),...t(),...t()]),o=b({page:1,limit:10}),c=(a,e)=>{console.log(a,e)},g=a=>{console.log("click",a.name,a.address)};return(a,e)=>{const i=E,m=w,r=V;return x(),k("div",null,[P,T,l(r,{data:n(s),total:n(s).length,onChange:c,page:n(o).page,"onUpdate:page":e[0]||(e[0]=p=>n(o).page=p),limit:n(o).limit,"onUpdate:limit":e[1]||(e[1]=p=>n(o).limit=p),border:!0},{default:d(()=>[l(i,{prop:"date",label:"日期",width:"180"}),l(i,{prop:"name",label:"姓名",width:"180"}),l(i,{prop:"address",label:"地址"}),l(i,{fixed:"right",label:"Operations","min-width":"120"},{default:d(({row:p})=>[l(m,{link:"",type:"primary",size:"small",onClick:$=>g(p)},{default:d(()=>[h(" Detail ")]),_:2},1032,["onClick"]),l(m,{link:"",type:"primary",size:"small"},{default:d(()=>[h("Edit")]),_:1})]),_:1})]),_:1},8,["data","total","page","limit"])])}}});export{Z as default};
