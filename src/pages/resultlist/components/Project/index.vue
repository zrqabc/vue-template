<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="top-con">
        <h1 class="italic">亲爱的</h1>
        <p class="text italic">北京中外建建筑设计有限公司</p>
        <div class="num-con italic">
          2020年一共中了
          <span class="num">4981</span>个标
        </div>
      </div>
      <div class="middle-con">
        <div class="title-con">
          <img class="img1" src="https://img.cbi360.net/2020/12/15/1240cf02-16ab-4187-891d-d1c115f0f51f.png" alt="">
        </div>
        <div class="text-con italic">
          南京盛香园房地产开发有限公司公园广 场及城市绿地（2016G98O、R、S、 T、U、V、W、X、Y地块）建设项目W、O地块总承包
        </div>
      </div>
      <div class="bottom-con">
        <div class="item">
          <div class="title-con">
            <img class="img1" src="https://img.cbi360.net/2020/12/15/df74aeb5-ce3a-46b2-8629-86c9abb5e513.png" alt="">
          </div>
          <div class="text-con italic">
            <span>
              <i>北京</i>市
            </span>
          </div>
        </div>
        <div class="item">
          <div class="title-con">
            <img class="img2" src="https://img.cbi360.net/2020/12/15/c386cea9-960d-4d57-92dc-959c2831f442.png" alt="">
          </div>
          <div class="text-con italic">
            <span>
            <i>2345</i>个标
          </span>
          </div>
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
      return {}
    },
    created() {},
    methods: {}
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .top-con{
    text-align: center;
    color: $blue;
    .text{
      font-size: 0.28rem;
      font-weight: bold;
      margin-top: 0.4rem;
    }
    .num-con{
      margin: 0.45rem 0;
      .num{
        color: $yellow;
        font-weight: bold;
        font-size: 0.48rem;
      }
    }
  }
  .middle-con{
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      .img1{
        width: 3.76rem;
      }
    }
    .text-con{
      font-size: 0.32rem;
      font-weight: bold;
      color: $blue;
      line-height: 0.48rem;
    }
  }
  .bottom-con{
    margin-top: 0.97rem;
    display: flex;
    justify-content: space-around;
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      .img1{
        width: 2.6rem;
      }
      .img2{
        width: 1.76rem;
      }
    }
    .text-con{
      text-align: center;
      span{
        display: inline-block;
        color: $blue;
      }
      i{
        font-size: 0.48rem;
        font-weight: bold;
        color: $yellow;
        font-style: italic;
      }
    }
  }


</style>
























