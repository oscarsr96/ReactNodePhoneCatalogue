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
        <div className="imageContainer">
          <ul>
            <h3> Name: {phone.name} </h3>
            <h3> Manufacturer: {phone.manufacturer} </h3>
            <h3> Description: {phone.description} </h3>
            <h3> Color: {phone.color} </h3>
            <h3> Price: {phone.price} </h3>
            <h3> Screen: {phone.screen} </h3>
            <h3> Processor: {phone.processor} </h3>
            <h3> Ram: {phone.ram} </h3>
          </ul>
        </div>
      </div>
    )
  }
}

export default Detail;
