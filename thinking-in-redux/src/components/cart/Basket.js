import React from "react"
import * as actions from '../../actions'
import { connect } from '../../react-redux/connect'

const Basket = (props) => (
  <div>
    {props.beers.map( beer => (
      <div className="media" key={beer.id}>
        <div className="media-left">
          <img className="media-object" style={{width:40}} src={beer.photo_link}></img>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{beer.title}</h4>
        </div>
        <div className="media-right">
          <a
            className="fa-stack"
            onClick={ () => { props.dispatch(actions.removeBeerFromCart(beer)) }}
          >
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-trash fa-stack-1x fa-inverse"></i>
          </a>
        </div>
      </div>
    ))}
  </div>
)

const mapStateToProps = state => ({
  beers: state.cart
})

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)


// export default Basket
