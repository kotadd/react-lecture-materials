import React from 'react';
import './App.css';

import RoutingExample from './components/code-separation/routing-example';
import HelloWorld from './components/main-concepts/hello-world.component';
import Clock from './components/main-concepts/state-props-lifecycle.component';

function App() {
  return (
    <div className='App'>
      <Clock />
    </div>
  );
}

export default App;
