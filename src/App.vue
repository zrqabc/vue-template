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

</style>
