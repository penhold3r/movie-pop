import React, { useState } from 'react'
import Button from './Button'

const Search = ({ shows, setSearchResults }) => {
	const [searchValue, setSearchValue] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		const results = shows.filter(({ show }) => show.name.toLowerCase().includes(searchValue))
		setSearchValue('')
		setSearchResults({ searchValue, results })
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

export default Search
