import{d as a,r as e,x as l,o as s,b as t,F as n,e as d,f as u,k as r,a as c,i as o,c as i,w as f,l as _,t as p,z as m,h as v}from"./index.be73a8e8.js";import{R as x}from"./request.df50e013.js";import{p as g}from"./point.37a8238e.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var w=h(a({__name:"index",setup(a){let h=e([]),w=e(!1);return l((async()=>{const a=await x.CoviduserOrder();h.value=a.data.data,0==a.data.data.length&&(w.value=!0)})),(a,e)=>{const l=v,y=o;return s(),t(n,null,[(s(!0),t(n,null,d(u(h),((a,e)=>(s(),i(y,{class:"xinguan-view",key:e},{default:f((()=>[c(l,{class:"name"},{default:f((()=>[_(p(a.name),1)])),_:2},1024),c(y,{class:"xinguan-order"},{default:f((()=>[c(l,null,{default:f((()=>[_("接种地点:")])),_:1}),c(l,null,{default:f((()=>[_(p(a.address),1)])),_:2},1024)])),_:2},1024),c(y,{class:"xinguan-order"},{default:f((()=>[c(l,null,{default:f((()=>[_("疫苗厂商:")])),_:1}),c(l,null,{default:f((()=>[_(p(a.company),1)])),_:2},1024)])),_:2},1024),c(y,{class:"xinguan-order"},{default:f((()=>[c(l,null,{default:f((()=>[_("接种时间:")])),_:1}),c(l,null,{default:f((()=>[_(p(a.date)+" "+p(a.period),1)])),_:2},1024)])),_:2},1024),r(" 取消预约 "),c(y,{class:"reg-cancel"},{default:f((()=>[c(l,{class:m(a.cancel?"":"prevent_style"),onClick:l=>async function(a,e){200==(await x.CovidCancel({_id:a})).statusCode&&(h.value[e].cancel=!1)}(a._id,e)},{default:f((()=>[_(p(a.cancel?"取消预约":"已取消预约"),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128)),r(" 提示组件 "),c(g,{show:u(w)},null,8,["show"]),c(y,{style:{height:"200rpx"}})],64)}}}),[["__scopeId","data-v-506e4a6f"]]);export{w as default};
