<template>
  <div class="lite_first_screen">
    <div class="header_box">
      <HomeHeader/>
    </div>
    <parallax>
      <div class="banner_bg"></div>
    </parallax>
    <div class="banner_model"></div>
    <!-- to do -->
    <div class="link_banner home_contanier">
      <div class="logo"></div>
      <div
        class="banner_desc"
      >ONT ID Lite (ONT ID Cloud Service) allows users to open and use their blockchain accounts anywhere. They can use it on any dApps, mobile wallets, or even a H5 page in social media software</div>
      <div class="open_account">
        <span class="hover1" @click="toIntegrat()">Open an account</span>
      </div>
      <div class="down_arrow"></div>
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
    <BannerRightTips/>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader.vue'
import LinkBanner from '@/components/home/LinkBanner.vue'
import BannerRightTips from '@/components/home/BannerRightTips.vue'
import Parallax from 'vue-parallaxy'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.lite_first_screen {
  width: 100%;
  height: 100%;
  position: relative;
  .header_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
    // height: 100%;
    // background: url(../../assets/images/footer_bg.jpg) no-repeat;
  }
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
    padding-top: 14%;
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
      font-family: FuturaLT;
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
        font-family: FuturaLT-Heavy;
        font-weight: 800;
        line-height: 30px;
        cursor: pointer;
        &:hover {
          background: #fff;
          color: #3d3d3d;
        }
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
}
@media only screen and (max-width: 960px) {
  .lite_first_screen {
    width: 960px;
  }
}
</style>
