import React from 'react';
import './App.css';

import RoutingExample from './components/code-separation/routing-example';
import HelloWorld from './components/main-concepts/hello-world.component';
import Clock from './components/main-concepts/state-props-lifecycle/clock.component';
import LoginControl from './components/main-concepts/conditional-rendering/login-control.component';
import NumberList from './components/main-concepts/list-key/numberlist.component';
import Reservation from './components/main-concepts/forms/reservation.component';
import Calculator from './components/main-concepts/listup-state/boiling-verdict.component';

function App() {
  return (
    <div className='App'>
      <Calculator />
    </div>
  );
}

export default App;
