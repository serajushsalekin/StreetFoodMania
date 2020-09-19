import React, {Component} from "react"
import {fetchStallDetail} from "../redux/stall/stallAction";
import {connect} from "react-redux"
import MyMap from "./map";


class Stall extends Component{
    constructor(props) {
        super(props)
        this.state = {
            markers: [23.752114, 90.334781]
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchStall(id)
    }
    addMarker = (e) => {
        // const {markers} = this.state
        //markers.push(e.latlng)
        const cord = [e.latlng['lat'], e.latlng['lng']]
        this.setState({
            ...this.state,
            markers:  cord})
    }


    render() {
        const {stall} = this.props.stall
        console.log(stall)
        return (
            <div className='container'>
                <div className='container'>
                    <MyMap
                        markers={this.state.markers}
                        addMarker={e=> this.addMarker(e)}/>
                </div>
                <h1>{stall.name}</h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    stall: state.stalls
})
const mapDispatchToProps = dispatch => {
    return {
        fetchStall: id => dispatch(fetchStallDetail(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stall)