<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="top-con">
        <h1 class="italic">亲爱的</h1>
        <p class="text italic">{{report.company.CompanyName}}</p>
        <div class="num-con italic">
          2020年一共中了
          <span class="num">{{report.company.TenderCount}}</span>个标
        </div>
      </div>
      <div class="middle-con">
        <div class="title-con">
          <img class="img1" src="https://img.cbi360.net/2020/12/15/1240cf02-16ab-4187-891d-d1c115f0f51f.png" alt="">
        </div>
        <div class="text-con italic">{{report.company.FirstTenderName}}</div>
      </div>
      <div class="bottom-con">
        <div class="item">
          <div class="title-con">
            <img class="img1" src="https://img.cbi360.net/2020/12/15/df74aeb5-ce3a-46b2-8629-86c9abb5e513.png" alt="">
          </div>
          <div class="text-con italic">
            <span>
              <i>{{report.company.OftenTenderCity}}</i>
            </span>
          </div>
        </div>
        <div class="item">
          <div class="title-con">
            <img class="img2" src="https://img.cbi360.net/2020/12/15/c386cea9-960d-4d57-92dc-959c2831f442.png" alt="">
          </div>
          <div class="text-con italic">
            <span>
            <i>{{report.company.OftenTenderCityCount}}</i>个标
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
  import { mapState } from 'vuex'
  export default {
    components: {},
    data() {
      return {}
    },
    created() {},
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      })
    },
    methods: {

    }
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .top-con {
    text-align: center;
    h1{
      color: $blue;
    }
    .text {
      color: $blue;
      font-size: 0.28rem;
      font-weight: bold;
      margin-top: 0.4rem;
    }
    .num-con {
      margin: 0.45rem 0;
      color: $blue;
      .num {
        color: $yellow;
        font-weight: bold;
        font-size: 0.48rem;
      }
    }
  }
  .middle-con {
    .title-con {
      text-align: center;
      margin-bottom: 0.3rem;
      .img1 {
        width: 3.76rem;
      }
    }
    .text-con {
      font-size: 0.32rem;
      font-weight: bold;
      color: $blue;
      line-height: 0.48rem;
    }
  }
  .bottom-con {
    margin-top: 0.97rem;
    display: flex;
    justify-content: space-around;
    .title-con {
      text-align: center;
      margin-bottom: 0.3rem;
      .img1 {
        width: 2.6rem;
      }
      .img2 {
        width: 1.76rem;
      }
    }
    .text-con {
      text-align: center;
      span {
        display: inline-block;
        color: $blue;
      }
      i {
        font-size: 0.48rem;
        font-weight: bold;
        color: $yellow;
        font-style: italic;
      }
    }
  }


</style>
























