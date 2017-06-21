import React from 'react'

import BookFilter from './BookFilter.js'

const BookFilters = (props) => (
	<div className="row">
    <div className="col-lg-12">
      <ul className="nav nav-pills text-center">
      {
        props.filters.map(filter => (
		      <BookFilter 
		      	filter={filter} 
		      	selectTab={props.selectTab}
		      />
		    ))
		   }
      </ul>
    </div>
  </div>
)

export default BookFilters;