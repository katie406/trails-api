import axios from 'axios';

let nextTrailId = 0;

export const ADD_TRAIL = 'ADD_TRAIL';
export const DELETE_TRAIL = 'DELETE_TRAIL';
export const UPDATE_TRAIL = 'UPDATE_TRAIL';

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

export function updateTrail(id, trail) {
  return {
    type: UPDATE_TRAIL,
    trailId: id,
    trail: trail
  }
}