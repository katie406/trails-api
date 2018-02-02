let nextTrailId = 0;

export const ADD_TRAIL = 'ADD_TRAIL';

export default function addTrail(trail) {
  console.log(trail);
  return {
    type: ADD_TRAIL,
    trail: Object.assign({}, trail, {id: nextTrailId++})
  }
}