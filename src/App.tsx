import React from 'react';
import { GlobalStyle } from './components/GlobalStyles/globalStyles';
import Homepage from './container/openingPage/homepage';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import Experience from './components/work/experience';
import Contact from './components/contact/contact';
import Skills from './components/tech/skills';
import About from './components/about/about';

function App() {
  return (
    <>
    <div className="App">
      <GlobalStyle />
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/WorkExperience" component={Experience} />
            <Route exact path="/Technologies" component={Skills} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/About" component={About} />
          </Switch>
        </Router>
      </>
    </div>
    </>

  );
}

export default App;


 