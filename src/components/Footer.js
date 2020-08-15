import React from 'react'

const Footer = () => (
	<footer className='footer'>
		<small>
			<span>MoviePop</span>
			<span>&nbsp;&copy;&nbsp;</span>
			<span>{new Date().getFullYear()}</span>
		</small>
	</footer>
)

export default Footer
