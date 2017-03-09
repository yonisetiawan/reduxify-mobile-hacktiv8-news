export const listdatanewsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LIST_NEWS':
      return action.payload;
    default:
      return state;
  }
}
