<template>
  <div ref="BrokenLineChart" style="width: 100%; height: 90%"></div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.BrokenLineChart);
      // 绘制图表
      myChart.setOption({
        grid: {
          left: "3%",
          right: "7%",
          top: "9%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          //修改刻度标签
          axisLabel: {
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",
          //修改刻度标签
          axisLabel: {
            color: "#fff",
          },
        },
        series: this.dataList,
      });

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style>
</style>