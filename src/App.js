import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LogInPage';
import Store from './components/Store/Store.js';
import Resetcss from './Resetcss.js';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState();

	return (
		<Router>
			<Resetcss />
			<Switch>
				<UserContext.Provider value={{user, setUser}}>
					<Route path="/" component={Store} exact />
					<Route path="/login" component={LogInPage} exact />
					<Route path="/signup" component={SignUpPage} exact />
				</UserContext.Provider>
			</Switch>
		</Router>
	);
}

export default App;
