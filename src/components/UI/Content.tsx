import { ReactElement } from "react";

import css from "./Content.module.sass";

interface ContentProps {
  title: string;
  children: ReactElement | string;
}

export default function Content({ title, children }: ContentProps) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>
        {title}
      </h2>
      {children}
    </div>
  );
}