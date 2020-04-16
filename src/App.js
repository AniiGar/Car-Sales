import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {  updatePrice, removeFeature, addFeature } from './actions/index';

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
    props.updatePrice(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
    props.updatePrice(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// function that tells connect which piece of state to pass to the component
// it takes in state as an arguement (what the reducer has returned) and returns and object
const mapStateToProps = state => {
  return {
    car: state.car, 
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}

// connect is imported from react-redux because is is a path to pass react components to the redux store.
// connect is called twice
// the first call passes in a function and an object. connect(null, {})
// the second call passes in the component that is being exported. connect(mapStateToProps)(App)
export default connect(mapStateToProps, { updatePrice, removeFeature, addFeature })(App);