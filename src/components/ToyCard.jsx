import React, { Component } from 'react';

class ToyCard extends Component {
  
  handleDelete = (event) => {
    this.props.delete(this.props.thisToy.id)
  }
  render() {
    return (
      <div className="card">
        <h2>{this.props.name /* Toy's Name */}</h2>
        <img src={this.props.image /* Toy's Image */} alt={"hi"/* Toy's Name */} className="toy-avatar" />
        <p>{this.props.likes /* Toy's Likes */} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
        
      </div>
    );
  }

}

export default ToyCard;
