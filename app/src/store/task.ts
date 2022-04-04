import { StoreOptions } from 'vuex';
import Task, { TaskProperty } from '@/domain/task/task-class';
import TaskList from '@/domain/task/task-class-list';

interface State {
  tasks: TaskProperty[],
}

const state: State = {
  tasks: [],
};

const options: StoreOptions<typeof state> = {
  state,
  getters: {
    tasks: (_state: State) => new TaskList(_state.tasks.map(
      (task) => Task.initFromObject(task),
    )),
  },
  mutations: {
    pushTask(_state: State, task: Task) {
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
