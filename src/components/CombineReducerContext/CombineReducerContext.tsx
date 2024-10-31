import { FC } from "react";

import Content from "../UI/Content";
import TaskApp from "./components/TaskApp";

const CombineReducerContext: FC = () => {
  return (
    <Content
      title='Combine Reducer and Context'
    >
      <TaskApp />
    </Content>
  );
};

export default CombineReducerContext;