import { Field, reduxForm } from 'redux-form';
import React from 'react';

import RenderField from './RenderField.js';

const MessageForm = ({ handleSubmit }) => (
  <div>
    <form onSubmit = { handleSubmit }>
        <Field name = 'message' component = { RenderField } /> 
        <input type = 'submit'/>            
    </form>
  </div>
);

export default reduxForm({
  form: 'MessageForm'
})(MessageForm);