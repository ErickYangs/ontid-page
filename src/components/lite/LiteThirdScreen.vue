<template>
  <div class="lite_third_screen">
    <div class="lite_third_box home_contanier">
      <div class="title">Switch to Self-sovrin Mode</div>
      <div
        class="lite_third_text"
      >For now ,you are using ONT ID Lite which helps you navigate the world of blockchain without any barriers. ONT ID Lite is not meant to keep users using the service. Instead, it is meant as the middle-ground between trying your hand at blockchain and learning how to keep your private key safe.</div>
      <div
        class="lite_third_text"
      >We also provide you with wallets in which you can create and manage your self-controlled identity and data using private keys. You need to make sure you are able to keep your private key safe.Now you can download ONTO, then act as the following steps .</div>
      <div class="line"></div>
      <div class="down_layout">
        <div class="tips">Take back control of your identity</div>
        <div class="app_box">
          <span class="apple"></span>
          <span class="google"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiteThirdScreen'
}
</script>

<style scoped lang="scss">
.lite_third_screen {
  padding: 150px 0 100px;
  background: linear-gradient(
    135deg,
    #A5FF89 0%,
    #329120 100%
  );
  .lite_third_box {
    .title {
      font-size: 40px;
      font-family: Graphik-Medium;
      font-weight: 800;
      color: rgba(255, 255, 255, 1);
      line-height: 66px;
      text-align: center;
      padding-bottom: 60px;
    }
    .lite_third_text {
      max-width: 1280px;
      margin: 0 auto;
      font-size: 18px;
      // font-family: FuturaLT;
      color: rgba(255, 255, 255, 0.6);
      line-height: 35px;
      padding-bottom: 40px;
      text-align: center;
    }
    .line {
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin-top: 20px;
    }
    .down_layout {
      width: 100%;
      // max-width: 440px;
      margin: 0 auto;
      text-align: center;
      .tips {
        padding-top: 70px;
        font-size: 30px;
        font-family: Graphik-Medium;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
      }

      .app_box {
        max-width: 370px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 60px;
        span {
          display: block;
          width: 170px;
          height: 54px;
          cursor: pointer;
          background-size: contain !important;
          // font-family: FuturaLT;
        }
        span.apple {
          background: url(../../assets/images/apple_w.svg) no-repeat;
        }
        span.google {
          background: url(../../assets/images/google_w.svg) no-repeat;
        }
      }
    }
  }
}
@media only screen and (max-width: 960px) {
  .lite_third_box {
    padding-left: 40px;
    padding-right: 40px;
  }
  .lite_third_screen {
    width: 960px;
  }
}
</style>
