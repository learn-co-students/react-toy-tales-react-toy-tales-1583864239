import React from 'react';
import ToyCard from './ToyCard'
// import toyData from '../data';

const ToyContainer = (props) => {
  // create POJOs to pass to ToyCard

  let arrayOfToyComponents = props.toys.map((toyPOJO, index, theOriginalArray) => {
    return <ToyCard key={toyPOJO.id}
      toyObj={toyPOJO}
    />
  })


  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards 
      why doesn't this work? --> this.props.toys */
        arrayOfToyComponents
    
      }
    </div>
  );
}

export default ToyContainer;
