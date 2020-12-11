<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section firstname">
        {{ enty }}
        <about />
      </div>
      <div class="section">
        <vants />
      </div>
      <div class="section secondCont">
        <span>不是吧</span>
      </div>
    </full-page>
  </div>
</template>

<script>
import about from "@/components/HelloWorld";
import vants from "@/components/Home";
import { mapState, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  components: {
    about,
    vants,
  },
  computed: {
    ...mapState("home", ["enty"]),
  },
  data() {
    return {
      options: {
        verticalCentered: true,
        afterLoad: this.afterLoad,
        controlArrows: true,
        navigation: true,
        navigationPosition: "right",
      },
    };
  },
  methods: {
    ...mapActions("home", ["getEnty"]),
    afterLoad(val) {
      //滚动时触发
      console.log(val);
    },
    fn() {
      this.$refs.fullpage.moveSectionDown;
    },
  },
  mounted() {
    this.getEnty();
  },
};
</script>
<style lang="less" scoped></style>
