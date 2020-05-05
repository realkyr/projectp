import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  start: false,
  isLoadFinish: false,
  cartItems: {}
}

export default new Vuex.Store({
  state,
  mutations: {
    addToCart (state, item) {
      if (state.cartItems[item.id]) {
        state.cartItems[item.id].amount += 1
      } else {
        Vue.set(state.cartItems, item.id, item.detail)
      }
      alert('item has been added')
    }
  },
  actions: {
    addToCart ({ commit }, payload) {
      commit('addTocart', payload)
    }
  },
  getters: {
    total () {
      let total = 0
      for (const item of Object.values(state.cartItems)) {
        total += item.amount * item.price
        console.log({ total })
      }
      return total
    },
    cartAmount () {
      let amount = 0
      for (const item of Object.values(state.cartItems)) {
        amount += item.amount
      }
      return Number.parseInt(amount)
    }
  },
  modules: {
  }
})
