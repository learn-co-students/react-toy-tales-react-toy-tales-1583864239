import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewToy(this.state)
  }

  handleTheInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    let {name, image} = this.state

    return (
      <div className="container" >
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={name} onChange={this.handleTheInput}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={image} onChange={this.handleTheInput}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
