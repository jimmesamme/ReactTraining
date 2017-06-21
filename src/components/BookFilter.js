import React from 'react'

const BookFilter = (props) => (
	<li className={ props.filter.selected? 'active': '' } 
			key={ props.filter.category } 
			onClick={ props.selectTab.bind(null, props.filter.category) 
	}>
    <a href="#0">{ props.filter.category }</a>
  </li>
)

export default BookFilter