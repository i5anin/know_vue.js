// store.js
import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      data: ''
    };
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    sendData({ commit }, data) {
      commit('setData', data);
    }
  }
});


