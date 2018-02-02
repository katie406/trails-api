import {
  ADD_TRAIL,
  DELETE_TRAIL
} from '../actions/trail'

const initialState = [
  {
		id: 0,
    name: 'Lava Lake',
		length: '4 miles',
    elevation: 4200,
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
    console.log(action.trailId);
      return state.filter(trail => 
        trail.id !== action.trailId
      )
    default:
      return state
  }
}