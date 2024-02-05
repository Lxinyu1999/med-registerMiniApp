"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
if (!Math) {
  skIndex();
}
const skIndex = () => "../../Skeleton/SK-hpvlist.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "hpv-vaccine",
  setup(__props) {
    let checked = common_vendor.ref(0);
    let hpv_select = common_vendor.ref([]);
    let hpv_list = common_vendor.ref([]);
    let hpv_all = common_vendor.ref([]);
    let skeLeton = common_vendor.ref(true);
    common_vendor.onMounted(async () => {
      const res = await public_request.RequestApi.OtuHpv();
      hpv_select.value = res.data.data[0].hpv_select;
      hpv_list.value = res.data.data[0].hpv_list;
      hpv_all.value = res.data.data[0].hpv_list;
      skeLeton.value = false;
    });
    function toggle(id, index) {
      let res = hpv_all.value.filter((item) => item.hpv_id == id);
      checked.value = index;
      if (id == "26da8e4962dc565503df9629704f1700") {
        hpv_list.value = hpv_all.value;
      } else {
        hpv_list.value = res;
      }
    }
    function toReserve(_id, name, price, describe) {
      let obj = JSON.stringify({ _id, name, price, describe });
      common_vendor.index.navigateTo({
        url: "/pages/hpv-vaccine/hpv-buy?value=" + obj
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(hpv_select), (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.n(index == common_vendor.unref(checked) ? "checked" : ""),
            c: index,
            d: common_vendor.o(($event) => toggle(item._id, index), index)
          };
        }),
        b: common_vendor.f(common_vendor.unref(hpv_list), (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(item.describe, (item_a, index_a, i1) => {
              return {
                a: common_vendor.t(item_a),
                b: index_a
              };
            }),
            c: common_vendor.t(item.price[0]),
            d: common_vendor.t(item.price[1]),
            e: common_vendor.o(($event) => toReserve(item._id, item.name, item.price, item.describe)),
            f: index
          };
        }),
        c: common_vendor.unref(skeLeton)
      }, common_vendor.unref(skeLeton) ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/hpv-vaccine/hpv-vaccine.vue"]]);
wx.createPage(MiniProgramPage);
