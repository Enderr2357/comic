<template>
  <div class="bg">
    <el-container>
      <el-aside class="aside">
        <el-menu>
          <router-link to="/Admin/UserManage">
            <el-menu-item index="1">
              <el-icon>
                <User />
              </el-icon>
              <p>用户管理</p>
            </el-menu-item>
          </router-link>
          <router-link to="/Admin/ComicManage">
            <el-menu-item index="2">
              <el-icon>
                <Collection />
              </el-icon>
              <p>漫画管理</p>
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
import '../style/admin.css'
</script>
  
<style scoped></style>