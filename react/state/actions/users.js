export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

function _fetchUserProfile(id) {
  return {
    type: FETCH_USER_PROFILE,
    payload: fetch(`/users/${id}`)
  }
}

function _fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: fetch('/users')
  }
}

export function fetchUsers() => {
  return dispatch => dispatch(_fetchUsers());
}

/* Component */
fetchUsers()(dispatch);
