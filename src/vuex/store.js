import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  CurTitle: "NETEAZY",
  IsShow: false
}

const mutations = {
  IS_MENU(state){
    state.IsShow = !state.IsShow
  },
  CLOSE_MENU(state){
    if(state.IsShow === true){
      state.IsShow = false
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
