import {
	FETCH_ALLOCATION_STRATEGY_DATA,
	LOADING_ALLOCATION_STRATEGY_DATA,
	CHANGE_ALLOCATION_STRATEGY_VALUE,
	CALCULATE_TOTAL_ALLOCATION_STRATEGY,
	CONFIRM_ALLOCATION_STRATEGY_DATA,
	RESET_TOTAL_ALLOCATION_STRATEGY_DATA
} from '../actions/types';

const initialState = {
	allocation_strategy_data: [],
	user_allocation_strategy_data: [],
	total_allocation: 0,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_ALLOCATION_STRATEGY_DATA:
			return {
				...state,
				loading: true
			};
		case FETCH_ALLOCATION_STRATEGY_DATA:
			return {
				...state,
				allocation_strategy_data: action.payload.map((data) => {
					let o = { ...data };
					o.value = '';
					o.placeholder = '';
					o.namefiled = data.name.replace(/[\. ,:-]+/g, '-');
					o.type = 'number';
					return o;
				}),
				loading: false
			};

		case CHANGE_ALLOCATION_STRATEGY_VALUE:
			return {
				...state,
				allocation_strategy_data: state.allocation_strategy_data.map((data) => {
					if (data.id === action.payload[0]) {
						let o = { ...data };
						o.value = action.payload[1];
						return o;
					}
					return data;
				})
			};

		case CALCULATE_TOTAL_ALLOCATION_STRATEGY:
			let total = state.allocation_strategy_data.reduce((sum, cur) => {
				return cur.value > 0 ? sum + cur.value : sum;
			}, 0);
			return {
				...state,
				total_allocation: total
			};

		case CONFIRM_ALLOCATION_STRATEGY_DATA:
			return {
				...state,
				user_allocation_strategy_data: [
					...state.allocation_strategy_data.filter((data) => {
						return data.value > 0;
					})
				]
			};

		case RESET_TOTAL_ALLOCATION_STRATEGY_DATA:
			return {
				...state,
				allocation_strategy_data: state.allocation_strategy_data.map((data) => {
					let o = { ...data };
					o.value = '';
					return o;
				}),
				user_allocation_strategy_data: [],
				total_allocation: 0
			};

		default:
			return state;
	}
}
