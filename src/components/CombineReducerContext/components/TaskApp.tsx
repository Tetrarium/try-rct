import { FC, useReducer } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { ActionTypes, initialTasks, taskReducer } from "./taskReducer";
import { ITask } from "./types";

const TaskApp: FC = () => {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks,
  );

  const handleAddTask = (text: string) => {
    dispatch({
      type: ActionTypes.added,
      text,
    });
  };

  const handleChangeTask = (task: ITask) => {
    dispatch({
      type: ActionTypes.changed,
      task,
    });
  };

  const handleDeleteTask = (id: number) => {
    dispatch({
      type: ActionTypes.deleted,
      id,
    });
  };

  return (
    <>
      <h2>Day of in Kyoto</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskApp;
