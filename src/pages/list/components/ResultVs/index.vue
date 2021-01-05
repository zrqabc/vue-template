<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con italic">2019 VS 2020年度对比</div>
      </div>
      <div class="chart-con">
        <div id="resultvs">

        </div>
      </div>
      <div class="bottom-con">
        胜不骄败不馁
        <br>
        <p>
          <span>2021</span>年继续砥砺奋进！
        </p>
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
      return {

      }
    },
    created() {},
    mounted() {
      this.resultvs();
    },
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      }),
    },
    methods: {
      //图表
      async resultvs() {
        await this.$store.dispatch('report/getReport',{
          companyName: this.$route.query.companyName,
          phone: this.$cookie.getCookie('isPermissions')
        });
        let xdata = ['中标量/个','中标总额/W','荣誉/项','业务范围/个省'];
        let sdata1 = [
          this.report.history.TenderCount || '',
          Math.round(this.report.history.TenderMoney || ''),
          this.report.history.RedCount || '',
          this.report.history.BusinessRangeCount || ''
        ];
        let sdata2 = [
          this.report.company.TenderCount || '',
          Math.round(this.report.company.TenderMoneySum || ''),
          (this.report.company.RedCompanyCount + this.report.company.RedBuilderCount + this.report.company.RedProjectCount) || '',
          this.report.projectRanges.length || ''
        ];
        let myChart = this.$echarts.init(document.getElementById('resultvs'));
        let option = {
          tooltip: {
            trigger: 'axis',
            // formatter: '{b}：{c}'
          },
          legend: {
            top: 'bottom',
            left: 'right',
            textStyle: {
              // color: '#fff'
            },
          },
          grid: {
            width: '99%',//绘图区大小
            left: 'center',
          },
          xAxis: {
            type: 'category',
            data: xdata,
            axisLine: {
              lineStyle:{
                // color: '#ABCBFF',
              }
            },
            axisLabel: {
              formatter: '{value}',
              fontSize: 10,
              interval: 0,//强制显示所有标签
            }
          },
          yAxis: [
            {
              show: false,
              type: 'log',
              name: '数量/个',
              axisLabel: {
                formatter: '{value}个'
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#ABCBFF'
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#ABCBFF',
                }
              },
              axisTick: {
                lineStyle: {
                  // color: '#6076AD'
                }
              }
            },
            {
              show: false,
              type: 'log',
              name: '中标总额/亿',
              axisLabel: {
                formatter: '{value}项'
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#ABCBFF'
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: '#6076AD'
                }
              },
              axisTick: {
                lineStyle: {
                  // color: '#6076AD'
                }
              }
            }
          ],
          series: [
            {
              name: '2019年',
              type: 'bar',
              data: sdata1,
              label: {
                show: true,
                position: 'insideTopRight',
                offset: [0, -25],
                // color: '#295EC6'
              },
              itemStyle: {
                color: '#295EC6'
              },
            },
            {
              name: '2020年',
              type: 'bar',
              // yAxisIndex: 1,
              data: sdata2,
              barGap: '0%',//不同系列的柱间距离
              label: {
                show: true,
                position: 'insideTopLeft',
                offset: [0, -25],
                // formatter: function(a){
                //   return (a.data == 0) ? 'aa' : a.data
                // }
                // color: '#ABCBFF'
              },
              itemStyle: {
                color: '#2F235C'
              },
            }
          ]
        };
        myChart.setOption(option);
      },

    }
  }

</script>

<style scoped lang="scss">
  .item-con{
    margin-bottom: 0.54rem;
    .title-con{
      text-align: center;
      margin-bottom: 0.3rem;
      background-image: url("https://img.cbi360.net/2020/12/15/67b2c248-ea5e-4467-b9bf-4c7659207066.png");
      background-repeat: no-repeat;
      background-size: 3.72rem 0.6rem;
      background-position: center;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
  }
  .chart-con{
    width: 100%;
    height: 5.43rem;
    margin: 0 auto;
    #resultvs{
      width: 100%;
      height: 100%;
    }
  }
  .bottom-con{
    color: $blue;
    text-align: center;
    margin-top: 0.4rem;
    font-size: 0.3rem;
    font-weight: bold;
    p{
      margin-top: 0.2rem;
      font-weight: bold;
      color: $blue;
    }
    span{
      font-size: 0.48rem;
      color: #F6F705;
    }
  }


</style>
























