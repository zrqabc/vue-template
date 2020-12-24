<template>
  <div class="main-con">
    <div class="main-bg">
      <div class="item-con">
        <div class="title-con italic">截止2020年</div>
      </div>
      <div class="builder-con">
        <!--都有-->
        <All v-if="report.company.PeopleOneCount && report.company.PeopleTwoCount"></All>
        <!--只有一级-->
        <One v-if="report.company.PeopleOneCount && !(report.company.PeopleTwoCount)"></One>
        <!--只有二级-->
        <Two v-if="report.company.PeopleTwoCount && !(report.company.PeopleOneCount)"></Two>
      </div>
    </div>
    <!--箭头-->
    <Arrow></Arrow>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import All from './All'
  import One from './One'
  import Two from './Two'
  export default{
    components: {
      All,
      One,
      Two,
    },
    data(){
      return {}
    },
    created() {},
    computed: {
      ...mapState({
        report: (state) => { return state.report.report }
      }),
    },
    methods: {

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
      background-size: 2.2rem 0.6rem;
      background-position: center;
      font-size: 0.28rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
  }


</style>
























