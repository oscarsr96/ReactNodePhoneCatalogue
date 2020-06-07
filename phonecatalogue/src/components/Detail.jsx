import React from 'react';
import '../styles/detail.css';


class Detail extends React.Component {

  render(){
    const phone = this.props.phone
    return(
      <div className="outerDiv">
        <div className="imageContainer">
          <img style={{height: 400, width: 400}} alt="phone image" src={require('../assets/'+phone.imageFileName)}/>
        </div>
        <div className="detailContainer">
          <ul>
            <h3> Name: <span>{phone.name}</span> </h3>
            <h3> Manufacturer: <span>{phone.manufacturer}</span> </h3>
            <h3> Description: <span>{phone.description}</span> </h3>
            <h3> Color: <span>{phone.color}</span> </h3>
            <h3> Price: <span>{phone.price}</span> </h3>
            <h3> Screen: <span>{phone.screen}</span> </h3>
            <h3> Processor: <span>{phone.processor}</span> </h3>
            <h3> Ram: <span>{phone.ram}</span> </h3>
          </ul>
        </div>
      </div>
    )
  }
}

export default Detail;
