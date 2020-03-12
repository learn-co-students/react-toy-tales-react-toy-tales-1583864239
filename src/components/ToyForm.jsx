import React, { Component } from 'react';
class ToyForm extends Component {
  state = {
    name: " ",
    image: " "
    }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addOneToy(this.state)
  }
  handleAllInput = (e) => {
    // only works when keys of state matches name of input
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    let {name, image} = this.state
    console.log(this.state)
    return (
      <div className="container" >
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
                type="text" 
                name="name" 
                placeholder="Enter a toy's name..." 
                className="input-text"
                onChange={this.handleAllInput}/>
          <br/>
          <input 
               type="text" 
               name="image" 
               placeholder="Enter a toy's image URL..." 
               className="input-text"
               onChange={this.handleAllInput}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }
}
export default ToyForm;