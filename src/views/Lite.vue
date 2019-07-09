<template>
  <div class="lite">
    <HomeHeader class="pcNav" />
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
import HomeHeader from '@/components/home/HomeHeader.vue'
import MobileTopNavLite from '@/components/module/MobileTopNavLite.vue'
export default {
  name: 'lite',
  components: {
    LiteFirstScreen,
    LiteSecondScreen,
    LiteThirdScreen,
    HomeFooter,
    HomeHeader,
    MobileTopNavLite
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
@media only screen and (max-width: 959px) {
  .pcNav {
    display: none;
  }
  .mobileNav {
    display: block;
  }
}
</style>
