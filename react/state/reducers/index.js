import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import data from './data';
import ui from './ui';
import status from './status';
import session from './session';
import error from './error';

const rootReducer = combineReducers({
  ui,
  data,
  routing,
  status,
  session,
  error
});

export default rootReducer;
