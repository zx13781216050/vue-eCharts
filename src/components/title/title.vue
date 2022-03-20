<template>
  <div>
    <div class="title1">
      <slot></slot>
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <div style="cursor: pointer">
              <span class="user-name">跳转其他页面</span>
            </div>
          </div>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span style="display: block" @click="$router.push('/proposal')"
                >提案统计</span
              >
            </el-dropdown-item>
            <el-dropdown-item>
              <span style="display: block" @click="$router.push('/')"
                >社情民意</span
              >
            </el-dropdown-item>
            <el-dropdown-item>
              <span style="display: block" @click="$router.push('/parlour')"
                >委员会客厅</span
              >
            </el-dropdown-item>
            <el-dropdown-item>
              <span style="display: block" @click="$router.push('/member')"
                >全省委员概况</span
              >
            </el-dropdown-item>
            <el-dropdown-item>
              <span style="display: block" @click="$router.push('/province')"
                >省本级委员情况</span
              >
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="time">
      <div class="time-list">
        <div class="time-content">
          <data-time></data-time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataTime from "../datatime/DataTime";
export default {
  components: { DataTime },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title1 {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.5rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  background-color: rgba(19, 68, 81, 0.8);
  .right-menu {
    float: left;

    .user-name {
      color: #fff;
    }
  }
}
.time {
  position: absolute;
  float: left;
  width: 100%;
  overflow: hidden;
}
.time-list {
  position: relative;
  left: 50%;
}
.time-content {
  position: relative;
  float: left;
  height: 0.7rem;
  width: 14rem;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: rgba(19, 68, 81, 0.8);
  &::before {
    position: absolute;
    top: 0;
    left: -0.7rem;
    content: "";
    width: 0;
    height: 0;
    border-top: 0.7rem solid rgba(19, 68, 81, 0.8);
    border-left: 0.7rem solid transparent;
  }
  &::after {
    position: absolute;
    bottom: 0;
    right: -0.7rem;
    content: "";
    width: 0;
    height: 0;
    border-top: 0.7rem solid rgba(19, 68, 81, 0.8);
    border-right: 0.7rem solid transparent;
  }
}
// .time-before {
//   float: left;
//   width: 0;
//   height: 0;
//   border-top: 0.7rem solid #134451;
//   border-left: 0.7rem solid transparent;
// }
// .time-after {
//   float: left;
//   width: 0;
//   height: 0;
//   border-top: 0.7rem solid #134451;
//   border-right: 0.7rem solid transparent;
// }
</style>