import React from 'react';

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
				className="border-solid border-blue-500 border-2 p-2 rounded-lg"
			/>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg ml-2 font-semibold"
			>
				Search
			</button>
		</form>
	);
};

export default SearchForm;
