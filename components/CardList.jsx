import React, { useContext, useEffect } from 'react';
import PeopleContext from '../context/people/PeopleContext';
import Card from './Card';
import Pulse from './Pulse';
import { SearchContext } from '../context/SearchContext';

const CardList = () => {
	const { people, loading, getPeople } = useContext(PeopleContext);
	const { search, filterByName } = useContext(SearchContext);

	useEffect(() => {
		getPeople();
	}, []);

	const n = 10;

	return (
		<section className="my-4">
			{!loading ? (
				<>
					{filterByName(people, search).map((person) => (
						<Card
							key={person.name}
							name={person.name}
							height={person.height}
							gender={person.gender}
						/>
					))}
				</>
			) : (
				<>
					{[...Array(n)].map((e, i) => (
						<div className="mb-2" key={i}>
							<Pulse />
						</div>
					))}
				</>
			)}
		</section>
	);
};

export default CardList;
