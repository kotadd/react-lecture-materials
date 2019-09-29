import React from 'react';
import './App.css';

import RoutingExample from './components/code-separation/routing-example';
import HelloWorld from './components/main-concepts/hello-world.component';
import Clock from './components/main-concepts/state-props-lifecycle/clock.component';
import LoginControl from './components/main-concepts/conditional-rendering/login-control.component';

function App() {
  return (
    <div className='App'>
      <LoginControl />
    </div>
  );
}

export default App;
