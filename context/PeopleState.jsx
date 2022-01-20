import React, { useReducer } from 'react';
import PeopleContext from './PeopleContext';
import PeopleReducer from './PeopleReducer';
// import clienteAxios from '../../config/axios';

import { GET_PEOPLE } from '../types';

const PeopleState = (props) => {
	const initialState = {
		people: [],
	};

	const [state, dispatch] = useReducer(PeopleReducer, initialState);

	const getPeople = () => {
		console.log('get people');
	};

	return (
		<PeopleContext.Provider value={{ people: state.people, getPeople }}>
			{props.children}
		</PeopleContext.Provider>
	);
};

export default PeopleState;
