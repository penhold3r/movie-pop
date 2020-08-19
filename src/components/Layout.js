import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// global components
import Header from './Header'
import Footer from './Footer'

// favicons
import ICO from '../assets/favicon.ico'
import PNG from '../assets/favicon.png'

// global styles
import 'remixicon/fonts/remixicon.css'
import '../sass/index.scss'

const Layout = ({ pageTitle, children }) => {
	const title = 'MoviePop'
	const siteTitle = pageTitle ? `${pageTitle} - ${title}` : title
	return (
		<>
			<Helmet
				htmlAttributes={{ lang: 'en' }}
				title={siteTitle}
				meta={[
					{
						name: 'description',
						content: 'List of StarWars tv shows',
					},

					{
						name: 'theme-color',
						content: '#071931',
					},
				]}
				link={[
					{
						href: ICO,
						rel: 'shortcut icon',
						type: 'image/x-icon',
					},
					{
						href: PNG,
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32 192x192',
					},
					{
						href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
						rel: 'stylesheet',
					},
				]}
			/>

			<Header />
			<div className='container'>{children}</div>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
}

export default Layout
