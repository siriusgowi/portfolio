import { DATA_LOADED, LOADING_ERROR } from '../actions/types';



const initialState = {
	data: null,
	isLoading: true
};



export default function(state = initialState, action) {
	switch(action.type) {	
		case DATA_LOADED:
			return {	
				...state,
				isLoading: false,
				data: action.payload
			};
		case LOADING_ERROR:
			return {
				...state,
				isLoading: false,
				data: action.payload
			}
		default:
			return state;
	}
}




