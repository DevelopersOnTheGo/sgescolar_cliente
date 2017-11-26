const mutations = {
  INCREMENT_ACTION_CLICKS(state) {
    state.clicks += 1;
  },
  UPDATE_INPUT_VALUE(state, inputValue) {
    state.inputValue = inputValue;
  },
};

export default mutations;
