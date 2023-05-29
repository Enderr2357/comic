<template>
    <div class="bg">
      <el-container>
        <el-aside class="aside">
          <el-menu>
            <router-link to="/User/Subscribe">
              <el-menu-item index="1">
                <el-icon>
                  <Star />
                </el-icon>
                <p>我的订阅</p>
              </el-menu-item>
            </router-link>
            <router-link to="/User/History">
              <el-menu-item index="2">
                <el-icon>
                  <Clock />
                </el-icon>
                <a>浏览历史</a>
              </el-menu-item>
            </router-link>
            <router-link to="/User/Settings">
              <el-menu-item index="3">
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