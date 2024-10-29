import { FC } from "react";

import s from "./AddTask.module.sass";
import Task, { ITask } from "./Task";

interface TasksListProps {
  tasks: ITask[],
  onChangeTask: (task: ITask) => void;
  onDeleteTask: (id: number) => void;
}

const TasksList: FC<TasksListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={s.task}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;