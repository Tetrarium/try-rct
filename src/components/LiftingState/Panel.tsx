import { FC, PropsWithChildren } from "react";

import s from "./Panel.module.sass";

interface PanelProps {
  title: string;
  isActive: boolean;
  onShow: () => void;
}

const Panel: FC<PanelProps & PropsWithChildren> = ({ title, isActive, onShow, children }) => {

  return (
    <section className={`${s.panel} ${isActive ? s.panel_active : ''}`}>
      <h4 className={s.header}>{title}</h4>
      {isActive
        ? <p>{children}</p>
        : (
          <button
            onClick={onShow}
          >
            Show
          </button>
        )
      }
    </section>
  );
};

export default Panel;