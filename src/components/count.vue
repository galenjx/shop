<template>
  <div class="count">
    <div class="count-top">
      <h2>数据统计</h2>
      <p class="count-top-detal">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div class="count-top-all protect">
        <p>产品类型</p>
        <div style="margin-top: 20px">
          <el-radio-group v-model="radio3" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="count-top-all area"></div>
      <div class="count-top-all duration"></div>
      <div class="count-top-all price"></div>
      <div class="count-top-all "><el-button type = 'success'>立即购买</el-button></div>
    </div>
    <div class="count-bottom">

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio3: '上海'
    }
  }
}
</script>
<style lang="scss">
.count-top{
  .count-top-all {
    display: flex;
    vertical-align: baseline;
    p {
      display: inline-block;
    }
  }
}
</style>
