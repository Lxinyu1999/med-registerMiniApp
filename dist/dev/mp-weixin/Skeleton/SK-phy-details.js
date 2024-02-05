"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SK-phy-details",
  setup(__props) {
    let TIME = common_vendor.ref(["", "", "", "", ""]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(TIME), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        b: common_vendor.f(common_vendor.unref(TIME).slice(0, 3), (item, k0, i0) => {
          return {
            a: item
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b7af6cc"], ["__file", "D:/StudyFront/Uniapp/wx-guahao/src/Skeleton/SK-phy-details.vue"]]);
wx.createComponent(Component);
