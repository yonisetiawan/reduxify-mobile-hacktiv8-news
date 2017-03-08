let def = [
  {
    id:1,
    name:'Dan Abramov'
  },
  {
    id:2,
    name:'Simon'
  },
  {
    id:3,
    name:'Bill'
  },
  {
    id:4,
    name:'Jack'
  }
]

export default (state = def ,action) => {
  switch(action.type){
    case 'SEARCH_PEOPLES' :
      return def.filter((x)=> (x.name===null ? '' : x.name).match(new RegExp(action.payload,'i')))
    default:
      return state
  }
}
