import React from 'react';
import Loader from 'react-loader-spinner';
import { Button } from '@material-ui/core';
import Detail from './Detail.jsx';
import { connect } from 'react-redux';
import { addPhones, changeSelectedPhone } from '../redux/actions/index';
import '../styles/phonecatalogue.css';
import axios from 'axios';

//functions to manage state with redux
function mapStateToProps(state) {
  return { phones: state.phones, selectedPhone: state.selectedPhone }
}

//we just have to actions
function mapDispatchToProps(dispatch) {
  return {
    addPhones: phones => dispatch(addPhones(phones)),
    changeSelectedPhone: phone => dispatch(changeSelectedPhone(phone))
  };
}


class PhoneCatalogue extends React.Component {

  //when the component is loaded, request axios to get phones and update state
  componentDidMount(){
    axios.get('http://localhost:3000/phones')
      .then(res => {
        console.log(res)
        const phones = res.data;
        this.props.addPhones(phones);
    })
  }

  render(){
    /*map the phones in the state to show one button per phone
    if the button is selected, it will update the state and have another color*/
    const phones = this.props.phones.map((data) =>
         <div className="phone" key={data.id}>
           <Button
             color={this.props.selectedPhone === data ? "primary": "default"}
             fullWidth={true}
             variant="contained"
             onClick={() => this.props.selectedPhone !== data ?
                           this.props.changeSelectedPhone(data) :
                           this.props.changeSelectedPhone("")
                     }
           >
             {data.name}
           </Button>
         </div>);


     //render the list of phones if loaded, if not, a spinner
     const upElement = this.props.phones.length > 0 ? phones : <Loader/>


    //render an image if no phone is selected, otherwise, a Detail component
    const downElement = this.props.selectedPhone === "" ?
                  <img style={{width: 300, height: 300}}
                       alt="main image"
                       src={require('../assets/main.png')}
                  /> :
                  <Detail phone={this.props.selectedPhone}/>

    return (
      <div clasName="outerDiv">
        <div className="upContainer">
            {upElement}
        </div>
        <div className="downContainer">
            {downElement}
        </div>
      </div>
    );
}
}

//connect to Redux
const PhoneCatalogueRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneCatalogue);

export default PhoneCatalogueRedux;
