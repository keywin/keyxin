import{C as m,a as p}from"./Container.f38cdf00.js";import{_ as h}from"./index.068383f8.js";import{d as f,r as o,k,o as n,a as x,y as u,g as _,i as y,n as C,t as l,F as w,h as s,l as g}from"./vendor.998edb3b.js";const B=["onClick"],Y={class:"titleBlock"},D={class:"title"},I={class:"descr"},$={class:"auth"},F={class:"time"},H=f({setup(L){const e=o([{title:"04 setter.md",id:1649227458790,auth:"keywin"},{title:"03 getter.md",id:1649227458790,auth:"keywin"},{title:"01 http \u548C https.md",id:1648798751030,auth:"keywin"},{title:"02 \u672C\u5730\u5B58\u50A8.md",id:1649231575913,auth:"keywin"}]),d=o(""),a=o("");function r(i=""){a.value=i,p({method:"get",url:`/md/notes/${i}`}).then(c=>{d.value=c.data})}return e.value[0]&&r(e.value[0].title),(i,c)=>{const v=k("v-md-preview");return n(),x(m,null,{aside:u(()=>[(n(!0),_(w,null,y(e.value,t=>(n(),_("div",{key:t.title,class:C(["item",a.value===t.title&&"active"]),onClick:M=>r(t.title)},l(t.title),11,B))),128))]),main:u(()=>[s("div",Y,[s("div",D,l(e.value.filter(t=>t.title===a.value)[0].title),1),s("div",I,[s("div",$,l(e.value.filter(t=>t.title===a.value)[0].auth),1),s("div",F,l(i.$dayjs(e.value.filter(t=>t.title===a.value)[0].id).format("YYYY-MM-DD HH:mm:ss")),1)])]),g(v,{text:d.value},null,8,["text"])]),_:1})}}});var z=h(H,[["__scopeId","data-v-dd15d876"]]);export{z as default};