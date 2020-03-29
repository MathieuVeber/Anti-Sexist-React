import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const Logger = store => next => action => {
    console.group(action.type);
    console.log("%cPrevious state:", 'color:  #b3bd2d; font-weight: bold', store.getState());
    console.log("%cAction", 'color: #6FAAF7; font-weight: bold', action);
    let fin = next(action);
    console.log("%cCurrent state:", 'color: #2bba0b; font-weight: bold;', store.getState());
    console.groupEnd(action.type);
    return fin;
}

const middleware = [thunk, Logger]

const store = createStore(reducer, applyMiddleware(...middleware))

export default store