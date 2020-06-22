<template>
  <div class="count">
    <div class="count-top">
      <h2>流量分析</h2>
      <p class="count-top-detal">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      <div class="count-top-all ">
        <div class="proMes">
          购买数量：
        </div>
        <div class="area right">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" size="small"></el-input-number>
        </div>
      </div>
      <div class="count-top-all ">
        <div class="proMes">
          产品类型：
        </div>
        <div class="area right">
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
        <div class="proMes">有效时间:</div>
        <div class="product right">
          <el-radio-group v-model="radio3" size="small">
            <el-radio-button label="半年"></el-radio-button>
            <el-radio-button label="一年"></el-radio-button>
            <el-radio-button label="三年"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="count-top-all">
        <div class="proMes">产品版本:</div>
        <div class="product right">
          <el-radio-group v-model="radio4" size="small">
            <el-radio-button label="客户版"></el-radio-button>
            <el-radio-button label="代理商版"></el-radio-button>
            <el-radio-button label="专家版"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="count-top-all">
        <div class="proMes">
          总价：
        </div>
        <div class="price right">678元</div>
      </div>
      <div class="count-top-all ">
        <div class="proMes">
        </div>
        <div class="price right"><el-button type = 'primary' size="small" @click="open1">立即购买</el-button></div>
        </div>
      <!-- </div> -->
    </div>
    <div class="count-bottom">
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio3: '半年',
      radio4: '客户版',
      options: [{
        value: '选项1',
        label: '入门版'
      }, {
        value: '选项2',
        label: '中级版'
      }, {
        value: '选项3',
        label: '高级版'
      }],
      value: '入门版',
      num: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    },
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
    .proMes {
      flex: 1;
    }
    .right {
      flex: 8;
    }
    .product {
      padding-left: 0px;
    }
    .duration {
      padding-left: 0px;
    }
    .area {
      padding-left: 0px;
    }
    .price {
      padding-left: 0px;
    }
  }
}
.count-bottom {
  background-color: #fff;
  .sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
  p {
  line-height: 1.6;
  }
  h2 {
  font-size: 20px;
  padding-bottom: 15px;
  }
  h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
  }
  li {
  padding: 5px 0;
  }
  }
.sales-board-table {
  width: 100%;
  margin-top: 20px;
  th {
  background: #4fc08d;
  color: #fff;
  }
  td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }
}
}
</style>
