import { client } from '../actions';

const url = '/api/asistencia/cursos_asistencia/';
const cursos = {
  title: 'Lista de Cursos',
  picked: '',
  temp: {
    id: '',
    matricula: '',
    fecha: '',
    estado: '',
    seccion: '',
  },
  tempArray: [],

  data: [],
};

const actions = {
  LOAD_ESTUDENT_COURSE: ({ commit, state }, { idD, idC }) => {
    client.get(`${url}?docente=${idD}&mis_areas=${idC}`).then((response) => {
      state.code = response.status;
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>><', response);
      state.available = true;
      commit('SUCCESSFUL_INFORMATION', { info: response.status });
      commit('SET_ESTUDENT_LIST', { list: response.data.results });
    }).catch((error) => {
      commit('ERROR_INFORMATION', { information: error.config });
    });
  },
};

const mutations = {
  SET_ESTUDENT_LIST: (state, { list }) => {
    state.data = list;
    console.log('pppppppppppppppppp', state.data);
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
