import React from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'

const NotFoundPage = () => (
	<Layout pageTitle='Page Not Found'>
		<section className='not-found'>
			<h2 className='not-found__title'>404</h2>
			<p className='not-found__text'>This isn't the page you are looking for...</p>
			<Button to='/' variant='primary' className='not-found__button'>
				Go Back Home
			</Button>
		</section>
	</Layout>
)

export default NotFoundPage
