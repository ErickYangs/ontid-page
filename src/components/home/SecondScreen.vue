<template>
  <div class="second_screen home_contanier">
    <div class="title">What can ONT ID do for you</div>
    <div class="desc_box">
      <div class="left">
        <div class="ele_box">
          <div class="ele_list">
            <div class="ele_list_title">Unified Sign-In</div>
            <div
              class="ele_list_desc"
            >Support the Sign-up and Sign-in of ONT ID in dAPPs , simple and fast</div>
          </div>
        </div>
        <div class="line_box">
          <div class="inner_line"></div>
          <div class="outer_line"></div>
        </div>
      </div>
      <div class="right">
        <div class="right_ele_box">
          <div class="right_ele">
            <div class="people">
              <div class="index">
                <i class="line"></i>
                <span class="t">01</span>
                <span class="b">04</span>
              </div>
            </div>
            <div class="ball"></div>
          </div>
        </div>
        <div class="right_arrow_box">
          <i class="left_arrow"></i>
          <i class="right_arrow"></i>
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
.second_screen {
  padding: 150px 0 210px;
  .title {
    font-size: 40px;
    font-family: FuturaLT-Heavy;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 66px;
    text-align: center;
    margin-bottom: 150px;
  }
  .desc_box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .left {
      width: 50%;
      .ele_box {
        .ele_list {
          .ele_list_title {
            font-size: 40px;
            font-family: FuturaLT-Heavy;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
            line-height: 53px;
            padding-top: 100px;
          }
          .ele_list_desc {
            margin-top: 30px;
            width: 524px;
            font-size: 20px;
            font-family: FuturaLT;
            color: rgba(0, 0, 0, 0.6);
            line-height: 35px;
            word-break: break-all;
          }
        }
      }
      .line_box {
        position: relative;
        margin-top: 80px;
        .inner_line {
          width: 100%;
          max-width: 595px;
          height: 6px;
          background: rgba(250, 250, 250, 1);
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 0;
        }
        .outer_line {
          width: 360px;
          height: 6px;
          background: #000;
          border-radius: 3px;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
    .right {
      width: 50%;
      .right_ele_box {
        padding-top: 40px;
        .right_ele {
          position: relative;
          .people {
            width: 500px;
            height: 245px;
            background: url(../../assets/images/people_main.svg) no-repeat;
            position: relative;
            background-size: contain;
            .index {
              width: 140px;
              height: 140px;
              background: #000;
              position: absolute;
              right: -2%;
              bottom: -65%;
              display: flex;
              align-items: center;
              justify-content: center;
              .line {
                display: block;
                width: 120px;
                height: 2px;
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(-45deg);
              }
              span {
                color: #fff;
                position: absolute;
                font-size: 34px;
                font-family: FuturaLT-Heavy;
                font-weight: 800;
              }
              span.t {
                left: 24px;
                top: 16px;

                color: rgba(255, 255, 255, 1);
                line-height: 53px;
              }
              span.b {
                right: 24px;
                bottom: 16px;
                // font-size: 40px;
                // font-family: FuturaLT-Heavy;
                // font-weight: 800;
                color: rgba(255, 255, 255, 0.2);
                line-height: 53px;
              }
            }
          }
          .ball {
            width: 50px;
            height: 50px;
            background: url(../../assets/images/ball.svg) no-repeat;
            background-size: cover;
            position: absolute;
            left: 33%;
            top: 9%;
          }
        }
      }
      .right_arrow_box {
        margin-top: 48px;
        padding-left: 20px;
        height: 60px;
        // background: red;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        i {
          display: block;
          width: 60px;
          height: 60px;
          cursor: pointer;
        }
        i.left_arrow {
          background: url(../../assets/images/prev_arrow.svg) no-repeat center
            center;
        }
        i.right_arrow {
          background: url(../../assets/images/next_arrow.svg) no-repeat center
            center;
        }
      }
    }
  }
}
@media only screen and (max-width: 1440px) {
  .second_screen .desc_box .right .right_ele_box .right_ele .ball {
    left: 37%;
    top: 17%;
  }
}
@media only screen and (max-width: 1280px) {
  .second_screen .desc_box .left .ele_box .ele_list .ele_list_desc {
    width: 100%;
    padding-right: 4%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele .people {
    width: 100%;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele .people .index {
    right: 0;
  }
  .second_screen .desc_box .right .right_ele_box .right_ele .ball {
    left: 48%;
    top: 16%;
  }
}

@media only screen and (max-width: 960px) {
  .second_screen .desc_box {
    padding: 0 30px;
  }
}
</style>
