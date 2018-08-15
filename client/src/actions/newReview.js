export function newReview() {
  return (dispatch) => {
    dispatch({type: "ADD_REVIEW"});
    return fetch('http://localhost:3001/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
  }
}