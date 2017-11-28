import axios from 'axios';

const client = axios.create({
  baseURL: 'http://104.236.51.250',
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
