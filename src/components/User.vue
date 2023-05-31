<template>
  <div class="bg">
    <el-container>
      <el-aside class="asideu">
        <el-menu>
          <router-link to="/User/Subscribe">
            <el-menu-item index="1">
              <el-icon>
                <Star />
              </el-icon>
              <p>我的订阅</p>
            </el-menu-item>
          </router-link>
          <router-link to="/User/Settings">
            <el-menu-item index="2">
              <el-icon>
                <setting />
              </el-icon>
              <a>个人设置</a>
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
import '../style/user.css'
</script>

<style scoped></style>