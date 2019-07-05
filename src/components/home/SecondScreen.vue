<template>
  <div id="second_screen_top" class="second_screen home_contanier">
    <div class="title">{{$t('second_screen.title')}}</div>
    <div class="desc_box">
      <div class="left">
        <div class="ele_box">
          <swiper class="swiper-no-swiping" :options="swiperOption">
            <swiper-slide>
              <div class="ele_list">
                <div class="ele_list_title">{{$t('second_screen.item1_title')}}</div>
                <div
                  class="ele_list_desc"
                >{{$t('second_screen.item1_desc')}}</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="ele_list">
                <div class="ele_list_title">{{$t('second_screen.item2_title')}}</div>
                <div
                  class="ele_list_desc"
                >{{$t('second_screen.item2_desc')}}</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="ele_list">
                <div class="ele_list_title">{{$t('second_screen.item3_title')}}</div>
                <div
                  class="ele_list_desc"
                >{{$t('second_screen.item3_desc')}}</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="ele_list">
                <div class="ele_list_title">{{$t('second_screen.item4_title')}}</div>
                <div
                  class="ele_list_desc"
                >{{$t('second_screen.item4_desc')}}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="line_box">
          <div class="inner_line"></div>
          <div class="outer_line" id="second_screen_outer_line"></div>
        </div>
      </div>
      <div class="right">
        <div class="right_ele_box">
          <swiper class="swiper-no-swiping" :options="swiperOption2">
            <swiper-slide>
              <div class="right_ele first">
                <div class="people"></div>
                <div class="ball"></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="right_ele second">
                <div class="people"></div>
                <div class="ball"></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="right_ele third">
                <div class="people"></div>
                <div class="ball"></div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="right_ele fourth four_share">
                <div class="people"></div>
                <div class="ball">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="right_arrow_box">
          <div class="arrow left_arrow"></div>
          <div class="arrow right_arrow"></div>
        </div>
        <div class="index">
          <swiper :options="swiperOption3">
            <swiper-slide>
              <div class="index_layout">
                <i class="line"></i>
                <div class="num t">01</div>
                <div class="num b">04</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="index_layout">
                <i class="line"></i>
                <div class="num t">02</div>
                <div class="num b">04</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="index_layout">
                <i class="line"></i>
                <div class="num t">03</div>
                <div class="num b">04</div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="index_layout">
                <i class="line"></i>
                <div class="num t">04</div>
                <div class="num b">04</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from "jquery"

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true,
        navigation: {
          nextEl: '.left_arrow',
          prevEl: '.right_arrow'
        },
        on: {
          slideChangeTransitionEnd: function () {
            $('#second_screen_outer_line').addClass('wi')
          },
          slideChangeTransitionStart: function () {
            $('#second_screen_outer_line').removeClass('wi')
          }
        }
      },
      swiperOption2: {
        navigation: {
          nextEl: '.left_arrow',
          prevEl: '.right_arrow'
        }, loop: true,
        on: {
          slideChangeTransitionEnd: function () {
            if (this.activeIndex == 4 || this.activeIndex == 0) {
              $('.four_share').addClass('share')
            }
          },
          slideChangeTransitionStart: function () {
            $('.four_share').removeClass('share')
          }
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },

      },
      swiperOption3: {
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.left_arrow',
          prevEl: '.right_arrow',
          disabledClass: 'my-button-disabled'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
.my-button-disabled {
  opacity: 0.3;
}
.second_screen {
  padding: 150px 0 210px;
  .title {
    font-size: 40px;
    font-family: Graphik-Medium;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 66px;
    text-align: center;
    margin-bottom: 150px;
  }
  .desc_box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .left {
      width: 50%;
      .ele_box {
        .ele_list {
          .ele_list_title {
            font-size: 40px;
            font-family: Graphik-Medium;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
            line-height: 53px;
            padding-top: 100px;
          }
          .ele_list_desc {
            margin-top: 30px;
            width: 524px;
            font-size: 20px;
            // font-family: FuturaLT;
            color: rgba(0, 0, 0, 0.6);
            line-height: 35px;
            word-break: break-all;
          }
        }
      }
      .line_box {
        position: relative;
        margin-top: 80px;
        .inner_line {
          width: 100%;
          max-width: 595px;
          height: 6px;
          background: rgba(250, 250, 250, 1);
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 0;
        }
        .outer_line {
          width: 0;
          height: 6px;
          max-width: 595px;
          background: #000;
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 0;
          // widthVariety
          // transition: all 1.5s;
        }
        .outer_line.wi {
          animation: widthVariety 3s ease-in forwards;
        }
      }
    }
    .right {
      width: 50%;
      position: relative;
      .right_ele_box {
        padding-top: 40px;
        .right_ele {
          position: relative;
        }
        .first {
          .people {
            width: 500px;
            height: 245px;
            background: url(../../assets/images/people_main.svg) no-repeat;
            position: relative;
            background-size: contain;
          }
          .ball {
            width: 50px;
            height: 50px;
            background: url(../../assets/images/ball.svg) no-repeat;
            background-size: cover;
            position: absolute;
            left: 30%;
            top: 18%;
            animation: breath 3s linear infinite;
          }
        }
        .second {
          .people {
            width: 390px;
            height: 237px;
            background: url(../../assets/images/second_p.svg) no-repeat;
            background-size: cover;
            // second_p
          }
          .ball {
            width: 13px;
            height: 12px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            left: 26.8%;
            top: 60%;
            animation: glow 800ms ease-out infinite alternate;
          }
        }
        .third {
          .people {
            width: 298px;
            height: 312px;
            background: url(../../assets/images/third_p.svg) no-repeat;
            background-size: cover;
          }
          .ball {
            width: 47px;
            height: 48px;
            background: url(../../assets/images/ball_3.svg) no-repeat;
            background-size: cover;
            position: absolute;
            left: 29%;
            top: 16%;
            animation: breath3 3s linear infinite;
          }
        }
        .fourth {
          .people {
            width: 213px;
            height: 304px;
            background: url(../../assets/images/fourth_p.svg) no-repeat;
            background-size: cover;
            position: relative;
            left: 40px;
            top: 40px;
          }
          .ball {
            width: 213px;
            height: 60px;
            // background: #000;
            position: absolute;
            left: 6%;
            top: 0;
            i {
              position: absolute;
              left: 0;
              top: 0;
              display: block;
              opacity: 0.3;
            }
            i:nth-of-type(1) {
              width: 24px;
              height: 28px;
              background: url(../../assets/images/tag1.svg) no-repeat;
              background-size: cover;
              top: 56px;
            }
            i:nth-of-type(2) {
              width: 24px;
              height: 23px;
              background: url(../../assets/images/tag2.svg) no-repeat;
              background-size: cover;
              top: 16px;
              left: 38px;
            }
            i:nth-of-type(3) {
              width: 27px;
              height: 27px;
              background: url(../../assets/images/tag3.svg) no-repeat;
              background-size: cover;
              top: 0px;
              left: 90px;
            }
            i:nth-of-type(4) {
              width: 23px;
              height: 25px;
              background: url(../../assets/images/tag4.svg) no-repeat;
              background-size: cover;
              top: 16px;
              left: 150px;
            }
            i:nth-of-type(5) {
              width: 26px;
              height: 24px;
              background: url(../../assets/images/tag5.svg) no-repeat;
              background-size: cover;
              top: 56px;
              left: auto;
              right: 0;
            }
          }
        }
        .fourth.share {
          .ball {
            i:nth-of-type(1) {
              // animation: breath 3s linear infinite;
              animation: opac 1s linear forwards;
              // animation-delay: 1s;
            }
            i:nth-of-type(2) {
              // animation: breath 3s linear infinite;
              animation: opac 1s linear forwards;
              animation-delay: 1s;
            }
            i:nth-of-type(3) {
              // animation: breath 3s linear infinite;
              animation: opac 1s linear forwards;
              animation-delay: 2s;
            }
            i:nth-of-type(4) {
              // animation: breath 3s linear infinite;
              animation: opac 1s linear forwards;
              animation-delay: 3s;
            }
            i:nth-of-type(5) {
              // animation: breath 3s linear infinite;
              animation: opac 1s linear forwards;
              animation-delay: 4s;
            }
          }
        }
      }
      .right_arrow_box {
        margin-top: 48px;
        padding-left: 20px;
        height: 60px;
        // background: red;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .arrow {
          // display: block;
          width: 60px;
          height: 60px;
          cursor: pointer;
          outline: none;
        }
        .arrow.left_arrow {
          background: url(../../assets/images/prev_arrow.svg) no-repeat center
            center;
        }
        .arrow.right_arrow {
          background: url(../../assets/images/next_arrow.svg) no-repeat center
            center;
        }
      }
      .index {
        width: 140px;
        height: 140px;
        background: #000;
        position: absolute;
        right: 32%;
        bottom: -4%;
        .index_layout {
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .line {
          display: block;
          width: 120px;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(-45deg);
        }
        .num {
          color: #fff;
          position: absolute;
          font-size: 34px;
          font-family: Graphik-Medium;
          font-weight: 800;
        }
        .num.t {
          left: 24px;
          top: 16px;

          color: rgba(255, 255, 255, 1);
          line-height: 53px;
        }
        .num.b {
          right: 24px;
          bottom: 16px;
          color: rgba(255, 255, 255, 0.2);
          line-height: 53px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1440px) {
  .second_screen .desc_box .right .right_ele_box .right_ele.first .ball {
    left: 34%;
    top: 17%;
  }
  .second_screen .desc_box .right .index {
    right: 22%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.second .ball {
    left: 30%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.third .ball {
    left: 32%;
  }
  // fourth
  .second_screen .desc_box .right .right_ele_box .fourth .ball {
    left: 6.7%;
  }
}
@media only screen and (max-width: 1280px) {
  .second_screen .desc_box .left .ele_box .ele_list .ele_list_desc {
    width: 100%;
    padding-right: 4%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.first .people {
    width: 100%;
  }
  .second_screen .desc_box .right .index {
    right: 2%;
    bottom: -2%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.first .ball {
    left: 43%;
    top: 17%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.second .ball {
    left: 40%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.third .ball {
    left: 43%;
  }
  .second_screen .desc_box .right .right_ele_box .fourth .ball {
    left: 9%;
  }
}

@media only screen and (max-width: 960px) {
  .second_screen .desc_box {
    padding: 0 30px;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.first .ball {
    left: 43%;
    top: 14%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.second .ball {
    left: 42.5%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele.third .ball {
    left: 45%;
  }
  .second_screen .desc_box .right .right_ele_box .fourth .ball {
    left: 9.5%;
  }
}

@keyframes breath {
  from {
    opacity: 0.1;
  } /* 动画开始时的不透明度 */
  50% {
    opacity: 1;
  } /* 动画50% 时的不透明度 */
  to {
    opacity: 0.1;
  } /* 动画结束时的不透明度 */
}

@-webkit-keyframes breath {
  from {
    opacity: 0.1;
  } /* 动画开始时的不透明度 */
  50% {
    opacity: 1;
  } /* 动画50% 时的不透明度 */
  to {
    opacity: 0.1;
  } /* 动画结束时的不透明度 */
}
@keyframes breath3 {
  from {
    opacity: 0.3;
  } /* 动画开始时的不透明度 */
  50% {
    opacity: 1;
  } /* 动画50% 时的不透明度 */
  to {
    opacity: 0.3;
  } /* 动画结束时的不透明度 */
}
@-webkit-keyframes breath3 {
  from {
    opacity: 0.3;
  } /* 动画开始时的不透明度 */
  50% {
    opacity: 1;
  } /* 动画50% 时的不透明度 */
  to {
    opacity: 0.3;
  } /* 动画结束时的不透明度 */
}

@keyframes widthVariety {
  from {
    width: 0px;
  } /* 动画开始时的不透明度 */
  to {
    width: 100%;
  } /* 动画结束时的不透明度 */
}

@keyframes glow {
  0% {
    border-color: #fff;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2),
      inset 0 0 5px rgba(255, 255, 255, 0.1), 0 1px 0 #fff;
  }
  100% {
    border-color: #fff;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
      inset 0 0 10px rgba(255, 255, 255, 0.4), 0 1px 0 #fff;
  }
}

@keyframes opac {
  from {
    opacity: 0.3;
  } /* 动画开始时的不透明度 */
  to {
    opacity: 1;
  } /* 动画结束时的不透明度 */
}
</style>
