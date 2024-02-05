"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "point",
  props: {
    show: { type: Boolean, required: true, default: false },
    title: { type: String, required: false, default: "\u4F60\u8FD8\u6CA1\u6709\u8BA2\u5355\u6570\u636E" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.show
      }, __props.show ? {
        b: common_vendor.t(__props.title)
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c314bc08"], ["__file", "D:/StudyFront/Uniapp/wx-guahao/src/com-components/point.vue"]]);
wx.createComponent(Component);
