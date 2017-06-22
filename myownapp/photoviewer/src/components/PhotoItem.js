import React, {Component} from 'react'
import PropTypes from 'prop-types'

const PhotoItem = (props) => (
	<p>
		<img src={props.size === "thumbnail" ? props.photo.thumbnailUrl : props.photo.url} />
		<span>{props.photo.id}  | {props.photo.title}</span>
	</p>
)

PhotoItem.propTypes = {
	photo: PropTypes.shape({
		id: PropTypes.number
	}),
	size: PropTypes.string
}

PhotoItem.defaultProps = {
	size:"thumbnail"
}

export default PhotoItem