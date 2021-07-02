import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { LogInPage } from './pages/LogInPage';
import Store from './components/Store/Store';
import Admin from './components/Store/Admin';
import CartPage from './components/Cart/CartPage';
import CheckoutPage from './components/Cart/CheckoutPage';
import Resetcss from './Resetcss';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({ name: '', userId: '', token: '' });

	return (
		<Router>
			<Resetcss />
			<Switch>
				<UserContext.Provider value={{user, setUser}}>
					<Route path="/" component={Store} exact />
					<Route path="/login" component={LogInPage} exact />
					<Route path="/signup" component={SignUpPage} exact />
					<Route path="/admin" component={Admin} exact />
					<Route path="/cart" component={CartPage} exact />
					<Route path="/checkout" component={CheckoutPage} exact />
				</UserContext.Provider>
			</Switch>
		</Router>
	);
}

export default App;
