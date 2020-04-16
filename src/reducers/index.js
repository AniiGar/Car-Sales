// //  This is from the Redux library to consolidate reducers
// import { combineReducers } from 'redux'; 

// // import all reducers created in the reducers folder

// export const rootReducer = combineReducers({
// //   add imported reducers here reducer here,
// //   add reducer here as line in an object
// });


// // Create initial state object to insure that the page has data for the initial render
// import { createSample } from '../actions/index';

// const initialState = {
//     userSample: {
//         name: 'Bentley',
//         age: 30
//     },
//     petSample: {
//         petName: 'Beezie',
//         petType: 'cat',
//         petAge: 1
//     },
// }


// export default (state = initialState, action) => {
//     console.log(action);

//     switch(action.type) {
//         case CREATE_SAMPLE: 
//             return {
//                 ...state,
//                 data: [...state.data, action.payload]
//             };
//         default:
//             return state;
//     }
// }

// // export the reducer and import on the component page in the app page. Pass into the createStore function.

import { UPDATE_PRICE, ADD_FEATURE, REMOVE_FEATURE } from '../actions/index';

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const reducer = (state = initialState, action) => {
    console.log(state);
    console.log(action);

    switch(action.type) {
        case "ADD_FEATURE":
          return {...state, 
            
            car: {
              ...state.car,
              features: [...state.car.features, action.payload]
            }
          };
        case "REMOVE_FEATURE":
      return {
        ...state,
        car: {...state.car,
        features: state.car.features.filter(item => item !== action.payload)
        }
      };
      case "UPDATE_PRICE":
      return{
        ...state,
        additionalPrice: state.additionalPrice + action.payload
      }
        
      default:
          return state;
      }
}