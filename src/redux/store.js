import { createStore, combineReducers, applyMiddleware } from 'redux';
import produce from 'immer';
import rooms from './reducers/rooms'
import messages from './reducers/messages'
import account from './reducers/account'

const logger = store => next => action => {
  console.log('Action: ', action);
  return next(action)
}

const changeWords = store => next => action => {
  if(action.type === "RECEIVED_MESSAGE"){
    action.payload.text = action.payload.text.replace(/angulr/g, 'react')
  }
  return next(action)
}
// function reducer(state, action){
//   return {
//     rooms: roomsReducer(state.rooms, action),
//     messages: messagesReducer(state.messages, action),
//     account: accountReducer(state.account, action)
//   }
// }

const reducer = combineReducers({rooms, messages, account})
const store = createStore(reducer, applyMiddleware(logger,changeWords));
window.store = store;
export default store;

