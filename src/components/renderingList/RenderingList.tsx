// import "./test";

import Content from "../UI/Content";

const people = [{
  id: 0,
  name: 'Креола Кэтрин Джонсон (Creola Katherine Johnson)',
  profession: 'математик',
}, {
  id: 1,
  name: 'Марио Молина (Mario José Molina-Pasquel Henríquez)',
  profession: 'химик',
}, {
  id: 2,
  name: 'Мухаммад Абдус Салам (Mohammad Abdus Salam)',
  profession: 'физик',
}, {
  id: 3,
  name: 'Перси Джулиан (Percy Lavon Julian)',
  profession: 'химик',
}, {
  id: 4,
  name: 'Субраманьян Чандрасекар (Subrahmanyan Chandrasekhar)',
  profession: 'астрофизик',
}];


interface Person {
  id: number;
  name: string;
  profession: string;
}

function List({ people, profession }: {
  people: Person[];
  profession?: string;
}) {
  const filteredPeopleItems = people
    .filter(person => profession ? person.profession === profession : true)
    .map(person => <li key={person.id}>{person.name}</li>);

  return (
    <section>
      <h4>{profession || 'Все'}</h4>
      {filteredPeopleItems.length > 0 ? (
        <ul>
          {filteredPeopleItems}
        </ul>
      ) : (
        'Людей такой профессии нет'
      )}

    </section>
  );
}

export default function RenderingList() {
  return (
    <Content
      title="Rendering List"
    >
      <>
        <List people={people} />
        <List people={people} profession="химик" />
        <List people={people} profession="физик" />
        <List people={people} profession="астрофизик" />
        <List people={people} profession="математик" />
        <List people={people} profession="биолог" />
      </>
    </Content>
  );
}