import {
	FETCH_ALLOCATION_STRATEGY_DATA,
	//LOADING_ALLOCATION_STRATEGY_DATA,
	CHANGE_ALLOCATION_STRATEGY_VALUE,
	CALCULATE_TOTAL_ALLOCATION_STRATEGY,
	CONFIRM_ALLOCATION_STRATEGY_DATA,
	RESET_TOTAL_ALLOCATION_STRATEGY_DATA
} from '../actions/types';

import { data } from '../data/allocationStrategyData';

// Fetch Allocation Strategy API
// export const fetchAllocationStrategy = () => (dispatch) => {
// 	dispatch(setAllocationStrategyLoading());
// 	axios
// 		.get('https://my-json-server.typicode.com/emilifraim/allocationStrategyDB/db')
// 		.then((res) =>
// 			dispatch({
// 				type: FETCH_ALLOCATION_STRATEGY_DATA,
// 				payload: res.data
// 			})
// 		)
// 		.catch((err) => {
// 			dispatch({
// 				type: FETCH_ALLOCATION_STRATEGY_DATA,
// 				payload: null
// 			});
// 		});
// };

export const fetchAllocationStrategy = () => {
	return {
		type: FETCH_ALLOCATION_STRATEGY_DATA,
		payload: data
	};
};

export const changeAllocationStrategyValue = (id, value) => {
	return {
		type: CHANGE_ALLOCATION_STRATEGY_VALUE,
		payload: [ id, value ]
	};
};

export const calculateTotalAllocationStrategy = () => {
	return {
		type: CALCULATE_TOTAL_ALLOCATION_STRATEGY
	};
};

export const confirmAllocationStrategy = () => {
	return {
		type: CONFIRM_ALLOCATION_STRATEGY_DATA
	};
};

export const resetTotalAllocationStrategyData = () => {
	return {
		type: RESET_TOTAL_ALLOCATION_STRATEGY_DATA
	};
};

// Loading Allocation Strategy
// const setAllocationStrategyLoading = () => {
// 	return {
// 		type: LOADING_ALLOCATION_STRATEGY_DATA
// 	};
// };
