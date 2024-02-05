"use strict";
var common_vendor = require("../../../common/vendor.js");
var public_request = require("../../../public/request.js");
if (!Math) {
  point();
}
const point = () => "../../../com-components/point.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let order = common_vendor.ref([]);
    let show = common_vendor.ref(false);
    common_vendor.onShow(async () => {
      const res = await public_request.RequestApi.PhyuserOrder();
      console.log(res);
      order.value = res.data.data;
      if (res.data.data.length == 0) {
        show.value = true;
      }
    });
    async function Cancel(id, index) {
      const res = await public_request.RequestApi.PhyCancel({ _id: id });
      if (res.statusCode == 200) {
        order.value[index].cancel = false;
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(order), (item, index, i0) => {
          return {
            a: common_vendor.t(item.phy_name),
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.phy_time),
            d: common_vendor.t(item.address),
            e: common_vendor.t(item.order_number),
            f: common_vendor.t(item.price),
            g: common_vendor.t(item.cancel ? "\u53D6\u6D88\u9884\u7EA6" : "\u5DF2\u53D6\u6D88\u9884\u7EA6"),
            h: common_vendor.n(item.cancel ? "" : "prevent_style"),
            i: common_vendor.o(($event) => Cancel(item._id, index)),
            j: index
          };
        }),
        b: common_vendor.p({
          show: common_vendor.unref(show)
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/my-service/phy-exam/index.vue"]]);
wx.createPage(MiniProgramPage);
