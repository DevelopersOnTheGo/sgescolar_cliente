import Vue from 'vue';
import Vuex from 'vuex';

import curso from './modules/curso';
import theme from './modules/theme';
import testexample from './modules/testexample';
import notification from './modules/notifications';

import { actions } from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    ObjectKeys: null,
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
    notification,
  },
});

export default store;
