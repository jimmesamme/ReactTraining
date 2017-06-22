import React, {Component} from 'react'
import {fetchPhotos} from '../api/Photos.js'	
import PhotoList from './PhotoList.js'

class PhotoListContainer extends Component {
	constructor() {
		super();
		this.state = {
			photos: []
		};
		this.showPhoto = this.showPhoto.bind(this);
	}

	componentDidMount() {
		fetchPhotos().then((data) => this.setState({photos:data}));
	}

	showPhoto(photoId) {
		this.props.history.push(`/photos/${photoId}`)
	}

	render() {
		return (
			<PhotoList 
				photos={this.state.photos} 
				showPhoto={this.showPhoto}
			/>
		);
	}
}

export default PhotoListContainer