<template>
  <div class="third_screen">
    <div class="screen_box home_contanier">
      <div class="choose_title">Why choose ONT ID</div>
      <div class="ele_box">
        <div class="ele_list">
          <div class="top_img">
            <img src="../../assets/images/1.svg" alt>
          </div>
          <div class="desc_title">Identity you can trust</div>
          <div
            class="desc_text"
          >Support the Sign-up and Sign-in of ONT ID in dAPPs , simple and fast.Support the Sign-up and Sign-in of ONT ID in dAPPs</div>
        </div>
        <div class="ele_list">
          <div class="top_img">
            <img src="../../assets/images/2.svg" alt>
          </div>
          <div class="desc_title">Data security</div>
          <div
            class="desc_text"
          >Support the Sign-up and Sign-in of ONT ID in dAPPs , simple and fast.Support the Sign-up and Sign-in of ONT ID in dAPPs</div>
        </div>
        <div class="ele_list">
          <div class="top_img">
            <img src="../../assets/images/3.svg" alt>
          </div>
          <div class="desc_title">Easy to use</div>
          <div
            class="desc_text"
          >Support the Sign-up and Sign-in of ONT ID in dAPPs , simple and fast.Support the Sign-up and Sign-in of ONT ID in dAPPs</div>
        </div>
        <div class="ele_list">
          <div class="top_img">
            <img src="../../assets/images/4.svg" alt>
          </div>
          <div class="desc_title">Standards & Coverage</div>
          <div
            class="desc_text"
          >Support the Sign-up and Sign-in of ONT ID in dAPPs , simple and fast.Support the Sign-up and Sign-in of ONT ID in dAPPs</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
@media only screen and (max-width: 960px) {
  .third_screen {
    width: 960px;
  }
}
</style>
