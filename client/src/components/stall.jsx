import React, {Component} from "react"
import {fetchStallDetail} from "../redux/stall/stallAction";
import {connect} from "react-redux"
import MyMap from "./map";
import {Link, withRouter} from "react-router-dom"
import api from '../redux/api'


class Stall extends Component{

    async componentDidMount() {
        const id = this.props.match.params.id
        await this.props.fetchStall(id)
    }
    deleteItem = (e, id) => {
        e.preventDefault()
        api.delete(`/stalls/${id}`).then(res => {
            if (res.status === 200) return this.props.history.push(`/stalls/`)
        }).catch(err => err)

    }

    render() {
        const {stall: items} = this.props.stall
        const { authenticate } = this.props.auth
        console.log(authenticate)
        return (

            items.loc_?
                items.loc_.coordinates === null || items.loc_.coordinates === undefined ?
                    <h3 style={{padding: "1.7em"}}>No location with this stall
                        <br/><Link to={`edit/${items._id}`}>Edit</Link>
                    </h3> :
            <div className='container'>
                <div className='container'>
                    {authenticate ?
                        <div>
                        <Link className='btn btn-primary' style={{marginBottom: "8px"}}
                              to={`edit/${items._id}`}>Edit</Link>
                        <button
                        className='btn btn-danger'
                        style={{float: "right", marginBottom: "8px"}}
                        onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteItem(e, items._id) } }
                        //to={`remove/${items._id}`}
                    >
                        Remove
                    </button>
                        </div>
                        : ''}
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
    stall: state.stalls,
    auth: state.auth
})
const mapDispatchToProps = dispatch => {
    return {
        fetchStall: id => dispatch(fetchStallDetail(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Stall))