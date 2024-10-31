import { FC, useState } from "react";

interface AddTaskProps {
  onAddTask: (text: string) => void;
}

const AddTask: FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  return (
    <>
      <input
        placeholder='Add task'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >Add</button>
    </>
  );
};

export default AddTask;