import { useState } from "react";

import s from "./Accordion.module.sass";
import Panel from "./Panel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={s.accordion}>
      <h3 className={s.header}>Accordion</h3>
      <Panel title="Panel 1" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex est earum modi voluptatum qui veniam dolore pariatur, incidunt officiis maiores amet nemo eligendi dolorum nostrum sint tempore, adipisci explicabo magni?
      </Panel>
      <Panel title="Panel 2" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate cumque aspernatur id unde explicabo dolor vitae, adipisci veritatis eaque soluta perspiciatis laborum, voluptatum culpa fuga cum nesciunt aut velit. Beatae.
      </Panel>
    </div>
  );
};

export default Accordion;