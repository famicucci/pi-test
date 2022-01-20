import React, { useContext, useEffect } from 'react';
import Button from './Button';
import PeopleContext from '../context/PeopleContext';

const Card = (props) => {
	const { name, height, gender } = props;

	return (
		<div className="flex border-solid border-gray-200 border-2 p-4 rounded-lg mb-2">
			<div className="grow">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p>
					Heigh: <span>{height}</span>
				</p>
				<p>
					Gender: <span>{gender}</span>
				</p>
			</div>
			<div>
				<Button content="Delete" />
			</div>
		</div>
	);
};

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
