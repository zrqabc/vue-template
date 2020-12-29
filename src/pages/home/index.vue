<template>
  <div class="home-con">
    <div class="title">
      <img src="https://img.cbi360.net/2020/12/14/6961fa69-c551-4fee-9818-d82d8260ae6e.png" alt="" class="bg">
      <img src="https://img.cbi360.net/2020/12/14/72343e8f-3d98-4c46-a2fd-19e87fd58aa1.png" alt="" class="text">
    </div>
    <div class="max-text">
      <img src="https://img.cbi360.net/2020/12/14/2db9429f-0c47-4171-9b58-03ea06ee4ee2.png" alt="">
    </div>
    <div class="search-con">
      <input type="text" placeholder="请输入企业全称，领取成绩单" @click="clickInput">
      <div class="btn" @click="clickInput">领取</div>
    </div>
    <router-link to="/rank" class="look-btn italic">查看企业榜单>>></router-link>
  </div>
</template>

<script>
  export default{
    components: {},
    data(){
      return {}
    },
    created() {
      //初始化分享
      this.initShare();
    },
    methods: {
      //初始化分享
      initShare() {
        //获取微信初始化数据
        this.getWeChatShareData(
          {
            title: '2020年建企成绩单来了，你的企业多少分？',
            desc: '',
            link: this.shareMsg.link,
            imgUrl: this.shareMsg.imgUrl
          },
          {
            title: '2020年建企成绩单来袭，你的成绩是？',
            desc: '',
            link: this.shareMsg.link,
            imgUrl: this.shareMsg.imgUrl
          },
        );
      },
      //点击input或者是领取按钮
      clickInput() {
        this.$router.push('/search');
      }

    }
  }

</script>

<style lang="scss" scoped>
  .title{
    position: relative;
    padding-top: 0.9rem;
    padding-left: 1.67rem;
    .bg{
      width: 3.19rem;
      height: 0.6rem;
    }
    .text{
      position: absolute;
      width: 2.73rem;
      height: 0.26rem;
      left: 1.92rem;
      top: 1rem;
    }
  }
  .max-text{
    text-align: center;
    margin-top: 0.27rem;
    img{
      width: 4.97rem;
      height: 2.2rem;
    }
  }
  .search-con{
    margin-top: 0.94rem;
    text-align: center;
    input{
      width: 4.3rem;
      height: 0.6rem;
      padding-left: 0.2rem;
      border-radius: 0.1rem;
      outline: none;
      border: none;
      color: #333;
      margin-right: 0.2rem;
      font-size: 0.28rem;
    }
    .btn{
      display: inline-block;
      width: 1.6rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      background: $linear-gradient;
      border-radius: 0.2rem;
    }
  }
  .look-btn{
    display: block;
    color: #fff;
    width: 4rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
    background: $linear-gradient;
    border-radius: 0.2rem;
    margin: 1rem auto 0;
    font-size: 16px;
    font-weight: bold;
  }




</style>
























