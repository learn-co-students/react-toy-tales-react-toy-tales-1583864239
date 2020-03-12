import React, { Component } from 'react';

class ToyCard extends Component {

  handleClick = (e) => {
    if (e.target.className === 'del-btn') {
      this.props.deleteToy(this.props.toyObj)
    } else {
      this.props.likeToy(this.props.toyObj.id)
    }
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toyObj.name /* Toy's Name */}</h2>
        <img src={this.props.toyObj.image /* Toy's Image */} alt={this.props.toyObj.name/* Toy's Name */} className="toy-avatar" />
        <p>{this.props.toyObj.likes /* Toy's Likes */} Likes </p>
        <button className="like-btn" onClick={this.handleClick}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleClick}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
