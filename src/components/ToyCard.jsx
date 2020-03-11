import React, { Component } from 'react';

class ToyCard extends Component {

  handleClick = () => {
    this.props.updateToy(this.props.toyObject.id, 1)
  }

  handleDelete = () => {
    this.props.deleteToy(this.props.toyObject.id)
  }

  render() {
    console.log(this.props);
    
    let {name, image, likes} = this.props.toyObject
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={this.handleClick} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
