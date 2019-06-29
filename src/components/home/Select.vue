<template>
  <div class="selectWrap" :class="[isLite ? 'isLite': '']">
    <div class="select-wrapper">
      <div class="select" @mouseover="triggerOption">
        <div class="select-content">{{selectContent.text}}</div>
        <div class="triangle-wrapper">
          <div id="triangle-down"></div>
        </div>
        <div class="triangle-ball"></div>
      </div>
      <div class="option-wrapper" @mouseleave="leaveHide" style="display: none;">
      <!-- <div class="option-wrapper" @mouseleave="leaveHide"> -->
        <div
          class="option-item"
          v-for="(item,index) in subject"
          :key="index"
          @mouseout="out($event)"
          @mouseover="move($event)"
          @click="choose(item)"
        >{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import LangStorage from '../../helpers/lang'
import $ from "jquery"

export default {
  props: {
    selectWidth: {
      type: Number,
      default: 76,
    },
    subject: {
      type: Array,
      default: function () {
        return [
          { value: 'en', text: "English" },
          { value: 'zh', text: "中文" },
        ]
      }
    },
    selectContent: {
      type: Object,
      default: function () {
        let localLang = localStorage.getItem('user_lang')
        if (localLang === 'zh') {
          return { value: 'zh', text: "中文" }
        } else {
          return { value: 'en', text: "English" }
        }
      }
    },
  },
  mounted() {
    document.querySelector(".selectWrap").style.width = this.selectWidth + "px";
  },
  computed: {
    optionWrapper() {
      return document.querySelector(".option-wrapper");
    },
    selectCon() {
      return document.querySelector(".select-content");
    },
    subjectList() {
      return document.getElementsByClassName("option-item");
    },
  },
  methods: {
    move(event) {
      for (var item of this.subjectList) {
        item.classList.remove("hover");
      }
      event.currentTarget.classList.add("hover");
    },
    out(event) {
      event.currentTarget.classList.remove("hover");
    },
    triggerOption() {
      console.log($('.option-wrapper'))
      // if (this.optionWrapper.style.display == "none") {
      //   this.optionWrapper.style.display = "block";
      // } else {
      //   this.optionWrapper.style.display = "none";
      // }
      $('.option-wrapper').slideDown();
      for (var item of this.subjectList) {
        if (item.innerHTML == this.selectContent.text) {
          item.classList.add("hover");
        } else {
          item.classList.remove("hover");
        }
      }
    },
    choose(item, value) {
      this.selectContent.text = item.text;
      this.optionWrapper.style.display = "none";
      this.$emit("changeSelect", this.selectContent.text, this.selectContent.value);
      this.$i18n.locale = item.value
      LangStorage.setLang(this.$i18n.locale)
      window.location.reload()
    },
    leaveHide() {
      this.optionWrapper.style.display = "none";
    }
  },
  data() {
    return {
      isLite: this.$router.currentRoute.path == '/lite' ? true : false
    }
  },
}
</script>
<style>
.select-wrapper {
  position: relative;
}
.select {
  position: relative;
  /* overflow: hidden; */
  padding-right: 10px;
  padding-left: 10px;
  min-width: 70px;
  width: 100%;
  height: 21px;
  line-height: 21px;
  /* border: 1px solid #000; */
  cursor: default;
  font-size: 13px;
}
.select-content {
  text-align: left;
  font-size: 12px;
  /* font-family: FuturaLT-Heavy; */
  font-weight: 800;
  color: rgba(0, 0, 0, 1);
  line-height: 21px;
  cursor: pointer;
}
.triangle-wrapper {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 20px;
  cursor: default;
}
.triangle-ball {
  position: absolute;
  width: 18px;
  height: 18px;
  background: url(../../assets/images/lang_ball.svg) no-repeat center;
  left: -20px;
  top: 0;
  background-size: contain;
}
#triangle-down {
  position: absolute;
  right: 5px;
  top: 40%;
  /* transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 6px solid #000; */
  width: 9px;
  height: 6px;
  background: url(../../assets/images/lang.svg) no-repeat center;
  opacity: 0.3;
}

.select:hover .select-content {
  opacity: 0.5;
}
.select:hover #triangle-down {
  opacity: 1;
}
.option-wrapper {
  position: absolute;
  overflow: hidden;
  min-width: 70px;
  /* width: 100%; */
  top: 32px;
  /* border-radius: 5px; */
  background: #fff;
  /* box-shadow: 0 0 10px #ccc; */
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  left: -18px;
}
.option-item {
  min-width: 70px;
  text-align: left;
  cursor: default;
  font-size: 13px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.7);
  line-height: 26px;
  padding: 8px 25px;
}
.option-item:nth-of-type(1) {
  border-bottom: 1px solid #fff;
}
.option-item:nth-of-type(1):hover {
  border-bottom-color: #f2f2f2; 
}
.option-item:hover {
  color: rgba(0, 0, 0, 1);
  background: rgba(242, 242, 242, 1);
}
.hover {
  cursor: pointer;
}
.selectWrap.isLite .select-content {
  color: #fff;
}
.selectWrap.isLite .option-wrapper .option-item {
  /* color: rgba(255, 255, 255, 1); */
}
.selectWrap.isLite #triangle-down {
  background: url(../../assets/images/lang_white.svg) no-repeat center;
}
.selectWrap.isLite .triangle-ball {
  background: url(../../assets/images/ball_white.svg) no-repeat center;
  background-size: contain;
}
</style>