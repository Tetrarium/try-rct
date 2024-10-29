import { FC, useReducer } from "react";

import AddTask from "./AddTask";
import { ITask } from "./Task";
import { taskReducer } from "./taskReducer";
import TasksList from "./TasksList";

let nextId = 3;
const initialTasks: ITask[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

const ToDo: FC = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const handleAddTask = (text: string) => {
    dispatch({
      type: "added",
      payload: {
        id: nextId++,
        text,
      }
    });
  };

  const handleChangeTask = (task: ITask) => {
    dispatch({
      type: "changed",
      payload: {
        task,
      }
    });
  };

  const handleDeleteTask = (id: number) => {
    dispatch({
      type: "deleted",
      payload: {
        id
      }
    });
  };

  return (
    <div>
      <h2>Prague itinerary</h2>
      <AddTask onAddTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default ToDo;
