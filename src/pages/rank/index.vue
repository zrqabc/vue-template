<template>
  <div class="rank-con">
    <div class="main-bg">
      <div class="title-con">
        2020年<span>{{provinceName}}</span>企业综合实力排行榜
      </div>
      <div class="btn-con">
        <div
          class="btn"
          v-for="(item,index) in btns"
          :key="index"
          :class="{active: activeIndex==index}"
          @click="clickBtn(index)"
        >
          {{item}}
        </div>
      </div>
      <div class="list-con">
        <table>
          <tbody>
          <tr>
            <th>排名</th>
            <th>企业名称</th>
            <th>综合实力</th>
            <th>点击领取</th>
          </tr>
          <tr v-for="(item,index) in reportTop" :key="index">
            <td>{{index + 1}}</td>
            <td class="text-left">{{item.CompanyName}}</td>
            <td>{{item.Score}}</td>
            <td>
              <div
                class="btn"
                @click="$router.push(
                  {path: '/list',query: {companyName: item.CompanyName}}
                )"
              >领取</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="tip-con">*数据来源于公投市场</div>
      <div class="back-con">
        <router-link to="/" class="btn italic">返回首页</router-link>
      </div>
      <!--省份弹框-->
      <van-dialog
        v-model="show"
        :show-confirm-button="false"
        :close-on-click-overlay="false"
      >
        <ul class="provice-con">
          <li v-for="(item,index) in provinceList" :key="index" @click="clickProvince(item.ProvinceID,item.Province)">{{item.ShortName}}</li>
        </ul>
      </van-dialog>
    </div>
    <!--分享提示页-->
    <Share></Share>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Share from './components/Share'
  export default{
    components: {
      Share
    },
    data(){
      return {
        btns: ['全国','省份'],
        activeIndex: 0,
        show: false,
        provinceID: -1,
        provinceName: '全国',
      }
    },
    created() {
      this.getReportTop();
    },
    computed: {
      ...mapState({
        provinceList: (state) => { return state.report.provinceList },
        reportTop: (state) => { return state.report.reportTop },
      })
    },
    methods: {
      //点击tab
      clickBtn(index) {
        this.activeIndex = index;
        switch (index) {
          case 0:
            this.provinceID = -1;
            this.provinceName = '全国';
            this.getReportTop();
            this.show = false;
            break;
          case 1:
            this.getProvinceList();
            this.show = true;
            break;
        }
      },
      //获取省份列表
      getProvinceList() {
        this.$store.dispatch('report/getProvinceList');
      },
      //获取榜单
      getReportTop() {
        this.$store.dispatch('report/getReportTop',{
          provinceID: this.provinceID
        });
      },
      //选择省份
      clickProvince(provinceID,provinceName) {
        this.show = false;
        this.provinceID = provinceID;
        this.provinceName = provinceName;
        this.getReportTop();
      }

    }
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .main-bg{
    height: 82vh;
  }
  .title-con{
    color: #0660CD;
    font-size: 0.32rem;
    font-weight: bold;
    text-align: center;
    span{
      color: $yellow;
    }
  }
  .btn-con{
    text-align: center;
    margin: 0.3rem 0;
    .btn{
      width: 1.25rem;
      height: 0.5rem;
      display: inline-block;
      line-height: 0.5rem;
      font-size: 0.14rem;
      text-align: center;
      border-radius: 0.5rem;
      background: linear-gradient(174deg, #004DC4 5%, #0660CD 96%);
      opacity: 0.6;
    }
    .btn:nth-child(1){
      margin-right: 0.58rem;
    }
    .btn.active{
      opacity: 1;
    }
  }
  .list-con{
    height: 7rem;
    overflow: scroll;
    table{
      width: 100%;
      text-align: center;
      border-collapse: collapse;
      border: 1px solid #0660CD;
      tr{
        color: #0660CD;
        font-size: 0.18rem;
      }
      th{
        font-size: 0.18rem;
        color: #fff;
        background: #0660CD;
        border: 1px solid #3f86dc;
        height: 0.5rem;
        line-height: 0.5rem;
      }
      th:nth-child(1){
        width: 12%;
      }
      th:nth-child(2){
        width: 48%;
      }
      th:nth-child(3){
        width: 20%;
      }
      th:nth-child(4){
        width: 20%;
        border-right: none;
      }
      td{
        border: 1px solid #0660CD;
        padding: 0.06rem 0.1rem;
      }
      .btn{
        padding: 0.12rem 0.18rem;
        text-align: center;
        background: $linear-gradient;
        box-shadow: 0px 2px 2px 0px rgba(252, 63, 13, 0.09);
        border-radius: 0.1rem;
        color: #fff;
        font-size: 0.24rem;
        display: inline-block;
      }
    }
  }
  .tip-con{
    font-size: 0.18rem;
    color: $blue;
    text-align: right;
    margin-top: 0.2rem;
  }
  .back-con{
    text-align: center;
    margin-top: 0.22rem;
    .btn{
      display: inline-block;
      width: 2.3rem;
      height: 0.68rem;
      background: linear-gradient(-35deg, #004DC4, #0660CD);
      box-shadow: 0px 2px 21px 0px rgba(30, 19, 86, 0.38);
      border-radius: 0.23rem;
      line-height: 0.68rem;
      text-align: center;
      color: #fff;
    }
  }
  .provice-con{
    opacity: 0.9;
    display: flex;
    flex-wrap: wrap;
    padding: 0.18rem;
    li{
      color: #fff;
      border: 1px solid #fff;
      font-size: 14px;
      margin: 0.1rem 0.25rem;
      border-radius: 3px;
      width: 1rem;
      text-align: center;
      line-height: 0.6rem;
    }
  }
  .van-dialog{
    background: #0660CD;
    opacity: 0.9;
  }


</style>
























