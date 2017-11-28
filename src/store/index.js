import Vue from 'vue';
import Vuex from 'vuex';

import cur from './modules/cur';
import theme from './modules/theme';
import testexample from './modules/testexample';
import notification from './modules/notifications';
import docente from './modules/docente';
import curso from './modules/curso';

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
    docente,
    curso,
    cur,
    testexample,
    theme,
    notification,
  },
});

export default store;
