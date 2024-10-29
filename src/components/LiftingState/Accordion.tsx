import { useState } from "react";

import s from "./Accordion.module.sass";
import Panel from "./Panel";

const panels = [
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex est earum modi voluptatum qui veniam dolore pariatur, incidunt officiis maiores amet nemo eligendi dolorum nostrum sint tempore, adipisci explicabo magni?',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate cumque aspernatur id unde explicabo dolor vitae, adipisci veritatis eaque soluta perspiciatis laborum, voluptatum culpa fuga cum nesciunt aut velit. Beatae.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maxime deleniti sit! Alias facere velit sapiente quidem asperiores eum consequatur necessitatibus quasi. Minima debitis deserunt et, fugiat tenetur cupiditate aperiam!',
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className={s.accordion}>
      <h3 className={s.header}>Accordion</h3>
      {panels.map((text, i) => (
        <Panel
          key={i}
          title={'Panel ' + (i + 1)}
          isActive={activeIndex === i}
          onShow={() => setActiveIndex(i)}
        >{text}</Panel>
      ))}
    </div>
  );
};

export default Accordion;