import Vue from 'vue';
import store from '@/store'
import { mapState } from 'vuex'
import wxShare from '@/utils/wxShare.js'
// import { shareMsg } from '@/config/index.js'

const mixin = {
  data() {
    return {
      // shareMsg,//默认的分享信息
    }
  },
  created() {},
  mounted() {
    //获取是否分享
    store.dispatch('other/getIsShare');
  },
  filters: {
    //时间日期过滤器
    dateFormat(val) {
      if (!val) return '--';
      let time = val.split('T')[0];
      let res = new Date(time) > new Date('1900');
      return res ? val.split('T')[0] : '--';
    },
    //字符串格式化
    strFormat(val) {
      return !val ? "--" : val;
    },
    //数字格式化
    numberFormat(val) {
      return val <= 0 ? "--" : val;
    },
    //金额格式化
    moneyFormat(val) {
      return val <= 0 ? "--" : val + '万';
    },
  },
  computed: {
    ...mapState({
      isShare: (state) => { return state.other.isShare },//是否分享过
      weChatShareData: (state) => { return state.other.weChatShareData },//微信初始化数据
    }),
    //是否有权限
    isPermissions() {
      let result = this.$cookie.getCookie('isPermissions');
      return result ? true : false;
    },
  },
  methods: {
    //获取微信初始化数据
    async getWeChatShareData(friendCircle,friend,successCallback,failCallback) {
      successCallback ? successCallback() : '';//执行回调
      await this.$store.dispatch('other/getWeChatShareData',{
        url: location.href
      });
      await wxShare(this.weChatShareData,friendCircle,friend,successCallback,failCallback);
    }

  }
}


Vue.mixin(mixin)
