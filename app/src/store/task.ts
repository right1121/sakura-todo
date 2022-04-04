import { StoreOptions } from 'vuex';
import Task from '@/domain/task/task-class';

interface State {
  tasks: Task[],
}

const state: State = {
  tasks: [],
};

const options: StoreOptions<typeof state> = {
  state,
  getters: {},
  mutations: {
    pushTask(_state: any, task: Task) {
      _state.tasks.push(task);
    },
  },
  actions: {
    pushTask({ commit }: { commit: any }, task: Task) {
      commit('pushTask', task);
    },
  },
};

export default options;
