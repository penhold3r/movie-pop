import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<Layout>
			<section className='home-page'>
				<div className='hero'>
					<h2 className='hero__title'>Welcome to MoviePop</h2>
					<h3 className='hero__subtitle'>Star Wars Edition</h3>
					<p className='hero__lead'>Browse and search every star wars tv show ever!</p>
					<Link to='/shows' className='button button--secondary'>
						<span>Let's go!</span>
						<i className='icon ri-arrow-right-fill'></i>
					</Link>
				</div>
			</section>
		</Layout>
	)
}

export default HomePage
