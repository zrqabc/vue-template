<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con italic">2019 VS 2020年度对比</div>
      </div>
      <div class="chart-con">
        <div id="area">

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
  export default{
    components: {},
    data(){
      return {

      }
    },
    created() {},
    methods: {
      //图表
      async trend() {
        let xdata = [];
        let sdata1 = [];
        let sdata2 = [];
        // this.projectOfAnnual.map((val)=>{
        //   xdata.push(val.Year);
        //   sdata1.push(val.ProjectCount);
        //   sdata2.push(val.ProjectMoney);
        // })
        let myChart = this.$echarts.init(document.getElementById('trend'));
        let option = {
          tooltip: {
            trigger: 'axis',
            // formatter: '{b}：{c}'
          },
          legend: {
            textStyle: {
              color: '#fff'
            },
          },
          // grid: {
          //   width: '40%',
          //   left: 'center',
          // },
          xAxis: {
            type: 'category',
            data: xdata,
            axisLine: {
              lineStyle:{
                color: '#ABCBFF'
              }
            },
            axisLabel: {
              formatter: '{value}年'
            }
          },
          yAxis: [
            {
              type: 'value',
              name: '数量/个',
              axisLabel: {
                formatter: '{value}'
              },
              axisLine: {
                show: true,
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
              type: 'value',
              name: '中标总额/亿',
              axisLabel: {
                formatter: '{value}'
              },
              axisLine: {
                show: true,
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
              name: '中标次数',
              type: 'bar',
              data: sdata1,
              label: {
                show: true,
                position: 'top',
                color: '#ABCBFF'
              },
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#0282DE'},
                    {offset: 1, color: '#3F28D0'}
                  ]
                )
              },
            },
            {
              name: '中标总额',
              type: 'bar',
              yAxisIndex: 1,
              data: sdata2,
              label: {
                show: true,
                position: 'top',
                color: '#ABCBFF'
              },
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#B1CAFB'},
                    {offset: 1, color: '#B1CAFB'}
                  ]
                )
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
  @import "@/assets/css/variables.scss";
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
    width: 5.3rem;
    height: 5.43rem;
    margin: 0 auto;
    #area{
      width: 100%;
    }
  }
  .bottom-con{
    color: $blue;
    text-align: center;
    margin-top: 0.8rem;
    font-size: 0.3rem;
    font-weight: bold;
    p{
      margin-top: 0.2rem;
      font-weight: bold;
    }
    span{
      font-size: 0.48rem;
      color: #F6F705;
    }
  }


</style>
























