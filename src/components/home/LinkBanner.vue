<template>
  <div class="banner">
    <div class="banner_layout">
      <div class="banner_text">
        <div class="banner_text_title">{{$t('home.banner_title')}}</div>
        <div class="banner_text_desc">{{$t('home.banner_desc')}}</div>
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
    <div class="mobile_more">
      <p>{{$t('home.banner_more')}}</p>
      <span @click="toPro">Ontology DID protocols</span>
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
  .mobile_more {
    display: none;
    width: 100%;
    margin-top: 8%;
    p {
      text-align: center;
      font-size: 13px;
      font-family: Graphik-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.3);
      line-height: 15px;
      margin-bottom: 4%;
    }
    span {
      display: block;
      margin: 0 auto;
      text-align: center;
      font-size: 13px;
      font-family: Graphik-Regular;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 15px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

//@media only screen and (min-width: 1210px) and (max-width: 1210px)
@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .banner {
    .banner_text {
      padding-left: 10%;
      padding-top: 18%;
    }
  }
}
@media only screen and (min-width: 960px) and (max-width: 1279px) {
  .banner {
    .banner_text {
      padding-left: 0;
      padding-top: 20%;
      .banner_text_title {
        font-size: 60px;
      }
    }
    .bottom_bg {
      width: 900px;
      right: 25%;
      transform: translateX(50%);
    }
  }
}
@media only screen and (max-width: 1209px) {
  .banner {
    .arrow_down {
      right: 0;
    }
  }
}
@media only screen and (max-width: 959px) {
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
    // right: 3%;
    width: 100%;
  }
  .banner {
    padding: 0 20px;
    .arrow_down {
      right: 50%;
      bottom: 20%;
      transform: translateX(50%);
    }
  }
}
@media only screen and (max-width: 767px) {
  .banner .banner_text .banner_text_title {
    width: 100%;
    font-size: 32px;
    line-height: 40px;
  }
  .banner .banner_text .banner_text_desc {
    width: 100%;
    font-size: 15px;
    line-height: 30px;
    font-family: Graphik-Regular;
  }
  .banner .banner_text .banner_text_download span {
    padding: 13px 12px;
    font-size: 14px;
    line-height: 16px;
  }
  .banner .banner_text {
    padding-top: 36%;
  }
  .banner .bottom_bg {
    background-position: center center;
  }
  .banner .banner_layout {
    height: 70%;
  }
  // .banner .banner_layout
  .banner .banner_text .banner_text_more {
    display: none;
  }
  .banner .banner_text .banner_text_download {
    margin-top: 10%;
  }
  .banner .arrow_down {
    bottom: 6%;
    width: 40px;
    height: 40px;
    background-size: contain;
  }
 .banner .mobile_more {
    display: block;
  }
}
</style>
