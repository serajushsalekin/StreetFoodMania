import React, {Component} from "react"
import "../static/css/stalls.css"
import bg1 from '../static/img/brownie-dessert-cake-sweet-45202.jpeg'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import {fetchStalls} from "../redux/stall/stallAction";


class Stalls extends Component{
    componentDidMount() {
        this.props.fetchStalls()
    }

    render() {
        const items = this.props.items.stalls
        return (
<div className='container'>
<section className="cards">
    { items.length > 0 ? items.map(item =>
        <article className="card card--1" key={item._id}>
            <div className="card__info-hover">
                <div className="card__clock-info">
                </div>
            </div>
            <div className="card__img" style={{backgroundImage: `url(${bg1})`}}>
            </div>
            <Link to={`stalls/${item._id}`} className="card_link">
                <div className="card__img--hover" style={{backgroundImage: `url(${bg1})`}}>
                </div>
            </Link>
            <div className="card__info">
                <h3 className="card__title">{item.name}</h3>
            </div>
        </article>
    ) : <h3>No stalls available</h3>}
</section>
</div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.stalls
})
export default connect(mapStateToProps, {fetchStalls})(Stalls)