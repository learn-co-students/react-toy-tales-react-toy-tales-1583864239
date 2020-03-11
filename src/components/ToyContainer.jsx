import React from 'react';
import ToyCard from './ToyCard'
// import toyData from '../data.js'

const ToyContainer = (props) => {
  // console.log(toyData)
  // console.log(props.toys.map((toy, index) => {
  //   console.log( <ToyCard toy={toy} key={index} /> )
  // }))

  let arrayOfComponents = props.toys.map( ( toyObj, index) => {
    return <ToyCard toy={toyObj} key={index} deleteOneToy={props.deleteOneToy} addLike={props.addLike} />
  })

  // console.log(arrayOfComponents)

  return(
    <div id="toy-collection">
     {arrayOfComponents}
    </div>
  );
}

export default ToyContainer;


// {props.toys.map( (toy, index) => {
//   return <ToyCard toy={toy} key={index} />
// })}
