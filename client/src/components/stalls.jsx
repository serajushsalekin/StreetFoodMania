import React, {Component} from "react"
import "../static/css/stalls.css"
import bg1 from '../static/img/brownie-dessert-cake-sweet-45202.jpeg'
import {Link} from "react-router-dom";
import bg2 from '../static/img/pexels-photo-307008.jpeg'


class Stalls extends Component{
    render() {
        return (
<div className='container'>
<section className="cards">
    <article className="card card--1">
        <div className="card__info-hover">
            <div className="card__clock-info">
            </div>
        </div>
        <div className="card__img" style={{backgroundImage: `url(${bg1})`}}>
        </div>
        <Link to="#" className="card_link">
            <div className="card__img--hover" style={{backgroundImage: `url(${bg1})`}}>
            </div>
        </Link>
        <div className="card__info">
            <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
        </div>
    </article>

{/*demo*/}
    <article className="card card--1">
        <div className="card__info-hover">
            <div className="card__clock-info">
            </div>
        </div>
        <div className="card__img" style={{backgroundImage: `url(${bg2})`}}>
        </div>
        <Link to="#" className="card_link">
            <div className="card__img--hover" style={{backgroundImage: `url(${bg2})`}}>
            </div>
        </Link>
        <div className="card__info">
            <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
        </div>
    </article>
    <article className="card card--1">
        <div className="card__info-hover">
            <div className="card__clock-info">
            </div>
        </div>
        <div className="card__img" style={{backgroundImage: `url(${bg1})`}}>
        </div>
        <Link to="#" className="card_link">
            <div className="card__img--hover" style={{backgroundImage: `url(${bg1})`}}>
            </div>
        </Link>
        <div className="card__info">
            <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
        </div>
    </article>
    <article className="card card--1">
        <div className="card__info-hover">
            <div className="card__clock-info">
            </div>
        </div>
        <div className="card__img" style={{backgroundImage: `url(${bg2})`}}>
        </div>
        <Link to="#" className="card_link">
            <div className="card__img--hover" style={{backgroundImage: `url(${bg2})`}}>
            </div>
        </Link>
        <div className="card__info">
            <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
        </div>
    </article>

{/*demo end*/}


</section>
</div>
        )
    }
}

export default Stalls