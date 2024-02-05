"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
if (!Math) {
  (popups + skIndex)();
}
const popups = () => "./components/pop-ups.js";
const skIndex = () => "../../Skeleton/SK-doctor-home.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "doctor-Homepage",
  setup(__props) {
    let _id = common_vendor.ref("");
    let doctor_data = common_vendor.ref([]);
    let skeLeton = common_vendor.ref(true);
    common_vendor.onLoad(async (event) => {
      let { id } = event;
      _id.value = id;
      const res = await public_request.RequestApi.DoctorHome({ _id: id });
      console.log(res);
      doctor_data.value = res.data.data;
      skeLeton.value = false;
    });
    let compNone = common_vendor.ref();
    function selectTime(week, the_time, when) {
      let value = { show: true, week, the_time, when, _id: _id.value };
      compNone.value.trigGer(value);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(doctor_data), (item, index, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.post),
            d: common_vendor.t(item.hospital),
            e: common_vendor.t(item.good_at),
            f: common_vendor.f(item.App_ment, (item_a, index_a, i1) => {
              return {
                a: common_vendor.t(item_a.day),
                b: common_vendor.t(item_a.week),
                c: common_vendor.t(item_a.time[0].nu_source <= 0 ? "" : "\u9884\u7EA6"),
                d: common_vendor.n(item_a.time[0].nu_source <= 0 ? "Disa" : "Have"),
                e: common_vendor.o(($event) => selectTime(item_a.week, item_a.time[0].the_time, item_a.time[0].when)),
                f: common_vendor.t(item_a.time[1].nu_source <= 0 ? "" : "\u9884\u7EA6"),
                g: common_vendor.n(item_a.time[1].nu_source <= 0 ? "Disa" : "Have"),
                h: common_vendor.o(($event) => selectTime(item_a.week, item_a.time[1].the_time, item_a.time[1].when)),
                i: index_a
              };
            }),
            g: index
          };
        }),
        b: common_vendor.sr(compNone, "1f6ee7a8-0", {
          "k": "compNone"
        }),
        c: common_vendor.unref(skeLeton)
      }, common_vendor.unref(skeLeton) ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/doctor/doctor-Homepage.vue"]]);
wx.createPage(MiniProgramPage);
