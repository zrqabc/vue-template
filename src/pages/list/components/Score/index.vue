<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con italic">2020年建企成绩单</div>
        <div class="top-con">
          <h1 class="italic">亲爱的</h1>
          <p class="text italic">{{report.company.CompanyName}}</p>
          <div class="num-con italic">
            <p class="italic">
              您的综合实力为：<span class="num">{{report.company.Score}}</span>
            </p>
            <p class="italic">
              您已打败了<span class="num">{{(report.company.Score * 1.0132/10).toFixed(0)}}%</span>建筑同行
            </p>
          </div>
        </div>
        <div class="img-con">
          建筑业的跨域强者，人生就要不停奋斗
        </div>
      </div>
      <div class="bottom-con">
        <div class="left">
          <router-link to="/rank" class="look-btn italic">查看企业榜单</router-link>
          <router-link to="/rank" class="look-btn italic">晒成绩</router-link>
        </div>
        <div class="right">
          <img src="https://img.cbi360.net/2020/12/22/fc102740-73a1-49b1-adca-018515a067f2.png" alt="">
          <p>生成我的成绩单</p>
        </div>
      </div>
      <div class="tip-con">*数据来源于公投市场</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default{
    components: {},
    data(){
      return {

      }
    },
    created() {},
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      }),
    },
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
      background-size: 2.93rem 0.6rem;
      background-position: center;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
    .top-con{
      text-align: center;
      color: $blue;
      font-size: 0.28rem;
      h1{
        color: $blue;
        font-size: 0.28rem;
      }
      .text{
        font-weight: bold;
        color: $blue;
        margin-top: 0.1rem;
      }
      .num-con{
        margin: 0.45rem 0;
        font-size: 0.28rem;
        p{
          color: $blue;
          font-weight: bold;
          font-size: 0.28rem;
        }
        .num{
          color: $yellow;
          font-weight: bold;
          font-size: 0.48rem;
        }
      }
    }
    .img-con{
      width: 100%;
      height: 0.84rem;
      background: $blue;
      border-radius: 34px;
      text-align: center;
      line-height: 0.84rem;
      font-size: 0.28rem;
      margin-top: 0.5rem;
    }
  }
  .bottom-con{
    display: flex;
    justify-content: center;
    .left{
      .look-btn{
        display: block;
        color: #fff;
        width: 2.25rem;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        background: linear-gradient(-22deg, #312260, #312994);
        border-radius: 0.26rem;
        font-size: 14px;
        margin: 0.42rem 0;
      }
      .look-btn:nth-child(2){
        background: $linear-gradient;
      }
    }
    .right{
      margin-left: 0.8rem;
      margin-top: 0.4rem;
      text-align: center;
      img{
        width: 1.56rem;
      }
      p{
        font-size: 0.2rem;
        color: $blue;
      }
    }
  }
  .tip-con{
    font-size: 0.18rem;
    color: $blue;
    text-align: right;
    margin-top: 1.2rem;
  }




</style>
























