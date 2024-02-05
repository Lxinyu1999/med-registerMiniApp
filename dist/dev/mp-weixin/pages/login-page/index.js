"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    function Login() {
      common_vendor.index.getUserProfile({
        desc: "\u83B7\u53D6\u4E2A\u4EBA\u4FE1\u606F",
        success: (res) => {
          let { avatarUrl, nickName } = res.userInfo;
          common_vendor.index.login({
            success: (code) => {
              common_vendor.index.showLoading({ title: "\u767B\u9646\u4E2D", mask: true });
              ApiLogin(avatarUrl, nickName, code.code);
            },
            fail: (err) => {
              common_vendor.index.showToast({ title: "\u767B\u5F55\u5931\u8D25", icon: "none", duration: 1e3 });
            }
          });
        },
        fail: (err) => {
          common_vendor.index.showToast({ title: "\u767B\u5F55\u5931\u8D25", icon: "none", duration: 1e3 });
        }
      });
    }
    async function ApiLogin(avatarUrl, nickName, code) {
      try {
        let obj = { appid: "wx92e55b94661879c0", secret: "a2146ebb4cc0ce364d64decbda9c35b7", avatarUrl, nickName, code };
        let res = await public_request.RequestApi.WxLogin(obj);
        common_vendor.index.setStorageSync("wxuser", res.data.data);
        setTimeout(() => {
          common_vendor.index.navigateBack({ delta: 1 });
          common_vendor.index.hideLoading();
        }, 600);
      } catch (error) {
        common_vendor.index.showToast({ title: "\u767B\u5F55\u5931\u8D25", icon: "none", duration: 1e3 });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(Login)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/login-page/index.vue"]]);
wx.createPage(MiniProgramPage);
