import{d as a,j as e,r as l,H as t,x as s,I as i,o,b as u,F as d,e as n,f as c,k as v,a as r,w as f,c as _,m as p,i as m,l as y,t as b,J as h,h as w}from"./index.be73a8e8.js";import{R as g}from"./request.df50e013.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";var k=x(a({__name:"video",setup(a){e((()=>{k(0)}));let x=l([]);async function k(a){const e=await g.VideoList({page:a});x.value=[...x.value,...e.data.data]}let j=l(!1),F=l(0);function C(a,e){x.value[a].controls=!0,x.value[a].play_but=!1,function(a,e){if(""==I.value)I.value=a,L.value=e,i(a).play();else{let l=i(I.value);I.value!=a&&(l.pause(),function(a){x.value[a].controls=!1,x.value[a].play_but=!0}(L.value)),setTimeout((()=>{I.value=a,L.value=e,i(a).play()}),700)}}(e,a)}t((async()=>{j.value=!0,F.value++,await k(F.value),j.value=!1}));let I=l(""),L=l(-1);return s((()=>{i(I.value).pause()})),(a,e)=>{const l=h,t=w,s=p,i=m;return o(),u(d,null,[(o(!0),u(d,null,n(c(x),((a,e)=>(o(),_(i,{class:"video-view",key:e},{default:f((()=>[r(i,{class:"video-area"},{default:f((()=>[r(l,{src:a.video_url,id:a._id,controls:a.controls,"show-center-play-btn":!1,"object-fit":"cover",title:a.video_title},null,8,["src","id","controls","title"]),r(t,{class:"video-title"},{default:f((()=>[y(b(a.video_title),1)])),_:2},1024),a.play_but?(o(),_(s,{key:0,onClick:l=>C(e,a._id),src:"/static/other/video-bofang.png",mode:"widthFix"},null,8,["onClick"])):v("v-if",!0)])),_:2},1024),r(i,{class:"video-name"},{default:f((()=>[r(s,{src:a.avatar,mode:"widthFix"},null,8,["src"]),r(t,null,{default:f((()=>[y(b(a.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),v(" 加载图标 "),r(i,{class:"Loading"},{default:f((()=>[c(j)?(o(),_(s,{key:0,src:"/static/other/loading.svg",mode:"widthFix"})):v("v-if",!0)])),_:1})],64)}}}),[["__scopeId","data-v-621a1cc4"]]);export{k as default};
