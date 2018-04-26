import React from 'react';
import { Field } from 'redux-form';

const AudioMenu = ({}) => (
  <div>
    <Field name = 'playAudio' component = 'select'>
      <option>-----</option>
      <option value = { true }>Yes</option>
      <option value = { false }>No</option>
    </Field>
  </div>
);

export default AudioMenu;
