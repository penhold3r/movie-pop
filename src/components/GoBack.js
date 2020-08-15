import React from 'react'
import { Link } from 'react-router-dom'

const GoBack = () => (
	<nav className='back-nav'>
		<Link to='/shows' className='button'>
			<i className='icon ri-arrow-left-circle-line'></i>
			<span>Go back to list</span>
		</Link>
	</nav>
)

export default GoBack
