import React from 'react';
import Loader from 'react-loader-spinner';
import { Button } from '@material-ui/core';
import Detail from './Detail.jsx';
import { connect } from 'react-redux';
import { addPhones, changeSelectedPhone } from '../redux/actions/index';
import '../styles/phonecatalogue.css';
import axios from 'axios';


function mapStateToProps(state) {
  return { phones: state.phones, selectedPhone: state.selectedPhone }
}

function mapDispatchToProps(dispatch) {
  return {
    addPhones: phones => dispatch(addPhones(phones)),
    changeSelectedPhone: phone => dispatch(changeSelectedPhone(phone))
  };
}


class PhoneCatalogue extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    setTimeout(
    function() {
      this.props.addPhones([{id: 1, name: "a", imageFileName: "Galaxy_S7.png" }, {id:2, name:"b"}])
    }
    .bind(this),
    3000
);
  axios.get('http://localhost:3000/phones')
    .then(res => {
      console.log(res)
      const phones = res.data;
      this.props.addPhones(phones);
  })
  }

  render(){

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

    const leftElement = this.props.selectedPhone === "" ?
                  <img style={{width: 500, height: 500}}
                       alt="main image"
                       src={require('../assets/main.png')}
                  /> :
                  <Detail phone={this.props.selectedPhone}/>

    const rightElement = this.props.phones.length > 0 ? phones : <Loader/>


    return (
      <div clasName="outerDiv">
        <div className="upContainer">
            {rightElement}
        </div>
        <div className="downContainer">
            {leftElement}
        </div>
      </div>
    );
}
}

const PhoneCatalogueRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneCatalogue);

export default PhoneCatalogueRedux;
