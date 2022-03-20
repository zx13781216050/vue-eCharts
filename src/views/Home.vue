<template>
  <el-container>
    <el-header
      style="
        height: 80px;
        background: linear-gradient(180deg, #006ae6, #2387e3);
      "
    >
      <!--<el-col class="header-logo" style="">-->
      <!--</el-col>-->
      <el-col
        :span="7"
        style="
          line-height: 80px;
          font-size: 25px;
          text-align: center;
          border-bottom: 1px solid #e6e6e6;
          color: white;
        "
        >政协全景视窗</el-col
      >
      <el-col :span="17">
        <el-menu
          :default-active="$route.path"
          mode="horizontal"
          @select="handleSelect"
          style="background: linear-gradient(180deg, #006ae6, #2387e3)"
        >
          <el-menu-item
            v-for="(item, index) in $router.options.routes"
            :key="index"
            :v-if="!item.hidden"
            :index="item.children[0].path"
            >{{ item.children[0].name }}</el-menu-item
          >
        </el-menu>
      </el-col>
    </el-header>
    <el-main>
      <router-view style="background-color: #e9ebed"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import ElCol from "element-ui/packages/col/src/col";
export default {
  components: {
    ElCol,
  },
  data() {
    return {
      routeMenu: {},
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.header-title {
  line-height: 80px;
  font-size: 26px;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  color: #fff;
  font-weight: 700;
  letter-spacing: 3px;
  font-style: italic;
}

.el-header {
  padding: 0px;
}

.header-logo {
  width: 170px;
  height: 100%;
  background: url("../../static/img/personal_logo.png") no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: contain;
}

.el-menu--horizontal > .el-menu-item {
  height: 80px;
  line-height: 80px;
}

.el-menu {
  background-color: none;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: #006ae5;
  color: #fff !important;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
  background: linear-gradient(180deg, #006ae6, #2387e3);
  color: #fff !important;
}

.el-menu-item {
  font-size: 22px;
}

.el-main {
  padding: 0px;
}
</style>
