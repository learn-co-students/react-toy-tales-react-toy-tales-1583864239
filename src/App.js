import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = { // currently shows the R of Crud. initializes with imported data in state.
    display: false,
    toys: data // sets imported data as "state"
  }

  //create a function that ADDS One New Toy. in form: input - name, image, submit.
  addOneNewToy = (toyObj) => {
    let newToyObj = { // creates the form by 1) creating a copy from already made inputs from the child Form, then the id & likes (not in Form inputs)
      ...toyObj,
      id: Math.floor(Math.random() * 1000), // creates a random id##
      likes: 0 // starts at 0 because... no likes yet. 
    }

    let newToyList = [newToyObj, ...this.state.toys] // creates a new array that copied original list, and new input in BEGINNING.

    this.setState({toys: newToyList}) // update the state through .setState() where the value of the key "display" is the new array. 
  }


  //create a function that updates One Toy based on the ID.
  updateOneToy = (id, increaseLikes) => { // function w/ 2 params, id, and amt of likes to increase. 
    let updatedArray = this.state.toys.map((toyObj) => { // iterates through data. 
      if (toyObj.id === id) { // compares if ID's match. 
        return { 
          ...toyObj, // copies specific matching toy Object. to adjust attributes.
          likes: toyObj.likes + increaseLikes 
        }// sets new value for "likes" key, IF ID's match. 
      } else {
        return toyObj // returns the object if ID's dont match. 
      }
    })
    this.setState({ toys: updatedArray })
  }

  // create a function that deletes One Toy based on the ID.
  deleteOneToy = (id) => { // function with an argument of ID to delete. 
    let filteredArray = this.state.toys.filter(toyObj => { // filters array based on ID. 
      return toyObj.id !== id //return ALL ID's that DONT match. 
    })

    this.setState({toys: filteredArray}) // change the state of the display based on the new filtered array. 
  }

  handleClick = () => { // puts on the "add a toy" button to display form vs not displaying form.
    let newBoolean = !this.state.display // between showing form vs not showing form. 
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
          <ToyForm
            addOneNewToy={this.addOneNewToy} // adds functionality as an attribute for child to invoke. 
          />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer 
        toysData={this.state.toys} // sends list of toys data to container 
        updateOneToy={this.updateOneToy} // sends functionality as attribute for Child to invoke to update. 
        deleteOneToy={this.deleteOneToy} // sends functionality as attribute for Child to invoke to destroy.
        />
      </>
    );
  }

}

export default App;
