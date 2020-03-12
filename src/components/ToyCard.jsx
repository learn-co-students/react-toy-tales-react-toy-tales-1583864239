import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.likes
  }

  handleLikes = (e) => {
    console.log(e)
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.name /* Toy's Name */}</h2>
        <img src={this.props.image /* Toy's Image */} alt={this.props.name/* Toy's Name */} className="toy-avatar" />
        <p>{this.state.likes /* Toy's Likes */} Likes </p>
        <button className="like-btn" onClick={this.handleLikes}>Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
