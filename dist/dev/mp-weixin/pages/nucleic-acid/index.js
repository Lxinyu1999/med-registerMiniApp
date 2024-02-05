"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
if (!Math) {
  skIndex();
}
const skIndex = () => "../../Skeleton/SK-nucleic.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let nuclei_cacid = common_vendor.reactive({ data: {
      address: "",
      hospital: "",
      logo: "",
      name: "",
      phone: "",
      price: 0,
      boon: [],
      date: [],
      style: []
    } });
    let skeLeton = common_vendor.ref(true);
    common_vendor.onMounted(async () => {
      const res = await public_request.RequestApi.NuataGet();
      nuclei_cacid.data = res.data.data[0];
      skeLeton.value = false;
    });
    function makePhoneCall(phone) {
      common_vendor.index.makePhoneCall({
        phoneNumber: phone
      });
    }
    let timeIndex = common_vendor.ref(-1);
    let submitData = common_vendor.reactive({
      name: "",
      phone: "",
      id_card: "",
      time: ""
    });
    async function Submit() {
      common_vendor.index.showLoading({ title: "\u63D0\u4EA4\u4E2D", mask: true });
      const res = await public_request.RequestApi.ResNuata(submitData);
      if (res.statusCode == 200) {
        common_vendor.index.hideLoading();
        common_vendor.index.navigateTo({
          url: "/pages/my-service/nucleic-acid/index"
        });
      }
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(nuclei_cacid).data.logo,
        b: common_vendor.t(common_vendor.unref(nuclei_cacid).data.name),
        c: common_vendor.t(common_vendor.unref(nuclei_cacid).data.price),
        d: common_vendor.f(common_vendor.unref(nuclei_cacid).data.boon, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        e: common_vendor.t(common_vendor.unref(nuclei_cacid).data.hospital),
        f: common_vendor.t(common_vendor.unref(nuclei_cacid).data.address),
        g: common_vendor.o(($event) => makePhoneCall(common_vendor.unref(nuclei_cacid).data.phone)),
        h: common_vendor.unref(submitData).name,
        i: common_vendor.o(($event) => common_vendor.unref(submitData).name = $event.detail.value),
        j: common_vendor.unref(submitData).phone,
        k: common_vendor.o(($event) => common_vendor.unref(submitData).phone = $event.detail.value),
        l: common_vendor.unref(submitData).id_card,
        m: common_vendor.o(($event) => common_vendor.unref(submitData).id_card = $event.detail.value),
        n: common_vendor.f(common_vendor.unref(nuclei_cacid).data.date, (item, index, i0) => {
          return {
            a: common_vendor.t(item.date),
            b: common_vendor.t(item.week),
            c: index,
            d: common_vendor.n(index == common_vendor.unref(timeIndex) ? "checkstyle" : ""),
            e: common_vendor.o(($event) => (common_vendor.isRef(timeIndex) ? timeIndex.value = index : timeIndex = index, common_vendor.unref(submitData).time = item.date), index)
          };
        }),
        o: common_vendor.f(common_vendor.unref(nuclei_cacid).data.style, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.f(item.desc, (item_a, index_a, i1) => {
              return {
                a: common_vendor.t(item_a),
                b: index_a
              };
            }),
            c: index
          };
        }),
        p: common_vendor.t(common_vendor.unref(nuclei_cacid).data.price),
        q: common_vendor.o(Submit),
        r: common_vendor.unref(skeLeton)
      }, common_vendor.unref(skeLeton) ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/nucleic-acid/index.vue"]]);
wx.createPage(MiniProgramPage);
