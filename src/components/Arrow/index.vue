<template>
  <div class="arrow-con">
    <img src="https://img.cbi360.net/2020/12/15/f7fd5255-6526-4add-9346-94a24b6da673.png" alt="">
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }

</script>

<style scoped lang="scss">
  .arrow-con {
    text-align: center;
    animation: arrow 1200ms linear 2s infinite;
    img {
      width: 30px;
    }
  }
  @keyframes arrow {
    0% {
      opacity: 0;
      transform: translate(0, 100%);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

</style>
























