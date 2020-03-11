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

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToy = (toyObject) => {
    let newToyObject = {
      ...toyObject,
      id: Math.floor(Math.random() * 100),
      likes: 0
    }
    let newToysArray = [...this.state.toys, newToyObject]
    this.setState({
      toys: newToysArray
    })
  }

  updateToy = (toyId, number) => {
    let updatedArray = this.state.toys.map(toyObject => {
      if (toyObject.id === toyId) {
        return {
          ...toyObject,
          likes: toyObject.likes + number
        }
      } else {
        return toyObject
      }
    })
    this.setState({
      toys: updatedArray
    })
  }

  deleteToy = (toyId) => {
    let filteredArray = this.state.toys.filter(toyObject => {
      return toyObject.id !== toyId
    })
    this.setState({
      toys: filteredArray
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
          toys={this.state.toys}
          updateToy={this.updateToy}
          deleteToy={this.deleteToy}
        />
      </>
    );
  }

}

export default App;
