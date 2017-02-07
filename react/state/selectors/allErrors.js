import { createSelector } from 'reselect';

export default createSelector(
  state => state.errors.initializeApplication,
  state => state.errors.fetchUsers,
  (initAppError, fetchUsersError) => initAppError || fetchUsersError
)
