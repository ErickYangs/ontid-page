<template>
  <div class="lite">
    <LiteFirstScreen/>
    <LiteSecondScreen/>
    <LiteThirdScreen/>
    <HomeFooter/>
  </div>
</template>

<script>
import LiteFirstScreen from '@/components/lite/LiteFirstScreen.vue'
import LiteSecondScreen from '@/components/lite/LiteSecondScreen.vue'
import LiteThirdScreen from '@/components/lite/LiteThirdScreen.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'
export default {
  name: 'lite',
  components: {
    LiteFirstScreen,
    LiteSecondScreen,
    LiteThirdScreen,
    HomeFooter
  }
}
</script>

<style lang="scss" scoped>
.lite {
  width: 100%;
  height: 100%;
}
</style>
