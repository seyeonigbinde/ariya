import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <Switch>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  );
}

export default App;
