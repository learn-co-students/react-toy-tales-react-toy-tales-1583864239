import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let generateToyList = props.toysData.map((toy) => { // wrote the generateToyList to map and render out each with ToyCard. 
      return <ToyCard //sent functions from Parent to Child (update, delete), as well as each individual toy id's and objec.
      key={toy.id}
      updateOneToy={props.updateOneToy}
      deleteOneToy={props.deleteOneToy}
      toyObj={toy}
  />
})

  return(
    <div id="toy-collection">
      { generateToyList }
    </div>
  );
}

export default ToyContainer;
