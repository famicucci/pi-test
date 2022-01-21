import React from 'react';
import Button from './Button';

const SearchForm = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('searching...');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="search"
				placeholder="Search..."
				className="border-solid border-blue-500 border p-2 rounded-lg"
			/>
			<Button content="Search" />
		</form>
	);
};

export default SearchForm;
