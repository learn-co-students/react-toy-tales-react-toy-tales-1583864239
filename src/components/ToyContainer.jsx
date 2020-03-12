import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  let arrayOfToys = props.toys.map((oneToy)=> {

    return <ToyCard key={oneToy.id}
                    name={oneToy.name}
                    image={oneToy.image}
                    likes={oneToy.likes}
                    delete={props.deleteToy}
                    thisToy = {oneToy}
                                        />
  })
  return(
    <div id="toy-collection">
      {arrayOfToys}
      {/* <div></div>
      <ToyCard /> */}
    </div>
  );
}

export default ToyContainer;
