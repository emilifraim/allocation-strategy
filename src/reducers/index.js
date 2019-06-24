import { combineReducers } from 'redux';
import allocationStrategyReducer from './allocationStrategyReducer';

export default combineReducers({
	allocationStrategy: allocationStrategyReducer
});
