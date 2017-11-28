import { client } from '../actions';

const url = '/api/configuracion/docentes/';
const docente = {
  title: 'Lista de Docentes',
  data: [],
};

const actions = {
  LOAD_PROFESSOR_LIST: ({ commit, state }) => {
    client.get(url).then((response) => {
      state.code = response.status;
      state.available = true;
      commit('SUCCESSFUL_INFORMATION', { info: response.status });
      commit('SET_PROFESSOR_LIST', { list: response.data.results });
    }).catch((error) => {
      commit('ERROR_INFORMATION', { information: error.config });
    });
  },
};

const mutations = {
  SET_PROFESSOR_LIST: (state, { list }) => {
    state.data = list;
  },
};

const getters = {

};
export default {
  state: docente,
  mutations,
  actions,
  getters,
};
