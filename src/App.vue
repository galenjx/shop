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
          <router-link to="/">登录</router-link>  |
          <router-link to="/about">注册</router-link>&nbsp;|
          <router-link to="/detal">关于</router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
     <div class="app-foot">
      <p>© 2016 fishenal MIT</p>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #f0f2f5;
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
  width: 90%;
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
  font-size: 13px;
  margin: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 10px;
}
</style>
