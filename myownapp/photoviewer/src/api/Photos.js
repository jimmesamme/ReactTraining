const fetchPhotos = () => {
	return fetch(`http://jsonplaceholder.typicode.com/photos?_limit=30`, {
      method: 'get'
  }).then((response) => {
      return response.json()
  })
}

const fetchPhoto = (photoId) => {
	return fetch(`http://jsonplaceholder.typicode.com/photos/${photoId}`, {
      method: 'get'
  }).then((response) => {
      return response.json()
  })
}

export {fetchPhotos, fetchPhoto}