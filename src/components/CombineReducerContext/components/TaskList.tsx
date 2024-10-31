import { FC, useState } from "react";

import { ITask } from "./types";

interface TaskListProps {
  tasks: ITask[];
  onChangeTask: (task: ITask) => void;
  onDeleteTask: (taskId: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
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

export default TaskList;

interface TaskProps {
  task: ITask;
  onChange: (task: ITask) => void;
  onDelete: (taskId: number) => void;
}

const Task: FC<TaskProps> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const taskContent = isEditing
    ?
    (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
        <button
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    )
    :
    (
      <>
        {task.text}
        <button
          onClick={() => setIsEditing(true)}
        >Edit</button>
      </>
    );

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => onDelete(task.id)}
      >Delete</button>
    </label>
  );
};