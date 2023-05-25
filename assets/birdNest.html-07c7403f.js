import{_,r,p as s,q as a,t as h,Q as d,R as t,v as u,O as b,P as p,x as m,z as v,Z as f,a8 as y}from"./framework-91813a79.js";const g=t("h1",{id:"bird-nest",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#bird-nest","aria-hidden":"true"},"#"),h(" Bird Nest")],-1),k={key:0},w=t("p",null,"Some birds that live close to the ocean build their nests with fish bones.",-1),x=t("p",null,"Mother birds build a nest to protect eggs and baby birds.",-1),N=t("p",null,"It takes a few days to build a complete nest.",-1),B=t("p",null,"Did you ever closely look at a bird's nest?",-1),D=t("p",null,"Go out and try it, but be careful.",-1),S=t("p",null,"You might get attacked by a mother bird.",-1),V=t("br",null,null,-1),M={__name:"birdNest.html",setup(z){const l=r(!0),o=r("");let c=r(`A bird nest is built with a lot of small twigs, grass and leaves.

Some birds that live close to the ocean build their nests with fish bones.

Mother birds build a nest to protect eggs and baby birds.

It takes a few days to build a complete nest.

Did you ever closely look at a bird's nest?

Go out and try it, but be careful.

You might get attacked by a mother bird.`.split(""));return(A,i)=>(s(),a("div",null,[g,l.value?(s(),a("div",k,[h(" A bird nest is built with a lot of small twigs, grass and leaves. "),w,x,N,B,D,S])):d("v-if",!0),t("p",null,[t("button",{onClick:i[0]||(i[0]=e=>l.value=!l.value)},u(l.value?"关闭":"开启")+"原文",1)]),(s(!0),a(b,null,p(v(c),(e,n)=>(s(),a(b,null,[o.value.split("")[n]?(s(),a("span",{key:0,style:m({color:o.value.split("")[n]===e?"green":"red"})},u(e),5)):d("v-if",!0)],64))),256)),V,f(t("textarea",{"onUpdate:modelValue":i[1]||(i[1]=e=>o.value=e),style:{width:"350px",height:"200px"}},null,512),[[y,o.value]])]))}},G=_(M,[["__file","birdNest.html.vue"]]);export{G as default};
