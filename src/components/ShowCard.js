import React from 'react'
import { Link } from 'react-router-dom'

const ShowCard = ({ show }) => {
	return (
		<div className='show-card'>
			<h3>{show.name}</h3>
			<Link to={`/show/${show.id}`} className='button'>
				View
			</Link>
		</div>
	)
}

export default ShowCard
