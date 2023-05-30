<template>
  <div class="bg">
    <el-container>
      <el-aside class="aside">
        <el-menu>
          <router-link to="/Administrator/ComicManage">
            <el-menu-item index="1">
              <el-icon>
                <Collection />
              </el-icon>
              <p>漫画管理</p>
            </el-menu-item>
          </router-link>
          <router-link to="/Administrator/UserManage">
            <el-menu-item index="2">
              <el-icon>
                <User />
              </el-icon>
              <a>用户管理</a>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>

  </div>
</template>

<script setup>
</script>

<style>
.bg {
  background-color: #c8c9cc;
}

.aside {
  margin-left: 15%;
  background-color: white;
}

.mainbox {
  height: 100%;
  border-top: 5px solid var(--el-border-color);
  border-bottom: 5px solid var(--el-border-color);
}

.title {
  margin-left: 5%;
  font-size: x-large;
}

.empty {
  height: 20%;
  width: 20%;
  margin-left: 38%;
  margin-bottom: 10%;
}

.emptytext {
  margin-left: 39%;
  color: #73767a;
}


.el-main {
  --el-main-padding: 0 !important;
}

.el-menu-item.is-active {
  color: var(--el-color-warning) !important;
}
</style>