import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let toyComponentArray = props.toys.map(item => 
      <ToyCard 
        key={item.id} 
        toyObject={item}
        updateToy={props.updateToy}
        deleteToy={props.deleteToy}
      />
  )

  return(
    <div>
      {toyComponentArray}
    </div>
  )

}

export default ToyContainer;
