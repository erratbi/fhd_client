import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import user from './user';

export default combineReducers({
    form, user
});