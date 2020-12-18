<template>
  <div class="search-con">
    <div class="search-box">
      <div class="input-con">
        <input type="text" placeholder="请输入企业全称，领取成绩单">
        <span>X</span>
      </div>
      <div class="btn">搜索</div>
      <div class="search-list" style="display: none">
        <ul>
          <li v-for="(item,index) in 5" :key="index">筑龙股份科技技术有限公司</li>
        </ul>
      </div>
    </div>
    <!--搜索错误-->
    <SearchError></SearchError>
  </div>
</template>

<script>
  import SearchError from './components/SearchError';
  export default {
    components: {
      SearchError
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .search-con{
    padding: 10px 20px;
  }
  .search-box {
    position: relative;
    .input-con{
      position: relative;
      display: inline-block;
      width: 80%;
      margin-right: 0.22rem;
      input {
        width: 100%;
        height: 0.6rem;
        padding-left: 0.2rem;
        border-radius: 0.1rem;
        outline: none;
        border: none;
        color: #333;
        font-size: 0.28rem;
        margin-right: 0.2rem;
      }
      span{
        color: #aaa;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 0.32rem;
        padding: 0.12rem 0.24rem;
      }
    }
    .btn {
      display: inline-block;
      width: 16%;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      background: $linear-gradient;
      border-radius: 0.1rem;
    }
    .search-list{
      position: absolute;
      width: 80%;
      left: 0px;
      top: 0.61rem;
      background: #fff;
      border-bottom-left-radius: 0.1rem;
      border-bottom-right-radius: 0.1rem;
      li{
        color: #333;
        padding: 0.1rem 0.2rem;
        border-bottom: 1px solid #f0f0f0;
      }
      li:last-child{
        border-bottom: 0;
      }
    }
  }


</style>
























