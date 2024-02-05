"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
if (!Math) {
  skIndex();
}
const skIndex = () => "../../Skeleton/SK-self-test.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "topic",
  setup(__props) {
    let judg_valu = common_vendor.ref("");
    common_vendor.onLoad((event) => {
      let { type, name } = event;
      judg_valu.value = type;
      common_vendor.index.setNavigationBarTitle({ title: name });
    });
    let topic_data = common_vendor.ref([]);
    let topic_length = common_vendor.ref(0);
    let each_question = common_vendor.reactive({
      data: {
        topic: "",
        _id: "",
        options: []
      }
    });
    let { data } = common_vendor.toRefs(each_question);
    let skeLeton = common_vendor.ref(true);
    common_vendor.onShow(async () => {
      add_to.value = 1;
      add_to_s.value = 0;
      percent.value = 0;
      topic_id.value = [];
      if (judg_valu.value == "001") {
        var res = await public_request.RequestApi.DepressionTopics();
      } else if (judg_valu.value == "002") {
        var res = await public_request.RequestApi.PrematureTopics();
      } else {
        var res = await public_request.RequestApi.InsomniaTopics();
      }
      topic_data.value = res.data.data;
      topic_length.value = res.data.data.length;
      each_question.data = res.data.data[0];
      percent.value = 100 / topic_length.value;
      skeLeton.value = false;
    });
    let add_to = common_vendor.ref(1);
    let add_to_s = common_vendor.ref(0);
    let percent = common_vendor.ref(0);
    let topic_id = common_vendor.reactive({ value: [] });
    function choose(son_id) {
      add_to_s.value++;
      if (add_to_s.value < topic_length.value) {
        add_to.value++;
        percent.value = 100 / topic_length.value * add_to.value;
        each_question.data = topic_data.value[add_to_s.value];
      }
      topic_id.value.push(son_id);
    }
    common_vendor.watch([add_to_s, topic_length], (newVal, oldVal) => {
      if (newVal[0] === newVal[1]) {
        console.log("\u76D1\u542C\u662F\u5426\u5168\u90E8\u9009\u62E9\u5B8C\u6BD5\uFF0Cok\u7684\u8BDD\uFF0C\u8DF3\u8F6C\u4E0B\u4E00\u9875");
        let OBJ = JSON.stringify({ type: judg_valu.value, topic_id: topic_id.value });
        common_vendor.index.navigateTo({
          url: "/pages/self-test/result?value=" + OBJ
        });
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(percent),
        b: common_vendor.t(common_vendor.unref(add_to)),
        c: common_vendor.t(common_vendor.unref(topic_length)),
        d: common_vendor.t(common_vendor.unref(data).topic),
        e: common_vendor.f(common_vendor.unref(data).options, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index,
            c: common_vendor.o(($event) => choose(item.son_id), index)
          };
        }),
        f: common_vendor.unref(skeLeton)
      }, common_vendor.unref(skeLeton) ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/self-test/topic.vue"]]);
wx.createPage(MiniProgramPage);
