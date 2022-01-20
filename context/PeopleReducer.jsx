import { GET_PEOPLE } from '../types';

const ClientesReducer = (state, action) => {
	switch (action.type) {
		// case GET_PEOPLE:
		// 	return {
		// 		...state,
		// 		people: action.payload,
		// 	};
		default:
			return state;
	}
};

export default ClientesReducer;
