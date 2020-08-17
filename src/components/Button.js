import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ element = 'button', variant, className, to, children, ...rest }) => {
	// map prop to Capitalized variable to be compiled to React.createComponent()
	const Element = element

	return to ? (
		<Link
			to={to}
			className={`button ${variant && 'button--' + variant} ${className || ''}`}
			{...rest}>
			{children}
		</Link>
	) : (
		<Element className={`button ${variant && 'button--' + variant} ${className || ''}`} {...rest}>
			{children}
		</Element>
	)
}

Button.propTypes = {
	element: PropTypes.string,
	variant: PropTypes.oneOf(['primary', 'secondary', 'light', 'light-primary']),
	className: PropTypes.string,
	to: PropTypes.string,
	children: PropTypes.node.isRequired,
}

export default Button
