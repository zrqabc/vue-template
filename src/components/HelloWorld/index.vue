<template>
  <div id="myChart"></div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: { text: "" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>

<style lang="less" scoped>
#myChart{
  width:250px;
  height:250px;
  margin: 0 auto;
}
</style>
