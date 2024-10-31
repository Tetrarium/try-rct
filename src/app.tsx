import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import AvoidDeeplyNested from "./components/AvoidDeeplyNested/AvoidDeeplyNested";
import CombineReducerContext from "./components/CombineReducerContext/CombineReducerContext";
import { ConditionalRendering } from "./components/ConditionalRendering/ConditionalRendering";
import ExtractToReducer from "./components/ExtractToReducer/ExtractToReducer";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import Game from "./components/Game/game";
import LiftingState from "./components/LiftingState/LiftingState";
import PassingDataWithContext from "./components/PassingDataWithContext/PassingDataWithContext";
import PassingProps from "./components/PassingProps/PassingProps";
import Products from "./components/Products/products";
import RenderingList from "./components/renderingList/RenderingList";

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 20px;
`;
const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
  max-height: 100vh;
  overflow-y: scroll;
`;
const Nav = styled.nav`
  background: #ccc;
  padding: 20px;
  width: 250px;
  min-width: 250px;
  height: 100vh;
  overflow-y: auto;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    text-decoration: none;
  }  
`;

function NavItem({ route, children }: { route: string, children: string; }) {
  return (
    <li>
      <StyledNavLink to={route}>{children}</StyledNavLink>
    </li>
  );
}


function App() {
  return (
    <Container>
      <Nav>
        <ul>
          <NavItem route="/">Tic-Tac-Toe</NavItem>
          <NavItem route='/products' >Products</NavItem>
          <NavItem route='/you-first-component'>You First Component</NavItem>
          <NavItem route='/passing-props'>Passing Props to a Component</NavItem>
          <NavItem route='/conditional-rendering'>Conditional Rendering</NavItem>
          <NavItem route='/rendering-list'>Rendering List</NavItem>
          <NavItem route='/avoid-deeply-nested'>Avoid deeply nested state</NavItem>
          <NavItem route='/lifting-state'>Lifting State</NavItem>
          <NavItem route='/extract-to-reducer'>Extract To Reducer</NavItem>
          <NavItem route="/passing-data-with-context">Passing Data With Context</NavItem>
          <NavItem route="/combine-reducer-context">Combine Reducer And Context</NavItem>
        </ul>
      </Nav>
      <Main>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/products" element={<Products />} />
          <Route path="/you-first-component" element={<FirstComponent />} />
          <Route path="/passing-props" element={<PassingProps />} />
          <Route path="/conditional-rendering" element={<ConditionalRendering />} />
          <Route path="/rendering-list" element={<RenderingList />} />
          <Route path="/avoid-deeply-nested" element={<AvoidDeeplyNested />} />
          <Route path="/lifting-state" element={<LiftingState />} />
          <Route path="/extract-to-reducer" element={<ExtractToReducer />} />
          <Route path="/passing-data-with-context" element={<PassingDataWithContext />} />
          <Route path="/combine-reducer-context" element={<CombineReducerContext />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default App;
