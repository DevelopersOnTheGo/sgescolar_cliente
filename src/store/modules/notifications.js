import * as firebase from 'firebase';

import '../../firebase';

const db = firebase.database();
const notification = {
  information: {
    method: null,
    url: null,
    date: Date(),
  },
  code: false,
  available: null,
  message_available: null,
  messaje: {},
};

const actions = {
};

const mutations = {
  ERROR_INFORMATION(state, info) {
    state.information.method = info.information.method;
    state.information.url = info.information.url;
    console.log(state);
    db.ref('notifications/').push(state.information).then((es) => {
      console.log(es);
    });
  },
  SUCCESSFUL_INFORMATION(state, info) {
    console.log('<<<<>>>>>>>>>>>>>>>>>>>>', info);
    state.code = info;
    console.log('pasooooooooooo', state.code);
  },
};

export default {
  state: notification,
  mutations,
  actions,
};
