import {
	GET_PEOPLE,
	REMOVE_PERSON,
	CHANGE_SEARCH,
	HIDE_LOADING,
} from '../types';

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
		case REMOVE_PERSON:
			return {
				...state,
				people: state.people.filter((person) => person.name !== action.payload),
			};
		case CHANGE_SEARCH:
			return {
				...state,
				search: action.payload,
			};
		default:
			return state;
	}
};

export default ClientesReducer;
