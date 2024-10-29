interface ITask {
  id: number;
  text: string;
  done: boolean;
}

type AddedAction = {
  type: 'added';
  payload: {
    id: number;
    text: string;
  };
};

type ChangedAction = {
  type: 'changed';
  payload: {
    task: ITask;
  };
};

type DeletedAction = {
  type: 'deleted';
  payload: {
    id: number;
  };
};

export type TasksAction = AddedAction
  | ChangedAction
  | DeletedAction;

export function taskReducer(tasks: ITask[], action: TasksAction): ITask[] {
  const { type, payload } = action;

  switch (type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: payload.id,
          text: payload.text,
          done: false,
        }
      ];
    }
    case 'changed': {
      return tasks.map((t) => t.id === payload.task.id ? payload.task : t);
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== payload.id);
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}