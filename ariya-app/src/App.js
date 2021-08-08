import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage';

function App() {
  return (
    <Switch>
      <Route>
        <Homepage/>
      </Route>
    </Switch>
  );
}

export default App;
