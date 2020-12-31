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
            <img src="https://img.cbi360.net/2020/12/30/df60b3f6-4f66-46a4-a8c2-3ac4f1ee72b3.png" alt="" class="watermark">
          </div>
        </div>
        <div class="img-con">
          {{evaluateResult}}
        </div>
      </div>
      <div class="bottom-con">
        <div class="left">
          <router-link to="/rank" class="look-btn italic">查看企业榜单</router-link>
          <a class="look-btn italic" @click="clickShare">晒成绩</a>
        </div>
        <div class="right">
          <img src="https://img.cbi360.net/2020/12/28/dd3c9c8a-bcc9-4c39-a6c7-c5c54a2b0f53.png" alt="">
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
        evaluateList: [//顺序：荣誉，业务范围，中标，资质
          ['奋进新时代 建功新征程', '再创佳绩，载誉而行', '摘冠折桂，业界荣耀'],
          ['扎根本地市场，精耕细作创品牌', '投标路上，你的潜力比你想象更给力', '建筑业的跨域强者，人生就要不停奋斗'],
          ['建筑界小萌新，C位出道', '长江后浪推前浪，后起之秀代代强', '我也想低调，可实力不允许','建筑业的老司机  哪有项目哪有我','行业投标大佬，疯狂打call','建筑业的扛把子，奥利给','无敌是多么的寂寞，真香啊'],
          ['同样九年义务教育，为何你一枝独秀', '行业领军之辈，优秀建企楷模', '改革创新一条街，打听打听谁领先','确认过眼神，绝对硬实力','专有所长 业有所精','你的专业，我放心','道路千万条，专业第一条'],
        ]
      }
    },
    created() {},
    computed: {
      ...mapState({
        report: (state) => { return state.report.report },
      }),
      evaluateResult() {
        return this.report.evaluate ?
          this.evaluateList[this.report.evaluate.Key][this.report.evaluate.Value] :
          '建筑业的跨域强者，人生就要不停奋斗';
      }
    },
    methods: {
      //点击分享
      clickShare() {
        this.$store.dispatch('other/getIsClickShare',true);
      }

    }
  }

</script>

<style scoped lang="scss">
  .main-bg {
    height: 80vh;
  }
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
        position: relative;
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
        .watermark{
          position: absolute;
          width: 75%;
          right: -21%;
          top: -45%;
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
      margin-top: 0.8rem;
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
    position: absolute;
    right: 5%;
    bottom: 5%;
    font-size: 0.18rem;
    color: $blue;
  }




</style>
























