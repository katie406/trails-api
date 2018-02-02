let nextTrailId = 0;

export const ADD_TRAIL = 'ADD_TRAIL';
export const DELETE_TRAIL = 'DELETE_TRAIL';

export function addTrail(trail) {
  return {
    type: ADD_TRAIL,
    trail: Object.assign({}, trail, {id: ++nextTrailId})
  }
}

export function deleteTrail(id) {
  return {
    type: DELETE_TRAIL,
    trailId: id
  }
}