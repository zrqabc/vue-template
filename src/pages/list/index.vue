<template>
  <div class="resultlist">
    <van-swipe
      style="height: calc(100vh - 100px);"
      vertical
      :loop="false"
      :show-indicators="false"
      initial-swipe="0"
    >
      <!--中标业绩-->
      <van-swipe-item v-if="report.company.TenderCount > 0">
        <Project></Project>
      </van-swipe-item>
      <!--金额-->
      <van-swipe-item v-if="report.company.TenderMoneySum > 0">
        <Money></Money>
      </van-swipe-item>
      <!--业务范围-->
      <van-swipe-item v-if="report.projectRanges.length > 0">
        <Area />
      </van-swipe-item>
      <!--资质-->
      <van-swipe-item v-if="report.company.TechniqueCount > 0">
        <Qualification></Qualification>
      </van-swipe-item>
      <!--荣誉-->
      <van-swipe-item v-if="(report.company.RedCompanyCount + report.company.RedBuilderCount + report.company.RedProjectCount) > 0">
        <Honor></Honor>
      </van-swipe-item>
      <!--建造师-->
      <van-swipe-item v-if="(report.company.PeopleOneCount + report.company.PeopleTwoCount) > 0">
        <Builder></Builder>
      </van-swipe-item>
      <!--成绩对比-->
      <van-swipe-item>
        <ResultVs></ResultVs>
      </van-swipe-item>
      <!--得分页-->
      <van-swipe-item>
        <Score></Score>
      </van-swipe-item>
    </van-swipe>
    <!--验证码表单-->
    <Form></Form>
    <!--分享提示页-->
    <Share v-if="isClickShare"></Share>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Project from './components/Project/index';
  import Money from './components/Money/index';
  import Area from './components/Area/index';
  import Qualification from './components/Qualification/index';
  import Honor from './components/Honor/index';
  import Builder from './components/Builder/index';
  import ResultVs from './components/ResultVs/index';
  import Score from './components/Score/index';

  import Form from './components/Project/Form'
  export default{
    components: {
      Project,
      Money,
      Area,
      Qualification,
      Honor,
      Builder,
      ResultVs,
      Score,
      Form
    },
    data(){
      return {}
    },
    async created() {
      //获取成绩单
      await this.getReport();
      //初始化分享
      await this.initShare();
    },
    computed: {
      ...mapState({
        report: (state) => { return state.report.report },
        isClickShare: (state) => { return state.other.isClickShare },//是否点击分享
      })
    },
    methods: {
      //初始化分享
      initShare() {
        //是否分享过title
        let text = this.isShare ?
          `2020建企成绩单来了，${this.report.company.CompanyName}得分${this.report.company.Score}，你的企业多少分？` :
          `我是${this.report.company.CompanyName}，这是我2020年的成绩单，总成绩是${this.report.company.Score}分！`;
        //获取微信初始化数据
        this.getWeChatShareData(
          {
            title: text
          },
          {
            title: '2020建企成绩单',
            desc: text
          },
        );
      },
      //获取成绩单
      async getReport() {
        let res = await this.$store.dispatch('report/getReport',{
          companyName: this.$route.query.companyName
        });
        if(res.Code != 200){
          this.$router.push('/404');
        }
      }

    }
  }

</script>

<style scoped lang="scss">


</style>
























