<template>
  <div class="form-con">
    <van-dialog
      v-model="show"
      :show-confirm-button="false"
      :close-on-click-overlay="false"
    >
      <div class="form">
        <div class="form-item">
          <input type="text" placeholder="请输入手机号领取成绩单" v-model="phone" @blur="onBlur">
          <div class="send" :class="{gray: isGray}" @click="send">{{sendText}}</div>
        </div>
        <div class="form-item">
          <input type="text" placeholder="请输入验证码" v-model="verifyCode" @blur="onBlur">
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
        sendText: '发送验证码',
        isGray: false,
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
            //倒计时
            this.timeDown();
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
      },
      //倒计时
      timeDown() {
        this.isGray = true;
        let num = 60;
        let t = setInterval(() => {
          num--;
          this.sendText = `${num} S`;
          if(num <= 0){
            clearInterval(t);
            this.sendText = '发送验证码';
            this.isGray = false;
          }
        },1000)
      },
      //input失去焦点时
      onBlur() {
        //解决ios微信收起键盘时页面不归位的问题
        document.querySelector('body').scrollTop = 0;
      }

    }
  }

</script>

<style scoped lang="scss">
  .form{
    padding: 0.2rem;
    input[type=text]{
      width: 3.6rem;
      height: 0.6rem;
      padding-left: 0.2rem;
      border-radius: 0.1rem;
      outline: none;
      color: #333;
      font-size: 0.28rem;
      border: 1px solid $blue;
      border-radius: 0.6rem;
    }
    .form-item{
      margin: 0.3rem 0;
      display: flex;
      justify-content: space-between;
    }
    .send{
      width: 1.6rem;
      height: 0.6rem;
      display: inline-block;
      line-height: 0.6rem;
      font-size: 0.24rem;
      text-align: center;
      border-radius: 0.5rem;
      background: linear-gradient(174deg, #004DC4 5%, #0660CD 96%);
    }
    .gray{
      background: gray;
      pointer-events: none;
    }
    .get{
      width: 3rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.28rem;
      text-align: center;
      border-radius: 0.5rem;
      background: linear-gradient(174deg, #004DC4 5%, #0660CD 96%);
      margin: 0.6rem auto 0;
    }
  }



</style>

























