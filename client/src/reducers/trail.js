import {
  ADD_TRAIL,
  DELETE_TRAIL,
  UPDATE_TRAIL,
  FETCH_TRAILS_FULFILLED,
  ADD_TRAIL_FULFILLED
} from '../actions/trail'

const initialState = {
  trails: []
}

export default function trail(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAILS_FULFILLED:
      return {
        ...state,
        trails: action.payload.data
      }
    case ADD_TRAIL_FULFILLED:
      return {
        ...state,
        trails: [...state.trails, action.payload.data]
      }
    case DELETE_TRAIL:
      return state.filter(trail => 
        trail.id !== action.trailId
      )
    case UPDATE_TRAIL:
      return state.map(trail =>
        trail.id === action.trailId ? action.trail : trail
    )
    default:
      return state
  }
}