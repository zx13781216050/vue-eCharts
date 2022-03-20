<template>
  <div ref="WordCloud" style="width: 100%; height: 90%"></div>
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
      timer: null,
    };
  },
  mounted() {
    this.getEchartRight1();
    this.timer = setInterval(() => {
      this.getEchartRight1();
    }, 5000);
  },
  methods: {
    getEchartRight1() {
      let myChart = this.$echarts.getInstanceByDom(this.$refs.WordCloud);
      if (myChart == null) {
        myChart = this.$echarts.init(this.$refs.WordCloud);
      }
      let option = {
        // tooltip: {
        //   show: false
        // },
        series: [
          {
            type: "wordCloud",
            gridSize: 1,
            sizeRange: [12, 50],
            rotationRange: [-90, 90],
            rotationStep: 45,
            shape: "diamond",
            width: "90%",
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 6,
            },
            textStyle: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                  ].join(",") +
                  ")"
                );
              },
            },

            emphasis: {
              fontSize: 20,
              // shadowBlur: 10,
              // shadowColor: 'rgba(255,255,255, .1)'
            },

            data: this.dataList,
          },
        ],
      };
      myChart.setOption(option, true);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
</style>