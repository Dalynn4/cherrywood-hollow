
const intialState = {
  user_name: "Name",
  content: "Review or Comment",
  reviews: []
}

const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_REVIEWS_START": {
      return {...state, reviews: "Loading Reviews"}
    }
    case "REVIEWS_FETCHED": {
      return {...state, reviews: action.reviews}
    }
    case "ADD_REVIEW_START": {
      return {...state, reviews: state.reviews}
    }
    case "ADD_REVIEW": {
      return {...state, reviews: state.reviews.concat(action.review)}
    }
    default:
    return state
  }
}

export default reviewsReducer