<template>
  <div>
    <div class="header">
      <title1><span>浙江省委员全景视窗</span></title1>
    </div>
    <div class="content">
      <div class="column">
        <div class="panel one">
          <h2>不同党派委员情况</h2>
          <div class="chart">
            <strip-echarts :dataList="parties" :partiesName="partiesName" />
          </div>
        </div>
        <div class="panel two">
          <h2>不同界别委员情况</h2>
          <div class="chart">
            <strip-echarts :dataList="sectors" :partiesName="sectorsName" />
          </div>
        </div>
        <div class="panel three">
          <h2>不同行业委员情况（暂无数据）</h2>
          <div class="chart">
            <strip-echarts :dataList="industry" :partiesName="industryName" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-bd">
            <ul>
              <li>全省委员数</li>
              <li>省本级委员数</li>
            </ul>
          </div>
          <div class="no-hd">
            <ul>
              <li>661</li>
              <li>327</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <!-- <div class="mapstate">
            <ul>
              <li>社情民意信息总数：254</li>
              <li>采纳数：102</li>
            </ul>
          </div> -->
          <mapzj :dataList="mapdata" />
        </div>
        <div class="smallpanel">
          <div class="spanel one">
            <h2>委员的年龄情况</h2>
            <div class="schart">
              <sectorcharts :dataList="age" />
            </div>
          </div>
          <div class="spanel two">
            <h2>委员的性别占比</h2>
            <div class="schart">
              <sex :dataList="sex" />
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="panel one">
          <h2>委员的教育情况（暂无数据）</h2>
          <div class="chart">
            <strip-echarts :dataList="education" :partiesName="educationName" />
          </div>
        </div>
        <div class="panel two">
          <h2>不同民族的委员情况</h2>
          <div class="chart">
            <strip-echarts :dataList="nation" :partiesName="nationName" />
          </div>
        </div>
        <div class="panel three">
          <h2>不同宗教的委员情况（暂无数据）</h2>
          <div class="chart">
            <strip-echarts :dataList="religion" :partiesName="religionName" />
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
import Mapzj from "@/components/echarts/Mapzj.vue";
import Sex from "@/components/echarts/Sector4.vue";
export default {
  components: { Title1, StripEcharts, Sectorcharts, Mapzj, Sex },
  data() {
    return {
      parties: [265, 27, 28, 9, 101, 32, 30, 39, 28, 23],
      partiesName: [
        "中国共产党",
        "中国国民党革命委员会",
        "九三学社",
        "台湾民主自治同盟",
        "无党派",
        "中国民主促进会",
        "中国民主建国会",
        "中国民主同盟",
        "中国农工民主党",
        "中国致公党",
      ],
      sectors: [
        27, 43, 4, 38, 17, 37, 36, 11, 8, 20, 5, 109, 9, 26, 19, 10, 28, 18, 19,
        13, 13, 5, 18, 6, 20, 16, 19, 20, 16, 8, 16,
      ],
      sectorsName: [
        "中国共产党",
        "教育界",
        "对外友好界",
        "经济界",
        "九三学社",
        "科学技术界",
        "农业和农村界",
        "少数民族",
        "社会福利和社会保障界",
        "社会科学界",
        "台湾民主自治同盟",
        "特别邀请人士",
        "体育界",
        "文化艺术界",
        "无党派人士",
        "新闻出版界",
        "医药卫生界",
        "浙江省妇女联合会",
        "浙江省工商业联合会",
        "浙江省归国华侨联合会",
        "浙江省科学技术协会",
        "浙江省青年联合会",
        "浙江省总工会",
        "中国共产主义青年团",
        "中国国民党革命委员会",
        "中国民主促进会",
        "中国民主建国会",
        "中国民主同盟",
        "中国农工民主党",
        "中国致公党",
        "宗教界",
      ],
      industry: [120, 200, 150, 80, 70, 130, 45, 10, 50, 160],
      industryName: [
        "共产党",
        "共产党1",
        "共产党2",
        "共产党3",
        "共产党4",
        "共产党5",
        "共产党6",
        "共产党7",
        "共产党8",
        "共产党9",
      ],
      education: [120, 200, 150, 80, 70, 130, 45, 10, 50, 160],
      educationName: [
        "共产党",
        "共产党1",
        "共产党2",
        "共产党3",
        "共产党4",
        "共产党5",
        "共产党6",
        "共产党7",
        "共产党8",
        "共产党9",
      ],
      nation: [635, 1, 2, 8, 3, 4, 1],
      nationName: ["汉族", "藏族", "朝鲜族", "回族", "满族", "畲族", "土家族"],
      religion: [120, 200, 150, 80, 70, 130, 45, 10, 50, 160],
      religionName: [
        "共产党",
        "共产党1",
        "共产党2",
        "共产党3",
        "共产党4",
        "共产党5",
        "共产党6",
        "共产党7",
        "共产党8",
        "共产党9",
      ],
      age: [
        { value: 349, name: "55岁以上" },
        { value: 243, name: "45-54岁" },
        { value: 61, name: "30-44岁" },
        { value: 1, name: "25-29岁" },
        { value: 0, name: "25岁以下" },
      ],
      sex: [
        { value: 474, name: "男性" },
        { value: 181, name: "女性" },
      ],
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

  margin-top: 0.7rem;
  padding: 0.125rem 0.125rem 0;
  .column {
    flex: 3;
    width: 29%;
    min-width: 29%;
    max-width: 29%;
    .panel {
      height: 5rem;
      padding: 0 0.1875rem 0.1875rem 0.5rem;
      border: 1px solid transparent;
      margin-bottom: 0.9rem;
      background: url("../../assets/bg3.png") no-repeat -0.6rem -1rem;
      background-size: 115% 150%;
      .chart {
        height: 4rem;
      }
    }
  }
  .column:nth-child(2) {
    flex: 5;
    width: 40%;
    min-width: 40%;
    max-width: 40%;
    margin: 0 0.125rem 0.1875rem;
  }

  h2 {
    color: #65edf7;
    font-size: 0.3125rem;
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