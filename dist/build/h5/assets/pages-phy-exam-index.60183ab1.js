import{d as e,r as a,o as l,c as s,w as t,b as u,e as c,a as i,f as r,F as n,i as d,h as o,j as p,y as f,k as _,l as y,t as v,n as h,m as k}from"./index.be73a8e8.js";import{R as m}from"./request.df50e013.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";var g=x(e({__name:"SK-phy-exam",setup(e){let p=a(["","","",""]);return(e,a)=>{const f=d,_=o;return l(),s(f,{class:"skeleton-view"},{default:t((()=>[(l(!0),u(n,null,c(r(p),(e=>(l(),s(f,{style:{margin:"20rpx"},key:e},{default:t((()=>[i(f,{class:"sk-phy-title skeleton-global"}),i(f,{class:"sk-phy-flex"},{default:t((()=>[i(f,{class:"skeleton-global sk-phy-left"}),i(f,{class:"sk-phy-right"},{default:t((()=>[i(_,{class:"skeleton-global"}),i(_,{class:"skeleton-global"}),i(_,{class:"skeleton-global"})])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-71509036"]]);var b=x(e({__name:"index",setup(e){let x=a([]),b=a([]),w=a(!0);p((async()=>{const e=await Promise.all([m.PhyTerm(),m.PhySget()]);x.value=e[0].data.data,b.value=e[1].data.data,w.value=!1}));let C=f({type:"",sales:"",price:""}),j=a(!1);async function P(){const e=await m.PhyQuery(C);b.value=e.data.data}return(e,a)=>{const p=o,f=k,m=d;return l(),u(n,null,[i(m,{class:"Top-view"},{default:t((()=>[(l(!0),u(n,null,c(r(x),((e,a)=>(l(),s(m,{key:a,onClick:l=>function(e,a){0===e?j.value=!j.value:1===e?(C.sales=a[0],x.value[e].filter_val[0]="desc"==a[0]?"asc":"desc",P()):(C.price=a[0],x.value[e].filter_val[0]="desc"==a[0]?"asc":"desc",P())}(a,e.filter_val)},{default:t((()=>[i(p,null,{default:t((()=>[y(v(e.query_val),1)])),_:2},1024),i(f,{src:0==a?"/static/other/shaixuan-jiantou.png":"/static/other/shaixuan.png"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1}),i(m,{style:{height:"100rpx"}}),_(" 点击全部的筛选 "),r(j)?(l(),s(m,{key:0,class:"mask-view"})):_("v-if",!0),r(j)?(l(),s(m,{key:1,class:"con-view"},{default:t((()=>[r(x).length>0?(l(!0),u(n,{key:0},c(r(x)[0].filter_val,((e,a)=>(l(),s(p,{key:a,onClick:a=>{return l=e,x.value[0].query_val=l,j.value=!1,C.type=l,void P();var l}},{default:t((()=>[y(v(e),1)])),_:2},1032,["onClick"])))),128)):_("v-if",!0)])),_:1})):_("v-if",!0),_(" 列表 "),(l(!0),u(n,null,c(r(b),((e,a)=>(l(),s(m,{class:"phy-exam-back",key:a,onClick:a=>{return l=e._id,s=e.title,void h({url:"/pages/phy-exam/Details?id="+l+"&title="+s});var l,s}},{default:t((()=>[i(p,{class:"phy-exam-type"},{default:t((()=>[y(v(e.title),1)])),_:2},1024),i(m,{class:"phy-exam-flex"},{default:t((()=>[i(f,{src:e.image,mode:"aspectFill"},null,8,["src"]),i(m,null,{default:t((()=>[i(p,{class:"phy-exam-title"},{default:t((()=>[y(v(e.be_suit),1)])),_:2},1024),i(p,{class:"phy-exam-label"},{default:t((()=>[y(v(e.describe),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),i(m,{class:"phy-exam-price"},{default:t((()=>[i(p,null,{default:t((()=>[y("已约"+v(e.sales),1)])),_:2},1024),i(p,null,{default:t((()=>[y("¥"+v(e.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),i(m,{style:{height:"300rpx"}}),_(" 骨架屏 "),r(w)?(l(),s(g,{key:2})):_("v-if",!0)],64)}}}),[["__scopeId","data-v-819e182c"]]);export{b as default};
