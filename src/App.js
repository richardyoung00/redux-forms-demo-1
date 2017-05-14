import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

App = reduxForm({
  form: 'app'
})(App);

export default App;
