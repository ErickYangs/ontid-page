<template>
  <div class="mobile_nav">
    <el-collapse accordion>
      <el-collapse-item v-for="(item, index) in navData" :key="index">
        <template slot="title">{{item.title}}</template>
        <div class="nav_item" v-for="(ele, idx) in item.navList" :key="idx">
          <a :href="ele.url">{{ele.name}}</a>
        </div>
      </el-collapse-item>
      <el-collapse-item v-if="isShowLang">
        <template slot="title">{{this.$i18n.locale | langStyle}}</template>
        <div class="nav_item">
          <a href @click.prevent="changeLang('zh')">中文</a>
        </div>
        <div class="nav_item">
          <a href @click.prevent="changeLang('en')">English</a>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import LangStorage from '../../helpers/lang'

export default {
  data() {
    return {
    }
  },
  props: ['navData', 'isShowLang'],
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
      LangStorage.setLang(this.$i18n.locale)
      window.location.reload()
    }
  },
  filters: {
    langStyle: function (value) {
      if (value === 'en') {
        return 'English'
      } else {
        return '中文'
      }
    }
  },
}
</script>

<style lang="less" scoped>
.mobile_nav {
  padding: 0 20px;
  .nav_item {
    a {
      display: block;
      line-height: 16px;
      padding-bottom: 24px;
      color: rgba(0, 0, 0, 0.6);
      font-size: 13px;
      transition: all 0.5s ease;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .el-collapse {
    border-top: none;
  }
  /deep/ .el-collapse-item__header {
    font-size: 14px;
    color: #000 !important;
    font-family: Graphik-Medium;
    height: 56px;
    line-height: 56px;
    border-bottom-color: #0000000f ;
    .el-icon-arrow-right:before {
      content: url(../../assets/images/open.svg);
      color: #000;
      font-weight: bolder;
    }
    .el-collapse-item__arrow.is-active {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  /deep/ .el-collapse-item__header.is-active {
    border-bottom-color: transparent !important;
  }
  /deep/ .el-collapse-item {
    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }
  /deep/ .el-collapse-item:nth-last-of-type(1) {
    .el-collapse-item__header {
      border-bottom: none;
    }
    .el-collapse-item__wrap {
      border-bottom: none;
    }
  }
}
</style>
