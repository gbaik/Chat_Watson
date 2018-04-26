const initialState = {
  username: '',
  outputLanguage: '',
  playAudio: false,
  messages: []
};

const display = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USERNAME':
      const { username, outputLanguage, playAudio } = action.payload;

      return {
        ...state,
        username: username,
        outputLanguage: outputLanguage,
        playAudio: playAudio
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