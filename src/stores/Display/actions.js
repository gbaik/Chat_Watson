export const updateUsername = (username) => (
  {
    type: 'UPDATE_USERNAME',
    payload: {
      username: username
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