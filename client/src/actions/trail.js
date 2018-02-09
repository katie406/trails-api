import axios from 'axios';

let nextTrailId = 0;

export const ADD_TRAIL = 'ADD_TRAIL';
export const DELETE_TRAIL = 'DELETE_TRAIL';
export const UPDATE_TRAIL = 'UPDATE_TRAIL';
export const FETCH_TRAILS = 'FETCH_TRAILS';
export const FETCH_TRAILS_FULFILLED = 'FETCH_TRAILS_FULFILLED';
export const ADD_TRAIL_FULFILLED = 'ADD_TRAIL_FULFILLED';

export function fetchTrails() {
  return {
    type: FETCH_TRAILS,
    payload: axios.get('api/trails')
  }
}

export function addTrail(trail) {
  return {
    type: ADD_TRAIL,
    payload: axios.post('api/trails', trail)
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