<template>
  <div class='detail'>
    <div class='detail-left'>
      <img :src="imgsrc"/>
      <ul>
        <router-link v-for="item in products" :to="{ path: item.path }" tag="li" :key="item.name">{{ item.name }}</router-link>
      </ul>
    </div>
    <div class='detail-right'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'count',
          icon: require('../assets/images/1.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
        '/detail/count': require('../assets/images/1.png'),
        '/detail/forecast': require('../assets/images/2.png'),
        '/detail/analysis': require('../assets/images/3.png'),
        '/detail/publish': require('../assets/images/4.png')
      }
    }
  },
  computed: {
    imgsrc () {
      return this.imgMap[this.$route.path.toString()]
    }
  },
  created () {
  }
}
</script>
<style lang="scss">
.detail {
    padding: 12px;
    width: 1200px;
    display: flex;
    background-color: #f0f2f5;
    // height: 1300px;
    .detail-left {
        margin-right: 12px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        // height: 200px;
        background-color: #fff;
        img {
            padding: 10px 0px;
        }
        ul {
            padding-bottom: 10px;
            li {
                box-sizing: border-box;
                line-height: 33px;
                cursor: pointer;
                width: 200px;
                padding-left: 15px;
                &:hover{
                    background: #4fc08d;
                }
                &.router-link-active {
                    background: #4fc08d;
                }
            }
        }
    }
    .detail-right {
        width: 980px;
        flex: 5;
        background-color: pink;
    }
}
</style>
