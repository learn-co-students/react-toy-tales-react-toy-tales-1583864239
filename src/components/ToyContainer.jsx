import React from 'react';
import ToyCard from './ToyCard'
// import toyData from '../data'

const ToyContainer = (props) => {
  console.log(props)

  let arrayOfComponents = props.toys.map((toys) => {
    return <ToyCard key={toys.id}
    toyObj={toys}
    />
  })

  return(
    <div id="toy-collection">
      {arrayOfComponents}
    </div>
  );
}

export default ToyContainer;
