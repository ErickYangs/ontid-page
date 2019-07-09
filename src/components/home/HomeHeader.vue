<template>
  <div class="top_header clearfix" id="top_header_fixed">
    <div class="left_logo" :class="[isLite ? 'lite_logo': 'home_logo']" @click="toIndex()"></div>
    <div class="right">
      <!-- <SelectBox /> -->
      <Lang />
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
        if ($scroll >= 50) {
          if (this.isLite) {
            if ($('#top_header_fixed').hasClass('whiteb')) {
              $('#top_header_fixed').removeClass('whiteb')
            }
            $('#top_header_fixed').addClass('blackb')
          } else {
            if ($('#top_header_fixed').hasClass('blackb')) {
              $('#top_header_fixed').removeClass('blackb')
            }
            if ($('#top_header_fixed').hasClass('white0')) {
              $('#top_header_fixed').removeClass('white0')
            }
            if (!$('#top_header_fixed').hasClass('whiteb')) {
              $('#top_header_fixed').addClass('whiteb')
            }
          }
        } else {
          if (this.isLite) {
            if ($('#top_header_fixed').hasClass('whiteb')) {
              $('#top_header_fixed').removeClass('whiteb')
            }
            if ($('#top_header_fixed').hasClass('blackb')) {
              $('#top_header_fixed').removeClass('blackb')
            }
          } else {
            if ($('#top_header_fixed').hasClass('blackb')) {
              $('#top_header_fixed').removeClass('blackb')
            }
            if ($('#top_header_fixed').hasClass('whiteb')) {
              $('#top_header_fixed').removeClass('whiteb')
            }
            if (!$('#top_header_fixed').hasClass('white0')) {
              $('#top_header_fixed').addClass('white0')
            }
          }
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
      console.log(1212121212)
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
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff00;
  z-index: 9999999;
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
  background: rgba(0, 0, 0, 1) !important;
  padding-top: 37px;
  padding-bottom: 37px;
}
.top_header.whiteb {
  background: rgba(255, 255, 255, 1) !important;
  padding-top: 39px;
  padding-bottom: 39px;
}
.top_header.white0 {
  background: rgba(255, 255, 255, 0) !important;
  padding-top: 38px;
  padding-bottom: 38px;
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
