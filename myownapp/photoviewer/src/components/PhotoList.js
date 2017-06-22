import React, {Component} from 'react'
import PropTypes from 'prop-types'

import PhotoLink from './PhotoLink'

const PhotoList = (props) => (
	<ul>
		{props.photos.map(photo => (
			<li key={photo.id}>
				<PhotoLink
					photo={photo} 
					showPhoto={props.showPhoto}
				/>
			</li>
		))}
	</ul>
)

PhotoList.propTypes = {
	photos: PropTypes.array.isRequired,
	showPhoto: PropTypes.func.isRequired
}

export default PhotoList