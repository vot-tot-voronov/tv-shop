import React from 'react';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import BannerPage from '../../pages/BannerPage/BannerPage';
import NumberPage from '../../pages/NumberPage/NumberPage';
import './App.scss';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const App: React.FC = () => {
  let location = useLocation()
  return (
    <>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
          >
          <Switch location={location}>
            <Route path="/" exact>
              <BannerPage />
            </Route>
            <Route path="/credential">
              <NumberPage />
            </Route>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
    </>
  )
}


export default App;
