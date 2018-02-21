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
        /*
        if(action.type === 'RAND') {
            let r = ~~(Math.random() * 10);
            r = r % 2 === 0 ? r : -r;
            console.log(r);
            return {
                ...state,
                counter: state.counter + r
            }
        }*/
        return state;
    }
};

const middlewares = [];

/*const middleware = store => next => action => {
    if(action.type === 'SUB') {
        console.log('Sub=Action', action);
    }
    next(action);
};

middlewares.push(applyMiddleware(middleware));
*/

//setInterval(() => {
    //store.dispatch({type: 'SUB'});
//}, 1000);

//const f=function(store) { return function(next) { return function(action) { next(action); }}}

console.log('Creating store');
export const store = createStore(
    combineReducers(reducers),
    {},
    compose(...middlewares)
);

window.Store = store;

ReactDom.render(<Provider store={store}><Root initMe={1}/></Provider>, document.getElementById('root'));
