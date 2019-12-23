const messagesReducer = function(state = null, action) {
  switch (action.type) {
    case "FETCH_MESSAGES": {
      return action.payload.messages;
    }
    case "MESSAGE_POSTED": {
      const updatedMessages = state.slice(0);
      updatedMessages.push(action.payload);
      return updatedMessages;
    }
    default:
      return state;
  }
};

export default messagesReducer;
