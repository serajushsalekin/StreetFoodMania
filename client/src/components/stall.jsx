import React, {Component} from "react"
import {fetchStallDetail} from "../redux/stall/stallAction";
import {connect} from "react-redux"
import MyMap from "./map";


class Stall extends Component{

    async componentDidMount() {
        const id = this.props.match.params.id
        await this.props.fetchStall(id)
    }

    render() {
        const {stall: items} = this.props.stall
        return (
            items.loc_?
            <div className='container'>
                <div className='container'>
                    <MyMap
                        loc={[items.loc_.coordinates[1], items.loc_.coordinates[0]]}
                        //markers={this.state.markers}
                        //addMarker={e=> this.addMarker(e)}
                    />
                </div>
                <h1>{items.name}</h1>
            </div>
                : ""
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