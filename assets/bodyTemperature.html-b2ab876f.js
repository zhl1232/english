import{_ as v,r as l,p as r,q as a,t as h,Q as i,R as e,v as d,O as p,P as c,x as _,z as y,Z as g,a8 as f}from"./framework-91813a79.js";const b=e("h1",{id:"body-temperature",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#body-temperature","aria-hidden":"true"},"#"),h(" Body Temperature")],-1),k={key:0},x=e("p",null,"When we are sick, our body temperature goes up.",-1),w=e("p",null,"Sometimes, a high fever is very dangerous.",-1),B=e("p",null,"We have to take medicine to lower it.",-1),T=e("p",null,"Body temperature is usually taken at a person's forehead, ear or in one's mouth.",-1),S=e("p",null,"A high fever means our bodies are fighting against bacteria or a virus.",-1),V=e("br",null,null,-1),W={__name:"bodyTemperature.html",setup(N){const s=l(!0),o=l("");let m=l(`Our body temperature is usually 36.5 degrees.

When we are sick, our body temperature goes up.

Sometimes, a high fever is very dangerous.

We have to take medicine to lower it.

Body temperature is usually taken at a person's forehead, ear or in one's mouth.

A high fever means our bodies are fighting against bacteria or a virus.`.split(""));return(O,u)=>(r(),a("div",null,[b,s.value?(r(),a("div",k,[h(" Our body temperature is usually 36.5 degrees. "),x,w,B,T,S])):i("v-if",!0),e("p",null,[e("button",{onClick:u[0]||(u[0]=t=>s.value=!s.value)},d(s.value?"关闭":"开启")+"原文",1)]),(r(!0),a(p,null,c(y(m),(t,n)=>(r(),a(p,null,[o.value.split("")[n]?(r(),a("span",{key:0,style:_({color:o.value.split("")[n]===t?"green":"red"})},d(t),5)):i("v-if",!0)],64))),256)),V,g(e("textarea",{"onUpdate:modelValue":u[1]||(u[1]=t=>o.value=t),style:{width:"350px",height:"200px"}},null,512),[[f,o.value]])]))}},A=v(W,[["__file","bodyTemperature.html.vue"]]);export{A as default};
