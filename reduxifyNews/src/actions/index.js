export const searchNews = (news) => {
  return {
    type: 'SEARCH_NEWS',
    payload: news
  }
}

export const actionFetchNews = (news) => {
  return{
    type: 'FETCH_NEWS',
    payload: news
  }
}

export const fetchNews = (key) => {
  return(dispatch) =>{
    setTimeout(()=>{
      fetch(`http://hn.algolia.com/api/v1/search?query=${key}`)
      .then(res => res.json())
      .then(news => dispatch(actionFetchNews(news.hits)))
    })
  }
}

export const searchPeoples = (peoples) => {
  return {
    type: 'SEARCH_PEOPLES',
    payload: peoples
  }
}
