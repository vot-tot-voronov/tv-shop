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
import { DataProvider } from '../DataContext/DataContext';
import FinalPage from '../../pages/FinalPage/FinalPage';

const App: React.FC = () => {
  let location = useLocation()
  return (
    <> 
      <DataProvider>
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
            <Route path="/final-page">
              <FinalPage />
            </Route>
          </Switch>
          </CSSTransition>
        </TransitionGroup>
      </DataProvider>
    </>
  )
}


export default App;
