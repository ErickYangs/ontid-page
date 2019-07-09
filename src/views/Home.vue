<template>
  <div class="home">
    <FirstScreen />
    <SecondScreen />
    <ThirdScreen />
    <FourthScreen />
    <FifthScreen />
    <SixthScreen />
    <HomeFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstScreen from '@/components/home/FirstScreen.vue'
import SecondScreen from '@/components/home/SecondScreen.vue'
import ThirdScreen from '@/components/home/ThirdScreen.vue'
import FourthScreen from '@/components/home/FourthScreen.vue'
import FifthScreen from '@/components/home/FifthScreen.vue'
import SixthScreen from '@/components/home/SixthScreen.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'

export default {
  name: 'home',
  components: {
    FirstScreen,
    HomeFooter,
    SecondScreen,
    ThirdScreen,
    FourthScreen,
    FifthScreen,
    SixthScreen
  },
  methods: {
    toRegister() {
      console.log(11111)
      // this.$router.push({ name: 'qrcode' })
      this.$router.push({ name: 'register' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 1440px) {
  .home {
    // width: 1440px;
  }
}
@media only screen and (max-width: 1280px) {
  .home {
    // width: 1280px;
  }
}
@media only screen and (max-width: 960px) {
  .home {
    // width: 960px;
  }
}
</style>

