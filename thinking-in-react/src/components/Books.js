import React from 'react'

import filters from '../mocks/filters'
import books from '../mocks/books'

import BookFilters from './BookFilters'
import BookList from './BookList'

class Books extends React.Component {

	constructor() {
		super();
		this.selectTab = this.selectTab.bind(this)
		this.state = {
			books
		}
	}

	selectTab ( category ) {
	  this.setState({
	    filters: filters.map(filter => {
	      filter.selected = filter.category === category
	      return filter
	    }),
	    books: category === 'All'? books : books.filter( book => (book.category === category) ),
	  })
	}

	render() {

		return (
			<section id="books">
			  <div className="container">
			    <div className="row">
			        <div className="col-lg-12 text-center">
			            <h2>Books</h2>
			            <hr className="star-primary" />
			        </div>
			    </div>
			    <BookFilters 
			    	filters={filters} 
			    	selectTab={this.selectTab}
			    />
			    <BookList books={this.state.books}/>
			  </div>
			</section>
		)
	}

}


export default Books