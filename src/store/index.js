import Vue from 'vue';
import Vuex from 'vuex';

import curso from './modules/curso';
import theme from './modules/theme';
import testexample from './modules/testexample';

import { actions } from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    clicks: 0,
    inputValue: null,
  },
  actions,
  mutations,
  getters,
  modules: {
    curso,
    testexample,
    theme,
  },
});

export default store;
