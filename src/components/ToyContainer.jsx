import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  // console.log(props.toys);

  let arrayOfToyComponents = props.toys.map((toyObj) => {return <ToyCard key={toyObj.id} toyObject={toyObj} updateToy={props.updateToy} deleteToy={props.deleteToy}/>});
  // console.log(arrayOfToyComponents);
  
  return(
    <div id="toy-collection">
      {arrayOfToyComponents}
    </div>
  );
}

export default ToyContainer;
