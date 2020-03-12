import React, {Component} from 'react';
import ToyCard from './ToyCard';
import toyData from '../data';

class ToyContainer extends Component {
  
  renderToys = () => {
    return toyData.map(toyObj => 
      <ToyCard key={toyObj.id} id={toyObj.id} name={toyObj.name} image={toyObj.image} likes={toyObj.likes} />
     )
  }

  render () {
  return(
       <div id="toy-collection">
          {this.renderToys()}
       </div>
    );
  }
}

export default ToyContainer;
