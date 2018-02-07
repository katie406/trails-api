import {
  ADD_TRAIL,
  DELETE_TRAIL,
  UPDATE_TRAIL
} from '../actions/trail'

const initialState = [
  {
		id: 0,
    name: 'Lava Lake',
		length: '4 miles',
    elevation: 4200,
    description: 'steep at parts',
    challenge: "moderate"

  },
  {
    id: 1,
    name: 'The M',
		length: '3 miles',
    elevation: 800,
    description: 'steep at parts',
    challenge: "moderate"
  }
]

export default function trail(state = initialState, action) {
  switch (action.type) {
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