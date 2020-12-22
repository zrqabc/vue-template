import Vue from 'vue';

const mixin = {
  data() {
    return {

    }
  },
  mounted() {},
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
    //是否有权限
    isPermissions() {
      let result = this.$cookie.getCookie('isPermissions');
      return result ? true : false;
    },
    //是否分享过
    isShare() {
      let result = this.$cookie.getCookie('isShare');
      return result ? true : false;
    }
  },
  methods: {

  }
}


Vue.mixin(mixin)
