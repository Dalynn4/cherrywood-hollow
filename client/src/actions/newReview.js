export function newReview(review) {
  return (dispatch) => {
    dispatch({type: "ADD_REVIEW_START"});
    fetch('http://localhost:3001/reviews', {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
       body: JSON.stringify(review)
     }).then(response => {
      if (!response.ok) {
      throw new Error('Network not available.')
      } return response
      .then(dispatch({type: "ADD_REVIEW", review}))
    })
     .catch(error => {console.log(error)})
  }
}