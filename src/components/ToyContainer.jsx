import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let arrayOfToys = props.toys.map((toyPOJO) => {
    return <ToyCard key={ toyPOJO.id }
    toyObj={ toyPOJO }
    />
  })
  
  return (
    <div id="toy-collection">
      {arrayOfToys}
    </div>
  );
}

export default ToyContainer;
