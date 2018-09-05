import React, { Component } from "react"


class Likes extends Component {
  state = {
    likes: 0
  }
   
  handleLikes = (event) => {
    console.log(event.target)
    this.setState({
        likes: this.state.likes + 1
    })
  }
  render() {
  return (
    <div>
      <button onClick={this.handleLikes} type='likes'>Like</button> {this.state.likes}
    </div>
  )
}

}

export default Likes