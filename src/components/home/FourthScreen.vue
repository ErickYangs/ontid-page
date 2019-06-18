<template>
  <div class="fourth_screen" ref="fourth_screen">
    <div class="title">What is ONTO</div>
    <div class="carousel_box">
      <div class="carousel_layout shrink" ref="carousel_layout">
        <div class="card" v-for="(item) in carouseData" :key="item">{{item}}</div>
      </div>
      <div class="iphone_box"></div>
      <div class="btn_click_prev" ref="btn_click_prev" @click="prev()"></div>
      <div class="btn_click_next" ref="btn_click_next" @click="next()"></div>
    </div>
    <div class="iden_title" ref="iden_title">Take back control of your identity</div>
    <div
      class="iden_desc"
      ref="iden_desc"
    >ONTO is a comprehensive decentralized client product and an entrance to the Ontology blockchain system. ONTO allows you to build your own digital identity, store digital assets, and more, all with privacy protection ensured by cryptographic algorithms.</div>
    <div class="appload_box" ref="appload_box">
      <span class="apple hover1"></span>
      <span class="google hover1"></span>
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
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        navigation: {
          nextEl: '.btn_click_next',
          prevEl: '.btn_click_prev'
        }
      },
      carouseData: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
        console.log('targetTop', targetTop)
        if (targetTop < scrollTop) {
          this.lock = true
          // console.log('bottom')
          this.$refs.iden_title.classList.add('animated', 'fadeInUp')
          this.$refs.iden_desc.classList.add('animated', 'fadeInUp')
          this.$refs.appload_box.classList.add('animated', 'fadeInUp')
          this.$refs.btn_click_prev.classList.add('animated', 'fadeInUp')
          this.$refs.btn_click_next.classList.add('animated', 'fadeInUp')
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
  padding: 150px 0;
  max-width: 1920px;
  margin: 0 auto;
  .title {
    font-size: 40px;
    font-family: FuturaLT-Heavy;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 66px;
    text-align: center;
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
      width: 305px;
      height: 661px;
      background: rgba(242, 242, 242, 1);
      border-radius: 32px;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0 20px;
    }
    .card:nth-of-type(2n) {
      background: skyblue;
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
      left: 40px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9;
      cursor: pointer;
    }
    .btn_click_prev {
      background: url(../../assets/images/d_prev.svg) no-repeat;
    }
    .btn_click_next {
      left: auto;
      right: 40px;
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
    font-family: FuturaLT-Heavy;
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
    font-family: FuturaLT;
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
@media only screen and (max-width: 1440px) {
  .fourth_screen {
    max-width: 1440px;
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
@media only screen and (max-width: 1280px) {
  .fourth_screen {
    max-width: 1280px;
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
@media only screen and (max-width: 960px) {
  .fourth_screen .iden_desc {
    max-width: 800px;
  }
  .fourth_screen {
    width: 960px;
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
</style>
