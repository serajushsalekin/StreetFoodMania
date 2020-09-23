import React, {Component} from "react"
import {fetchStallDetail} from "../redux/stall/stallAction";
import {connect} from "react-redux"
import MyMap from "./map";
import {Link} from "react-router-dom";


class Stall extends Component{

    async componentDidMount() {
        const id = this.props.match.params.id
        await this.props.fetchStall(id)
    }

    render() {
        const {stall: items} = this.props.stall
        console.log("items",items)
        return (

            items.loc_?
                items.loc_.coordinates === null || items.loc_.coordinates === undefined ?
                    <h3 style={{padding: "1.7em"}}>No location with this stall
                        <br/><Link to={`edit/${items._id}`}>Edit</Link>
                    </h3> :
            <div className='container'>
                <div className='container'>
                    <h3><Link style={{float: "right"}} to={`edit/${items._id}`}>Edit</Link></h3>
                    <MyMap
                        loc={[items.loc_.coordinates[1], items.loc_.coordinates[0]]}
                        //markers={this.state.markers}
                        //addMarker={e=> this.addMarker(e)}
                    />
                </div>
                <h1>{items.name}</h1>
            </div>
                :
                "<h3>No stall available</h3>"
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