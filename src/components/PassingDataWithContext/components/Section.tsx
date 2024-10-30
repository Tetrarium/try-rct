import { FC, PropsWithChildren, useContext } from "react";

import { LevelContext } from "./LevelContext";
import s from "./Section.module.sass";

const Section: FC<PropsWithChildren> = ({ children }) => {
  const level = useContext(LevelContext);
  return (
    <section className={s.section}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};

export default Section;