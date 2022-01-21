import React from 'react';

const Button = (props) => {
	const { content, handleClick } = props;

	return (
		<button
			type="submit"
			className="bg-blue-500 hover:bg-blue-700 transition duration-150 ease-in text-white p-2 rounded-lg ml-2 font-semibold"
			onClick={handleClick}
		>
			{content}
		</button>
	);
};

export default Button;
