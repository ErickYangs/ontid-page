<template>
  <div class="banner_right_tips" :class="[isLite ? 'lite_white': 'home_black']">
    <div class="item">
      <div class="item_title">
        Protocols
        <i></i>
      </div>
      <div class="item_link hover1" @click="openNewPage('https://ontid.readme.io/docs/ontology-did-protocol')">Ontology DID</div>
      <div class="item_link hover1" @click="openNewPage('https://ontid.readme.io/docs/verifiable-claim-protocol')">Verifiable Claims</div>
    </div>
    <div class="item">
      <div class="item_title">
        Products
        <i></i>
      </div>
      <!-- <div class="item_link hover1">ONT Sourcing</div> -->
      <div class="item_link hover1" @click="openNewPage('https://developer.ont.io/ontpass/introduction')">ONT Pass</div>
      <div class="item_link hover1" @click="openNewPage('https://onto.app/')">ONTO</div>
      <div class="item_link hover1" @click="$router.push({ path:'/lite'})">ONT ID Lite</div>
    </div>
    <div class="item">
      <div class="item_title">
        Developers
        <i></i>
      </div>
      <div class="item_link hover1" @click="openNewPage('https://ontid.readme.io/')">Documentation Center</div>
      <!-- <div class="item_link hover1" @click="toIntegrat()">Integration Portal</div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toIntegrat() {
      this.$router.push({ name: 'register' })
    },
    openNewPage(url) {
      window.open(url)
    }
  },
  data() {
    return {
      isLite: this.$router.currentRoute.path == '/lite' ? true : false
    }
  }
}
</script>

<style scoped lang="scss">
.banner_right_tips {
  width: 200px;
  position: absolute;
  right: 0;
  top: 5%;
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
#app.lang_en .banner_right_tips .item .item_title {
  font-family: Graphik-Medium;
}
.banner_right_tips .item .item_title {
  font-size: 14px;
  // font-family: Graphik-Medium;
  font-weight: 800;
  // color: rgba(0, 0, 0, 1);
  line-height: 21px;
  margin-bottom: 12px;
  position: relative;
}
.banner_right_tips .item .item_title i {
  position: absolute;
  display: block;
  width: 18px;
  height: 2px;
  // background: #000;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.banner_right_tips .item .item_link {
  font-size: 13px;
  // font-family: FuturaLT;
  // color: rgba(0, 0, 0, 0.3);
  line-height: 18px;
  margin-bottom: 10px;
  cursor: pointer;
  // &:hover {
  //   color: rgba(0, 0, 0, 1);
  // }
}
.banner_right_tips.home_black .item .item_title {
  color: rgba(0, 0, 0, 1);
}
.banner_right_tips.home_black .item .item_title i {
  background: #000;
}
.banner_right_tips.home_black .item .item_link {
  color: rgba(0, 0, 0, 0.3);
  &:hover {
    color: rgba(0, 0, 0, 1);
  }
}

.banner_right_tips.lite_white .item .item_title {
  color: rgba(255, 255, 255, 1);
}
.banner_right_tips.lite_white .item .item_title i {
  background: #fff;
}
.banner_right_tips.lite_white .item .item_link {
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
}
@media only screen and (max-width: 1680px) {
  .banner_right_tips {
    top: 4%;
  }
}
</style>
