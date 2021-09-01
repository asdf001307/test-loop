<template>
  <div class="top">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Menu</template>
        <el-menu-item v-for="item in items" v-bind:key="item" index="2-1">{{item}}</el-menu-item>
        <!-- <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item> -->
        <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" @click="goCustomer">고객사등록</el-menu-item>
      <el-menu-item class="right-menu" index="3" disabled>Info</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>
<script>
    import router from "../router/index.js"
    export default {
        data() {
            return {
                activeIndex: '1',
                items :["고객관리","라이선스관리","사용자관리"],
            };

        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            goCustomer(){
                return router.push("/customer");
            },
        }
    }
</script>
<style>
  .top{
    height: 100px;
  }
  .right-menu{
    clear :right;
  }
</style>
