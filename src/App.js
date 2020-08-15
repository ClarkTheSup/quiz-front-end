import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Navigator from './components/Navigator/Navigator';
import Market from './components/Market/Market';
import Order from './components/Order/Order';
import CreateItem from './components/CreateItem/CreateItem';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator/>

        <Switch>
          <Route exact path="/" component={Market}/>
          <Route exact path="/market" component={Market}/>
          <Route exact path="/order" component={Order}/>
          <Route exact path="/createItem" component={CreateItem}/>
        </Switch>

        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
