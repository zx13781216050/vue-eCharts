<template>
  <div>
    <div>
      <div class="begin-end">
        <img
          src="../../icons/time.svg"
          style="width: 25px; float: left; margin: 3px 0 0 3px"
        />
        <div class="begin-time">2020:11:11</div>
        <div style="margin: 0 2%; float: left">————</div>
        <div class="end-time">2020:11:11</div>
      </div>
    </div>
    <div class="now-time">当前时间：{{ currentTime }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: "", //定义一个定时器的变量
      currentTime: new Date(), // 获取当前时间
    };
  },
  methods: {},
  created() {
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function () {
      _this.currentTime = //修改数据date
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
};
</script>

<style lang="scss" scoped>
.begin-end {
  position: relative;
  float: left;
  height: 0.625rem;
  width: 7rem;
  line-height: 0.625rem;
  margin-left: 5%;
  border: 1px solid #bfbfbf;
  font-size: 18px;
  color: #bfbfbf;
  text-align: center;
  .begin-time {
    float: left;
    margin-left: 10%;
  }
  .end-time {
    float: left;
  }
}
.now-time {
  position: relative;
  float: right;
  height: 0.625rem;
  line-height: 0.625rem;
  margin-right: 5%;
  font-size: 18px;
  color: #bfbfbf;
}
.begin-end:after {
  content: "."; /*加一段内容*/
  display: block; /*让生成的元素以块级元素显示，占满剩余空间*/
  height: 0; /*避免生成的内容破坏原有布局高度*/
  clear: both; /*清除浮动*/
  visibility: hidden; /*让生成的内容不可见*/
}
.clearfix {
  zoom: 1; /*为IE6，7的兼容性设置*/
}
</style>