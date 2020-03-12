import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import Toydata from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: Toydata
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToy = (oneToy) => {
    let newToyObj = {
      ...oneToy,
      id: Math.floor(Math.random()*1000000),
      likes: 0
    }

    let newToyarray =  [newToyObj, ...this.state.toys]

    this.setState({
      toys: newToyarray
    })
  }

  deletingToy = (id) => {
    let filteredToyArray = this.state.toys.filter(toyObj => {
      return toyObj.id != id
    })


    this.setState({

      toys: filteredToyArray
    })
  }

  render(){
    console.log(this.state);
    
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
        <ToyContainer toys={this.state.toys} deleteToy={this.deletingToy}/>
      </>
    );
  }

}

export default App;
