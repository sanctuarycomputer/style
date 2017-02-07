import {
  INITIALIZE_APPLICATION,
  FETCH_DEVICES,
} from '../actions/application';

export const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

const initialState = {
  initializeApplication: Status.IDLE,
  fetchDevices:          Status.IDLE,
};

export default function status(state = initialState, action) {
  switch (action.type) {
    case `${INITIALIZE_APPLICATION}_PENDING`:   return { ...state, initializeApplication: Status.PENDING }
    case `${INITIALIZE_APPLICATION}_FULFILLED`: return { ...state, initializeApplication: Status.FULFILLED }
    case `${INITIALIZE_APPLICATION}_REJECTED`:  return { ...state, initializeApplication: Status.REJECTED }

    case `${FETCH_DEVICES}_PENDING`:   return { ...state, fetchDevices: Status.PENDING }
    case `${FETCH_DEVICES}_FULFILLED`: return { ...state, fetchDevices: Status.FULFILLED }
    case `${FETCH_DEVICES}_REJECTED`:  return { ...state, fetchDevices: Status.REJECTED }

    default: return state;
  }
}
