<template>
  <div class="slide"  @mouseover="clearInv" @mouseleave="runInv">
    <div class="slide-img">
        <a :href="slides[nowIndex].href">
            <transition-group :name="imgchange" :mode="mode" tag="div">
              <img v-for="(item,index) in slides" :src="item.src" :key="item.src" v-show="index == nowIndex" alt="">
            </transition-group>
        </a>
    </div>
    <div class="slide-pages">
      <h2>{{ slides[nowIndex].title }}</h2>
      <ul>
        <li @click="prePage">&lt;</li>
        <li
          v-for="(item, index) in slides"
          :key="item.title"
          @click="jumpTo(index)"
          :class="{ underLineClass : nowIndex == index }"
        >{{ index + 1 }}</li>
        <li @click="nextPage">&gt;</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    inv: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      nowIndex: 0,
      timeId: null,
      isH: false,
      imgchange: 'preImgchange',
      mode: 'out-in'
    }
  },
  computed: {
    indexCount () {
      return this.slides.length
    }
  },
  methods: {
    jumpTo (index) {
      if (index > this.nowIndex) {
        this.imgchange = 'nextImgchange'
      }
      if (index < this.nowIndex) {
        this.imgchange = 'preImgchange'
      }
      this.nowIndex = index
    },
    nextPage () {
      this.imgchange = 'nextImgchange'
      if (this.nowIndex > this.indexCount - 2) {
        this.nowIndex = 0
      } else {
        this.nowIndex += 1
      }
    },
    prePage () {
      this.imgchange = 'preImgchange'
      if (this.nowIndex < 1) return (this.nowIndex = this.indexCount - 1)
      this.nowIndex -= 1
    },
    runInv () {
      this.timeId = setInterval(() => {
        this.nextPage()
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.timeId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
<style lang="scss">
.nextImgchange-enter {
  opacity: 0;
  transform: translateX(100%);
}
.nextImgchange-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.nextImgchange-enter-active,
.nextImgchange-leave-active {
  transition: all .5s ease;
}

.preImgchange-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.preImgchange-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX(100%);
}
.preImgchange-enter-active,
.preImgchange-leave-active {
  transition: all .5s ease;
}

.slide {
  width: 900px;
  position: relative;
}
.slide-img {
    overflow: hidden;
    height: 506px;
    div {
    height: 506px;
    display: flex;
    flex-wrap: nowrap;
    }
}
.slide-pages {
  padding: 5px 0px;
  font-size: 10px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  vertical-align: baseline;
  ul {
    display: flex;
    align-items: center;
    h2 {
      font-size: 13px;
      font-weight: 200;
    }
    li {
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
.underLineClass {
  text-decoration: underline;
}
.imgchange-enter {
  opacity: 0;
}
.imgchange-leave-active {
  transition: all .6s;
}
</style>
