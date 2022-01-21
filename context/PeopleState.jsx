import React, { useReducer } from 'react';
import PeopleContext from './PeopleContext';
import PeopleReducer from './PeopleReducer';
import swapiAxios from '../config/swapiAxios';

import { GET_PEOPLE } from '../types';

const PeopleState = (props) => {
	const initialState = {
		people: [],
	};

	const [state, dispatch] = useReducer(PeopleReducer, initialState);

	const getPeople = async () => {
		const r = await swapiAxios.get('/api/people/');

		dispatch({
			type: GET_PEOPLE,
			payload: r.data.results,
		});
	};

	return (
		<PeopleContext.Provider value={{ people: state.people, getPeople }}>
			{props.children}
		</PeopleContext.Provider>
	);
};

export default PeopleState;
