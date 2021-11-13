import Vue from 'vue'
import Vuex from 'vuex'

import books from './modules/books/books'
import orders from './modules/orders/orders'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showHeading: false,
    headerText: '',
    routerHistory: []
  },
  actions: {
    SETHEADERSTATUS({
      commit
    }) {
      commit('SET_HEADERSTATUS')
    },
    SETHEADERTEXT({
      commit
    }, payload) {
      commit('SET_HEADERTEXT', payload)
    },
    SETROUTERHISTORY({
      commit
    }, payload) {
      commit('SET_ROUTERHISTORY', payload)
    }
  },
  mutations: {
    SET_HEADERSTATUS(state) {
      return state.showHeading = !state.showHeading;
    },
    SET_HEADERTEXT(state, payload) {
      return state.headerText = payload;
    },
    SET_ROUTERHISTORY(state, payload) {
      return state.routerHistory = payload;
    }
  },
  getters: {
    getShowHeading: state => {
      return state.showHeading;
    },
    getHeadingText: state => {
      return state.headerText;
    },
    previousRoute: (state) => {
      const historyLen = state.routerHistory.length;
      if (historyLen == 0) return null;
      return state.routerHistory[historyLen - 1];
    }
  },
  modules: {
    orders,
    books
  }
})
export default store