<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="top-con">
        <h1 class="italic">2020年,您的中标总金额达</h1>
        <p class="text italic">
          <i>{{report.company.TenderMoneySum ? report.company.TenderMoneySum.toFixed(0) : ''}}</i>万
        </p>
      </div>
      <div class="middle-con">
        <div class="title-con">
          <img class="img1" src="https://img.cbi360.net/2020/12/15/e539f61c-10eb-4bc2-8546-fb8b928a6fa4.png" alt="">
        </div>
        <div class="text-con italic">{{report.company.TenderMoneyMaxName}}</div>
      </div>
      <div class="bottom-con">
        <div class="item">
          <div class="title-con">金额为</div>
          <div class="text-con italic">
            <i>{{report.company.TenderMoneyMax ? report.company.TenderMoneyMax.toFixed(0) : ''}}</i>万
          </div>
        </div>
        <div class="item">
          <div class="title-con con2">常中标的金额范围是</div>
          <div class="text-con italic often">{{report.company.OftenTenderMoney}}</div>
        </div>
      </div>
    </div>
    <!--箭头-->
    <Arrow></Arrow>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default{
    components: {},
    data(){
      return {}
    },
    created() {},
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      })
    },
    methods: {}
  }

</script>

<style scoped lang="scss">
  .top-con{
    text-align: center;
    h1{
      color: $blue;
    }
    .text{
      color: $blue;
      margin-top: 0.2rem;
      i{
        color: $yellow;
        font-weight: bold;
        font-size: 0.48rem;
        margin-top: 0.2rem;
      }
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
    margin-top: 0.44rem;
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      .img1{
        width: 3.82rem;
      }
    }
    .text-con{
      color: $blue;
      i{
        font-size: 0.32rem;
        font-weight: bold;
        color: $yellow;
        line-height: 0.48rem;
      }
    }
  }
  .bottom-con{
    .item{
      margin-bottom: 0.4rem;
    }
    margin-top: 0.36rem;
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      background-image: url("https://img.cbi360.net/2020/12/15/50816629-f041-41b2-ad21-e15a31fd17af.png");
      background-repeat: no-repeat;
      background-size: 1.7rem 0.6rem;
      background-position: center;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
      margin-bottom: 0.3rem;
    }
    .con2{
      background-image: url("https://img.cbi360.net/2020/12/15/b164c98e-2bde-451e-ada2-fd91fdf52dac.png");
      background-size: 3.6rem 0.6rem;
    }
    .text-con{
      text-align: center;
      color: $blue;
      i{
        font-size: 0.48rem;
        font-weight: bold;
        color: $yellow;
      }
    }
    .often{
      color: $yellow;
      font-size: 0.48rem;
      font-weight: bold;
    }
  }


</style>
























