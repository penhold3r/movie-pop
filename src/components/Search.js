import React from 'react'

const Search = () => {
	return (
		<div className='search-widget'>
			<form action='' className='search-form'>
				<input
					type='text'
					name='search'
					placeholder='Filter by show name'
					aria-label='Search'
				/>
				<button type='submit' className='button button--secondary'>
					Search shows
				</button>
			</form>
		</div>
	)
}

export default Search
