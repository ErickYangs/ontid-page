<template>
  <div id="app" :class="'lang_'+isLocal">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
}
</style>
<script>
export default {
  computed: {
    isLocal() {
      // console.log(this.$store.state.lang)
      return this.$store.state.lang
    }
  }
}
</script>
