<template>
  <div class="third_screen" ref="third_screen">
    <div class="screen_box home_contanier">
      <div class="choose_title">{{$t('thrid_screen.title')}}</div>
      <div class="ele_box">
        <div class="ele_list hidenone" ref="ele_list1">
          <div class="top_img">
            <img src="../../assets/images/1.svg" alt />
          </div>
          <div class="desc_title">{{$t('thrid_screen.item1_title')}}</div>
          <div class="desc_text">{{$t('thrid_screen.item1_desc')}}</div>
        </div>
        <div class="ele_list hidenone" ref="ele_list2">
          <div class="top_img">
            <img src="../../assets/images/2.svg" alt />
          </div>
          <div class="desc_title">{{$t('thrid_screen.item2_title')}}</div>
          <div class="desc_text">{{$t('thrid_screen.item2_desc')}}</div>
        </div>
        <div class="ele_list hidenone" ref="ele_list3">
          <div class="top_img">
            <img src="../../assets/images/3.svg" alt />
          </div>
          <div class="desc_title">{{$t('thrid_screen.item3_title')}}</div>
          <div class="desc_text">{{$t('thrid_screen.item3_desc')}}</div>
        </div>
        <div class="ele_list hidenone" ref="ele_list4">
          <div class="top_img">
            <img src="../../assets/images/4.svg" alt />
          </div>
          <div class="desc_title">{{$t('thrid_screen.item4_title')}}</div>
          <div class="desc_text">{{$t('thrid_screen.item4_desc')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../node_modules/animate.css/animate.css'

export default {
  methods: {
    handleScrollFadeIn() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop
      let targetTop = this.$refs.third_screen.offsetTop // 目标元素离页面顶端的距离
      if (this.lock) {
        return
      } else {
        if (targetTop < scrollTop + 400) {
          this.$refs.ele_list1.classList.remove('hidenone')
          this.$refs.ele_list1.classList.add('animated', 'fadeInUp')
          setTimeout(() => {
            this.$refs.ele_list2.classList.remove('hidenone')
            this.$refs.ele_list2.classList.add('animated', 'fadeInUp')
          }, 200)
          setTimeout(() => {
            this.$refs.ele_list3.classList.remove('hidenone')
            this.$refs.ele_list3.classList.add('animated', 'fadeInUp')
          }, 600)
          setTimeout(() => {
            this.$refs.ele_list4.classList.remove('hidenone')
            this.$refs.ele_list4.classList.add('animated', 'fadeInUp')
          }, 1000)
          this.lock = true
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScrollFadeIn)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScrollFadeIn)
  }
}
</script>

<style lang="scss" scoped>
.third_screen {
  background: #000;
  .screen_box {
    padding: 150px 0;
    .choose_title {
      font-size: 40px;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(255, 255, 255, 1);
      line-height: 66px;
      text-align: center;
    }
    .ele_box {
      margin-top: 120px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .ele_list {
        width: 25%;
        .top_img {
          width: 60px;
          height: 60px;
          margin: 0 auto;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .desc_title {
          margin-top: 24px;
          font-size: 20px;
          font-family: Graphik-Medium;
          font-weight: 800;
          color: rgba(255, 255, 255, 1);
          line-height: 35px;
          text-align: center;
        }
        .desc_text {
          padding: 0 40px;
          margin-top: 20px;
          font-size: 14px;
          // font-family: FuturaLT;
          color: rgba(255, 255, 255, 0.5);
          line-height: 24px;
          text-align: center;
        }
      }
    }
  }
}
.hidenone {
  visibility: hidden;
}
// @media only screen and (min-width: 768px) and (max-width: 959px)
@media only screen and (min-width: 768px) and (max-width: 959px) {
  .third_screen .screen_box .ele_box .ele_list {
    width: 50%;
  }
  .third_screen .screen_box .ele_box .ele_list:nth-of-type(1) {
    margin-bottom: 40px;
  }
  .third_screen .screen_box .ele_box .ele_list:nth-of-type(2) {
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .third_screen {
    .screen_box {
      padding: 50px 0;
      .choose_title {
        font-size: 25px;
        line-height: 30px;
      }
      .ele_box {
        margin-top: 50px;
        .ele_list {
          width: 100%;
          margin-bottom: 50px;
        }
        .ele_list:nth-of-type(4) {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
