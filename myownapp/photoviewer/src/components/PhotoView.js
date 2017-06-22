import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import PhotoItem from './PhotoItem.js'

const PhotoView = (props) => (
	<div>
		<Link to="/photos">Back to photos</Link>
		<PhotoItem 
			photo={props.photo}
			size="full"
		/>
	</div>
)

PhotoView.propTypes = {
	photo: PropTypes.shape({
		id: PropTypes.number
	})
}

export default PhotoView