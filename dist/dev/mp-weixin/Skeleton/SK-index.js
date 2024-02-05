"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "SK-index",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "05c8bb14-menu_height": common_vendor.unref(menu_height),
      "05c8bb14-menu_top": common_vendor.unref(menu_top)
    }));
    let menu_top = common_vendor.ref("");
    let menu_height = common_vendor.ref("");
    let MenuButton = common_vendor.index.getStorageSync("MenuButton");
    menu_top.value = MenuButton.top + "px";
    menu_height.value = MenuButton.height + "px";
    let YIMIAO = common_vendor.ref(["", "", "", ""]);
    let GUAHAO = common_vendor.ref(["", "", "", "", "", "", "", "", ""]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(YIMIAO), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        b: common_vendor.f(common_vendor.unref(YIMIAO).slice(0, 2), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        c: common_vendor.f(common_vendor.unref(GUAHAO), (item, k0, i0) => {
          return {
            a: item
          };
        }),
        d: common_vendor.s(_ctx.__cssVars())
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-05c8bb14"], ["__file", "D:/StudyFront/Uniapp/wx-guahao/src/Skeleton/SK-index.vue"]]);
wx.createComponent(Component);
