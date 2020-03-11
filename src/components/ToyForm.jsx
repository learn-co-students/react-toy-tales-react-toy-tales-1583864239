import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "testName",
    image: "a_link_sorta"
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addOneNewToy(this.state)
  }

  handleAllInput = (e) => {
    this.setState({[e.target.name]: e.target.value}) // sets whatever the target key is, to whatever the value is. 
  }

  render() {
    let { name, image } = this.state

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3> 
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"
            value={ name } // shows the value of decoy name. 
            onChange={ this.handleAllInput } // event listening for input change to invoke function.
          />
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"
            value={ image } // shows the value of decoy imageUrl
            onChange={ this.handleAllInput }
          />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
