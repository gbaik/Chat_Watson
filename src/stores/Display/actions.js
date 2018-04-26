export const updateUsername = (username, outputLanguage, playAudio) => (
  {
    type: 'UPDATE_USERNAME',
    payload: {
      username: username,
      outputLanguage: outputLanguage,
      playAudio: playAudio
    }
  }
)
export const displayNewMessage = (message) => (
  {
    type: 'DISPLAY_NEW_MESSAGE',
    payload: {
      message: message
    }
  }
)