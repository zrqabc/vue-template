<template>
  <div class="main-con">
    <div class="text-con italic">
      <div class="text-item">
        您已有一级建造师<span class="num"> {{report.company.PeopleOneCount}} </span>名
      </div>
    </div>
    <div class="chart-con">
      <div id="people-one">

      </div>
    </div>
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
    mounted() {
      this.peopleChart();
    },
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      }),
      oneArr() {
        return this.report.peoples.filter((value) => {
          return value.CategoryLevel == 1;
        })
      },
    },
    methods: {
      //图表
      async peopleChart() {
        await this.$store.dispatch('report/getReport',{
          companyName: this.$route.query.companyName
        });
        let xdata = this.chartData(this.oneArr);
        let myChart = this.$echarts.init(document.getElementById('people-one'));
        let option = {
          // title: {
          //   // text: text,
          //   subtext: subtext,
          //   subtextStyle: {
          //     color: '#312260',
          //     fontSize: 14
          //   },
          //   x: 'center'
          // },
          // tooltip: {
          //   trigger: 'item',
          //   formatter: '{b}<br>{c}，{d}%',
          // },
          // color:['#6699FF','#FF6632','#C10000','#ABCBFF'],
          legend: {
            textStyle: {
              color: '#312260'
            },
            // orient: 'vertical',
            bottom: '0',
            // right: '10%',
          },
          series: [
            {
              type: 'pie',
              radius: '68%',
              center: ['50%', '42%'],
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
      chartData(data) {
        let arr = JSON.parse(JSON.stringify(data));
        let arr2 = arr.sort(objArrSort('PeopleCount',false));
        let otherValue = arr2.slice(4);
        let otherPeopleCount = 0;
        otherValue.map((val) => {
          otherPeopleCount += val.PeopleCount;
        });
        return [
          {
            value: arr2[0] ? arr2[0]['PeopleCount'] : 0,
            name: arr2[0] ? arr2[0]['CategoryName'] : ''
          },{
            value: arr2[1] ? arr2[1]['PeopleCount'] : 0,
            name: arr2[1] ? arr2[1]['CategoryName'] : ''
          },{
            value: arr2[2] ? arr2[2]['PeopleCount'] : 0,
            name: arr2[2] ? arr2[2]['CategoryName'] : ''
          },{
            value: arr2[3] ? arr2[3]['PeopleCount'] : 0,
            name: arr2[3] ? arr2[3]['CategoryName'] : ''
          },
          {
            value: otherPeopleCount,
            name: '其他'
          },
        ]
      }

    }
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .text-con{
    font-size: 0.28rem;
    text-align: center;
    color: $blue;
    line-height: 0.48rem;
    margin-bottom: 0.72rem;
    .text-item{

    }
    .num{
      font-weight: bold;
      font-size: 0.48rem;
      color: $yellow;
    }
  }
  .chart-con{
    width: 5.3rem;
    height: 5.43rem;
    margin: 0 auto;
    border: 1px solid #312260;
    box-shadow: 4px 0px 8px 1px rgba(52, 54, 165, 0.21);
    #people-one{
      width: 100%;
      height: 100%;
    }
  }


</style>
























