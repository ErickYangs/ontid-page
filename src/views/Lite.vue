<template>
  <div class="lite">
    <transition name="fade">
      <HomeHeader class="pcNav" v-if="!isShowNav" />
    </transition>
    <transition name="fade">
      <HomeHeader2 class="pcNav" v-if="isShowNav" transiton="fade" />
    </transition>
    <MobileTopNavLite class="mobileNav" />
    <LiteFirstScreen />
    <LiteSecondScreen />
    <LiteThirdScreen />
    <HomeFooter />
  </div>
</template>

<script>
import LiteFirstScreen from '@/components/lite/LiteFirstScreen.vue'
import LiteSecondScreen from '@/components/lite/LiteSecondScreen.vue'
import LiteThirdScreen from '@/components/lite/LiteThirdScreen.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'
// import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeHeader from '@/components/module/LiteHeader1.vue'
import HomeHeader2 from '@/components/module/LiteHeader2.vue'
import MobileTopNavLite from '@/components/module/MobileTopNavLite.vue'
import $ from "jquery"

export default {
  name: 'lite',
  components: {
    LiteFirstScreen,
    LiteSecondScreen,
    LiteThirdScreen,
    HomeFooter,
    HomeHeader,
    MobileTopNavLite,
    HomeHeader2
  },
  data() {
    return {
      isShowNav: false,
      timer: null
    }
  },
  methods: {
    fixedNav() {
      $(document).on('scroll', () => {
        let $scroll = $(document).scrollTop()
        if ($scroll >= 100) {
          this.isShowNav = true
        } else {
          this.isShowNav = false
        }
      })
    }
  },
  mounted() {
    // let $scroll = $(document).scrollTop()
    // if ($scroll >= 100) {
    //   this.isShowNav = true
    // } else {
    //   this.isShowNav = false
    // }
    this.timer = setTimeout(() => {
      this.fixedNav()
    }, 100);
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.lite {
  width: 100%;
  height: 100%;
}
.mobileNav {
  display: none;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
@media only screen and (max-width: 959px) {
  .pcNav {
    display: none;
  }
  .mobileNav {
    display: block;
  }
}
</style>
