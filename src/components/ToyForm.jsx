import React, { Component } from 'react';

class ToyForm extends Component {


  state = {
    name: "hi",
    image: "some_link",
    likes: "0"
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("click")
    this.props.handleForm(this.state)
    
  }

  handleAllChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  render() {

    let { name, image, likes } = this.state

    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit} >
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={name} onChange={this.handleAllChange} />
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={image} onChange={this.handleAllChange} />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
