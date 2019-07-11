<template>
  <div class="home_footer">
    <div class="footer_box home_contanier">
      <div class="link_box">
        <div class="ele_list">
          <div class="logo"></div>
        </div>
        <div class="ele_list">
          <div class="footer_main_title">Developer Center</div>
          <div class="link_item">
            <a
              href="https://ontio.github.io/documentation/wp_download_en.html"
              target="_blank"
              class="hover1"
            >Documentation</a>
          </div>
          <div class="link_item">
            <a href="https://github.com/ontio-ontid" target="_blank" class="hover1">Github</a>
          </div>
        </div>
        <div class="ele_list">
          <div class="footer_main_title">Cooperation</div>
          <div class="link_item">
            <a
              href="https://ont.io/contactUs"
              target="_blank"
              class="hover1"
            >Cooperate with Ontology</a>
          </div>
          <div class="link_item">
            <a
              href="https://info.ont.io/trust-anchor/en"
              target="_blank"
              class="hover1"
            >Trust Anchor</a>
          </div>
        </div>
        <div class="ele_list">
          <div class="footer_main_title">Wallets</div>
          <div class="link_item">
            <a href="https://onto.app/" target="_blank" class="hover1">ONTO</a>
          </div>
          <div class="link_item">
            <a href="https://github.com/ontio/owallet" target="_blank" class="hover1">OWallet</a>
          </div>
        </div>
        <div class="ele_list">
          <div class="footer_main_title">DApps</div>
          <div class="link_item">
            <a href="https://dapp.ont.io/" target="_blank" class="hover1">DApps List</a>
          </div>
          <div class="link_item">
            <a href="https://ont.io/dapp" target="_blank" class="hover1">Submit a DApp</a>
          </div>
        </div>
      </div>
      <MobileNav class="mobile_footer_nav" :navData="navData" :isShowLang="isShowLang" />
      <div class="share_link">
        <a href="https://discordapp.com/invite/4TQujHj" target="_blank" class="hover1"></a>
        <a href="https://twitter.com/OntologyNetwork" target="_blank" class="hover1"></a>
        <a
          href="https://www.facebook.com/Ontology-Network-468098413590227/"
          target="_blank"
          class="hover1"
        ></a>
        <a href="https://medium.com/ontologynetwork" target="_blank" class="hover1"></a>
        <a href="https://old.reddit.com/r/OntologyNetwork/" target="_blank" class="hover1"></a>
        <a href="https://github.com/ontio" target="_blank" class="hover1"></a>
        <a href="https://t.me/OntologyNetwork" target="_blank" class="hover1"></a>
        <a
          href="https://www.youtube.com/channel/UCXzLZJgDglAWRU0b2GOa7pA"
          target="_blank"
          class="hover1"
        ></a>
        <a
          href="https://www.linkedin.com/company/ontology-network-official/"
          target="_blank"
          class="hover1"
        ></a>
      </div>
      <div class="mobile_footer">
        <div class="first_line">
          <a href="https://discordapp.com/invite/4TQujHj" target="_blank" class="hover1"></a>
          <a href="https://twitter.com/OntologyNetwork" target="_blank" class="hover1"></a>
          <a
            href="https://www.facebook.com/Ontology-Network-468098413590227/"
            target="_blank"
            class="hover1"
          ></a>
          <a href="https://medium.com/ontologynetwork" target="_blank" class="hover1"></a>
          <a href="https://old.reddit.com/r/OntologyNetwork/" target="_blank" class="hover1"></a>
          <a href="https://github.com/ontio" target="_blank" class="hover1"></a>
        </div>
        <div class="second_line">
          <a href="https://t.me/OntologyNetwork" target="_blank" class="hover1"></a>
          <a
            href="https://www.youtube.com/channel/UCXzLZJgDglAWRU0b2GOa7pA"
            target="_blank"
            class="hover1"
          ></a>
          <a
            href="https://www.linkedin.com/company/ontology-network-official/"
            target="_blank"
            class="hover1"
          ></a>
        </div>
      </div>
      <div class="copyright">&#169; 2019 ontid.com. All rights reserved</div>
    </div>
    <img src="../../assets/images/logo.svg" alt class="mobile_footer_logo" />
  </div>
</template>

<script>
import MobileNav from '../module/MobileNav.vue'

export default {
  methods: {
    openNewPage(url) {
      window.open(url)
    }
  },
  components: {
    MobileNav
  },
  data() {
    return {
      navData: [
        {
          title: 'Developer Center',
          navList: [
            {
              name: 'Documentation',
              url: 'https://ontio.github.io/documentation/wp_download_en.html'
            },
            {
              name: 'Github',
              url: 'https://github.com/ontio-ontid'
            }
          ]
        },
        {
          title: 'Cooperation',
          navList: [
            {
              name: 'Cooperate with Ontology',
              url: 'https://ont.io/contactUs'
            },
            {
              name: 'Trust Anchor',
              url: 'https://info.ont.io/trust-anchor/en'
            }
          ]
        },
        {
          title: 'Wallets',
          navList: [
            {
              name: 'ONTO',
              url: 'https://onto.app/'
            },
            {
              name: 'OWallet',
              url: 'https://github.com/ontio/owallet'
            }
          ]
        },
        {
          title: 'DApps',
          navList: [
            {
              name: 'DApps List',
              url: 'https://dapp.ont.io/'
            },
            {
              name: 'Submit a DApp',
              url: 'https://ont.io/dapp'
            }
          ]
        }
      ],
      isShowLang: false
    }
  },
}
</script>

