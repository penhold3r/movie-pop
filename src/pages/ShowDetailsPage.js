import React from 'react'
import Layout from '../components/Layout'

const ShowDetailsPage = ({ match }) => {
	const { id } = match.params

	return (
		<Layout pageTitle={id}>
			<section className='show-details'>
				<h2>Single Show</h2>
				<p>id: {id}</p>
			</section>
		</Layout>
	)
}

export default ShowDetailsPage
