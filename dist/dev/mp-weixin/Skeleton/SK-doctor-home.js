"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SK-doctor-home",
  setup(__props) {
    let TIME = common_vendor.ref(["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(TIME), (item, k0, i0) => {
          return {
            a: item
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-201d2bf1"], ["__file", "D:/StudyFront/Uniapp/wx-guahao/src/Skeleton/SK-doctor-home.vue"]]);
wx.createComponent(Component);
