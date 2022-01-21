import React, { useState, useContext } from 'react';
import Button from './Button';
import { SearchContext } from '../context/SearchContext';

const SearchForm = () => {
	const [value, setValue] = useState('');

	const { handleSearch } = useContext(SearchContext);

	const onSubmit = (e) => {
		e.preventDefault();
		handleSearch(value);
	};

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="search"
				value={value}
				placeholder="Search..."
				className="border-solid border-blue-500 border p-2 rounded-lg"
				onChange={onChange}
			/>
			<Button content="Search" />
		</form>
	);
};

export default SearchForm;
