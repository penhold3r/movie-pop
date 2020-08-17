import React from 'react'
import Button from './Button'

const GoBack = () => (
	<nav className='back-nav'>
		<Button to='/shows'>
			<i className='icon ri-arrow-left-circle-line'></i>
			<span>Go back to list</span>
		</Button>
	</nav>
)

export default GoBack
