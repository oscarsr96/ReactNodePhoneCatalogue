import React from 'react';


class Detail extends React.Component {

  render(){
    const phone = this.props.phone
    return(
      <div style={{display: "flex", flexDirection: "column", flexBasis: "100%", height: "100%"}}>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", flex: 1}}>
          <img alt="" src={require('../assets/'+phone.imageFileName)}/>
        </div>
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", flex: 1}}>
          <p> Name: {phone.name} </p>
          <p> Manufacturer: {phone.manufacturer} </p>
          <p> Description: {phone.description} </p>
          <p> Color: {phone.color} </p>
          <p> Price: {phone.price} </p>
          <p> Screen: {phone.screen} </p>
          <p> Processor: {phone.processor} </p>
          <p> Ram: {phone.ram} </p>
        </div>
      </div>
    )
  }
}

export default Detail;
