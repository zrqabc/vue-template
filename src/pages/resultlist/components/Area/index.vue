<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con">
          <img class="img1" src="https://img.cbi360.net/2020/12/15/32299e6e-a857-40d0-a82e-2fa67ae2ef5a.png" alt="">
        </div>
        <div class="text-con italic">
          <div class="text-top">
            <span class="province" v-for="(item,index) in 3" :key="index">浙江省</span>
            <span>等</span>
          </div>
          <div class="text-top">
            <span class="num">128</span>
            <span>个</span>
            建筑市场
          </div>
        </div>
      </div>
      <div class="item-con item-con2">
        <div class="title-con italic">
          截止2020年
        </div>
        <div class="text-con italic">
          <div class="text-top">您的业务范围已遍布全国</div>
          <div class="text-top">
            <span class="province" v-for="(item,index) in 3" :key="index">浙江省</span>
            <span>等</span>
          </div>
          <div class="text-top">
            <span class="num">128</span>
            <span>个</span>
            地区
          </div>
        </div>
        <!--市场无变化-->
        <div class="nochange-con">
          <img src="https://img.cbi360.net/2020/12/16/6e051111-1324-4470-b6db-df0c362da25e.png" alt="">
        </div>
      </div>
      <div class="chart-con">
        <div id="area">

        </div>


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
      return {}
    },
    created() {},
    methods: {
      //图表
      area() {
        let xdata = [];
        let subtext = '';
        let myChart = this.$echarts.init(document.getElementById('type'));
        let option = {
          title: {
            text: '司法风险',
            subtext: '总计：' + subtext + "个",
            subtextStyle: {
              color: '#FC9142',
              fontSize: 14
            },
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br>{c}，{d}%',
          },
          // color:['#6699FF','#FF6632','#C10000','#ABCBFF'],
          legend: {
            textStyle: {
              color: '#fff'
            },
            x:'center',
            y:'bottom',
          },
          series: [
            {
              type: 'pie',
              radius: '45%',
              center: ['50%', '40%'],
              data: xdata,
              label:{
                // position: 'inside',
                formatter: '{c}，{d}%',
                // width: '300px',
                color: '#fff',
              },
            }
          ]
        };
        myChart.setOption(option);
      }

    }
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
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
























