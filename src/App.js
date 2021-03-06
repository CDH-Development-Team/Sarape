import './myriad/style.css';
import './App.css';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Home from "./pages";

import fragments from "./pages/fragments.js";
import SigninPage from "./pages/signin";
import Tourism from "./pages/tourism";
import GeographyPage from "./pages/geography.js";
import HistoryPage from "./pages/history.js";
import Section7 from "./pages/section7.js"
import Section5 from "./pages/section5.js"
import Section6 from "./pages/historicalTextiles.js";
import FamilyPage from './pages/section5Family';
import SaltilloPage from './pages/section7Modals';
import TextilesPage from './pages/historicalModals';
import dyeing from './pages/dyeing';
import about from './pages/about';
import credits from './pages/credits';
import media from './pages/media';
import DesignYourSarape from './pages/designYourSarape';
function App() {
  return (
    <Router >
      <Routes>
        <Route path = "/sarape" component={<Home/>} exact />
        <Route path = "/intro" component={about} exact />
        <Route path = "/credits" component={credits} exact />
	      <Route path = "/fragments" component={fragments} exact />
        <Route path = "/porfirio" component={SigninPage} exact />
        <Route path = "/tourism" component={Tourism} exact />
        <Route path = "/geography" component={GeographyPage} exact />
        <Route path = "/history" component={HistoryPage} exact />
        <Route path = "/section7" component={Section7} exact />
        <Route path = "/section5" component={Section5} exact />
        <Route path = "/historicalTextiles" component={Section6} exact />
        <Route path = "/section5Family" component={FamilyPage} exact />
        <Route path = "/section7influence" component={SaltilloPage} exact />
        <Route path = "/section6Textiles" component={TextilesPage} exact />
        <Route path = "/dyeing" component={dyeing} exact />
        <Route path = "/media" component={media} exact />
        <Route path = "/designYourSarape" component={DesignYourSarape} exact />
      </Routes>
    </Router>
  );
}

export default App;
