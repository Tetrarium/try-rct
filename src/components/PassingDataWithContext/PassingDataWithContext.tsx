import { FC } from "react";

import Content from "../UI/Content";
import Page from "./components/Page";

const PassingDataWithContext: FC = () => {
  return (
    <Content
      title="Passing Data With Context"
    >
      <Page />
    </Content>
  );
};

export default PassingDataWithContext;