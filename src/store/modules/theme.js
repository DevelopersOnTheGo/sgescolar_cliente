
const themes = {
  style: 'display: inline',
  defaulttheme: {
    dark: true,
    color: {
      first: 'pink',
      second: 'pink lighten-1',
      third: 'pink lighten-2',
      fourth: 'pink lighten-3',
      fifth: 'pink lighten-4',
    },
  },
  otherstheme: [
    {
      dark: true,
      color: {
        first: 'pink',
        second: 'pink lighten-1',
        third: 'pink lighten-2',
        fourth: 'pink lighten-3',
        fifth: 'pink lighten-4',
      },
    },
    {
      dark: true,
      color: {
        first: 'deep-orange',
        second: 'deep-orange lighten-1',
        third: 'deep-orange lighten-2',
        fourth: 'deep-orange lighten-3',
        fifth: 'deep-orange lighten-5',
      },
    },
    {
      dark: true,
      color: {
        first: 'pink darken-4',
        second: 'lime lighten-1',
        third: 'lime lighten-2',
        fourth: 'lime lighten-3',
        fifth: 'lime lighten-4',
      },
    },
    {
      dark: true,
      color: {
        first: 'blue',
        second: 'grey lighten-1',
        third: 'grey lighten-2',
        fourth: 'grey lighten-3',
        fifth: 'grey lighten-4',
      },
    },
    {
      dark: true,
      color: {
        first: 'deep-purple darken-4',
        second: 'grey lighten-1',
        third: 'grey lighten-2',
        fourth: 'grey lighten-3',
        fifth: 'grey lighten-4',
      },
    },
    {
      dark: true,
      color: {
        first: 'lime darken-4',
        second: 'grey lighten-1',
        third: 'grey lighten-2',
        fourth: 'grey lighten-3',
        fifth: 'grey lighten-4',
      },
    },
  ],
};

const actions = {
  selectTheme: ({ commit }, { id }) => {
    commit('CHANGE_THEME', { id });
  },
};

const mutations = {
  CHANGE_THEME(state, id) {
    state.defaulttheme = state.otherstheme[id.id];
  },
};

export default {
  state: themes,
  mutations,
  actions,
};
