<template>
  <div class="vants">
    <p>分享页</p>
  </div>
</template>
<script>
import wx from "@/utils/share";
import { mapActions } from "vuex";
export default {
  name: "Share",
  data() {
    return {};
  },
  methods: {
    ...mapActions("app", ["getAppid"]),
  },
  async created() {
    let { books } = await this.getAppid();
    //此处调取后端接口获取 appid,分享链接等参数
    wx.wxRegister(books, { title: "哈哈哈哈啊哈哈哈哈哈" }); //传入后端返回的的数据
    console.log(books, "data---------");
  },
};
</script>
<style lang="scss" scoped></style>
