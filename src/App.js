import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: data
  }

  addNewToy = (toyObj) => {
    let newToy = {
      ...toyObj,
      id: Math.floor(Math.random() * 1000),
      likes: 0
    }

    let newToyArray = [newToy, ...this.state.toys]

    this.setState({
      toys: newToyArray
    })

  }

  deleteToy = (toyObj) => {
    let filteredToyArray = this.state.toys.filter(toy => toy.id !== toyObj.id)

    this.setState({
      toys: filteredToyArray
    })
  }

  likeToy = (id) => {
    let updatedToys = this.state.toys.map((toy) => {
      if (toy.id === id) {
        return {
          ...toy,
          likes: toy.likes +  1
        }
      } else {
        return toy
      }
    })

    this.setState({
      toys: updatedToys
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={ this.state.toys }
          deleteToy={this.deleteToy}
          likeToy={this.likeToy}
        />
      </>
    );
  }

}

export default App;
