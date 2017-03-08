

export default (state = [] ,action) => {
  switch(action.type){
    case 'FETCH_NEWS' :
      return action.payload
    case 'SEARCH_NEWS' :
      return state.filter((x)=> (x.title===null ? '' : x.title).match(new RegExp(action.payload,'i')))
    default:
      return state
  }
}
