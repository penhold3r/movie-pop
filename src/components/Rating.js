import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value = 0, total = 10, ...rest }) => {
	const stars = []
	let rating
	// round rating to 0 or 0.5
	rating = (Math.round(value * 2) / 2).toFixed(1)

	// integer reference
	const int = Math.floor(rating)

	// check if has decimal point
	const isDecimal = rating % 1 !== 0

	for (let i = 1; i <= Math.floor(total); i++) {
		if (i <= int) {
			// if value is less than loop push filled star
			stars.push(<i key={i} className='icon ri-star-fill'></i>)
		} else if (isDecimal && i === int + 1) {
			// if is decimal and integer part is covered push half star
			stars.push(<i key={i} className='icon ri-star-half-line'></i>)
		} else {
			// finally, push empty star to complete loop
			stars.push(<i key={i} className='icon ri-star-line'></i>)
		}
	}

	return <div {...rest}>{stars}</div>
}

Rating.propTypes = {
	value: PropTypes.number,
	total: PropTypes.number,
}

export default Rating
