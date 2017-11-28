import Vue from 'vue';

import { client } from '../actions';

const url = '/api/catalogo/categorias/';
const cursos = {
  title: 'Crud Curso',
  count: 0,
  data: [],
  objectKeysHead: null,
  objectKeysBody: null,
  temp: {
    id: null,
    nombre: null,
    codigo: null,
    estado: false,
    index: null,
  },
};

const actions = {
  LOAD_PROJECT_LIST: ({ commit, state }) => {
    client.get(url).then((response) => {
      state.code = response.status;
      state.available = true;
      console.log('aquiiiiiiiiiiiii', response);
      state.message_available = response.statusText;
      commit('SET_PROJECT_LIST', { list: response.data.results });
      console.log('status *****************', response.status);
      commit('SUCCESSFUL_INFORMATION', { info: response.status });
    }).catch((error) => {
      commit('ERROR_INFORMATION', { information: error.config });
    });
  },
  ADD_NEW_PROJECT: ({ commit, state }) => {
    client.post(url, state.temp).then((response) => {
      commit('ADD_PROJECT', { res: response.data });
    }, () => {
    });
  },
  EDIT_PROJECT: ({ commit, state }, { id }) => {
    client.put(`${url}${id}/`, state.temp).then((response) => {
      commit('UPDATE_PROJECT', { res: response.data });
    }, () => {
    });
  },
  DELETE_COMPLETED: ({ commit, state }, { id, index }) => {
    client.delete(`${url}${id}`).then((response) => {
      commit('DELETE_PROJECT', { id, response, index });
    }, () => {
    });
  },
};

const mutations = {
  SET_PROJECT_LIST: (state, { list }) => {
    state.data = list;
    console.log('y aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', state.data);
    state.objectKeysBody = Object.keys(list[0]).filter(e => e !== 'id' && e !== '');
    state.objectKeysHead = Object.keys(list[0]).filter(e => e !== 'created_at').map(x => x.toUpperCase().replace('_', ' ').replace('ID', '#'));
    console.log('][[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]}}}', Object.keys(list[0]).splice(1));
  },
  ADD_PROJECT: (state, { res }) => {
    state.data.push(res);
    state.temp.index = null;
    state.temp.nombre = null;
    state.temp.codigo = null;
    state.temp.id = null;
  },
  DELETE_PROJECT: (state, { index }) => {
    Vue.delete(state.data, index);
  },
  UPDATE_PROJECT: (state, { res }) => {
    state.data.splice(state.temp.index, 1, res);
    state.temp.index = null;
    state.temp.nombre = null;
    state.temp.codifo = null;
    state.temp.id = null;
  },
};

const getters = {

};
export default {
  state: cursos,
  mutations,
  actions,
  getters,
};
