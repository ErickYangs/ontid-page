<template>
  <div class="lite_third_screen">
    <div class="lite_third_box home_contanier">
      <div class="title">{{$t('item_switch.title')}}</div>
      <div class="lite_third_text">{{$t('item_switch.p1')}}</div>
      <div class="lite_third_text">{{$t('item_switch.p2')}}</div>
      <div class="line"></div>
      <div class="down_layout">
        <div class="tips">
          {{$t('down_page.ident_title1')}}
          <span
            class="iden_title_blod"
          >{{$t('down_page.ident_title2')}}</span>
          {{$t('down_page.ident_title3')}}
        </div>
        <div class="app_box">
          <!-- <span
            class="apple"
            @click="openNewPage('https://itunes.apple.com/cn/app/onto-an-ontology-dapp/id1436009823?mt=8')"
          ></span>
          <span
            class="google"
            @click="openNewPage('https://play.google.com/store/apps/details?id=com.github.ontio.onto')"
          ></span>-->
          <span :class="[$i18n.locale == 'zh' ? 'coming_zh' : 'coming_en']"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiteThirdScreen',
  methods: {
    openNewPage(url) {
      window.open(url)
    }
  },
}
</script>

<style scoped lang="scss">
.lite_third_screen {
  padding: 150px 0 100px;
  background: linear-gradient(135deg, #a5ff89 0%, #329120 100%);
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
        font-size: 20px;
        font-family: Graphik-Medium;
        font-weight: 800;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
        span {
          font-weight: 800;
          color: rgba(255, 255, 255, 1);
        }
      }

      .app_box {
        // max-width: 370px;
        max-width: 170px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 60px;
        span {
          display: block;
          width: 170px;
          height: 54px;
          // cursor: pointer;
          background-size: contain !important;
          // font-family: FuturaLT;
        }
        span.apple {
          background: url(../../assets/images/apple_w.svg) no-repeat;
        }
        span.google {
          background: url(../../assets/images/google_w.svg) no-repeat;
        }
        span.coming_zh {
          background: url(../../assets/images/coming_zh.svg) no-repeat center;
          background-size: contain;
          opacity: 0.5;
        }
        span.coming_en {
          background: url(../../assets/images/coming_en.svg) no-repeat center;
          background-size: contain;
          opacity: 0.5;
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
    width: 100%;
  }
}
@media only screen and (max-width: 767px) {
  .lite_third_screen {
    padding: 60px 0 50px;
    .lite_third_box {
      padding: 0 25px;
      .title {
        font-size: 20px;
        line-height: 22px;
        padding-bottom: 40px;
      }
      .lite_third_text {
        font-size: 15px;
        line-height: 17px;
        padding-bottom: 20px;
      }
      .down_layout {
        .tips {
          padding-top: 30px;
          font-size: 15px;
          line-height: 30px;
        }
        .app_box {
          margin-top: 30px;
          justify-content: space-evenly;
          span {
            width: 127px;
            height: 40px;
            background-size: contain;
          }
        }
      }
    }
  }
}
</style>
