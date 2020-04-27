import React from 'react';

function SearchHeader({ lastSearch }) {
	return (
		<header>
			<p>
				Showing results for <strong>{lastSearch}</strong>
			</p>
		</header>
	);
}
export default SearchHeader;
