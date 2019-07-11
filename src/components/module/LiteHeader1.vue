<template>
  <div class="top_header clearfix" id="top_header_fixed">
    <div class="left_logo lite_logo" @click="toIndex()"></div>
    <div class="right">
      <!-- <SelectBox /> -->
      <!-- <Lang /> -->
    </div>
  </div>
</template>

<script>
import SelectBox from '@/components/home/Select.vue'
import Lang from '@/components/module/Lang.vue'
import $ from "jquery"

export default {
  components: {
    SelectBox,
    Lang
  },
  methods: {
    toIndex() {
      this.$router.push({ path: '/' })
    },
  },
  data() {
    return {
      isLite: this.$router.currentRoute.path == '/lite' ? true : false,
      timer: null
    }
  }
 
}
</script>

<style lang="scss" scoped>
.top_header {
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff00;
  z-index: 99999999;
  transition: background-color 0.1s;
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
    margin-right: 50px;
  }
}
.top_header.fiexd {
  position: fixed;
  top: 0;
  left: 0;
}
.top_header.blackb {
  background: rgba(0, 0, 0, 0.8) !important;
  padding-top: 25px;
  padding-bottom: 25px;
}
.top_header.whiteb {
  background: rgba(255, 255, 255, 1) !important;
  padding-top: 23px;
  padding-bottom: 23px;
}
.top_header.white0 {
  background: rgba(255, 255, 255, 0) !important;
  padding-top: 24px;
  padding-bottom: 24px;
}
@media only screen and (min-width: 960px) and (max-width: 1279px) {
  .top_header {
    .left_logo {
      margin-left: 50px;
    }
    .right {
      margin-right: 25px;
    }
  }
}
</style>
