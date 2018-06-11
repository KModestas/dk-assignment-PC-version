import React, { Component } from 'react';
import NewsLetter from './NewsLetter';
import SuccessPage from './SuccessPage';
import '../styles/index.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={NewsLetter} />
          <Route path="/success" component={SuccessPage} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
