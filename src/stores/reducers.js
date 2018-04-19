import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import Display from './Display/reducer';

export default combineReducers({
  form: formReducer.plugin({
    MessageForm: (state, action) => {
      switch(action.type) {
        case 'DISPLAY_NEW_MESSAGE':
          return undefined;
        default:
          return state;
      }
    }
  }),
  Display
})