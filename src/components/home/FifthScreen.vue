<template>
  <div class="fifth_screen">
    <div class="fifth_box">
      <div class="outer_box">
        <div class="fifth_title">{{$t('developer.title')}}</div>
        <div
          class="fifth_desc"
        >">{{$t('developer.deve_desc')}}</div>
        <div class="start hover1" @click="openNewPage('https://ontid.readme.io/docs/getting-started')">{{$t('developer.start')}}</div>
      </div>

      <div class="gear-box">
        <i class="l"></i>
        <i class="m"></i>
        <i class="s"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNewPage(url) {
      window.open(url)
    }
  },
}
</script>

<style lang="scss" scoped>
.fifth_screen {
  width: 100%;
  background: linear-gradient(134deg, #34bcff 0%, #005cc4 100%);
  padding: 150px 0;
  .fifth_box {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    .outer_box {
      position: relative;
      z-index: 9999999;
    }
    .fifth_title {
      font-size: 40px;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(255, 255, 255, 1);
      line-height: 66px;
      text-align: center;
      z-index: 1;
    }
    .fifth_desc {
      font-size: 18px;
      // font-family: FuturaLT;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
      margin-top: 40px;
      text-align: center;
      z-index: 1;
    }
    .start {
      width: 160px;
      height: 54px;
      margin: 0px auto;
      margin-top: 60px;
      border-radius: 4px;
      border: 2px solid rgba(255, 255, 255, 1);
      font-size: 16px;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      z-index: 999;
      &:hover {
        background: #fff;
        color: #1889e0;
      }
    }
    .gear-box {
      position: absolute;
      left: 50%;
      top: 0;
      width: 302px;
      height: 270px;
      transform: translateX(-50%);
      z-index: 0;
      i {
        // background: url(../../assets/images/gear.svg) no-repeat;
        background-size: cover;
        // -webkit-animation: myRotate 10s linear infinite;
        // animation: myRotate 10s linear infinite;
      }
      i.l {
        display: block;
        width: 200px;
        height: 200px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: url(../../assets/images/gear1.svg) no-repeat;
        -webkit-animation: myRotate 10s linear infinite;
        animation: myRotate 10s linear infinite;
      }
      i.s {
        display: block;
        width: 90px;
        height: 90px;
        position: absolute;
        right: 0;
        bottom: 35px;
        background: url(../../assets/images/gear3.svg) no-repeat;
        -webkit-animation: myRotatef 10s linear infinite;
        animation: myRotatef 10s linear infinite;
      }
      i.m {
        display: block;
        width: 120px;
        height: 120px;
        position: absolute;
        right: 0;
        top: 0;
        background: url(../../assets/images/gear2.svg) no-repeat;
        -webkit-animation: myRotatef 10s linear infinite;
        animation: myRotatef 10s linear infinite;
      }
    }
  }
}

@-webkit-keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes myRotatef {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
@keyframes myRotatef {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(-180deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@media only screen and (max-width: 960px) {
  .fifth_screen {
    width: 960px;
  }
}
</style>