<style scoped lang="scss">
#app.lang_en .home_footer .footer_box .link_box .ele_list .footer_main_title {
  font-family: Graphik-Medium;
}
.home_footer {
  width: 100%;
  padding: 60px 0 40px;
  background: #fff;
  .footer_box {
    .link_box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-bottom: 60px;
      border-bottom: 1px solid #f2f2f2;
      .ele_list {
        width: 20%;
        text-align: left;
        .logo {
          width: 94px;
          height: 22px;
          background: url(../../assets/images/logo.svg) no-repeat;
          background-size: contain;
        }

        .footer_main_title {
          font-size: 14px;
          font-weight: 800;
          color: rgba(0, 0, 0, 1);
          line-height: 21px;
          margin-bottom: 20px;
        }
        .link_item {
          a {
            font-size: 13px;
            // font-family: FuturaLT;
            color: rgba(0, 0, 0, 0.5);
            line-height: 18px;
            &:hover {
              color: rgba(0, 0, 0, 1);
            }
          }
          margin-bottom: 10px;
        }
      }
    }
    .share_link {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      padding: 50px 0 40px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      a {
        display: block;
        width: 20px;
        height: 16px;
        // background: red;
        &:hover {
          opacity: 0.5;
        }
      }
      a:nth-of-type(1) {
        background: url(../../assets/images/f-1.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(2) {
        background: url(../../assets/images/f-2.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(3) {
        background: url(../../assets/images/f-3.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(4) {
        background: url(../../assets/images/f-4.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(5) {
        background: url(../../assets/images/f-5.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(6) {
        background: url(../../assets/images/f-6.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(7) {
        background: url(../../assets/images/f-7.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(8) {
        background: url(../../assets/images/f-8.svg) no-repeat center;
        background-size: cover;
      }
      a:nth-of-type(9) {
        background: url(../../assets/images/f-9.svg) no-repeat center;
        background-size: cover;
      }
    }
    .mobile_footer {
      width: 100%;
      padding-left: 20px;
      display: none;
      margin-bottom: 34px;
      margin-top: 24px;
      .first_line,
      .second_line {
        display: flex;
        justify-content: flex-start;
      }
      .first_line {
        margin-bottom: 20px;
        a:nth-of-type(1) {
          background: url(../../assets/images/f-1.svg) no-repeat center;
          background-size: cover;
        }
        a:nth-of-type(2) {
          background: url(../../assets/images/f-2.svg) no-repeat center;
          background-size: cover;
        }
        a:nth-of-type(3) {
          background: url(../../assets/images/f-3.svg) no-repeat center;
          background-size: cover;
        }
        a:nth-of-type(4) {
          background: url(../../assets/images/f-4.svg) no-repeat center;
          background-size: cover;
        }
        a:nth-of-type(5) {
          background: url(../../assets/images/f-5.svg) no-repeat center;
          background-size: cover;
        }
        a:nth-of-type(6) {
          background: url(../../assets/images/f-6.svg) no-repeat center;
          background-size: cover;
        }
      }
      .second_line {
        a:nth-of-type(1) {
          background: url(../../assets/images/f-7.svg) no-repeat center;
          background-size: cover;
        }
        a:nth-of-type(2) {
          background: url(../../assets/images/f-8.svg) no-repeat center;
          background-size: cover;
        }
        a:nth-of-type(3) {
          background: url(../../assets/images/f-9.svg) no-repeat center;
          background-size: cover;
        }
      }
      a {
        display: block;
        width: 20px;
        height: 16px;
        background: #000;
        margin-right: 20px;
      }
    }
    .copyright {
      width: 100%;
      text-align: center;
      font-size: 12px;
      // font-family: FuturaLT;
      color: rgba(0, 0, 0, 0.3);
      line-height: 18px;
    }
  }
}
.mobile_footer_nav,
.mobile_footer_logo {
  display: none;
}
@media only screen and (max-width: 960px) {
  .footer_box {
    padding-left: 5px;
    padding-right: 5px;
    .link_box {
      display: none !important;
    }
  }
  .mobile_footer_nav {
    display: block;
  }
}
@media only screen and (max-width: 960px) {
  .home_footer {
    position: relative;
    .mobile_footer_logo {
      height: 15px;
      display: block;
      position: absolute;
      left: 25px;
      top: 30px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .footer_box {
    padding-left: 5px;
    padding-right: 5px;
    .link_box {
      display: none !important;
    }
    .share_link {
      padding: 25px 0 20px 5px !important;
      width: 70% !important;
      margin: initial !important;
    }
  }

  .home_footer .footer_box .share_link {
    display: none;
  }
  .mobile_footer {
    display: block !important;
  }
  .copyright {
    text-align: left !important;
    padding-left: 20px;
  }
  .home_footer .footer_box .copyright {
    padding-bottom: 20px;
  }
}
</style>
