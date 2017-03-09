export const listdatanewsReducer = (state = [], action)=> {
  switch(action.tyle){
    case 'LIST_NEWS':
      return action.payload;
    default:
      return state;
  }
}
