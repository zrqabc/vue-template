<template>
  <div class="error-page">
    <div class="main-con">
      404
    </div>
    <div class="back-con">
      <router-link to="/" class="btn italic">返回首页</router-link>
    </div>
  </div>
</template>

<script>
  export default{
    components: {},
    data(){
      return {}
    },
    created() {},
    methods: {}
  }

</script>

<style scoped lang="scss">
  .main-con{
    font-size: 1rem;
    text-align: center;
    line-height: 45vh;
  }
  .back-con{
    text-align: center;
    margin-top: 0.22rem;
    .btn{
      display: inline-block;
      width: 2.3rem;
      height: 0.68rem;
      background: linear-gradient(-35deg, #004DC4, #0660CD);
      box-shadow: 0px 2px 21px 0px rgba(30, 19, 86, 0.38);
      border-radius: 0.23rem;
      line-height: 0.68rem;
      text-align: center;
      color: #fff;
    }
  }

</style>
























