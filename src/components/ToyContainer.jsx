import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let generateToyList = props.toysData.map((toy) => {
      return <ToyCard 
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
