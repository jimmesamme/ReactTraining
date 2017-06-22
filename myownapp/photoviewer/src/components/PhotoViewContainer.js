import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import {fetchPhoto} from '../api/Photos.js'	

import PhotoView from './PhotoView.js'

class PhotoViewContainer extends Component {
	constructor() {
		super();
		this.state = {
			photo:{}
		}
	}

	componentDidMount() {
		fetchPhoto(this.props.match.params.id).then((data) => this.setState({photo:data}));
	}

	render() {
		return (
			<div>
				<PhotoView photo={this.state.photo} />
			</div>
		)
	}
}

PhotoViewContainer.propTypes = {
	match: PropTypes.object.isRequired
}

export default PhotoViewContainer