import * as getters from './getters';
import * as actions from './actions';

let state = {
  menuArr: []
}

const mutations = {
  GETMENUARR(state, res) {
    state.menuArr = res.menuArr
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}