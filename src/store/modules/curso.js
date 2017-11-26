import Vue from 'vue';

import { client } from '../actions';

const url = '/api/catalogo/categorias/';
const cursos = {
  code: null,
  available: null,
  message_available: null,
  title: 'Crud Curso',
  count: 0,
  data: [],
  temp: {
    nombre: null,
    codigo: null,
    id: null,
    estado: true,
    index: null,
  },
};

const actions = {
  LOAD_PROJECT_LIST: ({ commit, state }) => {
    client.get(url).then((response) => {
      state.code = response.status;
      state.available = true;
      state.message_available = response.statusText;
      commit('SET_PROJECT_LIST', { list: response.data });
    }).catch((error) => {
      state.message_available = error;
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
    state.temp.codigo = null;
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
