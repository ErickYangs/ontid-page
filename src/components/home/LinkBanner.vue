<template>
  <div class="banner">
    <div class="banner_layout">
      <div class="banner_text">
        <div class="banner_text_title">{{$t('home.banner_title')}}</div>
        <div
          class="banner_text_desc"
        >{{$t('home.banner_desc')}}</div>
        <div class="banner_text_download" ref="banner_text_download">
          <span class="hover1" @click="turnShow('#fourth_top')">Download ONTO</span>
        </div>
        <div class="banner_text_more">
          {{$t('home.banner_more')}}
          <span @click="toPro">Ontology DID protocols</span>
        </div>
      </div>
      <!-- <parallax> -->
      <div class="bottom_bg" v-parallax="0.2"></div>
      <!-- </parallax> -->
    </div>
    <div class="arrow_down" @click="turnShow('#second_screen_top')"></div>
  </div>
</template>

<script>
import $ from "jquery"
import Parallax from 'vue-parallaxy'

export default {
  mounted() {
    // console.log(this.$refs.banner_text_download.scrollTop)
    // this.$refs.iden_title.classList.add('animated', 'fadeInUp')
    // this.$refs.iden_desc.classList.add('animated', 'fadeInUp')
    // this.$refs.appload_box.classList.add('animated', 'fadeInUp')
  },
  methods: {
    turnShow(ele) {
      $("html, body").animate({
        scrollTop: $(ele).offset().top + "px"
      }, {
          duration: 500,
          easing: "swing"
        });
      return false;
    },
    toPro() {
      window.open('https://ontid.readme.io/docs/ontology-did-protocol')
    }
  },
  components: {
    Parallax
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100%;
  max-width: 1120px;
  //   background: red;
  position: relative;
  .banner_layout {
    position: relative;
    width: 100%;
    height: 100%;
  overflow: hidden;
  }
  .bottom_bg {
    position: absolute;
    right: 0;
    top: 0;
    width: 800px;
    height: 100%;
    background: url(../../assets/images/bg.jpg) no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .banner_text {
    padding-top: 20%;
    .banner_text_title {
      font-size: 80px;
      // font-family: Graphik-Medium;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(0, 0, 0, 1);
      line-height: 106px;
    }
    .banner_text_desc {
      margin-top: 3%;
      width: 694px;
      font-size: 20px;
      // font-family: FuturaLT;
      color: rgba(0, 0, 0, 0.6);
      line-height: 35px;
    }
    .banner_text_download {
      margin-top: 5%;
      span {
        display: inline-block;
        padding: 12px 20px;
        background: linear-gradient(
          135deg,
          rgba(0, 162, 242, 1) 0%,
          rgba(0, 105, 224, 1) 100%
        );
        border-radius: 4px;
        font-size: 16px;
        font-family: Graphik-Medium;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
        cursor: pointer;
        &:hover {
          opacity: 0.95;
        }
      }
    }
    .banner_text_more {
      margin-top: 5%;
      font-size: 14px;
      // font-family: FuturaLT;
      color: #999;
      line-height: 18px;
      span {
        padding-left: 10px;
        color: #000;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .arrow_down {
    width: 60px;
    height: 60px;
    background: url(../../assets/images/arrow_down.svg) no-repeat;
    position: absolute;
    right: -90px;
    bottom: 0;
    cursor: pointer;
  }
}
@media only screen and (max-width: 1440px) {
  .banner {
    .banner_text {
      padding-left: 10%;
      padding-top: 12%;
    }
  }
}
@media only screen and (max-width: 1280px) {
  .banner {
    .banner_text {
      padding-left: 0;
      padding-top: 12%;
    }
    .bottom_bg {
      width: 900px;
      right: 50%;
      transform: translateX(50%);
    }
  }
}
@media only screen and (max-width: 1210px) {
  .banner {
    .arrow_down {
      right: 0;
    }
  }
}
@media only screen and (max-width: 960px) {
  .banner .banner_text .banner_text_title {
    text-align: center;
    width: 600px;
    margin: 0 auto;
  }
  .banner .banner_text .banner_text_download {
    text-align: center;
  }
  .banner .banner_text .banner_text_desc {
    margin: 0 auto;
    margin-top: 3%;
    text-align: center;
  }
  .banner .banner_text .banner_text_more {
    text-align: center;
  }
  .banner .bottom_bg {
    right: 3%;
  }
}
</style>
