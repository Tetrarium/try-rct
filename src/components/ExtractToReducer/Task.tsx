import { FC, useState } from "react";

import s from "./AddTask.module.sass";

export interface ITask {
  id: number;
  text: string;
  done: boolean;
}

interface TaskProps {
  task: ITask;
  onChange: (task: ITask) => void;
  onDelete: (id: number) => void;
}

const Task: FC<TaskProps> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const taskContent = isEditing
    ?
    (
      <>
        <input
          className={s.input}
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className={s.button}
          onClick={() => setIsEditing(false)}
        >Save</button>
      </>
    )
    :
    (
      <>
        <span className={s.text}>
          {task.text}
        </span>
        <button
          className={s.button}
          onClick={() => setIsEditing(true)}
        >Edit</button>
      </>
    );

  return (
    <label>
      <input
        type='checkbox'
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        className={s.button}
        onClick={() => onDelete(task.id)}
      >Delete</button>
    </label>
  );
};

export default Task; 