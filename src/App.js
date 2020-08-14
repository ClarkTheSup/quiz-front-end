import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navigator from './components/Navigator/Navigator';
import Market from './components/Market/Market';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator/>

        <Switch>
          <Route exact path="/market" component={Market}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
