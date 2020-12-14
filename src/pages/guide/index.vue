<template>
  <div class="guide">
    <p>导航页</p>
    <van-button type="primary">主要按钮</van-button>
    <Home></Home>
  </div>
</template>

<script>
  import Home from '@/components/Home'
  export default {
    components: {
      Home
    },
    data() {
      return {};
    },
    methods: {},
    created() {
    },
  };
</script>

<style lang="scss" scoped>
  $width: 100px;
  .guide p{
    width: $width;
    font-size: 40px;
    border: 1px solid #ddd;
  }

</style>
