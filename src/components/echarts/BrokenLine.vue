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
    legendData: {
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
        title: {},

        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: this.legendData,
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          left: "3%",
          right: "7%",
          top: "12%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2017", "2018", "2019", "2020", "2021"],
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
          //分割线样式
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
            },
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