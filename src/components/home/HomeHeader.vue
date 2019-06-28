<template>
  <div class="top_header clearfix">
    <div class="left_logo" :class="[isLite ? 'lite_logo': 'home_logo']" @click="toIndex()"></div>
    <div class="right">
      <SelectBox/>
    </div>
  </div>
</template>

<script>
import SelectBox from '@/components/home/Select.vue'
export default {
  components: {
    SelectBox
  },
  methods: {
    toIndex() {
      this.$router.push({ path: '/' })
    }
  },
  data() {
    return {
      isLite: this.$router.currentRoute.path == '/lite' ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.top_header {
  padding-top: 40px;
  // padding-bottom: 40px;
  // background: #000;
  height: 61px;
  .left_logo {
    width: 90px;
    height: 20px;
    float: left;
    margin-left: 100px;
    cursor: pointer;
  }
  .left_logo.home_logo {
    background: url(../../assets/images/logo.svg) no-repeat;
    background-size: contain;
  }
   .left_logo.lite_logo {
    background: url(../../assets/images/logo_w.svg) no-repeat;
    background-size: contain;
  }
  .right {
    float: right;
    // margin-top: 40px;
    margin-right: 50px;
  }
}
</style>
