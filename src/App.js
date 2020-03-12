import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import toysData from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: toysData
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToy = (toyObj) => {
    let newToyObj = {
    ...toyObj,
    id: Math.floor(Math.random() * 10000),
    likes: 0
    }



    let newToyArray = [newToyObj, ...this.state.toys]

    this.setState({
      toys: newToyArray
    })

  }

  deleteToy = (id) => {

    let filteredToyArray = this.state.toys.filter(toyObj => {
        return toyObj.id !== id
    })
    

    this.setState({
      toys: filteredToyArray
    })
  }

  


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy ={this.addNewToy} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy}/>
      </>
    );
  }

}

export default App;
