import { createStore } from 'vuex'

export default createStore({
  state: {
    favList: [],
    favCount: 0
  },
  getters: {
    getfavList(state) {
      return state.favList;
    },
    getfavCount(state) {
      return state.favCount;
    }
  },
  mutations: {
    SET_FAVORITES_DATA(state) {
      let currentUser = localStorage.getItem("currentUser");
      state.favList = JSON.parse(localStorage.getItem(currentUser));
    },
    DELETE_FAVORITES_DATA(state, payload) {
      const index = state.favList.indexOf(payload);
      if (index > -1) {
        state.favList.splice(index, 1);
      }
      const currentUser = localStorage.getItem("currentUser");
      localStorage.setItem(currentUser, JSON.stringify(state.favList));
    },
  },
  actions: {
  },
  modules: {
  }
})
