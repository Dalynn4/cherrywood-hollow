
const intialState = {
  userName: "Name",
  content: "Review or Comment",
  reviews: []
}

const reviewsReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_REVIEWS_START": {
      return {...state, reviews: "Loading Reviews"}
      break;
    }
    case "REVIEWS_FETCHED": {
      console.log(action)
      return {...state, reviews: action.reviews}
      break;
    }
    case "ADD_REVIEW": {
      return {...state, reviews: state.reviews.concat(action.review)}
    }
    default:
    return state
  }
}

export default reviewsReducer