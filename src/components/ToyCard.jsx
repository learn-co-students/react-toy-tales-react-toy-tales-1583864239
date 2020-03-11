import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = (e) => {
    // console.log("ClicK")
    this.props.deleteOneToy(this.props.toy.id)
  }

  handleLike = (e) => {
    console.log("click")
    this.props.addLike(this.props.toy.id, 1)
  }

  render() {
    console.log(this.props.toy)
    let toy = this.props.toy
    let { name, image, likes } = toy

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike} >Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete} >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
