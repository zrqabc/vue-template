<template>
  <div class="search-error">
    <div class="error-main">
      <div class="img-con">
        <img src="https://img.cbi360.net/2020/12/15/7fdfed9d-3fae-427b-ad7d-adb803e32999.png" alt="" class="img-people">
        <img src="https://img.cbi360.net/2020/12/15/1a4816e2-88f1-4a52-8ac5-f4e20402e197.png" alt="" class="img-text">
      </div>
      <div class="text-con italic">
        <p class="italic">请确保您输入的是施工企业全称</p>
        <p class="italic">如仍有问题，请联系成绩单保管员</p>
        <p class="italic">电话:
          <a class="italic" href="tel:18969186302">18969186302</a>
        </p>
      </div>
      <div class="btn-con italic">
        <router-link to="/" class="btn-back italic">返回首页</router-link>
        <router-link to="/rank" class="btn-look italic">查看企业榜单</router-link>
      </div>
    </div>
    <div class="error-bg"></div>
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
  .error-main{
    position: relative;
    z-index: 1;
  }
  .img-con{
    text-align: center;
    margin-top: 1.7rem;
    .img-people{
      width: 1.95rem;
    }
    .img-text{
      width: 5.42rem;
    }
  }
  .text-con{
    margin: 0.6rem 0.8rem;
    p{
      text-align: center;
      font-size: 0.28rem;
      color: #fff;
      a{
        color: #FFF900;
      }
    }
  }
  .btn-con{
    a{
      display: block;
      margin: 0 auto;
      width: 3rem;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
      background: $linear-gradient;
      border-radius: 0.2rem;
      color: #fff;
    }
    .btn-look{
      background: #015CCC;
      margin-top: 0.6rem;
    }
  }
  .error-bg{
    width: 100vw;
    height: 100vh;
    background-image: url('https://img.cbi360.net/2020/12/29/23489b9a-7077-4adc-8ed1-9c68445d8490.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
  }



</style>
























