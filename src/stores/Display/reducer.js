const initialState = {
  messages: []
};

const display = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_NEW_MESSAGE':
      const { message } = action.payload;
      
      return {
        messages: [...state.messages, message]
      }
    default:
      return state
  }
}

export default display;