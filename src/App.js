import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toys: data,
    display: false
  }


  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addOneToy = (toyObj) => {
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

  deleteOneToy = (id) => {
    
      let filteredToyArray = this.state.toys.filter(toyObj => {
        return toyObj.id !== id
      })

      this.setState({
        toys: filteredToyArray
      })
    // })




  }

  render(){
  
    
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm
            addOneToy={this.addOneToy}
        
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
          toyData={this.state.toys}
          deleteOneToy={this.deleteOneToy}
        />
      </>
    );
  }

}

export default App;
