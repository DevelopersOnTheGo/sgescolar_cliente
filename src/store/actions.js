import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8003',
});

const actions = {
  actionClick({ commit }) {
    commit('INCREMENT_ACTION_CLICKS');
  },
  actionInput({ commit }, { inputValue }) {
    commit('UPDATE_INPUT_VALUE', inputValue);
  },
};


export { actions, client };
