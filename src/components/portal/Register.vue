<template>
  <div class="register">
    <div
      class="register_tip"
    >Let's get started integrating ONT ID & ONTO abilities to your apps or websites.</div>

    <div class="register_layout">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <div class="ft_box">
          <!-- Mobile Phone -->
          <div class="left">
            <div class="register_form_class_title">Mobile Phone</div>
            <el-form-item label prop="phoneNum">
              <el-input placeholder="Enter your mobile phone" v-model="ruleForm.phoneNum"></el-input>
            </el-form-item>
          </div>
          <div class="right">
            <!-- ONT ID -->
            <div class="register_form_class_title">ONT ID</div>
            <el-form-item label prop="ontid">
              <el-input placeholder="Enter your ONT ID" v-model="ruleForm.ontid"></el-input>
            </el-form-item>
          </div>
        </div>
        <!-- Application Name -->
        <div class="register_form_class_title">Application Name</div>
        <el-form-item label prop="appName">
          <el-input placeholder="Enter your app name" v-model="ruleForm.appName"></el-input>
        </el-form-item>

        <!-- Callback URL -->
        <div class="register_form_class_title">Callback URL</div>
        <el-form-item label prop="callbackUrl">
          <el-input
            placeholder="https://www.yoursite.com/receive_callback"
            v-model="ruleForm.callbackUrl"
          ></el-input>
        </el-form-item>

        <!-- iOS Application -->
        <div class="register_form_class_title">iOS Application</div>
        <el-form-item label prop="iosApp">
          <el-input placeholder="com.domain.application" v-model="ruleForm.iosApp"></el-input>
        </el-form-item>

        <!-- Android Application -->
        <div class="register_form_class_title">Android Application</div>
        <el-form-item label prop="androidApp">
          <el-input placeholder="com.domain.application" v-model="ruleForm.androidApp"></el-input>
        </el-form-item>

        <!-- Logo Upload -->
        <div class="register_form_class_title">Logo Upload</div>
        <el-form-item label prop="logoUpload">
          <el-input
            placeholder="This logo will be used in the apps to identity who you are"
            v-model="ruleForm.logoUpload"
          ></el-input>
        </el-form-item>

        <!-- file upload -->
        <div class="upload_box">
          <div class="left_layout">
            <el-form-item>
              <el-upload class="upload-demo" drag action>
                <div class="el-upload__text">
                  <p>Drag and drop image file here or</p>
                  <span>Broswer</span>
                </div>
              </el-upload>
            </el-form-item>
          </div>
          <div class="right_tips">
            <p>
              Image Requirements
            </p>
            <p>
              Filetype:PNG or JPG
            </p>
            <p>
              Minimum Height:150px
            </p>
            <p>
              Maximum File Size:1MB
            </p>
          </div>
        </div>

        <el-form-item>
          <span @click="submitForm('ruleForm')" class="register_form_sub_btn">Create Application</span>
        </el-form-item>

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
        phoneNum: '',
        ontid: 'did:ont:aAYGIUGdsgxcvasf978jhsjfjkIUGdsg',
        appName: '',
        callbackUrl: '',
        iosApp: '',
        androidApp: '',
        logoUpload: '',
      },
      rules: {
        phoneNum: [
          { required: true, message: 'please enter your mobile phone', trigger: 'blur' },
        ],
        ontid: [
          { required: true, message: 'please enter your ONT ID', trigger: 'blur' }
        ],
        appName: [
          { required: true, message: 'please enter your app name', trigger: 'blur' }
        ],
        callbackUrl: [
          { required: true, message: 'please enter Callback URL', trigger: 'blur' }
        ],
        iosApp: [
          { required: true, message: 'please enter iOS Application', trigger: 'blur' }
        ],
        androidApp: [
          { required: true, message: 'please enter Android Application', trigger: 'blur' }
        ],
        logoUpload: [
          { required: true, message: 'please enter Logo Upload', trigger: 'blur' }
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
.register {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 200px;
  .register_tip {
    padding-top: 20px;
    text-align: center;
    // height: 25px;
    font-size: 18px;
    // font-family: FuturaLT;
    color: rgba(0, 0, 0, .5);
    line-height: 26px;
  }
  .register_layout {
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
    .register_form_class_title {
      font-size: 14px;
      // font-family: FuturaLT;
      color: rgba(0, 0, 0, 1);
      line-height: 20px;
      margin-bottom: 10px;
    }

    /deep/ .el-input__inner {
      color: #000;
      border: none;
      border-bottom: 1px solid #fafafa;
      caret-color: #000;
      border-radius: 0;
      padding-left: 0;
      font-size: 18px;
      // font-family: FuturaLT;
      color: rgba(0, 0, 0, 1);
      line-height: 25px;
      transition: border-color 1s;
      padding-right: 5px;
      &:focus {
        border-bottom: 2px solid #000;
      }
      &::-webkit-input-placeholder {
        font-size: 18px;
        // font-family: FuturaLT;
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

    .register_form_sub_btn {
      display: block;
      text-align: center;
      margin-top: 50px;
      width: 100%;
      border: none;
      line-height: 58px;
      background: rgba(0, 105, 224, 1);
      border-radius: 5px;
      font-size: 20px;
      font-family: Graphik-Medium;
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
          .el-upload-dragger  {
            width: 100%;
            padding: 30px 35px;
            transition: border-color 1s;
            &:hover {
              border-color: #000;
            }
            .el-upload__text {
              p {
                width: 100%;
                line-height: 20px;
                font-size: 15px;
                // font-family: FuturaLT;
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
                // font-family: FuturaLT;
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
          // font-family: FuturaLT;
          color: rgba(0, 0, 0, .8)
        }
      }
    }
  }
}
input:focus {
  outline: none !important;
  border: none;
}
</style>
