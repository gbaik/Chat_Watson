export const displayNewMessage = (message) => (
  {
    type: 'DISPLAY_NEW_MESSAGE',
    payload: {
      message: message
    }
  }
)