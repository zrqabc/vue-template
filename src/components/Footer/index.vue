<template>
  <div class="footer-con">
    <wx-open-launch-weapp
      id="launch-btn"
      username="gh_3a4e33c5ebb6"
    >
      <script type="text/wxtag-template">
        <a style="color: #fff;font-size: 14px;margin-right: 36px;">建设通出品</a>
      </script>
    </wx-open-launch-weapp>
    <a>数据截止日期：2020.12.15</a>
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

<style scoped>
  .footer-con{
    position: absolute;
    bottom: 16px;
    width: 100vw;
    text-align: center;
  }
  .footer-con a{
    color: #fff;
    font-size: 14px;
  }
  .footer-con .link{
    margin-right: 36px;
  }

</style>
























