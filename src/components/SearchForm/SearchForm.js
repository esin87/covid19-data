import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = (props) => {
	const { handleSubmit, handleChange, searchString } = props;

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control
					size='lg'
					placeholder='Search by country name'
					type='text'
					name='searchString'
					required
					onChange={handleChange}
					value={searchString}
				/>
			</Form.Group>
			<Button type='submit'>Submit</Button>
		</Form>
	);
};

export default SearchForm;
