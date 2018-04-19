import { Field, reduxForm } from 'redux-form';
import React from 'react';

import RenderField from './RenderField.js';

const Login = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit = { handleSubmit }>
        Name: <Field name = 'username' component = { RenderField } />         
        Language: 
        <select>
          <option>English</option>
        </select>
        {/* Join Room (Optional): <input type = 'text' name = 'roomname' value = { roomname } onChange = { handleOnChange }/> */}
        <input type = 'submit' value = 'Enter' />
      </form>
    </div>
  )
};

export default reduxForm({
  form: 'Login'
})(Login);