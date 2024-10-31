import { ITask } from "./types";

let nextId = 3;

export const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

export enum ActionTypes {
  added = 'added',
  changed = 'changed',
  deleted = 'deleted',
}

type TAddedAction = {
  type: ActionTypes.added;
  text: string;
};

type TChangedAction = {
  type: ActionTypes.changed;
  task: ITask;
};

type TDeletedAction = {
  type: ActionTypes.deleted;
  id: number;
};

export type TAction = TAddedAction
  | TChangedAction
  | TDeletedAction;

export const taskReducer = (tasks: ITask[], action: TAction): ITask[] => {
  switch (action.type) {
    case ActionTypes.added: {
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
        }
      ];
    }
    case ActionTypes.changed: {
      return tasks.map(t => t.id === action.task.id ? action.task : t);
    }
    case ActionTypes.deleted: {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw new Error('Unknown Action: ' + (action as { type: string; }).type);
    }
  }
};