<template>
  <div class="share-con">
    <van-popup
      v-model="show"
      :close-on-popstate="true"
      :close-on-click-overlay="false"
    >
      <div class="con">
        <img class="guide-img" src="https://img.cbi360.net/2020/12/17/eb58e46a-e25a-428c-a33f-c5a81e91b42c.png" alt="">
        <div class="text">
          恭候您多时了<br>
          查看企业榜单<br>
          只需动动小指头<br>
          告知您的好友圈<br>
          立即<span>解锁</span>权限查看
        </div>
        <div class="back-con">
          <router-link to="/" class="btn italic">返回首页</router-link>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import wxShare from '@/utils/wxShare.js'
  export default{
    components: {},
    data(){
      return {
        show: false,
      }
    },
    created() {
      this.show = !this.isShare;
      this.getWeChatShareData();
    },
    computed: {
      ...mapState({
        weChatShareData: (state) => { return state.other.weChatShareData }
      })
    },
    methods: {
      //获取微信初始化数据
      async getWeChatShareData() {
        await this.$store.dispatch('other/getWeChatShareData',{
          url: location.href
        });
        let option = {
          title: '标题', // 分享标题
          desc: '描述', // 分享描述
          link: location.href, // 分享链接
          imgUrl: 'https://img.cbi360.net/2020/12/22/a855a379-44e1-4985-aba3-e7520c364827.jpg', // 分享图标
        }
        wxShare(this.weChatShareData,option);
      }

    }
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .share-con{
    .van-popup{
      background: none;
    }
    .con{
      width: 100vw;
      height: 100vh;
      position: relative;
      .text{
        line-height: 0.55rem;
        padding-top: 34vh;
        text-align: center;
        span{
          font-size: 0.48rem;
          color: #FFFB07;
          font-weight: bold;
        }
      }
      .back-con{
        text-align: center;
        margin-top: 3.7rem;
        .btn{
          display: inline-block;
          width: 3rem;
          height: 0.68rem;
          background: linear-gradient(-35deg, #004DC4, #0660CD);
          box-shadow: 0px 2px 21px 0px rgba(30, 19, 86, 0.38);
          border-radius: 0.23rem;
          line-height: 0.68rem;
          text-align: center;
          color: #fff;
        }
      }
    }
    .guide-img{
      width: 1.6rem;
      position: absolute;
      top: 0.4rem;
      right: 0.48rem;
    }
  }

</style>
























