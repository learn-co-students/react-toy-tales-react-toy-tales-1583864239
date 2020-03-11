import React, { Component } from 'react';

class ToyCard extends Component {

  // toyObj={toy} attribute set in ToyContainer to use.
  
  handleUpdate = (e) => {
    console.log("testing this like button click to increase value by 1.")
    this.props.updateOneToy(this.props.toyObj.id, 1)
  }

  handleDelete = (e) => {
    console.log("this is activated by clicking the delete button")
    this.props.deleteOneToy(this.props.toyObj.id)
  }

  render() {
    let { name, image, likes } = this.props.toyObj
    return (
      <div className="card">
        <h2>{ name }</h2>
        <img src={ image } alt={ name } className="toy-avatar" />
        <p>{ likes } Likes </p>
        <button className="like-btn" onClick={this.handleUpdate}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete} >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
