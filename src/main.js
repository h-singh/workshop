import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';

// store methods from redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// Provider layer
import { Provider } from 'react-redux';

// simple reducer
const reducers = {
    root: (state = {counter: 0}, action) => {
        if(action.type === 'ADD') {
            return {
                ...state,
                counter: state.counter + (action.bumpBy ? action.bumpBy : 1)
            }
        }
        if(action.type === 'SUB') {
            return {
                ...state,
                counter: state.counter - (action.downBy ? action.downBy : 1)
            }
        }
        return state;
    }
};

const middlewares = [];

console.log('Creating store');
export const store = createStore(
    combineReducers(reducers),
    {},
    compose(...middlewares)
);

window.Store = store;

ReactDom.render(<Provider store={store}><Root initMe={1}/></Provider>, document.getElementById('root'));
