import Vue from 'vue'
import Vuex from 'vuex'
import LangStorage from "./helpers/lang";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: LangStorage.getLang("en")
  },
  mutations: {
    UPDATE_HOME_LANG(state, payload) {
      state.lang = payload.lang;
    }
  },
  actions: {

  }
})
