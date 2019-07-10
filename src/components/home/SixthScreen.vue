<template>
  <div class="sixth_screen">
    <div class="center_box">
      <div class="ftbg" v-parallax="0.2"></div>
      <div class="sixth_box home_contanier">
        <div class="left_lite">
          <div class="logo"></div>
          <div class="desc">Use anytime ,anywhere</div>
        </div>
        <div class="right_learn_more">
          <span>Learn more</span>
          <i @click="toLite()"></i>
        </div>
      </div>
      <div class="model"></div>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  methods: {
    toLite() {
      this.$router.push({ path: '/lite' })
    }
  },
  components: {
    Parallax
  }
}
</script>

<style lang="scss" scoped>
.sixth_screen {
  width: 100%;
  height: 264px;
  .center_box {
    width: 100%;
    height: 264px;
    position: relative;
    background-size: cover;
    overflow: hidden;
  }

  .sixth_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 9;
    .left_lite {
      .logo {
        width: 150px;
        height: 40px;
        background: url(../../assets/images/lite_logo.svg) no-repeat;
        background-size: contain;
      }
      .desc {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.6);
        line-height: 24px;
        margin-top: 18px;
      }
    }
    .right_learn_more {
      width: 260px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 30px;
        font-family: Graphik-Medium;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
        line-height: 50px;
      }
      i {
        display: block;
        width: 50px;
        height: 50px;
        background: url(../../assets/images/lite_next.svg) no-repeat;
        background-size: contain;
        cursor: pointer;
      }
    }
  }
  .model {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
  }
  .ftbg {
    width: 100%;
    height: 560px;
    background: url(../../assets/images/footer_bg.jpg) center no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;
  }
}
@media only screen and (max-width: 1440px) {
  .sixth_screen .ftbg {
    top: -200px;
  }
}
@media only screen and (max-width: 960px) {
  .sixth_box {
    padding: 0 40px;
  }
  .sixth_screen {
    // width: 960px;
  }
}
@media only screen and (max-width: 767px) {
.sixth_screen {
  .sixth_box {
    flex-direction: column;
    justify-content: center;
    .left_lite {
      margin-bottom: 50px;
      .logo {
        margin-left: 50px;
      }
    }
    .right_learn_more {
      width: auto;
      height: 30px;
      span {
        font-size: 25px;
        line-height: 30px;
        margin-right: 25px;
        display: none;
      }
      i {
        width: 30px;
        height: 30px;
      }
    }
  }
}
}
</style>

