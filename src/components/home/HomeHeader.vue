<template>
  <div class="top_header">
    <div class="left_logo" @click="toIndex()"></div>
    <div class="right">
      <SelectBox/>
    </div>
  </div>
</template>

<script>
import SelectBox from '@/components/home/Select.vue'
export default {
  components: {
    SelectBox
  },
  methods: {
    toIndex() {
      this.$router.push({path: '/'})
    }
  },
}
</script>

<style lang="scss" scoped>
.top_header {
  padding-top: 40px;
  height: 61px;
  .left_logo {
    width: 90px;
    height: 20px;
    background: url(../../assets/images/logo.svg) no-repeat;
    background-size: contain;
    float: left;
    margin-left: 100px;
    cursor: pointer;
  }
  .right {
    float: right;
    // margin-top: 40px;
    margin-right: 50px;
  }
}
</style>
