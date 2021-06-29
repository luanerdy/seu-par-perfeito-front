import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Store from './Components/Store.js';
import Resetcss from './Resetcss.js';

function App() {
  return (
    <BrowserRouter>
      <Resetcss />
      <Switch>
        <Route path="/store" component={Store}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
