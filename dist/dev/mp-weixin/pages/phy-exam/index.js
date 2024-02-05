"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
if (!Math) {
  skIndex();
}
const skIndex = () => "../../Skeleton/SK-phy-exam.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let phy_term = common_vendor.ref([]);
    let phy_data = common_vendor.ref([]);
    let skeLeton = common_vendor.ref(true);
    common_vendor.onMounted(async () => {
      const res = await Promise.all([public_request.RequestApi.PhyTerm(), public_request.RequestApi.PhySget()]);
      phy_term.value = res[0].data.data;
      phy_data.value = res[1].data.data;
      skeLeton.value = false;
    });
    let filter_data = common_vendor.reactive({ type: "", sales: "", price: "" });
    let conview = common_vendor.ref(false);
    function selectType(value) {
      phy_term.value[0].query_val = value;
      conview.value = false;
      filter_data.type = value;
      queryResult();
    }
    function queryCombo(index, value) {
      if (index === 0) {
        conview.value = conview.value ? false : true;
      } else if (index === 1) {
        filter_data.sales = value[0];
        phy_term.value[index].filter_val[0] = value[0] == "desc" ? "asc" : "desc";
        queryResult();
      } else {
        filter_data.price = value[0];
        phy_term.value[index].filter_val[0] = value[0] == "desc" ? "asc" : "desc";
        queryResult();
      }
    }
    async function queryResult() {
      const res = await public_request.RequestApi.PhyQuery(filter_data);
      phy_data.value = res.data.data;
    }
    function phyDetail(id, title) {
      common_vendor.index.navigateTo({
        url: "/pages/phy-exam/Details?id=" + id + "&title=" + title
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(phy_term), (item, index, i0) => {
          return {
            a: common_vendor.t(item.query_val),
            b: index == 0 ? "/static/other/shaixuan-jiantou.png" : "/static/other/shaixuan.png",
            c: index,
            d: common_vendor.o(($event) => queryCombo(index, item.filter_val), index)
          };
        }),
        b: common_vendor.unref(conview)
      }, common_vendor.unref(conview) ? {} : {}, {
        c: common_vendor.unref(conview)
      }, common_vendor.unref(conview) ? common_vendor.e({
        d: common_vendor.unref(phy_term).length > 0
      }, common_vendor.unref(phy_term).length > 0 ? {
        e: common_vendor.f(common_vendor.unref(phy_term)[0].filter_val, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => selectType(item), index)
          };
        })
      } : {}) : {}, {
        f: common_vendor.f(common_vendor.unref(phy_data), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.image,
            c: common_vendor.t(item.be_suit),
            d: common_vendor.t(item.describe),
            e: common_vendor.t(item.sales),
            f: common_vendor.t(item.price),
            g: index,
            h: common_vendor.o(($event) => phyDetail(item._id, item.title), index)
          };
        }),
        g: common_vendor.unref(skeLeton)
      }, common_vendor.unref(skeLeton) ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/phy-exam/index.vue"]]);
wx.createPage(MiniProgramPage);
