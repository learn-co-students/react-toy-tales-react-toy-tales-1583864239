import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  // console.log(props)

  let arrayOfToys = props.toys.map((toys) => {
    return <ToyCard key={toys.id}
    toyObj={toys} />
  })


  return(
    <div id="toy-collection">
      {arrayOfToys}
    </div>
  );
}

export default ToyContainer;
