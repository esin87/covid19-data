import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = ({ handleSubmit, handleChange, searchString }) => {
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<h2>Country Search</h2>
				<Form.Control
					size='lg'
					placeholder='Search by country name'
					type='text'
					name='searchString'
					required
					onChange={handleChange}
					value={searchString}
				/>
				<Form.Text className='text-muted'>
					Search by full or partial country name. No abbreviations, i.e.,
					"United States", not "USA".
				</Form.Text>
			</Form.Group>
			<Button type='submit'>Submit</Button>
		</Form>
	);
};

export default SearchForm;
