import React, { useContext } from 'react';
import Button from './Button';
import PeopleContext from '../context/people/PeopleContext';

const Card = (props) => {
	const { name, height, gender } = props;

	const { removePerson } = useContext(PeopleContext);

	const handleClick = () => {
		removePerson(name);
	};

	return (
		<div className="flex border-solid border-gray-200 border shadow-md p-4 rounded-lg mb-2">
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
				<Button content="Delete" handleClick={handleClick} />
			</div>
		</div>
	);
};

export default Card;
