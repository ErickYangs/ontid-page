<template>
  <div class="fourth_screen" ref="fourth_screen">
    <div class="title containter">ONTO</div>
    <div class="carousel_box">
      <div class="carousel_layout shrink" ref="carousel_layout">
        <div class="card" v-for="(item) in carouseData" :key="item.id">
          <img :src="item.src">
        </div>
      </div>
      <div class="iphone_box"></div>
      <div class="btn_click_prev hidenone" ref="btn_click_prev" @click="prev()"></div>
      <div class="btn_click_next hidenone" ref="btn_click_next" @click="next()"></div>
    </div>
    <div class="iden_title containter" ref="iden_title">Take back control of your identity</div>
    <div
      class="iden_desc"
      ref="iden_desc"
    >ONTO is a comprehensive decentralized client product and an entrance to the Ontology blockchain system. ONTO allows you to build your own digital identity, store digital assets, and more, all with privacy protection ensured by cryptographic algorithms.</div>
    <div class="appload_box" ref="appload_box">
     <span class="apple hover1" @click="openNewPage('https://itunes.apple.com/cn/app/onto-an-ontology-dapp/id1436009823?mt=8')"></span>
      <span class="google hover1" @click="openNewPage('https://play.google.com/store/apps/details?id=com.github.ontio.onto')"></span>
    
    </div>
  </div>
</template>

