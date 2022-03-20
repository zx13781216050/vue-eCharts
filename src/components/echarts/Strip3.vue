<template>
  <div ref="chart" style="width: 95%; height: 90%"></div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => {},
    },
    identity: {
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
      let myChart = this.$echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        color: ["#65edf7"],
        title: {},
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "0",
          top: "7px",
          right: "5%",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
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
          //y轴线样式
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.1)",
            },
          },
        },
        yAxis: {
          type: "category",
          data: this.identity,
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