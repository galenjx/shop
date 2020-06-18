<template>
  <div class='home'>
    <div class='home-left'>
      <div class='home-left-top'>
        <div class='title'>
          <h2>全部产品</h2>
        </div>
        <ul>
          <h3>{{ productList.pc.title }}</h3>
          <li v-for='item in productList.pc.list' :key='item.name'>
            <a :href='item.url'>{{ item.name }}</a>
            <span v-if='item.hot' class='hot-tag'>HOT</span>
          </li>
        </ul>
        <hr />
        <ul>
          <h3>{{ productList.app.title }}</h3>
          <li v-for='item in productList.app.list' :key='item.name'>
            <a :href='item.url'>{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class='home-left-bottom'>
        <div class='title'>
          <h2>最新消息</h2>
        </div>
        <ul>
          <li v-for='item in newsList' :key='item.title'>
            <a :href='item.url'>{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class='home-right'>
      <div class='home-right-top'>
        <slideShow :slides = 'slides' :inv = 'invTime'></slideShow>
      </div>
      <div class='home-right-bottom'>
        <div class='container' v-for='item in boardList' :key='item.title'>
          <div class='img'></div>
          <img :src='item.src' :alt='item.title' />
          <div class='mes'>
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div>
              <router-link :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideshow.vue'
export default {
  name: 'Home',
  components: {
    slideShow
  },
  created () {
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          src: require('../assets/images/1.png'),
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          src: require('../assets/images/2.png'),
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          src: require('../assets/images/3.png'),
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          src: require('../assets/images/4.png'),
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      newsList: [
        {
          id: 1,
          title: '新闻条目1新闻条目1新闻条目1新闻条目1xxxxxxx',
          url: 'http://starcraft.com'
        },
        {
          id: 2,
          title: '新闻条目2新闻条目2新闻条目2新闻条目2',
          url: 'http://warcraft.com'
        },
        {
          id: 3,
          title: '新闻条3新闻条3新闻条3',
          url: 'http://overwatch.com'
        },
        {
          id: 4,
          title: '新闻条4广告发布',
          url: 'http://hearstone.com'
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang='scss'>
.home {
  margin: 0 auto;
  display: flex;
  width: 1232px;
  // justify-content: space-around;
  background-color: #f0f2f5;
}
.home .home-left {
  flex: 1;
  width: 300px;
  height: 900px;
  margin: 20px;
  flex-direction: column;
  .home-left-top {
    width: 270px;
    height: 357px;
    background-color: #fff;
    flex: 1;
    .title {
      color: #fff;
      padding: 5px 0px 5px 10px;
      background-color: #4fc08d;
    }
    h2 {
      font-weight: 600;
      font-size: 15px;
    }
    ul {
      padding-left: 12px;
      margin-bottom: 10px;
      .hot-tag {
        background: red;
        color: #fff;
        margin-left: 5px;
      }
      li a {
        line-height: 27px;
        font-weight: 400;
        font-size: 14px;
        color: black;
      }
      h3 {
        font-weight: 600;
        line-height: 43px;
        font-size: 14px;
      }
    }
  }
}

.home {
  .home-left .home-left-bottom {
    width: 270px;
    height: 512px;
    margin: 20px 0px;
    flex: 1;
    background-color: #fff;
    .title {
      color: #fff;
      padding: 5px 0px 5px 10px;
      background-color: #4fc08d;
      h2 {
        font-weight: 600;
        font-size: 15px;
      }
    }
    ul {
      padding-left: 12px;
      margin: 24px 0px;
      .hot-tag {
        background: red;
        color: #fff;
        margin-left: 5px;
      }
      li {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li a {
        line-height: 28px;
        font-weight: 400;
        font-size: 14px;
        color: black;
      }
      h3 {
        font-weight: 600;
        line-height: 43px;
        font-size: 14px;
      }
    }
  }
  .home-right {
    flex: 4;
    height: 900px;
    margin: 20px 0px;
    .home-right-top {
      overflow: hidden;
      background-color: #ffffff;
      width: 900px;
      height: 506px;
    }
    .home-right-bottom {
      display: flex;
      width: 900px;
      flex-wrap: wrap;
      height: 370px;
      .container:nth-child(odd) {
        margin-right: 14px;
      }
      .container {
        background-color: #ffffff;
        width: 443px;
        height: 165px;
        flex-shrink: 0;
        margin-top: 18px;
        display: flex;
        img {
          flex: 1;
          padding: 23px;
        }
        .mes {
          flex: 3;
          padding-top: 23px;
          h2 {
            font-size: 18px;
            margin-bottom: 15px;
          }
          p {
            font-size: 14px;
          }
          div {
            width: 64px;
            padding: 10px 20px;
            margin: 15px 0px;
            background-color: #4fc08d;
            border: none;
            cursor: pointer;
            a{
            color: #ffffff;
            }
          }
          }
      }
    }
  }
}
</style>
