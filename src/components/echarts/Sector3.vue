<template>
  <div ref="Sector3Chart" style="width: 100%; height: 90%"></div>
</template>

<script>
export default {
  name: "hello",
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
      let myChart = this.$echarts.init(this.$refs.Sector3Chart);
      // 绘制图表
      myChart.setOption({
        visualMap: {
          show: false,
          min: 0,
          max: 500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {},
        },
        title: {},
        tooltip: {
          trigger: "item",
        },
        legend: { show: false },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "70%",

            data: this.dataList,
            itemStyle: {
              borderRadius: 5,
              //borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              color: "#fff",
              fontSize: 14,
              fontWeight: "bolder",
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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