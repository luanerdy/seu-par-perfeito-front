import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LogInPage';

function App() {
	return (
		<Router>
      <Switch>
        <Route path="/login" component={LogInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
      </Switch>
    </Router>
	);
}

export default App;
