import {
  INITIALIZE_APPLICATION,
  FETCH_DEVICES,
} from '../actions/application';

const initialState = {
  initializeApplication: null,
  fetchUsers:            null,
};

export default function status(state = initialState, action) {
  switch (action.type) {
    case `${INITIALIZE_APPLICATION}_PENDING`:
    case `${INITIALIZE_APPLICATION}_FULFILLED`:
      return { ...state, initializeApplication: null }
    case `${INITIALIZE_APPLICATION}_REJECTED`:
      return { ...state, initializeApplication: action.payload.error }

    case `${FETCH_DEVICES}_PENDING`:
    case `${FETCH_DEVICES}_FULFILLED`:
      return { ...state, fetchDevices: null }
    case `${FETCH_DEVICES}_REJECTED`:
      return { ...state, fetchDevices: action.payload.error }

    default: return state;
  }
}
