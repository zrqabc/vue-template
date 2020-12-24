<template>
  <div class="search-con">
    <div class="search-box">
      <div class="input-con">
        <input
          type="text"
          placeholder="请输入企业全称，领取成绩单"
          v-model.trim="companyName"
          @keyup="onKeyup"
          @blur="onBlur"
          @focus="onFocus"
        >
        <span @click="clearInput">X</span>
      </div>
      <div class="btn" @click="clickSearch">搜索</div>
      <div class="search-list" v-show="searchMoreShow">
        <ul>
          <li
            v-for="(item,index) in companyNameList"
            :key="index"
            @click="$router.push({
              path:'/list',
              query:{
                companyName: item.CompanyName
              }
            })"
          >{{item.CompanyName}}</li>
        </ul>
      </div>
    </div>
    <!--搜索错误-->
    <SearchError v-show="searchError"></SearchError>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SearchError from './components/SearchError';
  export default {
    components: {
      SearchError
    },
    data() {
      return {
        searchError: false,
        companyName: '',
        onKeyup: null,//键盘事件
        searchMoreShow: false,
      }
    },
    created() {
      this.clearInput();
      this.onKeyup = this.$lodash.debounce(this.searchCompanyName,500);
    },
    computed: {
      ...mapState({
        companyNameList: (state) => { return state.report.companyName }
      })
    },
    methods: {
      //联想功能
      async searchCompanyName() {
        if(!this.companyName){
          await this.$store.dispatch('report/changeCompanyNameList',[]);
        }else{
          //获取名字类似的企业
          await this.$store.dispatch('report/searchCompanyName',{
            companyName: this.companyName
          });
        }
      },
      //清空输入框
      clearInput() {
        this.companyName = '';
        this.$store.dispatch('report/changeCompanyNameList',[]);
        this.searchError = false;
      },
      //点击搜索
      async clickSearch() {
        if(this.companyName){
          let res = await this.$store.dispatch('report/getReport',{
            companyName: this.companyName
          });
          if(res.Code == 200 && res.Result) {
            this.$router.push({
              path:'/list',
              query:{
                companyName: res.Result.company.CompanyName
              }
            });
          }else{
            this.searchError = true;
          }
        }
      },
      //搜企业失去焦点
      onBlur() {
        setTimeout(() => {
          this.searchMoreShow = false;
        }, 200);
      },
      //搜企业获得焦点
      onFocus() {
        this.searchMoreShow = true;
      },

    }
  }

</script>

<style scoped lang="scss">
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
      max-height: 6.6rem;
      overflow: scroll;
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
























