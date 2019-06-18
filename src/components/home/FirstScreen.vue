<template>
  <div class="first_screen">
    <div class="header_box">
      <HomeHeader/>
    </div>
    <!-- to do -->
    <div class="link_banner home_contanier">
      <LinkBanner class="banner_box"/>
    </div>
    <BannerRightTips/>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue'
import LinkBanner from '@/components/home/LinkBanner.vue'
import BannerRightTips from '@/components/home/BannerRightTips.vue'

export default {
  name: 'firstscreen',
  components: {
    HomeHeader,
    LinkBanner,
    BannerRightTips
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
    z-index: 9999;
  }
  .link_banner {
    padding: 3% 0;
    height: 100%;
  }
}
@media only screen and (max-width: 960px) {
  .first_screen {
    width: 960px;
  }
}
</style>
