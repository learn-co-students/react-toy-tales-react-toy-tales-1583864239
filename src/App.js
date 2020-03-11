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
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={ this.state.toys }
        />
      </>
    );
  }

}

export default App;
