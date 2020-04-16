// SAMPLE ACTION

// export const CREATE_SAMPLE = 'CREATE_SAMPLE';

// export const createSample = sampleData => {
//     console.log(sampleData);

//     return {
//         type: CREATE_SAMPLE,
//         payload: sampleData
//     }
// }

// import the action into the component page and pass as object in the connector.


export const UPDATE_PRICE= "UPDATE_PRICE";
export const ADD_FEATURE= "ADD_FEATURE";
export const REMOVE_FEATURE="REMOVE_FEATURE";

export const updatePrice= feature => {
  return { 
    type: "UPDATE_PRICE", 
    payload: feature
  };
};

export const addFeature = feature => {
  return { 
    type: "ADD_FEATURE", 
    payload: feature 
  };
};

export const removeFeature = feature => {
  return { 
    type: "REMOVE_FEATURE", 
    payload: feature 
  };
};