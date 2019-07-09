<template>
  <div class="lang" :class="[isLite ? 'isLite': '']">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="lang_ball"></i>
        {{this.$i18n.locale | langStyle}}
        <i class="el-icon--right lang_down"></i>
      </span>
      <el-dropdown-menu
        :class="'lang_'+isLocal"
        slot="dropdown"
        :visible-arrow="false"
        :divided="true"
      >
        <el-dropdown-item command="en">English</el-dropdown-item>
        <el-dropdown-item command="zh">中文</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import LangStorage from '../../helpers/lang'

export default {
  data() {
    return {
      isLite: this.$router.currentRoute.path == '/lite' ? true : false
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
  methods: {
    handleCommand(command) {
      this.$i18n.locale = command
      LangStorage.setLang(this.$i18n.locale)
      window.location.reload()
    }
  },
  computed: {
    isLocal() {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss" scoped>
.lang {
  outline: none;
  .el-dropdown {
    cursor: pointer;
    .el-dropdown-link {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100px;
      height: 20px;
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
      margin-left: 12px;
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
  top: 70px !important;
  //   left: 1298px !important;
  z-index: 9999999999 !important;
  .el-dropdown-menu__item {
    padding: 16px 25px;
    font-size: 13px;
    line-height: 13px;
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
.lang.isLite {
  .el-dropdown {
    .el-dropdown-link {
      color: rgba(255, 255, 255, 1);
      &:hover {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
.lang.isLite .el-dropdown .lang_ball {
  width: 14px;
  height: 14px;
  background: url(../../assets/images/ball_white.svg) no-repeat center !important;
  background-size: cover !important;
}
.lang.isLite .el-dropdown .lang_down {
  width: 6px;
  height: 4px;
  background: url(../../assets/images/lang_white.svg) no-repeat center !important;
  background-size: cover !important;
}
.el-dropdown-menu.lang_zh {
  font-family: "PingFang SC Bold", "PingFang SC", "Microsoft Yahei",
    Helvetica Neue, Helvetica, Arial, sans-serif;
}

.el-dropdown-menu.lang_en {
  font-family: "Graphik-Regular", "PingFang SC Bold", "PingFang SC",
    "Microsoft Yahei", Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>

