import React from 'react';
import Moment from 'react-moment';

const LastUpdated = ({ date }) => {
	return (
		<p className='text-muted' style={{ marginTop: '0.5rem' }}>
			Last updated:{' '}
			<Moment fromNow ago>
				{date}
			</Moment>{' '}
			ago
		</p>
	);
};

export default LastUpdated;
