<template>
  <div class="form-con">
    <van-dialog
      v-model="show"
      :show-confirm-button="false"
      :close-on-click-overlay="false"
    >
      <div class="form">
        <div class="form-item">
          <input type="text" placeholder="请输入手机号领取成绩单" v-model="phone">
          <div class="send" @click="send">发送验证码</div>
        </div>
        <div class="form-item">
          <input type="text" placeholder="请输入验证码" v-model="verifyCode">
        </div>
        <div class="form-item">
          <div class="get" @click="clickReport">领取成绩单</div>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default{
    components: {},
    data(){
      return {
        show: false,
        phone: '',
        verifyCode: '',
      }
    },
    created() {
      this.show = !this.isPermissions;
    },
    computed: {
      ...mapState({
        // report: (state) => { return state.report.report }
      })
    },
    methods: {
      //发送验证码
      async send() {
        if(this.validate()){
          let res = await this.$store.dispatch('other/sendSMS',{
            phone: this.phone
          })
          if(res.Code == 200){
            //发送成功
            this.$toast(res.Msg);
          }else{
            this.$toast(res.Msg);
          }
        }
      },
      //点击领取成绩单
      async clickReport() {
        if(this.validate2()){
          let res = await this.$store.dispatch('other/userSMSIsVerify',{
            phone: this.phone,
            verify: this.verifyCode
          })
          if(res.Code == 200){
            //成功
            this.$cookie.setCookie('isPermissions','1',30);
            this.show = false;
          }else{
            this.$toast(res.Msg);
          }
        }
      },
      //验证手机号
      validate() {
        if(!this.phone){
          this.$toast('请输入手机号码');
          return false;
        }else if(!/^1[345678]\d{9}$/.test(this.phone)){
          this.$toast('请输入正确的手机号码');
          return false;
        }else {
          return true;
        }
      },
      //验证验证码
      validate2() {
        if(!this.phone){
          this.$toast('请输入手机号码');
          return false;
        }else if(!/^1[345678]\d{9}$/.test(this.phone)){
          this.$toast('请输入正确的手机号码');
          return false;
        }else if(!this.verifyCode){
          this.$toast('请输入验证码');
          return false;
        }else {
          return true;
        }
      }

    }
  }

</script>

<style scoped lang="scss">
  @import "@/assets/css/variables.scss";
  .form{
    padding: 0.2rem;
    input[type=text]{
      width: 3.8rem;
      height: 0.6rem;
      padding-left: 0.2rem;
      border-radius: 0.1rem;
      outline: none;
      color: #333;
      margin-right: 0.2rem;
      font-size: 0.28rem;
      border: 1px solid $blue;
      border-radius: 0.6rem;
    }
    .form-item{
      margin: 0.3rem 0.1rem;
    }
    .send{
      width: 1.8rem;
      height: 0.6rem;
      display: inline-block;
      line-height: 0.6rem;
      font-size: 0.14rem;
      text-align: center;
      border-radius: 0.5rem;
      background: linear-gradient(174deg, #004DC4 5%, #0660CD 96%);
    }
    .get{
      width: 3rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.14rem;
      text-align: center;
      border-radius: 0.5rem;
      background: linear-gradient(174deg, #004DC4 5%, #0660CD 96%);
      margin: 0.6rem auto 0;
    }
  }



</style>

























