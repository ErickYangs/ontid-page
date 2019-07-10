<template>
  <div class="lite_first_screen">
    <parallax :sectionHeight="sectionHeight" breakpoint="(min-width: 320px)">
      <div class="banner_bg"></div>
    </parallax>
    <div class="banner_model" id="banner_model"></div>
    <!-- to do -->
    <div class="link_banner home_contanier">
      <div class="logo"></div>
      <div class="banner_desc">{{$t('lite_home.desc')}}</div>
      <div class="open_account">
        <span :class="!isPC ? 'hover1':'hover1 pcaction' " @click="toIntegrat()">Open an account</span>
      </div>
      <div class="down_arrow" @click="turnShow('#lite_second')"></div>
    </div>
    <!-- <div class="banner_right_tips">
      <div class="item">
        <div class="item_title">
          Protocols
          <i></i>
        </div>
        <div class="item_link">Ontology DID</div>
        <div class="item_link">Verifiable Claims</div>
      </div>
      <div class="item">
        <div class="item_title">
          Protocols
          <i></i>
        </div>
        <div class="item_link">Ontology DID</div>
        <div class="item_link">Verifiable Claims</div>
      </div>
      <div class="item">
        <div class="item_title">
          Protocols
          <i></i>
        </div>
        <div class="item_link">Ontology DID</div>
        <div class="item_link">Verifiable Claims</div>
      </div>
    </div>-->
    <BannerRightTips class="BannerRightTips" />
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue'
import LinkBanner from '@/components/home/LinkBanner.vue'
import BannerRightTips from '@/components/home/BannerRightTips.vue'
import Parallax from 'vue-parallaxy'
import $ from "jquery"

export default {
  name: 'LiteFirstScreen',
  components: {
    HomeHeader,
    BannerRightTips,
    Parallax
  },
  methods: {
    toIntegrat() {
      this.$router.push({ name: 'register' })
    },
    turnShow(ele) {
      $("html, body").animate({
        scrollTop: $(ele).offset().top + "px"
      }, {
          duration: 500,
          easing: "swing"
        });
      return false;
    },
    handlerScroll() {
      let scrollTop = $(window).scrollTop(); // 滚动条距离顶部的距离
      let containerH = $('#banner_model').get(0).scrollHeight; // 图片的高度
      let persent30 = containerH * 0.3
      scrollTop = scrollTop - persent30
      if (scrollTop > 0 && scrollTop <= containerH) {
        let a = scrollTop / containerH;
        if ((a + 0.3) >= 1) {
          $('#banner_model').css('background', 'rgba(0,0,0,1)');
          return false
        } else {
          $('#banner_model').css('background', 'rgba(0,0,0,' + (a + 0.3) + ')');
        }
      }
    }
  },
  data() {
    return {
      sectionHeight: 140
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handlerScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handlerScroll)
  },
  computed: {
    isPC() {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lite_first_screen {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .banner_bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../../assets/images/footer_bg.jpg) no-repeat;
    background-size: cover;
  }
  .banner_model {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .link_banner {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    height: 100%;
    padding-top: 16%;
    .logo {
      width: 254px;
      height: 90px;
      background: url(../../assets/images/lite_logo.svg) no-repeat;
      margin: 0 auto;
      margin-left: 44%;
    }
    .banner_desc {
      margin: 0 auto;
      width: 100%;
      max-width: 1080px;
      margin-top: 2%;
      font-size: 20px;
      // font-family: FuturaLT;
      color: rgba(255, 255, 255, 1);
      line-height: 35px;
      text-align: center;
    }
    .open_account {
      text-align: center;
      span {
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        border: 2px solid rgba(255, 255, 255, 1);
        padding: 12px 20px;
        border-radius: 4px;
        font-size: 16px;
        font-family: Graphik-Medium;
        font-weight: 800;
        line-height: 30px;
        cursor: pointer;
      }
      .pcaction:hover {
        background: #fff;
        color: #3d3d3d;
      }
      margin: 4% auto;
    }
    .down_arrow {
      position: absolute;
      right: 0;
      bottom: 50px;
      width: 60px;
      height: 60px;
      background: url(../../assets/images/lite_n.svg);
      background-size: contain;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 1440px) {
  .lite_first_screen {
    .link_banner {
      .banner_desc {
        max-width: 960px;
      }
    }
  }
}
@media only screen and (max-width: 1280px) {
  .lite_first_screen .link_banner .logo {
    margin-left: 42%;
  }
  .litesecondscreen .introduct_box {
    padding: 0 105px;
  }
  .lite_first_screen {
    .link_banner {
      .banner_desc {
        max-width: 768px;
      }
    }
  }
  .lite_first_screen .link_banner {
    padding-top: 19%;
  }
}

@media only screen and (max-width: 959px) {
  .BannerRightTips {
    display: none;
  }
  .lite_first_screen {
    width: 100%;
  }
  .lite_first_screen .link_banner .down_arrow {
    right: 50%;
    bottom: 22%;
    transform: translateX(50%);
  }
  .lite_first_screen .link_banner .banner_desc {
    padding: 0 10%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 959px) {
  .lite_first_screen .link_banner {
    padding-top: 35%;
  }
  .lite_first_screen .link_banner .logo {
    margin-left: 39%;
  }
}
@media only screen and (max-width: 767px) {
  .lite_first_screen {
    .link_banner {
      padding-top: 36%;
      .logo {
        width: 210px;
        height: 55px;
        background-size: contain;
        margin-left: 32%;
      }
      .banner_desc {
        font-size: 15px;
        line-height: 20px;
        margin-top: 12%;
        opacity: 0.6;
      }
      .open_account {
        margin-top: 10%;
        span {
          padding: 10px 12px;
          font-size: 14px;
          line-height: 15px;
          border-width: 1px;
        }
      }
      .down_arrow {
        width: 40px;
        height: 40px;
        bottom: 14%;
      }
    }
  }
}
</style>
