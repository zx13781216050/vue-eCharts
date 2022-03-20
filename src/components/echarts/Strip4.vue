<template>
  <div ref="Strip3Chart" style="width: 100%; height: 90%"></div>
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
    return {
      parlor: [["product", "开展场次", "参与人数"]],
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.Strip3Chart);
      // 绘制图表
      myChart.setOption({
        grid: {
          left: "3%",
          right: "7%",
          top: "9%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          show: false,
        },
        tooltip: {},
        dataset: {
          source: this.parlor.concat(this.dataList),
        },
        xAxis: {
          type: "category",
          //修改刻度标签
          axisLabel: {
            fontSize: 8,
            color: "#fff",
          },
        },
        yAxis: {
          //修改刻度标签
          axisLabel: {
            color: "#fff",
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: "bar", barGap: "0%" },
          { type: "bar", barGap: "0%" },
        ],
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