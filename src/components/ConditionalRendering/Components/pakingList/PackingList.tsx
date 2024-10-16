import css from "./PackingList.module.sass";

interface ItemProps {
  name: string;
  isPacked?: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  let itemContent = isPacked ? <del>{name + ' ✅'}</del> : name + ' ❌';

  return (
    <li className={css.item}>{itemContent}</li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h3>Список вещей Салли Райд</h3>
      <ul className={css.list}>
        <Item
          name="Космический скафандр"
          isPacked={true}
        />
        <Item
          name="Шлем с золотым листом"
          isPacked={true}
        />
        <Item
          name="Фотография Тэма"
          isPacked={false}
        />
      </ul>
    </section>
  );
}