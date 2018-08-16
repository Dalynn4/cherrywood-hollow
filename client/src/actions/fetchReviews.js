export function fetchReviews() {
  return (dispatch) => {
    dispatch({type: "FETCH_REVIEWS_START"});
    return fetch('http://localhost:3001/reviews')
    .then(response => response.json())
    .then(reviews => dispatch({type: "REVIEWS_FETCHED", reviews}))
  }
}