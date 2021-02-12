import logo from './logo.svg';
import './App.css';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/home';

const history = createBrowserHistory();

function App() {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
