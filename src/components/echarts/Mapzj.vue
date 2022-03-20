<template>
  <div ref="map" style="width: 100%; height: 100%"></div>
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
      geoCoordMap: {
        杭州市: [120.153576, 30.287459],
        丽水市: [119.921786, 28.451993],
        舟山市: [122.146805, 30.056563],
        绍兴市: [120.582112, 29.997117],
        湖州市: [120.102398, 30.867198],
        嘉兴市: [120.750865, 30.762653],
        宁波市: [121.549792, 29.868388],
        金华市: [119.649506, 29.089524],
        台州市: [121.428599, 28.661378],
        衢州市: [118.87263, 28.941708],
        温州市: [120.672111, 28.000575],
      },
      resdata: [],
    };
  },
  mounted() {
    this.mapEchartsInit();
  },
  methods: {
    convertData() {
      for (var i = 0; i < this.dataList.length; i++) {
        var geoCoord = this.geoCoordMap[this.dataList[i].name];
        if (geoCoord) {
          this.resdata.push({
            name: this.dataList[i].name,
            value: geoCoord.concat(this.dataList[i].value),
          });
        }
      }
    },

    mapEchartsInit() {
      this.convertData();
      var myChart = this.$echarts.init(this.$refs.map);
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
        geo: {
          map: "zhejiang",
          aspectScale: 1,
          zoom: 1.2,
          show: true,
          roam: false, //鼠标缩放
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          itemStyle: {
            areaColor: "rgb(111, 235, 254,0.1)",
            borderColor: "#00091a", //线
            shadowColor: "#00091a", //外发光
            shadowBlur: 20,
          },
          emphasis: {
            itemStyle: {
              areaColor: "#00091a", //悬浮区背景
            },
          },
        },
        legend: {
          show: false,
          tooltip: {
            show: false,
          },
        },
        series: [
          {
            name: "浙江省",
            type: "map",
            map: "zhejiang",
            label: {
              show: true,
              fontSize: 15,
              fontWeight: "bold",
              color: "#fff",
            },
            aspectScale: 1,
            zoom: 1.2,

            itemStyle: {
              color: "#F4F4F4",
              borderWidth: 2, //区域边框宽度
              borderColor: "#6fffff", //区域边框颜色
              // areaColor: "#5389EB", //区域颜色
              areaColor: "rgba(101, 237, 247,0.1)", //区域颜色
            },
            emphasis: {
              label: { show: true },
              itemStyle: {
                borderWidth: 0.5,
                borderColor: "#1b6883",
                areaColor: "#6fffff",
              },
            },
          },
          {
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            legendHoverLink: true,

            symbolSize: [50, 50],
            // legendHoverLink: true,
            label: {
              show: true,
              formatter(value) {
                return value.data.value[2];
              },
              color: "#fff",
            },
            itemStyle: {
              color: "#5b7ad7", //标志颜色
              shadowBlur: 2,
              shadowColor: "#D8BC37",
            },
            data: this.resdata,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },

            emphasis: {
              scale: true,
            },
            zlevel: 1,
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