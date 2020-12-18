<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con italic">2020年</div>
        <div class="text-con italic">
          <div class="text-item">
            您荣获了<span class="num"> 298 </span>项企业荣誉
          </div>
          <div class="text-item">
            <span class="num"> 298 </span>项建造师荣誉
          </div>
          <div class="text-item">
            <span class="num"> 298 </span>项工程荣誉
          </div>
        </div>
      </div>
      <!--都有-->
      <div class="item-con italic item-con2" style="display: none">
        <div class="text-con italic">
          <div class="text-item">
            工程荣誉中省级奖项有<span class="num"> 298 </span>项
          </div>
          <div class="text-item">
            国家级奖项有<span class="num"> 298 </span>项，为
          </div>
        </div>
        <div class="title-con">鲁班奖</div>
        <div class="title-con">詹天佑奖</div>
        <div class="title-con title-con3">国家优质工程奖</div>
        <div class="list">
          <li v-for="(item,index) in 6" :key="index"></li>
        </div>
      </div>
      <!--只有国家级-->
      <div class="item-con italic item-con2" style="display: none">
        <div class="text-con italic">
          <div class="text-item">
            国家级奖项有<span class="num"> 298 </span>项，为
          </div>
        </div>
        <div class="title-con">鲁班奖</div>
        <div class="title-con">詹天佑奖</div>
        <div class="title-con title-con3">国家优质工程奖</div>
        <div class="list">
          <li v-for="(item,index) in 6" :key="index"></li>
        </div>
      </div>
      <!--只有省级-->
      <div class="item-con italic item-con2">
        <div class="text-con italic">
          <div class="text-item">
            工程荣誉中省级奖项有<span class="num"> 298 </span>项
          </div>
        </div>
        <div class="img-con">
          <img src="https://img.cbi360.net/2020/12/16/1edb8f9a-c142-4ba7-a8bc-b0804cc4d0de.png" alt="">
        </div>
      </div>
      <!--没有工程荣誉-->
      <div class="item-con italic item-con2" style="display: none">
        <div class="img-con">
          <img src="https://img.cbi360.net/2020/12/16/1edb8f9a-c142-4ba7-a8bc-b0804cc4d0de.png" alt="">
        </div>
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
      return {

      }
    },
    created() {},
    methods: {

    }
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .item-con{
    margin-bottom: 0.5rem;
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      background-image: url("https://img.cbi360.net/2020/12/15/67b2c248-ea5e-4467-b9bf-4c7659207066.png");
      background-repeat: no-repeat;
      background-size: 1.76rem 0.6rem;
      background-position: center;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
    .text-con{
      font-weight: bold;
      font-size: 0.28rem;
      text-align: center;
      color: $blue;
      line-height: 0.48rem;
      .text-item{
        margin-bottom: 0.1rem;
      }
      .num{
        font-weight: bold;
        font-size: 0.48rem;
        color: $yellow;
      }
    }
    .title-con3{
      background-size: 2.92rem 0.6rem;
    }
  }
  .item-con2{
    .text-con{
      .text-item{
        margin-bottom: 0.4rem;
      }
    }
    .list{
      text-align: center;
      li{
        width: 0.1rem;
        height: 0.1rem;
        background: #312260;
        display: inline-block;
        margin: 0 0.1rem;
      }
    }
  }
  .img-con{
    text-align: center;
    margin-top: 1.5rem;
    img{
      width: 3.38rem;
    }
  }



</style>
























