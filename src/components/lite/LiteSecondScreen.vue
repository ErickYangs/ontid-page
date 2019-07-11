<template>
  <div id="lite_second" ref="lite_second" class="litesecondscreen home_contanier">
    <div class="title">{{$t('lite_pro.title')}}</div>
    <div class="introduct_box">
      <div class="introd_layout">
        <div class="left hidenone" ref="ele_left1">
          <div class="introd_title">{{$t('lite_pro.item1_title')}}</div>
          <div class="introd_desc">{{$t('lite_pro.item1_desc')}}</div>
        </div>
        <div class="right fp_one hidenone" ref="ele_right1">
          <div class="outer"></div>
          <!-- <div class="inner" v-parallax.absY="0.2"></div> -->
        </div>
      </div>
      <div class="introd_layout">
        <div class="left fp_two hidenone" ref="ele_left2">
          <div class="outer"></div>
          <!-- <div class="inner" v-parallax.absY="0.2"></div> -->
        </div>
        <div class="right hidenone" ref="ele_right2">
          <div class="introd_title">{{$t('lite_pro.item2_title')}}</div>
          <div class="introd_desc">{{$t('lite_pro.item2_desc')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import '../../../node_modules/animate.css/animate.css'

export default {
  name: 'LiteSecondScreen',
  components: {
    Parallax
  },
  methods: {
    handleScrollFade() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop
      let targetTop = this.$refs.lite_second.offsetTop // 目标元素离页面顶端的距离
      if (this.lock) {
        return
      } else {
        if (targetTop < scrollTop + 600) {
          this.$refs.ele_left1.classList.remove('hidenone')
          this.$refs.ele_left1.classList.add('animated', 'fadeInUp')
          setTimeout(() => {
            this.$refs.ele_right1.classList.remove('hidenone')
            this.$refs.ele_right1.classList.add('animated', 'fadeInUp')
          }, 200)
          setTimeout(() => {
            this.$refs.ele_left2.classList.remove('hidenone')
            this.$refs.ele_left2.classList.add('animated', 'fadeInUp')
          }, 600)
          setTimeout(() => {
            this.$refs.ele_right2.classList.remove('hidenone')
            this.$refs.ele_right2.classList.add('animated', 'fadeInUp')
          }, 1000)
          this.lock = true
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScrollFade)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScrollFade)
  }
}
</script>

<style lang="scss" scoped>
#app.lang_en .litesecondscreen .title {
  font-family: Graphik-Medium;
}
#app.lang_en .litesecondscreen .introduct_box .introd_layout .introd_title {
  font-family: Graphik-Medium;
}
.litesecondscreen {
  padding: 150px 0;
  .title {
    font-size: 40px;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 66px;
    text-align: center;
  }
  .introduct_box {
    padding: 0 205px;
    .introd_layout {
      margin-top: 80px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .left,
      .right {
        width: 50%;
      }

      .introd_title {
        font-size: 24px;
        font-weight: 800;
        color: rgba(0, 0, 0, 1);
        line-height: 35px;
        padding-top: 85px;
      }

      .introd_desc {
        font-size: 16px;
        // font-family: FuturaLT;
        color: rgba(0, 0, 0, 0.6);
        line-height: 24px;
        margin-top: 20px;
        padding-right: 10px;
      }

      .fp_one {
        position: relative;
        .outer {
          width: 100%;
          max-width: 400px;
          height: 300px;
          background: url(../../assets/images/fp_1_1.svg) no-repeat center;
          background-size: contain;
          margin: 0 auto;
        }
        .inner {
          width: 379px;
          height: 200px;
          // height: 142px;
          background: url(../../assets/images/fp_1_2.svg) no-repeat center;
          position: absolute;
          left: 12%;
          top: 0%;
          transform: translateX(-50%);
        }
      }
      .fp_two {
        position: relative;
        // padding-left: 130px;
        .outer {
          width: 100%;
          max-width: 400px;
          height: 300px;
          background: url(../../assets/images/fp_2_1.svg) no-repeat center;
          background-size: contain;
          margin: 0 auto;
        }
        .inner {
          width: 400px;
          height: 300px;
          background: url(../../assets/images/fp_2_2.svg) no-repeat center;
          position: absolute;
          left: 5%;
          top: -34%;
          // transform: translateX(-50%);
          z-index: -1;
        }
      }
    }
  }
}
.hidenone {
  visibility: hidden;
}
@media only screen and (max-width: 1440px) {
  .litesecondscreen .introduct_box .introd_layout .fp_one .inner {
    left: 6%;
  }
}
@media only screen and (max-width: 1280px) {
  .litesecondscreen .introduct_box {
    padding: 0 65px;
  }
}
@media only screen and (max-width: 960px) {
  .litesecondscreen .introduct_box .introd_layout .fp_two {
    // padding-left: 50px;
  }
  .litesecondscreen .introduct_box .introd_layout .fp_two .inner {
    left: -13%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 959px) {
  .litesecondscreen .introduct_box .introd_layout .fp_one .inner {
    left: -9%;
  }
  .litesecondscreen .introduct_box .introd_layout .fp_one .outer {
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .litesecondscreen {
    padding: 50px 0;
    .title {
      font-size: 20px;
      line-height: 22px;
    }
    .introduct_box {
      padding: 0 30px;
      .introd_layout {
        margin-top: 50px;
        .left,
        .right {
          width: 100%;
        }
        .fp_one {
          .inner {
            left: 20%;
            top: 12%;
            width: 190px;
            height: 72px;
            background-size: contain;
          }
          .outer {
            width: 240px;
            height: 190px;
            background-size: contain;
          }
        }
        .fp_two {
          padding-left: 0;
          .outer {
            width: 84px;
            height: 97px;
            background-size: contain;
            margin: 0 auto;
          }
          .inner {
            width: 99px;
            height: 93px;
            background-size: contain;
            left: 25%;
            top: -24%;
          }
        }
        .introd_title {
          text-align: center;
          font-size: 15px;
          line-height: 17px;
          padding-top: 20px;
        }
        .introd_desc {
          padding: 0;
          text-align: center;
          font-size: 12px;
          line-height: 13px;
        }
      }
      .introd_layout:nth-of-type(1) {
        flex-direction: column-reverse;
      }
      .introd_layout:nth-of-type(2) {
        margin-top: 50px;
      }
    }
  }
}
</style>
