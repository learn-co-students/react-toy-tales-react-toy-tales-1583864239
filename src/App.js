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

  handleForm = (toyObj) => {
      let newObj = {
        ...toyObj,
        id: Math.floor(Math.random() * 1000 ),
        likes: 0 
      }

      let newArray = [...data, newObj]

      this.setState({
        toys: newArray
      })
  }

  deleteOneToy = (id) => {
    let filteredArray = this.state.toys.filter( toyObj => {
      return toyObj.id !== id
    })
    this.setState({
      toys: filteredArray
    })
  }

  addLike = (id, increment) => {
    let updateArray = this.state.toys.map( toy => {
      if ( toy.id === id){
        return  {
          ...toy,
          likes: toy.likes + increment
        }
      } else {
        return toy
      }
    })
    this.setState({
      toys: updateArray
    })
  }

  render(){
    console.log(this.state.toys)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleForm={this.handleForm} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteOneToy={this.deleteOneToy} addLike={this.addLike} />
      </>
    );
  }

}

export default App;
