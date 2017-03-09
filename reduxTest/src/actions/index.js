export const listdatanews = newsdata => ({
  type: 'LIST_NEWS',
  payload: newsdata.reverse()
})


export const GetAll = () => ({
  return (dispatch) => {
    fetch('https://hn.algolia.com/api/v1/search')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      dispatch(listdatanews(data))
    })
    .catch(err => {
      console.log(err)
    })
  }
})
