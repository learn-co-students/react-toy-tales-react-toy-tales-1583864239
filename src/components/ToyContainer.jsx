import React from 'react';
import ToyCard from './ToyCard'


const ToyContainer = (props) => {

  let arrayOfComponents = props.toys.map((toy, index, theOriginalArray) => {
    return <ToyCard
      key={toy.id}
      toyObj={toy}
      deleteToy={props.deleteToy}
      likeToy={props.likeToy}
    />
  })

  return(
    <div id="toy-collection">
      { arrayOfComponents }
    </div>
  );
}

export default ToyContainer;
