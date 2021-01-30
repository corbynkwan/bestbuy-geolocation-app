import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from "./components/Store.js"
import Pickup from "./components/Pickup.js"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/store" to exact component={Store} /> 
      <Route path="/pickup" to exact component={Pickup} /> 
    </Switch>
  );
}

export default App;
