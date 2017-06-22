import React from 'react'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PhotoItem from './PhotoItem.js'

const PhotoLink = (props) => (
	<Link to={`/photos/${props.photo.id}`}>
		<PhotoItem photo={props.photo} />
	</Link>
)

PhotoLink.propTypes = {
	photo: PropTypes.object.isRequired,
	showPhoto: PropTypes.func.isRequired
}


export default PhotoLink