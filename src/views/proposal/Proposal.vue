<template>
  <div>
    <div class="header">
      <title1><span>浙江省提案统计全景视窗</span></title1>
    </div>
    <div class="content">
      <div class="column">
        <div class="panel one">
          <h2>浙江省提案趋势（暂无数据）</h2>
          <div class="chart">
            <broken-line-chart :dataList="trend" />
          </div>
        </div>
        <div class="panel two">
          <h2>提案类别情况</h2>
          <div class="chart">
            <strip-2-echarts :dataList="numProposal" :theme="type" />
          </div>
        </div>
        <div class="panel three">
          <h2>提案领域情况</h2>
          <div class="chart">
            <sector-2-charts :dataList="situation" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-bd">
            <ul>
              <li>全省提案数</li>
              <li>省本级提案数（暂无数据）</li>
            </ul>
          </div>
          <div class="no-hd">
            <ul>
              <li>
                246
                <span>同比：+12150%</span>
              </li>
              <li>
                22222
                <span>同比：+21%</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="map">
          <div class="mapstate">
            <ul>
              <li>（暂无数据）</li>
              <li>提案总数：246</li>
              <li>优秀提案：102</li>
              <li>重点提案：254</li>
              <li>民生提案：102</li>
            </ul>
          </div>
          <mapzj :dataList="mapdata" />
        </div>
        <div class="smallpanel">
          <div class="spanel one">
            <h2>重要提案/优秀提案/民生提案占比（暂无数据）</h2>
            <div class="schart">
              <sectorcharts :dataList="quality" />
            </div>
          </div>
          <div class="spanel two">
            <h2>个人提案和集体提案占比</h2>
            <div class="schart">
              <sector-3-charts :dataList="proportion" />
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel one">
          <h2>提案状态情况</h2>
          <div class="chart">
            <sector-3-charts :dataList="state" />
          </div>
        </div>
        <div class="panel two">
          <h2>提案来源情况</h2>
          <div class="chart">
            <strip-3-echarts :dataList="source" :identity="identity" />
          </div>
        </div>
        <div class="panel three">
          <h2>提案办理结果反馈情况</h2>
          <div class="chart">
            <sector-3-charts :dataList="feedback" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title1 from "@/components/title/title";
