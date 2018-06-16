import { createStore } from 'redux';
import timerReducer from './reducers/timer.js'

const store = createStore(timerReducer);

export default store;
