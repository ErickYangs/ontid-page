<template>
  <div class="appdetail">
    <div class="appdetail_img">
      <img src="" alt="">
    </div>
    <div class="appdetail_tip">App Name</div>

    <div class="appdetail_layout">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <div class="ft_box">
          <!-- Mobile Phone -->
          <div class="left">
            <div class="appdetail_form_class_title">Mobile Phone</div>
            <el-form-item label prop="phoneNum">
              <el-input placeholder="Enter your mobile phone" v-model="ruleForm.phoneNum"></el-input>
            </el-form-item>
          </div>
          <div class="right">
            <!-- ONT ID -->
            <div class="appdetail_form_class_title">ONT ID</div>
            <el-form-item label prop="ontid">
              <el-input placeholder="Enter your ONT ID" v-model="ruleForm.ontid"></el-input>
            </el-form-item>
          </div>
        </div>
        <!-- API Srcret -->
        <div class="appdetail_form_class_title">API Srcret</div>
        <div class="api_box">
          <div
            class="api_left_desc"
          >The private API Keys that will be generated for your application will be shown ONE TIME ONLY. Please be ready to copy these private keys to a safe and secret place once you click Generate Keys Now.</div>
          <div class="api_right_get">
            <span>Generate Keys Now</span>
          </div>
        </div>

        <!-- Callback URL -->
        <div class="appdetail_form_class_title">Callback URL</div>
        <el-form-item label prop="callbackUrl">
          <el-input
            placeholder="https://www.yoursite.com/receive_callback"
            v-model="ruleForm.callbackUrl"
          ></el-input>
        </el-form-item>

        <!-- iOS Application -->
        <div class="appdetail_form_class_title">iOS Application</div>
        <el-form-item label prop="iosApp">
          <el-input placeholder="com.domain.application" v-model="ruleForm.iosApp"></el-input>
        </el-form-item>

        <!-- Android Application -->
        <div class="appdetail_form_class_title">Android Application</div>
        <el-form-item label prop="androidApp">
          <el-input placeholder="com.domain.application" v-model="ruleForm.androidApp"></el-input>
        </el-form-item>

        <el-form-item>
          <span @click="submitForm('ruleForm')" class="appdetail_form_sub_btn">Go To Integrate</span>
        </el-form-item>

        <div class="app_edit">
          <span>Edit</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      acd: '',
      ruleForm: {
        phoneNum: '12111112121',
        ontid: 'did:ont:aAYGIUGdsgxcvasf978jhsjfjkIUGdsg',
        apiSrcret: '',
        callbackUrl: '',
        iosApp: '',
        androidApp: '',
      },
      rules: {
        phoneNum: [
          { required: true, message: 'please enter your mobile phone', trigger: 'blur' },
        ],
        ontid: [
          { required: true, message: 'please enter your ONT ID', trigger: 'blur' }
        ],
        callbackUrl: [
          { required: true, message: 'please enter Callback URL', trigger: 'blur' }
        ],
        iosApp: [
          { required: true, message: 'please enter iOS Application', trigger: 'blur' }
        ],
        androidApp: [
          { required: true, message: 'please enter Android Application', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.appdetail {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 200px;
  .appdetail_img {
    width: 120px;
    height: 120px;
    margin: 80px auto;
    margin-bottom: 12px;
    background: tomato;
    // animation: rotate360 .8s linear infinite;
    // border-radius: 30%;
  }
  .appdetail_tip {
    text-align: center;
    font-weight: 800;
    font-size: 20px;
    font-family: FuturaLT-Heavy;
    color: rgba(0, 0, 0, 1);
    line-height: 27px;
  }
  .appdetail_layout {
    padding-top: 80px;
    overflow: hidden;
    max-width: 570px;
    width: 100%;
    margin: 0 auto;
    .ft_box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .left {
        width: 35%;
      }
      .right {
        width: 63%;
      }
      .right {
        margin-left: 2%;
      }
    }

    .api_box {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-bottom: 50px;
      .api_left_desc {
        width: 50%;
        font-size: 16px;
        font-family: FuturaLT;
        color: rgba(226, 0, 0, 1);
        line-height: 20px;
      }
      .api_right_get {
        width: 50%;
        padding-left: 40px;
        display: flex;
        align-items:center;
        span {
          display: block;
          width: 100%;
          height: 58px;
          line-height: 58px;
          font-size: 16px;
          font-family: FuturaLT-Heavy;
          font-weight: 800;
          color: rgba(255, 255, 255, 1);
          background: #000;
          text-align: center;
          border-radius: 4px;
          cursor: pointer;
          transition: all .5s;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    .appdetail_form_class_title {
      font-size: 14px;
      font-family: FuturaLT;
      color: rgba(0, 0, 0, 1);
      line-height: 20px;
      margin-bottom: 16px;
    }

    /deep/ .el-input__inner {
      color: #000;
      border: none;
      border-bottom: 1px solid #fafafa;
      caret-color: #000;
      border-radius: 0;
      padding-left: 0;
      font-size: 18px;
      font-family: FuturaLT;
      color: rgba(0, 0, 0, 1);
      line-height: 25px;
      transition: border-color 1s;
      &:focus {
        border-bottom: 2px solid #000;
      }
      &::-webkit-input-placeholder {
        font-size: 18px;
        font-family: FuturaLT;
        line-height: 25px;
        color: rgba(0, 0, 0, .12)
      }
    }
    /deep/ .el-form {
      .el-form-item__content {
        margin-left: 0 !important;
      }
      .el-form-item__error {
        padding-top: 8px;
      }
      .el-form-item {
        margin-bottom: 60px;
      }
    }

    .appdetail_form_sub_btn {
      display: block;
      text-align: center;
      margin-top: 20px;
      width: 100%;
      border: none;
      line-height: 58px;
      background: rgba(0, 105, 224, 1);
      border-radius: 5px;
      font-size: 20px;
      font-family: FuturaLT-Heavy;
      font-weight: 800;
      color: #fff;
      cursor: pointer;
      transition: all .5s;
      &:hover {
        opacity: 0.7;
      }
    }

    .upload_box {
      display: flex;
      justify-content: flex-start;

      .left_layout {
        width: 180px;
        height: 180px;
        /deep/ .el-upload {
          .el-upload-dragger {
            width: 100%;
            padding: 30px 35px;
            .el-upload__text {
              p {
                width: 100%;
                line-height: 20px;
                font-size: 15px;
                font-family: FuturaLT;
              }
              span {
                display: block;
                width: 100%;
                line-height: 33px;
                font-size: 15px;
                background: #000;
                border: none;
                border-radius: 2px;
                color: #fff;
                font-family: FuturaLT;
                margin-top: 22px;
              }
            }
          }
        }
      }

      .right_tips {
        width: 180px;
        margin-left: 50px;
        padding-top: 35px;
        p {
          line-height: 20px;
          margin-bottom: 10px;
          font-size: 16px;
          font-family: FuturaLT;
          color: rgba(0, 0, 0, 0.8);
        }
      }
    }

    .app_edit {
      text-align: center;
      font-size: 20px;
      font-family: FuturaLT-Heavy;
      font-weight: 800;
      color: rgba(0, 0, 0, 1);
      span {
        cursor: pointer;
        transition: all .5s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
input:focus {
  outline: none !important;
  border: none;
}

@keyframes rotate360 {
  0%{-webkit-transform:rotate(0deg);}
  100%{-webkit-transform:rotate(360deg);}
}
</style>
