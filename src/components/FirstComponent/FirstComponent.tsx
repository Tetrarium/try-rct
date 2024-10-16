import Gallery from "./Gallery";
import Profile from "./Profile";


export default function FirstComponent() {
  return (
    <div>
      <h2>
        <a href="https://react.dev/learn/your-first-component" target="_blank">Your First Component</a>
      </h2>
      <h4>Закончил на <a href="https://react.dev/learn/your-first-component#nesting-and-organizing-components" target="_blank">Nesting and organizing components </a></h4>
      <article>
        <h1>My first component</h1>
        <ol>
          <li>Components: UI Building Blocs</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      <article>
        <Profile />
      </article>
      <Gallery />
    </div>
  )
}