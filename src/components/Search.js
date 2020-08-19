import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Search = ({ shows, setSearchResults }) => {
	const [searchValue, setSearchValue] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		if (searchValue) {
			// filter by partial match in show's name
			const results = shows.filter(({ show }) => show.name.toLowerCase().includes(searchValue))

			// pass results to parent
			setSearchResults({ searchValue, results })
			// clear form
			setSearchValue('')
		}
	}

	return (
		<div className='search-widget'>
			<form className='search-form' onSubmit={handleSubmit}>
				<input
					type='text'
					name='search'
					placeholder='Filter by show name'
					aria-label='Search'
					value={searchValue}
					onChange={e => setSearchValue(e.target.value)}
				/>
				<Button type='submit' variant='secondary'>
					<span>Search</span>
				</Button>
			</form>
		</div>
	)
}

Search.propTypes = {
	shows: PropTypes.array.isRequired,
	setSearchResults: PropTypes.func.isRequired,
}

export default Search
