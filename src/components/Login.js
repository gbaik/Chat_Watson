import { Field, reduxForm } from 'redux-form';

import React from 'react';

import RenderField from './RenderField.js';
import LanguageMenu from './LanguageMenu.js';
import AudioMenu from './AudioMenu.js';

const Login = ({ handleSubmit }) => (
  <div>
    <form onSubmit = { handleSubmit }>
      Name: <Field name = 'username' component = { RenderField } /> 
      Output Language: <LanguageMenu />
      Play Audio: <AudioMenu />
      {/* Join Room (Optional): <input type = 'text' name = 'roomname' value = { roomname } onChange = { handleOnChange }/> */}
      <input type = 'submit' value = 'Enter' />
    </form>
  </div>
);

export default reduxForm({
  form: 'Login'
})(Login);