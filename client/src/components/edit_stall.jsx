import React, {Component} from "react"
import {fetchStallDetail} from "../redux/stall/stallAction";
import {connect} from "react-redux"
import MyMap from "./map";
import api from '../redux/api'


class EditStall extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    addMarker = (e) => {
        const cord = [ e.latlng['lng'], e.latlng['lat']]
        this.setState({
            ...this.state,
                loc_: {
                    coordinates: cord,
                    type: "Point"
                },
            name: this.props.stall.stall.name || this.state.name
        })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async componentDidMount() {
        const id = this.props.match.params.id
        await this.props.fetchStall(id)
    }

    onUpdate = e => {
        e.preventDefault()
        const { match: { params } } = this.props
        api.put(`/stalls/${params.id}`, this.state).then(res => {
            if (res.status === 200) {
                return this.props.history.push(`/stalls/${res.data._id}`)
            }
        }).catch(err => err)
    }

    render() {
        const {stall: items} = this.props.stall
        return (
            items.loc_?
                <form onSubmit={e=>this.onUpdate(e)} className='container'>
                    <div className='container'>

                        <MyMap
                            loc={ this.state.loc_ ?
                                [this.state.loc_.coordinates[1],
                                    this.state.loc_.coordinates[0]] :
                                items.loc_.coordinates === null || items.loc_.coordinates === undefined ? [90,20] :
                                [items.loc_.coordinates[1], items.loc_.coordinates[0]]
                            }
                            markers={this.state.loc_? this.state.loc_.coordinates : ''}
                            addMarker={e=> this.addMarker(e)}
                        />

                    </div>
                        <input type='text'
                               name='name'
                               onChange={e => this.onChange(e)}
                               value={this.state.name || items.name}
                               className='form-control'
                               style={{marginTop: "1em"}}
                        />
                    <button
                        type="submit"
                        className="btn btn-success"
                        style={{marginTop: "4px"}}>
                        Update Stall
                    </button>
                </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditStall)