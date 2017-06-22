import React, {Component} from 'react'
import {fetchPhotos} from '../api/Photos.js'	
import { connect } from 'react-redux'
import PhotoList from './PhotoList.js'

import * as actions from '../actions'


class PhotoListContainer extends Component {
	constructor() {
		super();
		this.showPhoto = this.showPhoto.bind(this);
	}

	componentDidMount() {
		fetchPhotos().then(photos => {
			this.props.dispatch(actions.receivePhotos(photos))
		})		
	}

	showPhoto(photoId) {
		this.props.history.push(`/photos/${photoId}`)
	}

	render() {

		return (
			<PhotoList 
				photos={this.props.photos} 
				showPhoto={this.showPhoto}
			/>
		);
	}
}

const mapStateToProps = state => ({
  photos: state.photos
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(PhotoListContainer)