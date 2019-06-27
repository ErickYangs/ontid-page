<template>
  <div class="test">
    <el-button type="primary" plain @click="handerChangeLang('zh')">中文</el-button>
    <el-button type="primary" plain @click="handerChangeLang('en')">English</el-button>
    <h2 class="title">{{$t('footer.1-2')}}</h2>
    <SelectBox/>
  </div>
</template>

<script>
import LangStorage from '../../helpers/lang'
import SelectBox from '@/components/home/Select.vue'
export default {
  methods: {
    handerChangeLang(val) {
      this.$i18n.locale = val
      LangStorage.setLang(this.$i18n.locale)
    }
  },
  components: {
      SelectBox
  }
}
</script>

<style scoped lang='less'>
.test {
  .title {
    font-size: 30px;
    line-height: 50px;
  }
}
</style>
