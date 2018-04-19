const initialState = {
  username: '',
  messages: []
};

const display = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USERNAME':
      const { username } = action.payload;
      
      return {
        ...state,
        username: username
      }
    case 'DISPLAY_NEW_MESSAGE':
      const { message } = action.payload;
      
      return {
        ...state,
        messages: [...state.messages, message]
      }
    default:
      return state
  }
}

export default display;