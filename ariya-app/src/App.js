import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import SignupPage from './components/SignupPage'
import Login from './components/Login'
import Venue from './components/Venue'
import Transport from './components/Transport'
import Salon from './components/Salon'
import Media from './components/Media'
import Equipment from './components/Equipment'
import Decoration from './components/Decoration'
import Catering from './components/Catering'

function App() {
  return (
    <Switch>
      <Route path="/catering">
        <Catering />
      </Route>
      <Route path="/decoration">
        <Decoration />
      </Route>
      <Route path="/equipment">
        <Equipment />
      </Route>
      <Route path="/media">
        <Media />
      </Route>
      <Route path="/salon">
        <Salon />
      </Route>
      <Route path="/transport">
        <Transport />
      </Route>
      <Route path="/venue">
        <Venue />
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
