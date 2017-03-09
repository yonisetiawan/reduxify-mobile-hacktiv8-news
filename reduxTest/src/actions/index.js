export const listdatanews = newsdata => ({
    type: 'LIST_NEWS',
    payload: newsdata
})


export const GetAll = () => {
    return dispatch => {
        fetch('https://hn.algolia.com/api/v1/search')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return dispatch(listdatanews(data.hits))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
