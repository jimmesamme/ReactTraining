import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'

const Root = (props) => (
	<Provider store={props.store}>
		<Router>
			<App />
		</Router>
	</Provider>
)

export default Root