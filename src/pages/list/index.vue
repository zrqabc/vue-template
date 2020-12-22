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
      <van-swipe-item>
        <Project></Project>
      </van-swipe-item>
      <!--金额-->
      <van-swipe-item>
        <Money></Money>
      </van-swipe-item>
      <!--业务范围-->
      <van-swipe-item>
        <Area />
      </van-swipe-item>
      <!--资质-->
      <van-swipe-item>
        <Qualification></Qualification>
      </van-swipe-item>
      <!--荣誉-->
      <van-swipe-item>
        <Honor></Honor>
      </van-swipe-item>
      <!--建造师-->
      <van-swipe-item>
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
    created() {
      //获取成绩单
      this.getReport();
    },
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      })
    },
    methods: {
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
  @import "@/assets/css/variables.scss";


</style>
























