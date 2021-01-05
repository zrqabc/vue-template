<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con italic">
          <div class="title-con-bg">2020年</div>
        </div>
        <div class="text-con italic">
          <div class="text-item">
            您荣获了<span class="num"> {{report.company.RedCompanyCount}} </span>项企业荣誉
          </div>
          <div class="text-item" v-if="report.company.RedBuilderCount > 0">
            <span class="num"> {{report.company.RedBuilderCount}} </span>项建造师荣誉
          </div>
          <div class="text-item" v-if="report.company.RedProjectCount > 0">
            <span class="num"> {{report.company.RedProjectCount}} </span>项工程荣誉
          </div>
        </div>
      </div>
      <!--都有-->
      <div class="item-con italic item-con2" v-if="report.company.RedProjectProvinceCount && report.company.RedProjectCountryCount">
        <div class="text-con italic">
          <div class="text-item">
            工程荣誉中省级奖项有<span class="num"> {{report.company.RedProjectProvinceCount}} </span>项
          </div>
          <div class="text-item">
            国家级奖项有<span class="num"> {{report.company.RedProjectCountryCount}} </span>项，为
          </div>
        </div>
        <div class="list-con">
          <div
            class="title-con"
            v-for="(item,index) in redProjectCountry"
            :key="index"
          >
            <div class="title-con-bg">
              {{item.AwardName}}
            </div>
          </div>
        </div>
        <div class="list">
          <li v-for="(item,index) in 6" :key="index"></li>
        </div>
      </div>
      <!--只有国家级-->
      <div class="item-con italic item-con2" v-if="report.company.RedProjectCountryCount && !report.company.RedProjectProvinceCount">
        <div class="text-con italic">
          <div class="text-item">
            国家级奖项有<span class="num"> {{report.company.RedProjectCountryCount}} </span>项，为
          </div>
        </div>
        <div class="list-con">
          <div
            class="title-con"
            v-for="(item,index) in redProjectCountry"
            :key="index"
          >
            <div class="title-con-bg">
              {{item.AwardName}}
            </div>
          </div>
        </div>
        <div class="list">
          <li v-for="(item,index) in 6" :key="index"></li>
        </div>
      </div>
      <!--只有省级-->
      <div class="item-con italic item-con2" v-if="report.company.RedProjectProvinceCount && !report.company.RedProjectCountryCount">
        <div class="text-con italic">
          <div class="text-item">
            工程荣誉中省级奖项有<span class="num"> {{report.company.RedProjectProvinceCount}} </span>项
          </div>
        </div>
        <div class="img-con">
          <img src="https://img.cbi360.net/2020/12/16/1edb8f9a-c142-4ba7-a8bc-b0804cc4d0de.png" alt="">
        </div>
      </div>
      <!--没有工程荣誉-->
      <div class="item-con italic item-con2" v-if="!report.company.RedProjectCount">
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
  import { mapState } from 'vuex'
  import { objArrSort } from '@/utils/tools.js'
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
      //工程国家荣誉
      redProjectCountry() {
        let arr = JSON.parse(JSON.stringify(this.report.reds));
        let arr2 = arr.sort(objArrSort('Sort',true));
        return arr2.slice(0,3);
      },
    },
    methods: {

    }
  }

</script>

<style scoped lang="scss">
  .item-con{
    margin-bottom: 0.5rem;
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      font-size: 0.28rem;
      height: 30px;
      line-height: 30px;
      .title-con-bg{
        display: inline-block;
        background-color: $blue;
        padding: 0px 13px;
        position: relative;
      }
      .title-con-bg:before{
        position: absolute;
        content: '';
        width: 11px;
        height: 30px;
        display: inline-block;
        background-image: url("https://img.cbi360.net/2020/12/30/67835e39-aacf-4937-827a-c40306bde155.png");
        background-repeat: no-repeat;
        background-size: cover;
        top: 0;
        left: -10px;
      }
      .title-con-bg:after{
        position: absolute;
        content: '';
        width: 11px;
        height: 30px;
        display: inline-block;
        background-image: url("https://img.cbi360.net/2020/12/30/4445405a-83c8-4d9a-bf45-7019cf4507c7.png");
        background-repeat: no-repeat;
        background-size: cover;
        top: 0;
        right: -10px;
      }
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
    margin-top: 1rem;
    img{
      width: 3.38rem;
    }
  }



</style>
























