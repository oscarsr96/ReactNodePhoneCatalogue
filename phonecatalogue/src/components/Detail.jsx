import React from 'react';


class Detail extends React.Component {

  render(){
    const phone = this.props.phone
    return(
      <div style={{display: "flex", flex: "0 1 50%", flexDirection: "column", flexFlow: "column nowrap"}}>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", flex: 1}}>
          <img style={{maxWidth: 500, maxHeight: 500}} alt="phone image" src={require('../assets/'+phone.imageFileName)}/>
        </div>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", flex: 1}}>
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
