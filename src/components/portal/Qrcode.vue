<template>
  <div class="qrcode">
    <div
      class="title"
    >Let's get started integrating ONT ID & ONTO abilities to your apps or websites.</div>

    <div class="layout">
      <div class="left">
        <p>1. Download the ONTO App on your mobile device.</p>
        <p>2. Create your ONT ID and verify your email using the ONTO App.</p>
        <p>
          3. Scan QR Code to next step.
          <span></span>
        </p>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.qrcode {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  .title {
    padding-top: 20px;
    text-align: center;
    // height: 25px;
    font-size: 18px;
    // font-family: FuturaLT;
    color: rgba(0, 0, 0, .5);
    line-height: 26px;
  }
  .layout {
    margin-top: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    .left {
      width: 620px;
      padding-right: 60px;
      p {
        font-size: 18px;
        // font-family: FuturaLT;
        color: rgba(0, 0, 0, 1);
        line-height: 24px;
        margin-bottom: 20px;
        span {
          display: inline-block;
          width: 14px;
          height: 12px;
          background: url(../../assets/images/arrow_right.svg) no-repeat;
          margin-left: 20px;
        }
      }
    }
    .right {
      width: 106px;
      height: 106px;
      background: red;
    }
  }
}
</style>
