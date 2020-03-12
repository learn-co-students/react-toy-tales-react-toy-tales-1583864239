import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  let arrayOfToys = props.toys.map((oneToyObj) => {
    return <ToyCard key={oneToyObj.id}
                    name={oneToyObj.name}
                    image={oneToyObj.image}
                    likes={oneToyObj.likes}
                    deleteToy={props.deleteToy}
                    toyObj={oneToyObj}
            />
  })

  return(
    <div id="toy-collection">
      {arrayOfToys}
    </div>
  );
}

export default ToyContainer;
