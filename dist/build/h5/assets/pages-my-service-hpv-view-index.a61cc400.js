import{d as a,r as e,x as l,o as s,b as t,F as n,e as u,f as d,k as r,a as c,i as _,c as o,w as i,l as f,t as p,z as m,h as v}from"./index.be73a8e8.js";import{R as x}from"./request.df50e013.js";import{p as g}from"./point.37a8238e.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var w=h(a({__name:"index",setup(a){let h=e([]),w=e(!1);return l((async()=>{const a=await x.HpvuserOrder();h.value=a.data.data,0==a.data.data.length&&(w.value=!0)})),(a,e)=>{const l=v,y=_;return s(),t(n,null,[(s(!0),t(n,null,u(d(h),((a,e)=>(s(),o(y,{class:"xinguan-view",key:e},{default:i((()=>[c(l,{class:"name"},{default:i((()=>[f(p(a.hpv_name),1)])),_:2},1024),c(y,{class:"xinguan-order"},{default:i((()=>[c(l,null,{default:i((()=>[f("接种人:")])),_:1}),c(l,null,{default:i((()=>[f(p(a.name),1)])),_:2},1024)])),_:2},1024),c(y,{class:"xinguan-order"},{default:i((()=>[c(l,null,{default:i((()=>[f("接种地点:")])),_:1}),c(l,null,{default:i((()=>[f(p(a.address),1)])),_:2},1024)])),_:2},1024),c(y,{class:"xinguan-order"},{default:i((()=>[c(l,null,{default:i((()=>[f("疫苗套餐:")])),_:1}),c(l,null,{default:i((()=>[f(p(a.combo)+" "+p(a.ino_time),1)])),_:2},1024)])),_:2},1024),c(y,{class:"xinguan-order"},{default:i((()=>[c(l,null,{default:i((()=>[f("订单编号:")])),_:1}),c(l,null,{default:i((()=>[f(p(a.order_number),1)])),_:2},1024)])),_:2},1024),c(y,{class:"reg-price"},{default:i((()=>[c(l,null,{default:i((()=>[f("¥"+p(a.price),1)])),_:2},1024)])),_:2},1024),r(" 取消预约 "),c(y,{class:"reg-cancel"},{default:i((()=>[c(l,{class:m(a.cancel?"":"prevent_style"),onClick:l=>async function(a,e){200==(await x.HpvCancel({_id:a})).statusCode&&(h.value[e].cancel=!1)}(a._id,e)},{default:i((()=>[f(p(a.cancel?"取消预约":"已取消预约"),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128)),r(" 提示组件 "),c(g,{show:d(w)},null,8,["show"]),c(y,{style:{height:"200rpx"}})],64)}}}),[["__scopeId","data-v-31201ea9"]]);export{w as default};
