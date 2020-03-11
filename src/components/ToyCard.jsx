import React, { Component } from 'react';


class ToyCard extends Component {


  handleLike(){
    console.log("like btn")
   } 
 
   handleDelete(){
     console.log("delete btn")
   }
 
  render() {
    let {image, name, likes} = this.props.toyObj 
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
