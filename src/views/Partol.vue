<template>
  <div class="partol">
    <HomeHeader/>
    <div class="body">
      <div class="title">Welcome to ONT ID Application Integration Portal</div>
      <router-view/>
    </div>
    <usually-footer></usually-footer>
  </div>
</template>
<script>
import HomeHeader from '@/components/home/HomeHeader'
import UsuallyFooter from '@/components/portal/UsuallyFooter.vue'
export default {
  components: {
    HomeHeader, UsuallyFooter
  }
}
</script>
<style lang="scss" scoped>
.partol {
  height: 100%;
  .body {
    padding-top: 200px;
    min-height: 100%;
    .title {
      text-align: center;
      // height: 60px;
      font-size: 36px;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(0, 0, 0, 1);
      line-height: 61px;
    }
  }
}
</style>

