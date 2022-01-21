import { GET_PEOPLE, HIDE_LOADING } from '../types';

const ClientesReducer = (state, action) => {
	switch (action.type) {
		case GET_PEOPLE:
			return {
				...state,
				people: action.payload,
			};
		case HIDE_LOADING:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default ClientesReducer;
