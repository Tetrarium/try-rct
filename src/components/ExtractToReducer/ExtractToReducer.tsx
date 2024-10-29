import { FC } from "react";

import Content from "../UI/Content";
import ToDo from "./ToDo";

const ExtractToReducer: FC = () => {
  return (
    <Content
      title="Extract To Reducer"
    >
      <ToDo />
    </Content>
  );
};

export default ExtractToReducer;