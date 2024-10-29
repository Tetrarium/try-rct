import { FC, useState } from "react";

import s from "./AddTask.module.sass";

interface AddTaskProps {
  onAddTask: (v: string) => void;
}

const AddTask: FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  return (
    <>
      <input
        placeholder='Add task'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={s.input}
      />
      <button
        className={s.button}
        onClick={() => {
          onAddTask(text);
          setText('');
        }}
      >Add</button>
    </>
  );
};

export default AddTask;