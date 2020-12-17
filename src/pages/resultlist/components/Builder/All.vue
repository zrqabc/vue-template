<template>
  <div class="main-con">
    <div class="text-con italic">
      <div class="text-item">
        您已有<span class="num"> 298 </span>名注册建造师，其中
      </div>
    </div>
    <div class="chart-con">
      <div id="area">

      </div>
    </div>
    <ul class="btn-con">
      <li
        v-for="(item,index) in btnList"
        :key="index"
        class="italic"
        :class="{active: activeIndex==index}"
        @click="clickBtn(index)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    components: {},
    data(){
      return {
        btnList:['一级','二级'],
        activeIndex: 0
      }
    },
    created() {},
    methods: {
      //点击按钮
      clickBtn(index) {
        this.activeIndex = index;
      },
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
    #area{
      width: 100%;
      height: 4.44rem;
    }
  }
  .btn-con{
    display: flex;
    justify-content: center;
    margin-top: 0.26rem;
    li{
      width: 1.13rem;
      height: 0.53rem;
      text-align: center;
      line-height: 0.53rem;
      background: linear-gradient(0deg, #562f7882 5%, #312260a1 96%);
      box-shadow: 4px 0px 8px 1px rgba(52, 54, 165, 0.21);
      color: #fff;
      font-size: 0.14rem;
    }
    li.active{
      background: $linear-gradient;
    }
    li:nth-child(2){
      margin-left: 0.47rem;
    }
  }


</style>
























