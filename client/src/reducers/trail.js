import {
  ADD_TRAIL,
  DELETE_TRAIL,
  UPDATE_TRAIL,
  FETCH_TRAILS_FULFILLED
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
    case ADD_TRAIL:
      return [
        ...state,
        {
          id: action.trail.id,
          name: action.trail.name,
          length: action.trail.brewery,
          elevation: action.trail.elevation,
          description: action.trail.description,
          challenge: action.trail.challenge
        }
      ]
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