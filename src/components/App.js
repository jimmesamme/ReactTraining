import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import TopNav from './TopNav'
import Books from './Books'
import About from './About'
import Footer from './Footer'




class App extends React.Component {
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      menu: { open : false }
    }
  }

  toggleMenu () {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  

  render() {
    const { books, filters, menu } = this.state

    return (
      <div id="page-wrap">

        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />

        <TopNav />

        <Header title="Library" />

        <Books />

        <About />

        <Footer />

      </div>
    )
  }
}

export default App
