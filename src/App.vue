<template>
  <div id="app">
    <div class="header">
      <div class="header-inner">
        <div class="logo">
          <router-link :to="{ path : '/' }">
            <img src="./assets/logo.png" alt="logo" />
          </router-link>
        </div>
        <div class="nav">
          <router-link to="/">登录</router-link> |
          <router-link to="/about">注册</router-link> |
          <router-link to="/detal">关于</router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
  text-decoration: none;
}
a {
  text-decoration: none;
  color: #b2b2b2;
}
.header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: #363636;
}
.header .header-inner {
  align-items: center;
  height: 100%;
  width: 98%;
  display: flex;
  justify-content: space-between;
}
.header .header-inner .logo img {
  height: 50px;
  width: 50px;
}
.header .header-inner .nav, .header .header-inner .nav a {
  text-decoration: none;
  color: #b2b2b2;
}</style>