import StripEcharts from "@/components/echarts/Strip.vue";
import Sectorcharts from "@/components/echarts/Sector.vue";
import Sector2Charts from "@/components/echarts/Sector2.vue";
import Sector3Charts from "@/components/echarts/Sector3.vue";
import BrokenLineChart from "@/components/echarts/BrokenLine.vue";
import Strip2Echarts from "@/components/echarts/Strip2.vue";
import Strip3Echarts from "@/components/echarts/Strip3.vue";
import WordCloud from "@/components/echarts/WordCloud.vue";
import BrokenLineChart2 from "@/components/echarts/BrokenLine2.vue";
import Strip4Chart from "@/components/echarts/Strip4.vue";
import Mapzj from "@/components/echarts/Mapzj.vue";
export default {
  components: {
    Title1,
    StripEcharts,
    Sectorcharts,
    BrokenLineChart,
    Strip2Echarts,
    Sector2Charts,
    Sector3Charts,
    Strip3Echarts,
    WordCloud,
    BrokenLineChart2,
    Strip4Chart,
    Mapzj,
  },
  data() {
    return {
      proportion: [
        { value: 188, name: "个人提案" },
        { value: 58, name: "集体提案" },
      ],
      feedback: [
        // { value: 100, name: "满意" },
        // { value: 100, name: "不满意" },
        // { value: 150, name: "基本满意满意" },
        { value: 246, name: "未反馈" },
      ],
      state: [
        // { value: 100, name: "作废" },
        // { value: 100, name: "未审核" },
        // { value: 100, name: "审核中" },
        // { value: 100, name: "已立案" },
        // { value: 100, name: "已交办" },
        // { value: 100, name: "已验收" },
        // { value: 100, name: "已办理" },
        // { value: 100, name: "意见反馈" },
        // { value: 100, name: "被立案" },
        // { value: 100, name: "被覆盖" },
        { value: 246, name: "已签收" },
      ],
      situation: [
        { value: 78, name: "社会" },
        { value: 121, name: "经济" },
        { value: 7, name: "政治" },
        { value: 23, name: "文化" },
        { value: 17, name: "生态" },
      ],
      trend: [
        {
          name: "提案数",
          type: "line",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "立案数",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
      type: [
        "城建环保",
        "工业交通",
        "教育",
        "金融财贸",
        "科技",
        "农业农村",
        "人力社保",
        "文化体育",
        "医药卫生",
        "政法以及其他",
        "政协统战工作",
      ],
      numProposal: [35, 43, 7, 17, 32, 22, 20, 15, 12, 32, 11],
      quality: [
        { value: 1048, name: "优秀提案" },
        { value: 735, name: "民生提案" },
        { value: 580, name: "重点提案" },
      ],
      source: [
        {
          name: "人数",
          data: [188, 58],
          type: "bar",
        },
      ],
      identity: ["政协委员", "集体"],
      mapdata: [
        { name: "杭州市", value: 59 },
        { name: "丽水市", value: 2 },
        { name: "舟山市", value: 10 },
        { name: "绍兴市", value: 32 },
        { name: "湖州市", value: 14 },
        { name: "嘉兴市", value: 4 },
        { name: "宁波市", value: 44 },
        { name: "金华市", value: 12 },
        { name: "台州市", value: 10 },
        { name: "衢州市", value: 7 },
        { name: "温州市", value: 23 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  margin: 0 auto;
  margin-top: 0.7rem;
  padding: 0.125rem 0.125rem 0;
  .column {
    flex: 3;
    width: 29%;
  }
  .column:nth-child(2) {
    flex: 5;
    width: 40%;

    margin: 0 0.125rem 0.1875rem;
  }
  .panel {
    height: 5rem;
    padding: 0 0.1875rem 0.1875rem 0.5rem;
    border: 1px solid transparent;
    margin-bottom: 0.9rem;
    background-color: rgba(255, 255, 255, 0.01);
    background: url("../../assets/bg3.png") no-repeat -0.6rem -1rem;
    background-size: 115% 150%;
  }
  h2 {
    color: #65edf7;
    font-size: 0.3125rem;
  }
  .chart {
    height: 4rem;
  }
  .no {
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.1875rem;
    margin-bottom: 0.25rem;
    background: url("../../assets/border.png") no-repeat 0 0;
    background-size: 100% 100%;
    // &::before {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   content: "";
    //   width: 40px;
    //   height: 140px;
    //   border: 2px solid #17a9d4;
    //   border-right: transparent;
    // }
    // &::after {
    //   position: absolute;
    //   bottom: 0;
    //   right: 0;
    //   content: "";
    //   width: 40px;
    //   height: 140px;
    //   border: 2px solid #17a9d4;
    //   border-left: transparent;
    // }
    .no-hd {
      ul {
        display: flex;
        padding-right: 40px;
        li {
          flex: 1;
          line-height: 1rem;
          font-size: 0.875rem;
          color: #17a9d4;
          text-align: center;
          border: 1px solid #17a9d4;
          span {
            font-size: 0.175rem;
            color: #fff;
          }
        }
        li:nth-child(1) {
          background-color: rgba(23, 169, 212, 0.5);
          border-right: transparent;
        }
      }
    }
    .no-bd {
      ul {
        display: flex;
        padding-right: 40px;
        li {
          flex: 1;
          font-size: 0.3rem;
          color: #17a9d4;
          text-align: center;
        }
      }
    }
  }
  .map {
    height: 9.8rem;
    .mapstate {
      float: left;
      position: relative;

      width: 3rem;
      left: 0.5rem;
      top: 0.5rem;
      ul {
        padding-left: 0;
        li {
          color: #fff;
          font-size: 0.2em;
          text-align: center;
        }
      }

      background-color: rgba(10, 53, 110, 0.8);
    }
  }
  .smallpanel {
    display: flex;

    .spanel {
      flex: 1;
      margin: 0 10px;
      background: url("../../assets/bg2.png") no-repeat -0.5rem -0.9rem;
      background-size: 115% 150%;
      .schart {
        height: 4rem;

        border: 1px solid transparent;
      }
    }
  }
}
</style>