import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "Andy's Toy",
    image: "Pic of Andy's Toy"
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewToy(this.state)
    }
  


  handleAllInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }




  render() {
    let { name, image } = this.state
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit} >
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={ name} onChange={this.handleAllInput} />
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value= {image} onChange={this.handleAllInput}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
