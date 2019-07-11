<template>
  <div class="top_header clearfix" id="top_header_fixed">
    <div class="left_logo home_logo" @click="toIndex()"></div>
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
    fixedNav() {
      $(document).on('scroll', () => {
        let $scroll = $(document).scrollTop()
        if ($scroll >= 80) {
          $('#top_header_fixed').addClass('fiexd')
        } else {
          $('#top_header_fixed').removeClass('fiexd')
        }
      })
    }
  },
  data() {
    return {
      isLite: this.$router.currentRoute.path == '/lite' ? true : false,
      timer: null
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.fixedNav()
    }, 100);
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
}
</script>

<style lang="scss" scoped>
.top_header {
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  position: fixed;
  top: 4.5%;
  left: 0;
  background: #ffffff00;
  z-index: 99999999;
  transition: all 0.5s;
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
  top: 0;
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

@media only screen and (min-width: 1921px) and (max-width: 2560px) {
  .top_header {
    top: 3%;
  }
}
@media only screen and (min-width: 1681px) and (max-width: 1920px) {
  .top_header {
    top: 2%;
  }
}
@media only screen and (min-width: 1440px) and (max-width: 1680px) {
  .top_header {
    top: 2%;
  }
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
