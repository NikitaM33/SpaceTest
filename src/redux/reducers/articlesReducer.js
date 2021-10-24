const initialState = {
  items: []
}

const articles = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        items: action.payload.channel.item
      }
    default:
      return state
  }
}

export default articles;
