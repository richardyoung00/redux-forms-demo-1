import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  Slider
} from 'redux-form-material-ui'

import './App.css';

class App extends Component {
  render() {
    return (
        <form className="App">
          <div className="field">
            <Field name="username" component={TextField} hintText="Street"/>
          </div>

          <div className="field">
            <Field name="plan" component={SelectField} hintText="Select a plan">
              <MenuItem value="monthly" primaryText="Monthly"/>
              <MenuItem value="yearly" primaryText="Yearly"/>
              <MenuItem value="lifetime" primaryText="Lifetime"/>
            </Field>
          </div>

          <div className="field">
            <Field name="agreeToTerms" component={Checkbox} label="Agree to terms?"/>
          </div>

          <div className="field">
            <Field name="receiveEmails" component={Toggle} label="Please spam me!"/>
          </div>

          <div className="field">
            <Field name="bestFramework" component={RadioButtonGroup}>
              <RadioButton value="react" label="React"/>
              <RadioButton value="angular" label="Angular"/>
              <RadioButton value="ember" label="Ember"/>
            </Field>
          </div>

          <div className="field">
            <Field name="slider" component={Slider}/>
          </div>


        </form>
    );
  }
}

App = reduxForm({
  form: 'app'
})(App);

export default App;
