import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import logo from '../assets/movie-pop-logo.png'

const Header = () => {
	return (
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
			</nav>
		</header>
	)
}

export default Header
