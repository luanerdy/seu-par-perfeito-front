import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LogInPage';
import Store from './components/Store/Store';
import Resetcss from './Resetcss.js';

function App() {
  return (
    <Router>
      <Resetcss />
      <Switch>
        <Route path="/store" component={Store} exact/>
        <Route path="/login" component={LogInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
