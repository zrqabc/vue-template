<template>
  <div id="app">
    <Head></Head>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
  import Head from '@/components/Head/index';
  import Footer from '@/components/Footer/index';
  export default{
    components: {
      Head,
      Footer
    },
    data(){
      return {}
    },
    created() {},
    methods: {}
  }

</script>

<style scoped>
  #app{
    width: 100vw;
    height: 100vh;
    background-image: url("https://img.cbi360.net/2020/12/14/baef05ba-652e-4344-adf1-bdf5f8e579d2.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
