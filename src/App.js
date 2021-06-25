import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Home from "./pages";
import fragments from "./pages/fragments.js";
import SigninPage from "./pages/signin";
import Tourism from "./pages/tourism";

function App() {
  return (
    <Router >
      <Switch>
        <Route path = "/" component={Home} exact />
	<Route path = "/fragments" component={fragments} exact />
        <Route path = "/signin" component={SigninPage} exact />
        <Route path = "/tourism" component={Tourism} exact />
      </Switch>
    </Router>
  );
}

export default App;
