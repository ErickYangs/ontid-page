<template>
  <div class="litesecondscreen home_contanier">
    <!-- <iframe src="http://www.ericyang.xyz/change.html"
            height="500"
            width="100%"
            frameborder="0"
            scrolling="0"
    ></iframe>-->
    <div class="title">Why ONT ID Lite</div>
    <div class="introduct_box">
      <div class="introd_layout">
        <div class="left">
          <div class="introd_title">Eliminate all the barries for uses</div>
          <div
            class="introd_desc"
          >No need to manage private keys . The only thing users will need to remember is an email address, a mobile phone number, or a social account like Facebook,Google or Wechat account.</div>
        </div>
        <div class="right fp_one">
          <div class="outer"></div>

          <div class="inner" v-parallax.absY="0.04"></div>

        </div>
      </div>
      <div class="introd_layout">
        <div class="left fp_two">
          <div class="outer"></div>
          <div class="inner" v-parallax.absY="0.04"></div>
        </div>
        <div class="right">
          <div class="introd_title">Suitable for light dAPPs</div>
          <div
            class="introd_desc"
          >Widely used in scenarios like games ,candies, social media and small amount token reward applications.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'

export default {
  name: 'LiteSecondScreen',
  created() {
    console.log(document.domain)
  },
  components: {
    Parallax
  }
}
</script>

<style lang="scss" scoped>
.litesecondscreen {
  padding: 150px 0;
  .title {
    font-size: 40px;
    font-family: FuturaLT-Heavy;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 66px;
    text-align: center;
  }
  .introduct_box {
    // overflow: hidden;
    padding: 0 205px;
    .introd_layout {
      margin-top: 120px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .left,
      .right {
        width: 50%;
      }

      .introd_title {
        font-size: 24px;
        font-family: FuturaLT-Heavy;
        font-weight: 800;
        color: rgba(0, 0, 0, 1);
        line-height: 35px;
        padding-top: 20px;
      }

      .introd_desc {
        font-size: 16px;
        font-family: FuturaLT;
        color: rgba(0, 0, 0, 0.6);
        line-height: 24px;
        margin-top: 20px;
        padding-right: 10px;
      }

      .fp_one {
        position: relative;
        .outer {
          width: 148px;
          height: 190px;
          background: url(../../assets/images/fp_1_1.svg) no-repeat;
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
        .outer {
          width: 213px;
          height: 242px;
          background: url(../../assets/images/fp_2_1.svg) no-repeat;
        }
        .inner {
          width: 246px;
          height: 300px;
          background: url(../../assets/images/fp_2_2.svg) no-repeat center;
          position: absolute;
          left: -22%;
          top: -34%;
          // transform: translateX(-50%);
          z-index: -1;
        }
      }
    }
  }
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
    padding-left: 50px;
  }
  .litesecondscreen .introduct_box .introd_layout .fp_two .inner {
    left: -13%;
  }
}
</style>
