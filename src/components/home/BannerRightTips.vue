<template>
  <div class="banner_right_tips">
    <div class="item">
      <div class="item_title">
        Protocols
        <i></i>
      </div>
      <div class="item_link hover1">Ontology DID</div>
      <div class="item_link hover1">Verifiable Claims</div>
    </div>
    <div class="item">
      <div class="item_title">
        Protocols
        <i></i>
      </div>
      <div class="item_link hover1">ONT Sourcing</div>
      <div class="item_link hover1">ONT Pass</div>
      <div class="item_link hover1">ONTO</div>
      <div class="item_link hover1" @click="$router.push({ path:'/lite'})">ONT ID Lite</div>
    </div>
    <div class="item">
      <div class="item_title">
        Developers
        <i></i>
      </div>
      <div class="item_link hover1">Documentation Center</div>
      <div class="item_link hover1" @click="toIntegrat()">Integration Portal</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toIntegrat() {
      this.$router.push({ name: 'register' })
    }
  },
}
</script>

<style scoped lang="scss">
.banner_right_tips {
  width: 200px;
  position: absolute;
  right: 0;
  top: 14%;
}
.banner_right_tips .item {
  width: 200px;
  padding-bottom: 30px;
}

.banner_right_tips .item .item_title,
.banner_right_tips .item .item_link {
  padding-right: 50px;
  text-align: right;
}

.banner_right_tips .item .item_title {
  font-size: 14px;
  font-family: FuturaLT-Heavy;
  font-weight: 800;
  color: rgba(0, 0, 0, 1);
  line-height: 21px;
  margin-bottom: 12px;
  position: relative;
}
.banner_right_tips .item .item_title i {
  position: absolute;
  display: block;
  width: 18px;
  height: 2px;
  background: #000;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.banner_right_tips .item .item_link {
  font-size: 13px;
  font-family: FuturaLT;
  color: rgba(0, 0, 0, 0.3);
  line-height: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
}
</style>
