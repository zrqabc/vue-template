<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con">
          <img class="img1" src="https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png" alt="">
        </div>
        <div class="text-con italic">
          <div class="text-top">
            <span v-for="(item,index) in 3" :key="index">浙江省</span>
            <span>等</span>
          </div>
          <div class="text-top">
            <span class="num">128</span>
            <span>个</span>
            建筑市场
          </div>
        </div>
      </div>
      <div class="bottom-con">



      </div>
    </div>
    <!--箭头-->
    <Arrow></Arrow>
  </div>
</template>

<script>
  export default{
    components: {},
    data(){
      return {}
    },
    created() {},
    methods: {}
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .item-con{
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      .img1{
        width: 3.82rem;
      }
    }
    .text-con{
      font-size: 0.32rem;
      color: $blue;
      line-height: 0.48rem;
    }
  }
  .bottom-con{

  }


</style>
























