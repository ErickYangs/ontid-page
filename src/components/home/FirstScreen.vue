<template>
  <div class="first_screen">
    <div class="header_box">
      <HomeHeader class="pc_nav" />
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
import HomeHeader from '@/components/home/HomeHeader.vue'
import LinkBanner from '@/components/home/LinkBanner.vue'
import BannerRightTips from '@/components/home/BannerRightTips.vue'
import MobileTopNav from '@/components/module/MobileTopNav.vue'
// import Parallax from 'vue-parallaxy'
export default {
  name: 'firstscreen',
  components: {
    HomeHeader,
    LinkBanner,
    BannerRightTips,
    MobileTopNav
    // Parallax
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
    padding: 3% 0;
    height: 100%;
  }
  .mobile_nav {
    display: none;
  }
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
