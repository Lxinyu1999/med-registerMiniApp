import{d as a,r as l,o as e,c as s,w as t,a as o,b as d,e as c,f as u,F as n,h as r,i,A as _,z as f,l as p,k,S as v,t as m,n as g,m as w}from"./index.be73a8e8.js";import{R as y}from"./request.df50e013.js";import{p as b}from"./point.37a8238e.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var x=h(a({__name:"SK-doctor",setup(a){let _=l(["","","","",""]);return(a,l)=>{const f=r,p=i;return e(),s(p,{class:"skeleton-view"},{default:t((()=>[o(p,{class:"sk-doctor-top"},{default:t((()=>[(e(!0),d(n,null,c(u(_),(a=>(e(),s(f,{class:"skeleton-global",key:a})))),128))])),_:1}),(e(!0),d(n,null,c(u(_),(a=>(e(),s(p,{class:"sk-doctor-list",key:a},{default:t((()=>[o(p,{class:"skeleton-global"}),o(p,{class:"sk-doctor-text"},{default:t((()=>[o(f,{class:"skeleton-global"}),o(f,{class:"skeleton-global"}),o(f,{class:"skeleton-global"})])),_:1})])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-1ceaf8fa"]]);var C=h(a({__name:"index",setup(a){let h=l("当日没有医生排班"),C=l([]),j=l([]),A=l(""),L=l(!0);_((async a=>{const{id:l}=a;A.value=l;const e=await Promise.all([y.TimeSele({dep_id:l}),y.AlldList({dep_id:l})]);C.value=e[0].data.data,j.value=e[1].data.data,L.value=!1}));let S=l(-1);async function F(){S.value=-1;const a=await y.AlldList({dep_id:A.value});j.value=a.data.data}return(a,l)=>{const _=i,A=r,H=v,I=w;return e(),d(n,null,[o(_,{class:"doctor-top filter-view"},{default:t((()=>[o(_,{class:f(["all-text",-1==u(S)?"changeColor":""]),onClick:F},{default:t((()=>[p("全部")])),_:1},8,["class"]),o(H,{"scroll-x":"true",class:"scroll-view_H"},{default:t((()=>[(e(!0),d(n,null,c(u(C),((a,l)=>(e(),s(_,{class:"week",key:l,onClick:e=>async function(a,l,e){S.value=a;const s=await y.EverydList({dep_id:l,week:e});j.value=s.data.data}(l,a.dep_id,a.date)},{default:t((()=>[o(A,null,{default:t((()=>[p(m(a.date),1)])),_:2},1024),o(A,{class:f(l==u(S)?"changeColor":"")},{default:t((()=>[p(m(a.week),1)])),_:2},1032,["class"]),o(A,null,{default:t((()=>[p(m(1==a.nu_source?"可约":"无号"),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),o(_,{style:{height:"170rpx"}}),k(" 医生列表 "),(e(!0),d(n,null,c(u(j),((a,l)=>(e(),s(_,{class:"doctor-list",key:l,onClick:l=>{return e=a._id,void g({url:"/pages/doctor/doctor-Homepage?id="+e});var e}},{default:t((()=>[o(I,{src:a.avatar,mode:"aspectFill"},null,8,["src"]),o(_,{class:"doctor-name"},{default:t((()=>[o(A,null,{default:t((()=>[p(m(a.name),1)])),_:2},1024),o(A,null,{default:t((()=>[p(m(a.post),1)])),_:2},1024),o(A,null,{default:t((()=>[p(m(a.good_at),1)])),_:2},1024)])),_:2},1024),o(_,{class:"about-doctor"},{default:t((()=>[p("预约")])),_:1})])),_:2},1032,["onClick"])))),128)),k(" 提示组件 "),o(b,{show:0==u(j).length,title:u(h)},null,8,["show","title"]),k(" 骨架屏 "),u(L)?(e(),s(x,{key:0})):k("v-if",!0)],64)}}}),[["__scopeId","data-v-c98f9db8"]]);export{C as default};