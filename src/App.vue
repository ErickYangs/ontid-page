<template>
  <div id="app" :class="'lang_'+isLocal">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
}
// #app.ohapp {
//   overflow: hidden;
//   height: 100vh;
// }
</style>
<script>
export default {
  computed: {
    isLocal() {
      return this.$i18n.locale
    }
  },
  methods: {
    BacksrcollTop() {
      window.scrollTo(0,0);
    }
  },
  mounted() {
    window.addEventListener("beforeunload", this.BacksrcollTop);
  },
}
</script>
