import React, { useReducer } from 'react';
import PeopleContext from './PeopleContext';
import PeopleReducer from './PeopleReducer';
import swapiAxios from '../config/swapiAxios';

import { GET_PEOPLE, HIDE_LOADING } from '../types';

const PeopleState = (props) => {
	const initialState = {
		people: [],
		loading: true,
	};

	const [state, dispatch] = useReducer(PeopleReducer, initialState);

	const getPeople = async () => {
		const r = await swapiAxios.get('/api/people/');

		dispatch({
			type: GET_PEOPLE,
			payload: r.data.results,
		});

		dispatch({
			type: HIDE_LOADING,
		});
	};

	return (
		<PeopleContext.Provider
			value={{ people: state.people, loading: state.loading, getPeople }}
		>
			{props.children}
		</PeopleContext.Provider>
	);
};

export default PeopleState;
