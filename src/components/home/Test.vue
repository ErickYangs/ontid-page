<template>
  <div class="lang">
    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="lang_ball"></i>
        English
        <i class="el-icon--right lang_down"></i>
      </span>
      <el-dropdown-menu slot="dropdown" :visible-arrow="false" :divided='true'>
        <el-dropdown-item >English</el-dropdown-item>
        <el-dropdown-item >中文</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.lang {
  // max-width: 400px;
  // margin: 0 auto;
  outline: none;
  .el-dropdown {
    cursor: pointer;
    .el-dropdown-link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 40px;
      outline: none;
      color: rgba(0, 0, 0, 1);
      transition: all 0.5s;
      &:hover {
        color: rgba(0, 0, 0, 0.6);
        .lang_down {
          opacity: 1;
        }
      }
    }
    .lang_down {
      width: 6px;
      height: 4px;
      margin-bottom: 2px;
      background: url(../../assets/images/lang.svg) no-repeat center;
      background-size: contain;
      opacity: 0.3;
      margin-top: 6px;
      transition: all 0.5s;
    }
    .lang_ball {
      width: 14px;
      height: 14px;
      background: url(../../assets/images/lang_ball.svg) no-repeat center;
      background-size: contain;
      display: inline-block;
      margin-right: 10px;
    }
  }
}
.el-dropdown-menu {
  padding: 0;
  margin: 0;
  .el-dropdown-menu__item {
    padding: 16px 25px;
    font-size: 14px;
    line-height: 14px;
    color: #000;
    opacity: 0.6;
    outline: none;
    transition: all 0.5s;
    &:hover {
      background-color: rgba(242, 242, 242, 1);
      opacity: 1;
      color: #000;
    }
  }
  
}
.el-dropdown-menu .el-dropdown-menu__item:nth-of-type(1) {
  border-bottom: 1px solid rgba(242, 242, 242, 1);
}
.el-popper[x-placement^="bottom"] {
  margin: 0;
}
</style>

