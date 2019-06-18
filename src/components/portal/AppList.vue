<template>
  <div class="applist">
    <div class="applist_title">Your Applications Using ONT ID or ONTO</div>
    <div class="applist_layout">
      <div class="applist_ele">
        <div class="layout">
          <div class="applist_ele_top_img">
            <img src alt>
          </div>
          <div class="applist_ele_name">App Name</div>
        </div>
      </div>
      <div class="applist_ele">
        <div class="applist_add_box">
          <span></span>
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
.applist {
  width: 100%;
  min-height: 100%;
  max-width: 750px;
  margin: 0 auto;
  // padding-top: 40px;
  .applist_title {
    text-align: center;
    padding-top: 20px;
    text-align: center;
    font-size: 18px;
    font-family: FuturaLT;
    color: rgba(0, 0, 0, 0.5);
    line-height: 26px;
    margin-bottom: 75px;
  }
  .applist_layout {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .applist_ele {
      width: 120px;
      margin-right: 30px;
      margin-bottom: 30px;
      .layout {
        cursor: pointer;
      }
      .applist_ele_top_img {
        width: 100%;
        height: 120px;
        background: tomato;
        border-radius: 4px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .applist_ele_name {
        width: 100%;
        margin-top: 30px;
        font-size: 20px;
        font-family: FuturaLT-Heavy;
        font-weight: 800;
        color: rgba(0, 0, 0, 1);
        line-height: 27px;
        text-align: center;
      }
      .applist_add_box {
        width: 100%;
        height: 120px;
        border: 1px dashed #ccc;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span {
          display: block;
          width: 28px;
          height: 28px;
          background: url(../../assets/images/app_add.png) no-repeat;
          background-size: contain;
        }
      }
    }
  }
}
</style>
