import React from 'react';
import { DefaultSearchBoxProps } from './common';
import './SearchBox.scss';

const SearchBox = ({
	placeholder = 'Search...',
	label = 'searchbox-input-field',
	value,
	onChange,
}: DefaultSearchBoxProps) => {
	return (
		<form className="userInputForm">
			<input
				aria-label={label}
				type="text"
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
				value={value}
			/>
		</form>
	);
};

export default SearchBox;
