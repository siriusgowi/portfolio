import axios from 'axios';
import { DATA_LOADED, LOADING_ERROR } from './types';




// Load homepage data
export const loadData = () => async dispatch => {
	const url = 'http://localhost:3000/data/data.json';

	try {
		const res = await axios.get(url);

		dispatch({
			type: DATA_LOADED,
			payload: res.data
		});

	} catch(err) {
		dispatch({
			type: LOADING_ERROR
		});

	}
}
