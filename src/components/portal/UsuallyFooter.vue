<template>
  <div class="usually_footer">
    <h3 class="usually_footer_copyright">&#169; 2019 ontid.com. All rights reserved</h3>
    <div class="usually_footer_statement">
      <span>About ONT ID Lite</span>
      <i></i>
      <span>Parivacy Policy</span>
      <i></i>
      <span>User Agreement</span>
      <i></i>
      <span>Cookie Policy</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.usually_footer {
  // margin-top: 360px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  .usually_footer_copyright {
    margin-left: 100px;
    font-size: 14px;
    // font-family: FuturaLT;
    color: rgba(0, 0, 0, 0.8);
    line-height: 18px;
  }
  .usually_footer_statement {
    width: 480px;
    display: flex;
    justify-content: space-between;
    margin-right: 50px;
    span {
      font-size: 14px;
      // font-family: FuturaLT;
      color: rgba(0, 0, 0, 0.7);
      line-height: 18px;
      cursor: pointer;
      transition: all .5s;
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
    i {
      display: block;
      width: 2px;
      height: 16px;
      background: rgba(242,242,242,1);
    }
  }
}
</style>
