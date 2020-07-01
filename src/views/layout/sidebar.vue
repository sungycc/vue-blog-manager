<template>
  <el-menu default-active="1-4-1" class="sidebar" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">博文管理</span>
    </el-menu-item>
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">分类管理</span>
    </el-menu-item>
    <el-menu-item>
      <i class="el-icon-menu"></i>
      <span slot="title">标签管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.sidebar {
  
}
</style>