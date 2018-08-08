<template>
  <el-container>
    <el-aside width="220px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'empty',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  beforeDestroy () { },
  methods: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-container{
  height: 100%;
}
.el-aside {
  background-color: #2f4050;
}
.el-header {
  border-bottom: 1px solid #e7eaec;
  height: 60px;
  background-color: #f3f3f3;
}
</style>
