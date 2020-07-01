<template>
  <div class="layout-container">
    <sidebar class="sidebar" />
    <div class="main-container">
      <header>
        <navbar />
        <tags-view />
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar.vue'
import Navbar from './navbar.vue'
import TagsView from './tagsView.vue'

export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    TagsView,
  },
  
}
</script>

<style lang="less" scoped>
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar {
  width: 210px;
  height: 100%;
  background-color: #304156;
}

.main-container {
  flex: 1;
  height: 100%;
}

main {
  height: calc(100vh - 85px);
  width: 100%;
  position: relative;
  overflow-y: auto;
}
</style>