import { FC, useState } from "react";

import Content from "../UI/Content";
import initialData from "./initialTravelPlan.json";
import sList from "./PlaceTree.module.sass";

const AvoidDeeplyNested: FC = () => {
  return (
    <Content
      title="Avoid deeply nested state"
    >
      <TravelPlan />
    </Content>
  );
};

export default AvoidDeeplyNested;

interface Place {
  id: number;
  title: string;
  childIds: number[];
}

interface Plan {
  [key: number]: Place;
}

const TravelPlan: FC = () => {
  const [plan, setPlan] = useState<Plan>(initialData);

  const handleComplete = (parentId: number, childId: number) => {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  const root = plan[0];
  const planetsIds = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetsIds.map(id => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          >{id}</PlaceTree>
        ))}
      </ol>
    </>
  );
};

interface PlaceTreeProps {
  id: number;
  parentId: number;
  placesById: Place[];
  onComplete: (parentId: number, childId: number) => void;
}

const PlaceTree: FC<PlaceTreeProps> = ({ id, parentId, placesById, onComplete }) => {
  const place = placesById[id];
  const { childIds } = place;

  return (
    <li className={sList.item}>
      {place.title}
      <button
        className={sList.btn}
        onClick={() => onComplete(parentId, id)}
      >
        Complete
      </button>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  );
};