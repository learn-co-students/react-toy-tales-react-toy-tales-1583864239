import React, { Component } from 'react';

class ToyCard extends Component {
  handleDelete = (e) => {
    this.props.deleteOneToy(this.props.toyObj.id)
  }
  render() {
    console.log(this.props)
    
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
