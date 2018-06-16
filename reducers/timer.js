import {
  ENQUEUE_COMPLEX_DRINK,
  DEQUEUE_COMPLEX_DRINK,
  ENQUEUE_SIMPLE_DRINK,
  DEQUEUE_SIMPLE_DRINK,
  TOGGLE_HELP_ONBAR
} from '../actions/timer';

const initialState = {
  helpOnBar:false,
  simpleDrinks:[],
  complexDrinks:[],
  bestSimple:{},
  worstSimple:{},
  bestComplex:{},
  worstComplex:{}
}

export default function timerReducer(state = initialState, action){
  switch (action.type) {
    case ENQUEUE_SIMPLE_DRINK:
      return {
        ...state,
        simpleDrinks:[...state.simpleDrinks, action.currentDri]
      }
    default:
      return state;
  }
}