<script>
import '../../../node_modules/animate.css/animate.css'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      lock: false,
      swiperOption: {
        slidesPerView: 7,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: '.btn_click_next',
          prevEl: '.btn_click_prev'
        }
      },
      carouseData: [
        {
          id: 1,
          src: 'https://app.ont.io/ontid/1.png'
        },
        {
          id: 2,
          src: 'https://app.ont.io/ontid/2.png'
        }
        ,
        {
          id: 3,
          src: 'https://app.ont.io/ontid/3.png'
        }
        ,
        {
          id: 4,
          src: 'https://app.ont.io/ontid/4.png'
        }
        ,
        {
          id: 5,
          src: 'https://app.ont.io/ontid/5.png'
        }
        ,
        {
          id: 6,
          src: 'https://app.ont.io/ontid/6.png'
        }
        ,
        {
          id: 7,
          src: 'https://app.ont.io/ontid/7.png'
        }
        ,
        {
          id: 8,
          src: 'https://app.ont.io/ontid/8.png'
        }
        ,
        {
          id: 9,
          src: 'https://app.ont.io/ontid/9.png'
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop
      // console.log(scrollTop)
      let targetTop = this.$refs.fourth_screen.offsetTop // 目标元素离页面顶端的距离
      if (this.lock) {
        return
      } else {
        // console.log('targetTop', targetTop)
        if (targetTop < scrollTop) {
          this.lock = true
          // console.log('bottom')
          this.$refs.iden_title.classList.add('animated', 'fadeInUp')
          this.$refs.iden_desc.classList.add('animated', 'fadeInUp')
          this.$refs.appload_box.classList.add('animated', 'fadeInUp')
          setInterval(() => {
            this.$refs.btn_click_prev.classList.remove('hidenone')
            this.$refs.btn_click_next.classList.remove('hidenone')
            this.$refs.btn_click_prev.classList.add('animated', 'fadeInUp')
            this.$refs.btn_click_next.classList.add('animated', 'fadeInUp')

          }, 1000)
          this.$refs.carousel_layout.classList.remove("shrink")
          this.$refs.carousel_layout.classList.add("expand")
        }
      }
    },
    prev() {
      let first = this.carouseData.shift()
      this.carouseData.push(first)
      // console.log(this.carouseData)
    },
    next() {
      let end = this.carouseData.pop()
      this.carouseData.unshift(end)
      // console.log('carouseData', this.carouseData)
    },
    openNewPage(url) {
      window.open(url)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
.fourth_screen {
  padding: 83px 0 97px;
  // max-width: 1920px;
  margin: 0 auto;
  .title {
    font-size: 32px;
    font-family: Graphik-Medium;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 35px;
    text-align: left;
  }
  .carousel_box {
    padding: 80px 0;
    height: 860px;
    // background: tomato;
    position: relative;
    overflow: hidden;
    .iphone_box {
      width: 350px;
      height: 700px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url(../../assets/images/iphone.png) no-repeat;
      background-size: contain;
      z-index: 100;
    }
    .carousel_layout {
      width: 100%;
      height: 100%;
      .card {
        transition: all 0.5s linear;
      }
    }
    .carousel_layout.expand {
      // display: flex;
      // justify-content: center;
      // align-items: center;
      overflow: hidden;
      // transition: all 2s;
      .card {
        position: absolute;
        // left: 0;
        top: 50%;
        transform: translate(-57%, -50%);
      }
      .card:nth-of-type(1) {
        left: -24%;
      }
      .card:nth-of-type(2) {
        left: -4%;
      }
      .card:nth-of-type(3) {
        left: 14%;
      }
      .card:nth-of-type(4) {
        left: 32%;
      }
      .card:nth-of-type(5) {
        left: 50%;
      }
      .card:nth-of-type(6) {
        left: 68%;
      }
      .card:nth-of-type(7) {
        left: 86%;
      }
      .card:nth-of-type(8) {
        left: 104%;
      }
      .card:nth-of-type(9) {
        left: 122%;
      }
    }
    .carousel_layout.shrink {
      // transition: all 2s;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .card {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-57%, -50%);
      }
    }
    .card {
      width: 316px;
      height: 666px;
      background: rgba(242, 242, 242, 1);
      border-radius: 32px;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0 20px;
      overflow: hidden;
      border: 2px solid #fafafa;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .card:nth-of-type(5) {
      z-index: 99;
    }

    .swiper-slide {
      width: 345px !important;
      height: 661px;
      display: flex;
      justify-content: center;
    }
    .btn_click_prev,
    .btn_click_next {
      width: 60px;
      height: 60px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      z-index: 101;
      cursor: pointer;
      // display: none;
      // animation-delay: 1s;
    }
    .hidenone {
      display: none;
    }
    .btn_click_prev {
      background: url(../../assets/images/d_prev.svg) no-repeat;
    }
    .btn_click_next {
      left: auto;
      right: 0;
      background: url(../../assets/images/d_next.svg) no-repeat;
    }
  }
  .shrink {
    .swiper-container {
      // display: none;
    }
  }
  .expand {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
  }
  .iden_title {
    font-size: 30px;
    font-family: Graphik-Medium;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 53px;
    text-align: center;
  }
  .iden_desc {
    margin: 0 auto;
    margin-top: 20px;
    width: 100%;
    max-width: 1078px;
    text-align: center;
    font-size: 16px;
    // font-family: FuturaLT;
    color: rgba(0, 0, 0, 0.6);
    line-height: 24px;
  }
  .appload_box {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span {
      display: block;
      width: 170px;
      height: 54px;
      //   background: #000;
      cursor: pointer;
      &:hover {
        opacity: 0.94;
      }
    }
    span.apple {
      background: url(../../assets/images/apple.svg) no-repeat;
      background-size: contain;
    }
    span.google {
      background: url(../../assets/images/google.svg) no-repeat;
      background-size: contain;
    }
  }
}
.containter {
  max-width: 1440px;
  margin: 0 auto;
}
@media only screen and (min-width: 1440px) and (max-width: 1920px) {
  .containter {
    max-width: 1280px;
  }
  .fourth_screen {
    .carousel_box {
      .carousel_layout.expand {
        .card:nth-of-type(1) {
          left: -46.7%;
        }
        .card:nth-of-type(2) {
          left: -22.7%;
        }
        .card:nth-of-type(3) {
          left: 1.7%;
        }
        .card:nth-of-type(4) {
          left: 25.7%;
        }
        .card:nth-of-type(6) {
          left: 74.3%;
        }
        .card:nth-of-type(7) {
          left: 98.3%;
        }
        .card:nth-of-type(8) {
          left: 122.3%;
        }
        .card:nth-of-type(9) {
          left: 146.3%;
        }
      }
    }
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1439px) {
  .containter {
    max-width: 1280px;
  }
  .fourth_screen {
    // max-width: 1280px;
    .carousel_box {
      .carousel_layout.expand {
        .card:nth-of-type(1) {
          left: -58%;
        }
        .card:nth-of-type(2) {
          left: -31%;
        }
        .card:nth-of-type(3) {
          left: -4%;
        }
        .card:nth-of-type(4) {
          left: 23%;
        }
        .card:nth-of-type(6) {
          left: 77%;
        }
        .card:nth-of-type(7) {
          left: 104%;
        }
        .card:nth-of-type(8) {
          left: 131%;
        }
        .card:nth-of-type(9) {
          left: 158%;
        }
      }
    }
  }
}
@media only screen and (min-width: 960px) and (max-width: 1279px) {
  .containter {
    max-width: 960px;
  }
  .fourth_screen .iden_desc {
    max-width: 800px;
  }
  .fourth_screen {
    .carousel_box {
      .carousel_layout.expand {
        .card:nth-of-type(1) {
          left: -94%;
        }
        .card:nth-of-type(2) {
          left: -58%;
        }
        .card:nth-of-type(3) {
          left: -22%;
        }
        .card:nth-of-type(4) {
          left: 14%;
        }
        .card:nth-of-type(6) {
          left: 86%;
        }
        .card:nth-of-type(7) {
          left: 122%;
        }
        .card:nth-of-type(8) {
          left: 158%;
        }
        .card:nth-of-type(9) {
          left: 194%;
        }
      }
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 959px) {
  .containter {
    max-width: 768px;
  }
  .fourth_screen {
    .carousel_box {
      .carousel_layout.expand {
        .card:nth-of-type(1) {
          left: -130%;
        }
        .card:nth-of-type(2) {
          left: -85%;
        }
        .card:nth-of-type(3) {
          left: -40%;
        }
        .card:nth-of-type(4) {
          left: 5%;
        }
        .card:nth-of-type(6) {
          left: 95%;
        }
        .card:nth-of-type(7) {
          left: 140%;
        }
        .card:nth-of-type(8) {
          left: 185%;
        }
        .card:nth-of-type(9) {
          left: 230%;
        }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .fourth_screen {
    padding: 41px 0 49px;
    margin: 0 auto;
    .title {
      font-size: 24px;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(0, 0, 0, 1);
      line-height: 35px;
      text-align: left;
      padding: 0 20px;
    }
    .carousel_box {
      padding: 40px 0;
      height: 430px;
      position: relative;
      overflow: hidden;
      .iphone_box {
        width: 175px;
        height: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: url(../../assets/images/iphone.png) no-repeat;
        background-size: contain;
        z-index: 100;
      }
      .carousel_layout {
        width: 100%;
        height: 100%;
        .card {
          transition: all 0.5s linear;
        }
      }
      .carousel_layout.expand {
        overflow: hidden;
        .card {
          position: absolute;
          // left: 0;
          top: 50%;
          transform: translate(-57%, -50%);
        }
        .card:nth-of-type(1) {
          left: -158%;
        }
        .card:nth-of-type(2) {
          left: -106%;
        }
        .card:nth-of-type(3) {
          left: -54%;
        }
        .card:nth-of-type(4) {
          left: -2%;
        }
        .card:nth-of-type(5) {
          left: 50%;
        }
        .card:nth-of-type(6) {
          left: 104%;
        }
        .card:nth-of-type(7) {
          left: 156%;
        }
        .card:nth-of-type(8) {
          left: 208%;
        }
        .card:nth-of-type(9) {
          left: 260%;
        }
      }
      .carousel_layout.shrink {
        // transition: all 2s;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .card {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-57%, -50%);
        }
      }
      .card {
        width: 160px;
        height: 334px;
        background: rgba(242, 242, 242, 1);
        border-radius: 16px;
        flex-grow: 0;
        flex-shrink: 0;
        margin: 0 10px;
      }
      .swiper-slide {
        width: 172px !important;
        height: 330px;
        display: flex;
        justify-content: center;
      }
      .btn_click_prev,
      .btn_click_next {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 101;
        cursor: pointer;
      }
      .hidenone {
        display: none;
      }
      .btn_click_prev {
        background: url(../../assets/images/d_prev.svg) no-repeat;
        background-size: contain;
      }
      .btn_click_next {
        left: auto;
        right: 0;
        background: url(../../assets/images/d_next.svg) no-repeat;
        background-size: contain;
      }
    }
    .shrink {
      .swiper-container {
        // display: none;
      }
    }
    .expand {
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
    }
    .iden_title {
      font-size: 20px;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(0, 0, 0, 1);
      line-height: 53px;
      text-align: center;
    }
    .iden_desc {
      margin: 0 auto;
      margin-top: 10px;
      width: 100%;
      max-width: 1078px;
      text-align: center;
      font-size: 14px;
      // font-family: FuturaLT;
      color: rgba(0, 0, 0, 0.6);
      line-height: 24px;
      padding: 0 20px;
    }
    .appload_box {
      width: 100%;
      max-width: 185px;
      margin: 0 auto;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      span {
        display: block;
        width: 85px;
        height: 27px;
        cursor: pointer;
        &:hover {
          opacity: 0.94;
        }
      }
      span.apple {
        background: url(../../assets/images/apple.svg) no-repeat;
        background-size: contain;
      }
      span.google {
        background: url(../../assets/images/google.svg) no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
