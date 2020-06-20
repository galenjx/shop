<template>
  <div class="count">
    <div class="count-top">
      <h2>数据统计</h2>
      <p class="count-top-detal">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <div class="count-top-all">
        <div class="proMes">产品类型:</div>
        <div class="product">
          <el-radio-group v-model="radio3" size="small">
            <el-radio-button label="绿色版"></el-radio-button>
            <el-radio-button label="红色版"></el-radio-button>
            <el-radio-button label="紫色版"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="count-top-all ">
        <div class="proMes">
          适用地区：
        </div>
        <div class="area">
          <el-select v-model="value" placeholder="请选择" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="count-top-all">
        <div class="proMes">
          有效时间：
        </div>
        <div class="duration">半年</div>
      </div>
      <div class="count-top-all">
        <div class="proMes">
          总价：
        </div>
        <div class="price">500元</div>
      </div>
      <div class="count-top-all "><el-button type = 'primary' size="small"  @click="open1">立即购买</el-button></div>
    </div>
    <div class="count-bottom">
        <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>安全安保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>办公文教</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>彩票</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>车辆物流</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>成人用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>出版传媒</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>电脑硬件</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>电子电工</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>房地产建筑装修</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分类平台</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>服装鞋帽</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>箱包饰品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>化工原料制品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>机械设备</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>家庭日用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>家用电器</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>教育培训</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>节能环保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>金融服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>礼品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>旅游住宿</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>美容化妆</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>母婴护理</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>农林牧渔</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>商务服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>生活服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>食品保健品</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>手机数码</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>医疗服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>游戏</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运动休闲娱乐</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>招商加盟</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio3: '绿色版',
      options: [{
        value: '选项1',
        label: '北京'
      }, {
        value: '选项2',
        label: '上海'
      }, {
        value: '选项3',
        label: '天津'
      }, {
        value: '选项4',
        label: '武汉'
      }, {
        value: '选项5',
        label: '广州'
      }],
      value: '北京'
    }
  },
  methods: {
    open1 () {
      this.$message({
        message: '恭喜你，购买成功',
        type: 'success',
        showClose: true,
        offset: 100,
        duration: 2000
      })
    }
  }
}
</script>
<style lang="scss">
.count-top{
  border-radius: 10px;
  padding: 21px 0px 38px 32px;
  background-color: #fff;
  h2 {
    font-size: 20px;
    padding: 20px 0px;
  }
  p {
    background: #f7fcff;
    padding: 10px 0px;
    color: #999;
    line-height: 1.8;
  }
  .count-top-all {
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    .product {
      padding-left: 20px;
    }
    .duration {
      padding-left: 14px;
    }
    .area {
      padding-left: 10px;
    }
    .price {
      padding-left: 41px;
    }
    .el-button {
      // padding-left: px !important;
      margin-left: 100px;
    }
    div {
      margin-right: 20px;
      // vertical-align: baseline !important;
      // margin-top: 0px !important;
    }
  }
}
.count-bottom {
  background-color: #fff;
  .sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
}
</style>
