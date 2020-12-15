<template>
  <div class="resultlist">
    <van-swipe
      style="height: calc(100vh - 100px);"
      vertical
      :loop="false"
      :show-indicators="false"
      initial-swipe="2"
    >
      <van-swipe-item>
        <!--中标业绩-->
        <Project></Project>
      </van-swipe-item>
      <van-swipe-item>
        <!--金额-->
        <Money></Money>
      </van-swipe-item>
      <van-swipe-item>
        <!--范围-->
        <Area />
      </van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import Project from './components/Project/index';
  import Money from './components/Money/index';
  import Area from './components/Area/index';
  export default{
    components: {
      Project,
      Money,
      Area
    },
    data(){
      return {}
    },
    created() {},
    methods: {}
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";


</style>
























