<template>
  <div ref="chart" style="width: 100%; height: 90%"></div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: () => {},
    },
    partiesName: {
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
      //修改第一个bar颜色
      let temp = this.dataList[0];
      this.dataList[0] = {
        value: temp,
        itemStyle: {
          color: "#b38a2f",
        },
      };

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        color: ["#65edf7"],
        title: {
          subtext: "人数",
          color: "#fff",
          subtextStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "0",
          top: "50px",
          right: "20px",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.partiesName,
          //修改刻度标签
          axisLabel: {
            fontSize: 10,
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",
          data: ["人数"],
          //修改刻度标签
          axisLabel: {
            color: "#fff",
          },
          //y轴线样式
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.1)",
            },
          },
          //分割线样式
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
            },
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["rgba(250,250,250,0.3)"],
            },
          },
        },

        series: [
          {
            name: "人数",
            data: this.dataList,
            type: "bar",
          },
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