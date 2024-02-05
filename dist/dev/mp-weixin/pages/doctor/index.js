"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
if (!Math) {
  (point + skIndex)();
}
const point = () => "../../com-components/point.js";
const skIndex = () => "../../Skeleton/SK-doctor.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let title = common_vendor.ref("\u5F53\u65E5\u6CA1\u6709\u533B\u751F\u6392\u73ED");
    let doctor_time = common_vendor.ref([]);
    let doctor_list = common_vendor.ref([]);
    let dep_id = common_vendor.ref("");
    let skeLeton = common_vendor.ref(true);
    common_vendor.onLoad(async (event) => {
      const { id } = event;
      dep_id.value = id;
      const res = await Promise.all([public_request.RequestApi.TimeSele({ dep_id: id }), public_request.RequestApi.AlldList({ dep_id: id })]);
      doctor_time.value = res[0].data.data;
      doctor_list.value = res[1].data.data;
      skeLeton.value = false;
    });
    let selectIndex = common_vendor.ref(-1);
    async function allDoctor() {
      selectIndex.value = -1;
      const res = await public_request.RequestApi.AlldList({ dep_id: dep_id.value });
      doctor_list.value = res.data.data;
    }
    async function selectDoctor(index, dep_id2, week) {
      selectIndex.value = index;
      const res = await public_request.RequestApi.EverydList({ dep_id: dep_id2, week });
      doctor_list.value = res.data.data;
    }
    function jumpRoute(id) {
      common_vendor.index.navigateTo({
        url: "/pages/doctor/doctor-Homepage?id=" + id
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.n(common_vendor.unref(selectIndex) == -1 ? "changeColor" : ""),
        b: common_vendor.o(allDoctor),
        c: common_vendor.f(common_vendor.unref(doctor_time), (item, index, i0) => {
          return {
            a: common_vendor.t(item.date),
            b: common_vendor.t(item.week),
            c: common_vendor.n(index == common_vendor.unref(selectIndex) ? "changeColor" : ""),
            d: common_vendor.t(item.nu_source == 1 ? "\u53EF\u7EA6" : "\u65E0\u53F7"),
            e: index,
            f: common_vendor.o(($event) => selectDoctor(index, item.dep_id, item.date), index)
          };
        }),
        d: common_vendor.f(common_vendor.unref(doctor_list), (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.post),
            d: common_vendor.t(item.good_at),
            e: index,
            f: common_vendor.o(($event) => jumpRoute(item._id), index)
          };
        }),
        e: common_vendor.p({
          show: common_vendor.unref(doctor_list).length == 0 ? true : false,
          title: common_vendor.unref(title)
        }),
        f: common_vendor.unref(skeLeton)
      }, common_vendor.unref(skeLeton) ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/doctor/index.vue"]]);
wx.createPage(MiniProgramPage);
