"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/mine/mine.js";
  "./pages/my-service/my-registration/index.js";
  "./pages/registered/registered.js";
  "./pages/doctor/index.js";
  "./pages/doctor/doctor-Homepage.js";
  "./pages/video/video.js";
  "./pages/self-test/topic.js";
  "./pages/self-test/result.js";
  "./pages/my-service/phy-exam/index.js";
  "./pages/phy-exam/index.js";
  "./pages/phy-exam/Details.js";
  "./pages/graphics/index.js";
  "./pages/my-service/my-patient/my-patient.js";
  "./pages/my-service/my-patient/add-patient.js";
  "./pages/my-service/nucleic-acid/index.js";
  "./pages/nucleic-acid/index.js";
  "./pages/my-service/hpv-view/index.js";
  "./pages/hpv-vaccine/hpv-vaccine.js";
  "./pages/hpv-vaccine/hpv-buy.js";
  "./pages/my-service/xinguan/index.js";
  "./pages/xinguan-vaccine/xinguan-vaccine.js";
  "./pages/login-page/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      let get_Menu = common_vendor.index.getStorageSync("MenuButton");
      if (!get_Menu) {
        const res = common_vendor.index.getMenuButtonBoundingClientRect();
        common_vendor.index.setStorageSync("MenuButton", res);
      }
    });
    return () => {
    };
  }
});
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/App.vue"]]);
const pinia = common_vendor.createPinia();
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
