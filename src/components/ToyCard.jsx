import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    let {name, image, likes} = this.props.toyObj


    return (
      <div className="card">
        <h2>{name /* Toy's Name */}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
