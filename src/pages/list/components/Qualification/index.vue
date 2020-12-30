<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con italic">截止2020年底</div>
        <div class="text-con italic">
          <div class="text-item">
            您一共申请了<span class="num"> {{report.company.TechniqueCount}} </span>项资质
          </div>
          <div class="text-item" v-if="report.company.TechniqueWholeCount">
            总承包资质<span class="num"> {{report.company.TechniqueWholeCount}} </span>项
          </div>
          <div class="text-item" v-if="report.company.TechniqueMajorCount">
            专业承包资质<span class="num"> {{report.company.TechniqueMajorCount}} </span>项
          </div>
        </div>
      </div>
      <!--只有总承包、都有-->
      <div class="item-con item-con2" v-if="report.company.TechniqueWholeCount">
        <div class="title-con italic">总承包最高等级资质分别为</div>
        <div class="text-con italic">
          <div class="text-item" v-for="(item,index) in wholeArea" :key="index">
            <img :src="item.src" alt="" class="icon">
            <p class="italic">{{item.CategoryName}}</p>
          </div>
        </div>
      </div>
      <!--只有专业承包-->
      <div class="professional-con" v-if="report.company.TechniqueMajorCount && !report.company.TechniqueWholeCount">
        <img src="https://img.cbi360.net/2020/12/16/2d064b85-ed33-4d50-95eb-f824bfc2eb5c.png" alt="">
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
        iconList: [
          {
            id: '101010',//建筑
            src: 'https://img.cbi360.net/2020/12/16/b8521726-ddc2-4c50-8331-3545f4ce1155.png',
          },
          {
            id: '101011',//公路
            src: 'https://img.cbi360.net/2020/12/16/91c8ca91-0471-477a-aa23-4e6b93d6a20c.png',
          },
          {
            id: '101012',//铁路
            src: 'https://img.cbi360.net/2020/12/16/8d4331b9-073e-46b4-b865-84fead4ffcd2.png',
          },
          {
            id: '101013',//港口
            src: 'https://img.cbi360.net/2020/12/16/d48a8576-9f21-4dd8-a9f3-2afe1569bacf.png',
          },
          {
            id: '101014',//水利水电
            src: 'https://img.cbi360.net/2020/12/16/12cded8e-16d5-4d2a-a569-f14e153f6d39.png',
          },
          {
            id: '101015',//电力
            src: 'https://img.cbi360.net/2020/12/16/e8d40fcf-d0e4-407c-a458-c7028902871c.png',
          },
          {
            id: '101016',//矿山
            src: 'https://img.cbi360.net/2020/12/16/a39e455b-b81c-4643-bfd6-b6853b13eba5.png',
          },
          {
            id: '101017',//冶炼
            src: 'https://img.cbi360.net/2020/12/16/91905555-97fa-47db-90b2-22cf9be3acb6.png',
          },
          {
            id: '101018',//化工
            src: 'https://img.cbi360.net/2020/12/16/df6514f1-9dd7-478e-b688-12cf56210c72.png',
          },
          {
            id: '101019',//市政
            src: 'https://img.cbi360.net/2020/12/16/3fce2ea6-8b40-4441-88b5-e2ad06faa7e3.png',
          },
          {
            id: '101020',//通信
            src: 'https://img.cbi360.net/2020/12/16/4d4bde9f-5b54-462d-b36a-9b98b4e67a1d.png',
          },
          {
            id: '101021',//机电
            src: 'https://img.cbi360.net/2020/12/16/0e62098f-064a-43a9-915b-4c3a6c90ec62.png',
          },
        ]
      }
    },
    created() {},
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      }),
      //总承包
      wholeArea() {
        let arr = this.report.techniques.filter((value,key) => {
          return value.ParentID == 1;
        })
        arr.map((val1,key1) => {
          this.iconList.map((val2,key2) => {
            if(val1.CategoryID == val2.id){
              val1.src = val2.src;
            }
          })
        })
        return arr;
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
      margin-bottom: 0.5rem;
      background-image: url("https://img.cbi360.net/2020/12/15/67b2c248-ea5e-4467-b9bf-4c7659207066.png");
      background-repeat: no-repeat;
      background-size: 3.3rem 0.6rem;
      background-position: center;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
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
    .title-con{
      background-image: url("https://img.cbi360.net/2020/12/15/b164c98e-2bde-451e-ada2-fd91fdf52dac.png");
      background-size: 4.6rem 0.6rem;
    }
    .text-con{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .text-item{
        width: 1.4rem;
        margin-bottom: 0.5rem;
        .icon{
          width: 0.56rem;
          height: 0.56rem;
        }
        p{
          font-size: 0.2rem;
        }
      }
    }
  }
  .professional-con{
    margin-top: 1.4rem;
    text-align: center;
    img{
      width: 3.76rem;
    }
  }



</style>
























