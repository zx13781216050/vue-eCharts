<template>
  <div ref="Sector2Chart" style="width: 100%; height: 90%"></div>
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
      let myChart = this.$echarts.init(this.$refs.Sector2Chart);
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {
          trigger: "item",
        },
        lenged: {
          show: false,
        },

        calculable: true,
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "80%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 5,
              //borderColor: "#fff",
              borderWidth: 2,

              label: {
                color: "#fff",
                fontSize: 14,
                fontWeight: "bolder",
              },
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            data: this.dataList,
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