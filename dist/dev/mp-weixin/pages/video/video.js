"use strict";
var common_vendor = require("../../common/vendor.js");
var public_request = require("../../public/request.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "video",
  setup(__props) {
    common_vendor.onMounted(() => {
      retriData(0);
    });
    let video_data = common_vendor.ref([]);
    async function retriData(page) {
      const res = await public_request.RequestApi.VideoList({ page });
      video_data.value = [...video_data.value, ...res.data.data];
    }
    let loading = common_vendor.ref(false);
    let page_value = common_vendor.ref(0);
    common_vendor.onReachBottom(async () => {
      loading.value = true;
      page_value.value++;
      await retriData(page_value.value);
      loading.value = false;
    });
    function startPlay(index, video_id) {
      video_data.value[index].controls = true;
      video_data.value[index].play_but = false;
      dealWith(video_id, index);
    }
    let videoId = common_vendor.ref("");
    let videoIndex = common_vendor.ref(-1);
    function dealWith(video_id, index) {
      if (videoId.value == "") {
        videoId.value = video_id;
        videoIndex.value = index;
        common_vendor.index.createVideoContext(video_id).play();
      } else {
        let prevideos_id = common_vendor.index.createVideoContext(videoId.value);
        if (videoId.value != video_id) {
          prevideos_id.pause();
          pauseFun(videoIndex.value);
        }
        setTimeout(() => {
          videoId.value = video_id;
          videoIndex.value = index;
          common_vendor.index.createVideoContext(video_id).play();
        }, 700);
      }
    }
    function pauseFun(index) {
      video_data.value[index].controls = false;
      video_data.value[index].play_but = true;
    }
    common_vendor.onShow(() => {
      common_vendor.index.createVideoContext(videoId.value).pause();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(video_data), (item, index, i0) => {
          return common_vendor.e({
            a: item.video_url,
            b: item._id,
            c: item.controls,
            d: item.video_title,
            e: common_vendor.t(item.video_title),
            f: item.play_but
          }, item.play_but ? {
            g: common_vendor.o(($event) => startPlay(index, item._id))
          } : {}, {
            h: item.avatar,
            i: common_vendor.t(item.name),
            j: index
          });
        }),
        b: common_vendor.unref(loading)
      }, common_vendor.unref(loading) ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/StudyFront/Uniapp/wx-guahao/src/pages/video/video.vue"]]);
wx.createPage(MiniProgramPage);
