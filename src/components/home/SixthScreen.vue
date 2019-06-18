<template>
  <div class="sixth_screen">
    <!-- <parallax containerClass="center_box"> -->
    <div class="center_box">
      <!-- <div class="center_box"> -->
      <div class="ftbg" v-parallax="0.2"></div>
      <div class="sixth_box home_contanier">
        <div class="left_lite"></div>
        <div class="right_learn_more">
          <span>Learn more</span>
          <i @click="toLite()"></i>
        </div>
      </div>
      <div class="model"></div>
    </div>
    <!-- </parallax> -->
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
    // background: url(../../assets/images/footer_bg.jpg) center no-repeat;
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
      width: 150px;
      height: 40px;
      background: url(../../assets/images/lite_logo.svg) no-repeat;
      background-size: contain;
    }
    .right_learn_more {
      width: 300px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 40px;
        font-family: FuturaLT-Heavy;
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
  }
}
// sixth_box
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
    width: 960px;
  }
}
</style>

