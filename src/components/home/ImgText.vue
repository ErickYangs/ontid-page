<template>
  <div id="second_screen_top" ref="second_screen_top" class="second_screen home_contanier">
    <div class="title">{{$t('second_screen.title')}}</div>
    <div class="ele_layout">
      <div class="ele_item">
        <div class="left hidenone" ref="ele1">
          <div class="sub_title">{{$t('second_screen.item1_title')}}</div>
          <div class="sub_desc">{{$t('second_screen.item1_desc')}}</div>
        </div>
        <div class="right hidenone" ref="ele2">
          <div class="people_img img_one"></div>
        </div>
      </div>
      <div class="ele_item">
        <div class="left hidenone" ref="ele3">
          <div class="people_img img_two"></div>
        </div>
        <div class="right hidenone" ref="ele4">
          <div class="sub_title">{{$t('second_screen.item2_title')}}</div>
          <div class="sub_desc">{{$t('second_screen.item2_desc')}}</div>
        </div>
      </div>
      <div class="ele_item">
        <div class="left hidenone" ref="ele5">
          <div class="sub_title">{{$t('second_screen.item3_title')}}</div>
          <div class="sub_desc">{{$t('second_screen.item3_desc')}}</div>
        </div>
        <div class="right hidenone" ref="ele6">
          <div class="people_img img_three"></div>
        </div>
      </div>
      <div class="ele_item">
        <div class="left hidenone" ref="ele7">
          <div class="people_img img_four"></div>
        </div>
        <div class="right hidenone" ref="ele8">
          <div class="sub_title">{{$t('second_screen.item4_title')}}</div>
          <div class="sub_desc">{{$t('second_screen.item4_desc')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../node_modules/animate.css/animate.css'

export default {
  methods: {
    handerscrollfd() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop
      let targetTop = this.$refs.second_screen_top.offsetTop // 目标元素离页面顶端的距离
      if (this.lock) {
        return
      } else {
        if (targetTop < scrollTop + 600) {
          this.$refs.ele1.classList.remove('hidenone')
          this.$refs.ele1.classList.add('animated', 'fadeInUp')
          setTimeout(() => {
            this.$refs.ele2.classList.remove('hidenone')
            this.$refs.ele2.classList.add('animated', 'fadeInUp')
          }, 200)
        }
        if (targetTop < scrollTop + 100) {
          this.$refs.ele3.classList.remove('hidenone')
          this.$refs.ele3.classList.add('animated', 'fadeInUp')
          setTimeout(() => {
            this.$refs.ele4.classList.remove('hidenone')
            this.$refs.ele4.classList.add('animated', 'fadeInUp')
          }, 200)
        }
        if (targetTop < scrollTop - 100) {
          this.$refs.ele5.classList.remove('hidenone')
          this.$refs.ele5.classList.add('animated', 'fadeInUp')
          setTimeout(() => {
            this.$refs.ele6.classList.remove('hidenone')
            this.$refs.ele6.classList.add('animated', 'fadeInUp')
          }, 200)
        }
        if (targetTop < scrollTop - 500) {
          this.$refs.ele7.classList.remove('hidenone')
          this.$refs.ele7.classList.add('animated', 'fadeInUp')
          setTimeout(() => {
            this.$refs.ele8.classList.remove('hidenone')
            this.$refs.ele8.classList.add('animated', 'fadeInUp')
          }, 200)
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handerscrollfd)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handerscrollfd)
  }
}
</script>

<style lang="scss" scoped>
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
  .ele_layout {
    .ele_item {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .left,
      .right {
        width: 50%;
      }
      .sub_title {
        font-size: 24px;
        font-family: Graphik-Medium;
        font-weight: 800;
        color: rgba(0, 0, 0, 1);
        line-height: 35px;
        padding-top: 85px;
      }
      .sub_desc {
        font-size: 14px;
        // font-family: FuturaLT;
        color: rgba(0, 0, 0, 0.6);
        line-height: 24px;
        margin-top: 20px;
        padding-right: 120px;
      }
      .people_img {
        margin: 0 auto;
        width: 100%;
        max-width: 400px;
        height: 300px;
      }
      .img_one {
        background: url(../../assets/images/img1.svg) no-repeat center;
        background-size: contain;
      }
      .img_two {
        background: url(../../assets/images/img2.svg) no-repeat center;
        background-size: contain;
      }
      .img_three {
        background: url(../../assets/images/img3.svg) no-repeat center;
        background-size: contain;
      }
      .img_four {
        background: url(../../assets/images/img4.svg) no-repeat center;
        background-size: contain;
      }
    }
    .ele_item:nth-of-type(1) {
      .left {
        padding-left: 120px;
      }
    }
    .ele_item:nth-of-type(3) {
      .left {
        padding-left: 120px;
      }
    }
  }
}
.hidenone {
  visibility: hidden;
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .ele_layout {
    padding: 0 20px;
  }
  .second_screen .ele_layout .ele_item:nth-of-type(1) .left {
    padding-left: 40px;
  }
  .second_screen .ele_layout .ele_item:nth-of-type(3) .left {
    padding-left: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .second_screen .ele_layout .ele_item:nth-of-type(1) .left {
    padding-left: 0px;
  }
  .second_screen .ele_layout .ele_item:nth-of-type(3) .left {
    padding-left: 0px;
  }
  .second_screen {
    padding: 50px 0 60px;
    .title {
      font-size: 25px;
      margin-bottom: 40px;
      line-height: 30px;
    }
  }
  .second_screen .ele_layout {
    .ele_item {
      margin-bottom: 40px;
      .left,
      .right {
        width: 100%;
      }
      .people_img {
        width: 240px;
        height: 190px;
      }
      .sub_title {
        text-align: center;
        font-size: 15px;
        line-height: 17px;
        padding-top: 20px;
      }
      .sub_desc {
        padding: 0 20px;
        text-align: center;
        font-size: 12px;
        line-height: 13px;
      }
    }
    .ele_item:nth-of-type(1) {
      flex-direction: column-reverse;
    }
    .ele_item:nth-of-type(3) {
      flex-direction: column-reverse;
    }
  }
}
</style>
