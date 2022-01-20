import React, { useContext, useEffect } from 'react';
import PeopleContext from '../context/PeopleContext';
import Card from './Card';

const CardList = () => {
	const { people, getPeople } = useContext(PeopleContext);

	useEffect(() => {
		getPeople();
	}, []);

	return (
		<section className="my-4">
			{people.map((person) => (
				<Card
					key={person.name}
					name={person.name}
					height={person.height}
					gender={person.gender}
				/>
			))}
		</section>
	);
};

export default CardList;
