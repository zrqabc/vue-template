<template>
  <div class="main-con">
    <div class="text-con italic">
      <div class="text-item">
        您已有<span class="num"> {{report.company.PeopleOneCount + report.company.PeopleTwoCount}} </span>名注册建造师，其中
      </div>
    </div>
    <div class="chart-con">
      <div id="people-all">

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
  import { mapState } from 'vuex'
  import { objArrSort } from '@/utils/tools.js'
  export default{
    components: {},
    data(){
      return {
        btnList:['一级','二级'],
        activeIndex: 0
      }
    },
    created() {},
    async mounted() {
      await this.$store.dispatch('report/getReport',{
        companyName: this.$route.query.companyName,
        phone: this.$cookie.getCookie('isPermissions')
      });
      this.peopleChart(this.oneArr);
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
      twoArr() {
        return this.report.peoples.filter((value) => {
          return value.CategoryLevel == 2;
        })
      },
    },
    methods: {
      //点击按钮
      clickBtn(index) {
        this.activeIndex = index;
        switch (index) {
          case 0: this.peopleChart(this.oneArr);break;
          case 1: this.peopleChart(this.twoArr);break;
        }
      },
      //图表
      peopleChart(data) {
        let subtext = this.activeIndex==0 ? `一级建造师有 ${this.report.company.PeopleOneCount} 名` : `二级建造师有 ${this.report.company.PeopleTwoCount} 名`;
        let xdata = this.chartData(data);
        let myChart = this.$echarts.init(document.getElementById('people-all'));
        let option = {
          title: {
            // text: text,
            subtext: subtext,
            subtextStyle: {
              color: '#312260',
              fontSize: 14
            },
            x: 'center'
          },
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
              radius: '58%',
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
            name: otherPeopleCount ? '其他' : ''
          },
        ]
      }

    }
  }

</script>

<style scoped lang="scss">
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
    #people-all{
      width: 100%;
      height: 100%;
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
      font-size: 0.28rem;
    }
    li.active{
      background: $linear-gradient;
    }
    li:nth-child(2){
      margin-left: 0.47rem;
    }
  }


</style>
























