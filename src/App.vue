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
          <p @click="login">登录</p>|
          <p @click="regi">注册</p>|
          <p @click="dialogAboutVisible = true">关于</p>
        </div>
      </div>
    </div>
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <div class="app-foot">
      <p>© 2016 fishenal MIT</p>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">{{ dialogTitle }}</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogAboutVisible">
         <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
    </el-dialog>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      dialogTitle: '登录',
      dialogFormVisible: false,
      dialogAboutVisible: false,
      form: {
        name: '',
        password: '',
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    login () {
      this.dialogTitle = '登录'
      this.dialogFormVisible = true
    },
    regi () {
      this.dialogTitle = '注册'
      this.dialogFormVisible = true
    },
    about () {

    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #f0f2f5;
}
ul {
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
.header .header-inner .nav,
.header .header-inner .nav {
  color: #b2b2b2;
  display: flex;
  p {
    cursor: pointer;
    text-decoration: none;
    color: #b2b2b2;
    font-size: 13px;
    margin: 0 10px;
  }
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
