import React, { useReducer } from 'react';
import PeopleContext from './PeopleContext';
import PeopleReducer from './PeopleReducer';
// import clienteAxios from '../../config/axios';

import { GET_PEOPLE } from '../types';

const people = [
	{ name: 'Owen Lars', height: 179, gender: 'male' },
	{ name: 'Beru Whitesun lars', height: 159, gender: 'female' },
	{ name: 'Mike Tower', height: 172, gender: 'male' },
	{ name: 'M Lars', height: 163, gender: 'female' },
];

const PeopleState = (props) => {
	const initialState = {
		people: people,
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
