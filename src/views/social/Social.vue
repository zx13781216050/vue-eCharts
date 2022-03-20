<template>
  <div>
    <div class="header">
      <title1><span>浙江省社情民意信息统计全景视窗</span></title1>
    </div>
    <div class="content">
      <div class="column">
        <div class="panel one">
          <h2>浙江省社区民意信息趋势（暂无信息）</h2>
          <div class="chart">
            <broken-line-chart :dataList="trend" :legendData="legendData" />
          </div>
        </div>
        <div class="panel two">
          <h2>社情民意信息主题</h2>
          <div class="chart">
            <strip2-echarts :theme="theme" :dataList="numPeople" />
          </div>
        </div>
        <div class="panel three">
          <h2>社情民意信息报送范围（暂无信息）</h2>
          <div class="chart">
            <sector-2-charts :dataList="range" />
          </div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-bd">
            <ul>
              <li>全省社情民意信息数</li>
              <li>省本级社区民意信息（暂无信息）</li>
            </ul>
          </div>
          <div class="no-hd">
            <ul>
              <li>
                29279
                <span>同比：+183%</span>
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
              <li>社情民意信息总数：29279</li>
              <li>采纳数：（暂无信息）</li>
            </ul>
          </div>
          <mapzj :dataList="mapdata" />
        </div>
      </div>
      <!-- 右部分模块 -->
      <div class="column">
        <div class="panel one">
          <h2>社情民意信息来源情况</h2>
          <div class="chart">
            <sector-3-charts :dataList="state" />
          </div>
        </div>
        <div class="panel two">
          <h2>社情民意信息采纳情况（暂无信息）</h2>
          <div class="chart">
            <strip-3-echarts :dataList="source" :identity="identity" />
          </div>
        </div>
        <div class="panel three">
          <h2>社情民意信息搜索热词（暂无信息）</h2>
          <div class="chart">
            <word-cloud :dataList="hotWord" />
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
    Mapzj,
  },
  data() {
    return {
      trend: [
        {
          name: "社情民意信息总量",
          type: "line",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "采纳数",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
      legendData: ["社情民意信息总量", "采纳数"],
      range: [
        { value: 100, name: "社会" },
        { value: 100, name: "经济" },
        { value: 150, name: "政治" },
        { value: 100, name: "文化" },
        { value: 100, name: "生态" },
      ],
      state: [
        { value: 1788, name: "白映" },
        { value: 356, name: "鲍庆芳" },
        //{ value: 11, name: "王玲" },
        // { value: 40, name: "蔡金惠" },
        // { value: 8, name: "曹志林" },
        // { value: 1, name: "曾锋" },
        // { value: 47, name: "陈福军" },
        // { value: 2, name: "陈可乐" },
        // { value: 3, name: "陈敏红" },
        { value: 104, name: "陈先标" },
        //{ value: 15, name: "陈艳" },
        { value: 2142, name: "陈志威" },
        //{ value: 4, name: "程如金" },
        { value: 794, name: "程尚送" },
        //{ value: 1, name: "丁波澜" },
        { value: 943, name: "丁宣明" },
        //{ value: 87, name: "董慧明" },
        { value: 342, name: "董伟" },
        { value: 1050, name: "冯国伟" },
        { value: 235, name: "冯元" },
        //{ value: 1, name: "管苠茗" },
        //{ value: 3, name: "郭吉丰" },
        // { value: 66, name: "郭声" },
        // { value: 17, name: "郭晓玲" },
        // { value: 82, name: "过风祥" },
        // { value: 1, name: "洪一舟" },
        { value: 243, name: "胡翠" },
        // { value: 2, name: "胡青蓝" },
        // { value: 75, name: "黄春" },
        // { value: 1, name: "黄浩桢" },
        { value: 1222, name: "黄鸿峰" },
        { value: 145, name: "黄建华" },
        // { value: 1, name: "黄晓丽" },
        // { value: 41, name: "黄咏梅" },
        { value: 136, name: "金晶" },
        { value: 113, name: "李丰" },
        { value: 149, name: "李海花" },
        { value: 664, name: "李阳子" },
        { value: 107, name: "李甄凯" },
        { value: 355, name: "林赛君" },
        { value: 2036, name: "楼冰" },
        { value: 697, name: "潘勤俭" },
        { value: 915, name: "钱岑" },
        { value: 189, name: "邵玲" },
        { value: 401, name: "王春" },
        { value: 712, name: "王海丰" },
        { value: 173, name: "王建锋" },
        { value: 200, name: "王玲" },
        { value: 162, name: "王英特" },
        { value: 156, name: "王志强" },
        { value: 330, name: "吴浩" },
        { value: 700, name: "吴俊" },
        { value: 1023, name: "夏亮俊" },
        { value: 526, name: "谢宇亮" },
        { value: 161, name: "许庆荣" },
        { value: 1636, name: "许跃文" },
        { value: 328, name: "薛史佳" },
        { value: 191, name: "严芝" },
        { value: 1431, name: "余静柯" },
        { value: 214, name: "张海燕" },
        { value: 2354, name: "钟海" },
        { value: 168, name: "朱小敏" },
        { value: 542, name: "朱哲" },
      ],
      theme: ["经济改革", "民主统战", "社会发展", "五水共治", "政治法治"],
      numPeople: [8765, 1691, 14349, 409, 4111],
      source: [
        {
          name: "人数",
          data: [120, 200, 150, 80, 70],
          type: "bar",
        },
      ],
      identity: ["省政协委员", "专委会", "界别", "团体", "民主党派"],
      hotWord: [
        {
          name: "区块链",
          value: 810,
        },
        {
          name: "云计算",
          value: 520,
        },
        {
          name: "人工智能",
          value: 928,
        },
        {
          name: "大数据",
          value: 906,
        },
        {
          name: "工业互联网",
          value: 825,
        },
        {
          name: "医疗",
          value: 514,
        },
        {
          name: "质量溯源",
          value: 486,
        },
        {
          name: "政务",
          value: 53,
        },
        {
          name: "密码学",
          value: 927,
        },
        {
          name: "金融行业",
          value: 1308,
        },
        {
          name: "供应链",
          value: 693,
        },
        {
          name: "公有链",
          value: 611,
        },
        {
          name: "私有链",
          value: 512,
        },
        {
          name: "联盟链",
          value: 382,
        },
        {
          name: "数据共享",
          value: 312,
        },
        {
          name: "文创版权",
          value: 187,
        },
        {
          name: "天河链",
          value: 163,
        },
        {
          name: "数据存证",
          value: 104,
        },
        {
          name: "UDFS存储",
          value: 3,
        },
        {
          name: "在线教育",
          value: 31,
        },
        {
          name: "关联分析",
          value: 941,
        },
        {
          name: "智慧停车",
          value: 585,
        },
        {
          name: "链云生态",
          value: 473,
        },
        {
          name: "应用层",
          value: 358,
        },
        {
          name: "网络层",
          value: 246,
        },
        {
          name: "数据层",
          value: 207,
        },
        {
          name: "基础层",
          value: 194,
        },
        {
          name: "智能合约",
          value: 104,
        },
        {
          name: "去中心化",
          value: 87,
        },
        {
          name: "数字货币",
          value: 415,
        },
        {
          name: "酷屏",
          value: 253,
        },
        {
          name: "可视化",
          value: 211,
        },
        {
          name: "P2P",
          value: 116,
        },
        {
          name: "数据挖掘",
          value: 1309,
        },
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

  margin: 0 auto;
  margin-top: 0.7rem;
  padding: 0.125rem 0.125rem 0;
  .column {
    flex: 3;
    width: 29%;
    min-width: 29%;
    max-width: 29%;
  }
  .column:nth-child(2) {
    flex: 5;
    width: 40%;
    min-width: 40%;
    max-width: 40%;
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