<template>
  <div class="main-con">
    <div class="main-bg">
      <!--新开拓-->
      <div class="new-con">
        <!--1个-->
        <div class="item-con" v-if="newArea.length == 1">
          <div class="title-con">
            <img class="img1" src="https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png" alt="">
          </div>
          <div class="text-con italic">
            <div class="text-top">
              <span class="province">{{newArea[0].Province}}</span>建筑市场
            </div>
          </div>
        </div>
        <!--2个-->
        <div class="item-con" v-if="newArea.length == 2">
          <div class="title-con">
            <img class="img1" src="https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png" alt="">
          </div>
          <div class="text-con italic">
            <div class="text-top">
              <span class="province">{{newArea[0].Province}}、{{newArea[1].Province}}</span>
              <span class="num">2</span>
              <span>个</span>建筑市场
            </div>
          </div>
        </div>
        <!--3个-->
        <div class="item-con" v-if="newArea.length == 3">
          <div class="title-con">
            <img class="img1" src="https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png" alt="">
          </div>
          <div class="text-con italic">
            <div class="text-top">
              <span class="province">{{newArea[0].Province}}、{{newArea[1].Province}}、{{newArea[2].Province}}</span>
              <span class="num">3</span>
              <span>个</span>建筑市场
            </div>
          </div>
        </div>
        <!--3个以上-->
        <div class="item-con" v-if="newArea.length > 3">
          <div class="title-con">
            <img class="img1" src="https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png" alt="">
          </div>
          <div class="text-con italic">
            <div class="text-top">
              <span class="province">{{newArea[0].Province}}、{{newArea[1].Province}}、{{newArea[2].Province}}</span>
              <span>等</span>
            </div>
            <div class="text-top">
              <span class="num">{{newArea.length}}</span>
              <span>个</span>
              建筑市场
            </div>
          </div>
        </div>
      </div>
      <!--所有-->
      <div class="all-con">
        <!--1个-->
        <div class="item-con item-con2" v-if="allAreaDescending.length == 1">
          <div class="title-con italic">截止2020年</div>
          <div class="text-con italic">
            <div class="text-top">
              您的业务范围主要在
              <span class="province">{{allAreaDescending[0].Province}}</span>
            </div>
          </div>
        </div>
        <!--2个-->
        <div class="item-con item-con2" v-if="allAreaDescending.length == 2">
          <div class="title-con italic">截止2020年</div>
          <div class="text-con italic">
            <div class="text-top">您的业务范围主要在</div>
            <div class="text-top">
              <span class="province">{{allAreaDescending[0].Province}}、{{allAreaDescending[1].Province}}</span>
              <span class="num">2</span>
              <span>个</span>地区
            </div>
          </div>
        </div>
        <!--3个-->
        <div class="item-con item-con2" v-if="allAreaDescending.length == 3">
          <div class="title-con italic">
            截止2020年
          </div>
          <div class="text-con italic">
            <div class="text-top">您的业务范围主要在</div>
            <div class="text-top">
              <span class="province">{{allAreaDescending[0].Province}}、{{allAreaDescending[1].Province}}、{{allAreaDescending[2].Province}}</span>
              <span class="num">3</span>
              <span>个</span>地区
            </div>
          </div>
        </div>
        <!--3个以上-->
        <div class="item-con item-con2" v-if="allAreaDescending.length > 3">
          <div class="title-con italic">
            截止2020年
          </div>
          <div class="text-con italic">
            <div class="text-top">您的业务范围已遍布全国</div>
            <div class="text-top">
              <span class="province">{{allAreaDescending[0].Province}}、{{allAreaDescending[1].Province}}、{{allAreaDescending[2].Province}}</span>
              <span>等</span>
            </div>
            <div class="text-top">
              <span class="num">{{allAreaDescending.length}}</span>
              <span>个</span>地区
            </div>
          </div>
        </div>
      </div>
      <!--市场无变化-->
      <div class="nochange-con" v-if="newArea.length == 0">
        <img src="https://img.cbi360.net/2020/12/16/6e051111-1324-4470-b6db-df0c362da25e.png" alt="">
      </div>
      <!--图表-->
      <div class="chart-con">
        <div id="area"></div>
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
      return {}
    },
    created() {},
    mounted() {
      this.area();
    },
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      }),
      //新开拓
      newArea() {
        return this.report.projectRanges.filter((value,key) => {
          return value.IsNew == 1;
        })
      },
      //所有地区降序
      allAreaDescending() {
        let arr = JSON.parse(JSON.stringify(this.report.projectRanges));
        let arr2 = arr.sort(objArrSort('TenderCount',false));
        return arr2;
      }
    },
    methods: {
      //图表
      async area() {
        await this.$store.dispatch('report/getReport',{
          companyName: this.$route.query.companyName,
          phone: this.$cookie.getCookie('isPermissions')
        });
        let xdata = this.chartData();
        let myChart = this.$echarts.init(document.getElementById('area'));
        let option = {
          // tooltip: {
          //   trigger: 'item',
          //   formatter: '{b}<br>{c}，{d}%',
          // },
          // color:['#6699FF','#FF6632','#C10000','#ABCBFF'],
          legend: {
            textStyle: {
              color: '#312260'
            },
            orient: 'vertical',
            top: 'middle',
            right: '0%',
          },
          series: [
            {
              type: 'pie',
              // radius: '45%',
              center: ['40%', '50%'],
              data: xdata,
              label:{
                show: false,
                // position: 'inside',
                formatter: '{c}，{d}%',
                // width: '300px',
                color: '#fff',
              },
            }
          ]
        };
        myChart.setOption(option);
      },
      //图表数据
      chartData() {
        let arr = JSON.parse(JSON.stringify(this.report.projectRanges));
        let arr2 = arr.sort(objArrSort('TenderCount',false));
        let otherValue = arr2.slice(3);
        let otherTenderCount = 0;
        otherValue.map((val) => {
          otherTenderCount += val.TenderCount;
        });
        return [
          {
            value: arr2[0] ? arr2[0]['TenderCount'] : 0,
            name: arr2[0] ? arr2[0]['Province'] : ''
          },{
            value: arr2[1] ? arr2[1]['TenderCount'] : 0,
            name: arr2[1] ? arr2[1]['Province'] : ''
          },{
            value: arr2[2] ? arr2[2]['TenderCount'] : 0,
            name: arr2[2] ? arr2[2]['Province'] : ''
          },
          {
            value: otherTenderCount,
            name: otherTenderCount ? '其他' : ''
          },
        ]
      }

    }
  }

</script>

<style scoped lang="scss">
  .item-con{
    margin-bottom: 0.4rem;
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      .img1{
        width: 3.82rem;
      }
    }
    .text-con{
      font-size: 0.28rem;
      text-align: center;
      color: $blue;
      line-height: 0.48rem;
      .text-top{
        margin-bottom: 0.1rem;
      }
      .province{
        font-weight: bold;
        font-size: 0.32rem;
      }
      .num{
        font-weight: bold;
        font-size: 0.48rem;
        color: $yellow;
      }
    }
  }
  .item-con2{
    .title-con{
      background-image: url("https://img.cbi360.net/2020/12/15/67b2c248-ea5e-4467-b9bf-4c7659207066.png");
      background-repeat: no-repeat;
      background-size: 2.57rem 0.6rem;
      background-position: center;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
  }
  .nochange-con{
    text-align: center;
    img{
      width: 4.6rem;
    }
  }
  .chart-con{
    #area{
      width: 100%;
      height: 3.32rem;
    }

  }


</style>
























