"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f([1, 2, 3], (item, k0, i0) => {
      return {
        a: item
      };
    }),
    b: common_vendor.f([1, 2, 3, 4, 5], (item, k0, i0) => {
      return {
        a: item
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-02042197"], ["__file", "D:/StudyFront/Uniapp/wx-guahao/src/Skeleton/SK-self-test.vue"]]);
wx.createComponent(Component);
