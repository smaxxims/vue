import { setTimeout } from 'core-js';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      id: 1,
      name: 'Maxim Meser'
    }
  },
  getters: {
    getInitials(state) {
      const splittedName = state.user.name.split(' ');
      return splittedName[0].charAt(0) + splittedName[1].charAt(0);
    },
     logState(state) {
      return console.log('state ::: ', state)
    }

  },
  mutations: {
    changeName(state, newName) {
      state.user.name = newName
    },
  },
  actions: {
    async changeName(context, newName) {
      await setTimeout(() => {
        context.commit('changeName', newName)
      }, 3000)
    }
  },
  modules: {
    
  },
});
