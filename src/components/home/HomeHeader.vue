<template>
  <div class="top_header clearfix" id="top_header_fixed">
    <div class="left_logo" :class="[isLite ? 'lite_logo': 'home_logo']" @click="toIndex()"></div>
    <div class="right">
      <SelectBox/>
    </div>
  </div>
</template>

<script>
import SelectBox from '@/components/home/Select.vue'
import $ from "jquery"

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
  },
  mounted() {
    $(window).on('scroll', () => {
      let $scroll = $(window).scrollTop()
      if ($scroll >= 90) {
        if (this.isLite) {
          if ($('#top_header_fixed').hasClass('whiteb')) {
            $('#top_header_fixed').removeClass('whiteb')
          }
          $('#top_header_fixed').addClass('fiexd blackb')
        } else {
          if ($('#top_header_fixed').hasClass('blackb')) {
            $('#top_header_fixed').removeClass('blackb')
          }
          $('#top_header_fixed').addClass('fiexd whiteb')
        }
      } else {
        if (this.isLite) {
          if ($('#top_header_fixed').hasClass('whiteb')) {
            $('#top_header_fixed').removeClass('whiteb')
          }
          $('#top_header_fixed').removeClass('fiexd blackb')
        } else {
          if ($('#top_header_fixed').hasClass('blackb')) {
            $('#top_header_fixed').removeClass('blackb')
          }
          $('#top_header_fixed').removeClass('fiexd whiteb')
        }
      }
    })

  },
}
</script>

<style lang="scss" scoped>
.top_header {
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
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
}
.top_header.blackb {
  background: #000;
}
.top_header.whiteb {
  background: #fff;
}
</style>
