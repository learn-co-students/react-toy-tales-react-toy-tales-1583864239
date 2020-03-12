import React from 'react';
import ToyCard from './ToyCard'



const ToyContainer = (props) => {
  let arrayOfToyComponents = props.toyData.map(toyObj => {
    return <ToyCard
              key={toyObj.id}
              name={toyObj.name}
              image={toyObj.image}
              likes={toyObj.likes}
              deleteOneToy={props.deleteOneToy}
              toyObj={toyObj}
          />
  })
  return(
    <div id="toy-collection">
      {arrayOfToyComponents}
    </div>
  );
}

export default ToyContainer;
