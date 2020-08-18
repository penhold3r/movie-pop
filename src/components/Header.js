import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'

import { connect } from 'react-redux'

import logo from '../assets/movie-pop-logo.png'

const Header = ({ saved }) => (
	<header className='header'>
		<h1 className='logo'>
			<Link to='/'>
				<img src={logo} alt='Movie Pop' />
				<span>MoviePop</span>
			</Link>
		</h1>
		<nav className='navbar'>
			<NavLink
				exact
				to='/'
				className='navbar__link button button--light-primary'
				activeClassName='active-link'>
				<i className='icon ri-home-line'></i>
				<span>Home</span>
			</NavLink>
			<NavLink
				exact
				to='/shows'
				className='navbar__link button button--light-primary'
				activeClassName='active-link'>
				<i className='icon ri-search-line'></i>
				<span>Shows</span>
			</NavLink>
			<NavLink
				exact
				to='/favorites'
				className='navbar__link faves button button--light-primary'
				activeClassName='active-link'>
				<i className='icon ri-heart-line'></i>
				<span>Favorites</span>
				<span className='count'>{saved.length}</span>
			</NavLink>
		</nav>
	</header>
)

const mapStateToProps = state => {
	return {
		saved: state.shows.savedList,
	}
}

Header.propTypes = {
	saved: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Header)
