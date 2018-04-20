export const updateUsername = (username, outputLanguage) => (
  {
    type: 'UPDATE_USERNAME',
    payload: {
      username: username,
      outputLanguage: outputLanguage
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