<template>
  <div ref="Sectorchart" style="width: 100%; height: 90%"></div>
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
      let myChart = this.$echarts.init(this.$refs.Sectorchart);
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {
          trigger: "item",
        },
        calculable: true,

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "45%",

            label: {
              color: "#17a9d4",
              fontSize: 14,
              fontWeight: "bolder",
            },

            labelLine: {
              lineStyle: {
                color: "#17a9d4",
              },
            },
            data: this.dataList,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
          //虚线
          {
            type: "pie",
            color: ["#52D6FF", "rgba(255,255,255,0)"],
            center: ["50%", "50%"],
            radius: ["50%", "53%"],
            emphasis: {
              scale: false,
              label: {
                show: false,
              },
            },
            tooltip: {
              show: false,
            },
            lable: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: new Array(41).fill(10).map(() => {
              return {
                name: "",
                value: 20,
              };
            }),
          },
          {
            name: "外边框",
            type: "pie",
            clockwise: false,
            radius: ["13%", "0%"], //边框大小
            center: ["50%", "50%"], //边框位置
            tooltip: {
              show: false,
            },
            data: [
              {
                value: 10,
                itemStyle: {
                  borderWidth: 25, //设置边框粗细
                  borderColor: "rgb(101, 237, 247, 0.5)", //边框颜色
                },
              },
            ],
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