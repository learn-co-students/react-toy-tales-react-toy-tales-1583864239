import React, { Component } from 'react';

class ToyForm extends Component {
  state = { //be sure to define state so it can be changed
    name: "Some Name",
    image: "Some Image"
  }

  handleSubmit = (e) => { //this says "hey, I need access to that function addOneToy through props"
    e.preventDefault()
    this.props.addOneToy(this.state)
    // this.props.addOneMusician(this.state)
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    
    let {name, image} = this.state //be sure the deconstruted key value pairs are in the state
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter a toy's name..." 
            className="input-text"
            value={name} //control your component -> make sure it matches the state's keys
            onChange={this.handleInput} //control your component
          />
          <br/>
          <input 
            type="text" 
            name="image" 
            placeholder="Enter a toy's image URL..." 
            className="input-text" 
            value={image} //control your component
            onChange={this.handleInput}/> 
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
