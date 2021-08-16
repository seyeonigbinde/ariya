import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import SignupPage from './components/SignupPage'
import Login from './components/Login'
import EventVendors from './components/EventVendors';

function App() {
  return (
    <Switch>
      <Route path="/event_vendor">
        <EventVendors />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
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
