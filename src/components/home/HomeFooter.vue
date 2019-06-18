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
            <a href target="_blank" class="hover1">Tutorials</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Documentation</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Bounty</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">SmartX</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Github</a>
          </div>
        </div>
        <div class="ele_list">
          <div class="footer_main_title">Cooperation</div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Cooperate with Ontology</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Nodes</a>
          </div>
        </div>
        <div class="ele_list">
          <div class="footer_main_title">About</div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Press</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Tech News</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Team</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">About Ontology</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">White Paper</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Explore</a>
          </div>
        </div>
        <div class="ele_list">
          <div class="footer_main_title">DApps</div>
          <div class="link_item">
            <a href target="_blank" class="hover1">DApps List</a>
          </div>
          <div class="link_item">
            <a href target="_blank" class="hover1">Submit a DApp</a>
          </div>
        </div>
      </div>
      <div class="share_link">
        <!-- <a href target="_blank"></a> -->
        <a href target="_blank" class="hover1"></a>
        <a href target="_blank" class="hover1"></a>
        <a href target="_blank" class="hover1"></a>
        <a href target="_blank" class="hover1"></a>
        <a href target="_blank" class="hover1"></a>
        <a href target="_blank" class="hover1"></a>
      </div>
      <div class="copyright">&#169; 2019 ontid.com. All rights reserved</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.home_footer {
  width: 100%;
  padding: 60px 0 40px;
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
          font-family: FuturaLT-Heavy;
          font-weight: 800;
          color: rgba(0, 0, 0, 1);
          line-height: 21px;
          margin-bottom: 20px;
        }
        .link_item {
          a {
            font-size: 13px;
            font-family: FuturaLT;
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
      max-width: 305px;
      margin: 0 auto;
      padding: 50px 0 40px;
      display: flex;
      justify-content: space-between;
      a {
        display: block;
        width: 20px;
        height: 16px;
        // background: red;
        &:hover {
          opacity: 0.5;
        }
      }
      // a:nth-of-type(1) {
      //   background: url(../../assets/images/f-1.svg) no-repeat;
      // }
      a:nth-of-type(1) {
        background: url(../../assets/images/f-2.svg) no-repeat;
      }
      a:nth-of-type(2) {
        background: url(../../assets/images/f-3.svg) no-repeat;
      }
      a:nth-of-type(3) {
        background: url(../../assets/images/f-4.svg) no-repeat;
      }
      a:nth-of-type(4) {
        background: url(../../assets/images/f-5.svg) no-repeat;
      }
      a:nth-of-type(5) {
        background: url(../../assets/images/f-6.svg) no-repeat;
      }
      a:nth-of-type(6) {
        background: url(../../assets/images/f-7.svg) no-repeat;
      }
    }
    .copyright {
      width: 100%;
      text-align: center;
      font-size: 12px;
      font-family: FuturaLT;
      color: rgba(0, 0, 0, 0.3);
      line-height: 18px;
    }
  }
}
@media only screen and (max-width: 960px) {
  .home_footer {
    width: 960px;
    // padding-left: 20px;
    // padding-right: 20px;
  }
  .footer_box {
     padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
