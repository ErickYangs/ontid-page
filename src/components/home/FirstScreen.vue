<template>
  <div class="first_screen">
    <div class="header_box">
      <transition name="fade">
        <HomeHeader v-if="!isShow" class="pc_nav" />
      </transition>
      <transition name="fade">
        <HomeHeader2 v-if="isShow" class="pc_nav" transiton="fade" />
      </transition>
      <MobileTopNav class="mobile_nav" />
    </div>
    <!-- to do -->
    <div class="link_banner home_contanier">
      <LinkBanner class="banner_box" />
    </div>
    <BannerRightTips class="right_tips_box" />
  </div>
</template>

<script>
import HomeHeader from '@/components/module/IndexHeader1.vue'
import HomeHeader2 from '@/components/module/IndexHeader2.vue'
import LinkBanner from '@/components/home/LinkBanner.vue'
import BannerRightTips from '@/components/home/BannerRightTips.vue'
import MobileTopNav from '@/components/module/MobileTopNav.vue'
// import Parallax from 'vue-parallaxy'
import $ from "jquery"

export default {
  name: 'firstscreen',
  components: {
    HomeHeader,
    LinkBanner,
    BannerRightTips,
    MobileTopNav,
    HomeHeader2
    // Parallax
  },
  data() {
    return {
      isShow: false,
      timer: null
    }
  },
  methods: {
    fixedNav() {
      $(document).on('scroll', () => {
        let $scroll = $(document).scrollTop()
        if ($scroll >= 100) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      })
    }
  },
  mounted() {
    let $scroll = $(document).scrollTop()
    // console.log('$scroll', $scroll)
    if ($scroll >= 80) {
      this.isShow = true
    } else {
      this.isShow = false
    }
    this.timer = setTimeout(() => {
      this.fixedNav()
    }, 100);
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang='scss'>
.first_screen {
  width: 100%;
  height: 100%;
  position: relative;
  .header_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99990000000008888;
  }
  .link_banner {
    padding: 2% 0;
    height: 100%;
  }
  .mobile_nav {
    display: none;
  }
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
@media only screen and (max-width: 959px) {
  .first_screen .link_banner {
    padding-top: 10% !important;
  }
  .first_screen .mobile_nav {
    display: block;
  }
  .first_screen .pc_nav {
    display: none;
  }
  .right_tips_box {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .first_screen .link_banner {
    padding-top: 17% !important;
  }
}
</style>
