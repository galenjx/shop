<template>
  <div class="dialog">
      <div class="dialog-cover" v-show="isShow" @click="clockDialog"></div>
      <transition name="dialog-wrap">
          <div class="dialog-wrap">
            <p class="closs-dialog" @click="clockDialog">×</p>
            <slot>empty</slot>
          </div>
      </transition>
  </div>
</template>
<script>
export default {
  props: {
    isSHow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clockDialog () {
      this.$emit('onClose')
    }
  }
}
</script>
<style lang="scss">
.dialog-wrap-enter-to, .dialog-wrap-leave-to {
  transform: translateY(-500px);
}
.dialog-wrap-enter-active,
.dialog-wrap-leave-active {
  transition: all .5s ease;
}
.dialog {
    width: 100%;
    height: 100%;
    .dialog-cover {
       width: 100%;
       height: 100%;
       background-color: #000;
    }
    .dialog-wrap {
        z-index: 999;
        width: 500px;
        position: fixed;
        top: 400px;
        left: 50%;
    }
}
</style>
