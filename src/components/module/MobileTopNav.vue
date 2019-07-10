<template>
  <div>
    <div class="mobile_Top_nav" ref="mobile_Top_nav">
      <div class="top_title">
        <img src="../../assets/images/logo.svg" alt @click="toIndex()" />
        <div class="show_nav" ref="show_nav" @click="showNav">
          <i></i>
          <i></i>
        </div>
      </div>
      <div class="top_nav_box" id="top_nav_box">
        <MobileNav class="mobile_footer_nav" :navData="navData" :isShowLang="isShowLang" />
      </div>
    </div>
  </div>
</template>

<script>
import MobileNav from './MobileNav.vue'
import $ from "jquery"

export default {
  data() {
    return {
      isShow: false,
      navData: [
        {
          title: 'Protocols',
          navList: [
            {
              name: 'Ontology DID',
              url: 'https://ontid.readme.io/docs/ontology-did-protocol'
            },
            {
              name: 'Verifiable Claims',
              url: 'https://ontid.readme.io/docs/verifiable-claim-protocol'
            }
          ]
        },
        {
          title: 'Products',
          navList: [
            {
              name: 'ONT Pass',
              url: 'https://developer.ont.io/ontpass/introduction'
            },
            {
              name: 'ONTO',
              url: 'https://onto.app/'
            },
            {
              name: 'ONT ID Lite',
              url: '/#/lite'
            }
          ]
        },
        {
          title: 'Developers',
          navList: [
            {
              name: 'Documentation Center',
              url: 'https://ontid.readme.io/'
            }
          ]
        }
      ],
      isShowLang: false
    }
  },
  methods: {
    showNav() {
      if (this.isShow) {
        $('#app').removeClass('ohapp')
        this.$refs.show_nav.classList.remove('isactive')
        this.$refs.mobile_Top_nav.classList.remove('isheight')
        this.isShow = false
        $('#top_nav_box').slideUp()
      } else {
        $('#app').addClass('ohapp')
        this.$refs.show_nav.classList.add('isactive')
        this.$refs.mobile_Top_nav.classList.add('isheight')
        this.isShow = true
        $('#top_nav_box').slideDown()
      }
    },
    toIndex() {
      this.$router.push({ path: '/' })
    }
  },
  components: {
    MobileNav
  }
}
</script>

<style lang="less" scoped>
.mobile_Top_nav {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 0;
  transition: background-color 0.2s;
  .top_title {
    padding: 27px 20px;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    img {
      display: block;
      height: 15px;
      cursor: pointer;
    }
    padding-right: 27px;
  }
  .show_nav {
    width: 15px;
    height: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    i {
      display: block;
      width: 15px;
      height: 2px;
      border-radius: 1px;
      background: #000;
      transition: all 0.3s ease-in-out;
    }
  }
  .show_nav.isactive {
    i:nth-of-type(1) {
      transform: translateY(5px) rotate(45deg);
    }
    i:nth-of-type(2) {
      transform: translateY(-2px) rotate(-45deg);
    }
  }
  .top_nav_box {
    background: #fff;
    display: none;
    padding-bottom: 20px;
  }
}
.mobile_Top_nav.isheight {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

</style>
