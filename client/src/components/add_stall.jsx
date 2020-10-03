import React, {Component} from "react"
import MyMap from "./map";
import api from "../redux/api";


class AddStall extends Component{
    constructor(props) {
        super(props)
        this.state = {
            markers: [90.334781, 23.752114 ]
        }
    }

    addMarker = (e) => {
        const cord = [ e.latlng['lng'], e.latlng['lat']]
        this.setState({
            ...this.state,
            markers:  cord,
            name: ''
        })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const stall = {
            loc_: {
                coordinates: this.state.markers,
                type: "Point"
            },
            name: this.state.name,
        }
        api.post(`/stalls`, stall).then(res => {
            if (res.status === 201) {
                return this.props.history.push(`/stalls`)
            }
        }).catch(err => err)
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={e => this.onSubmit(e)} method="post" className='container'>
                    <MyMap
                        loc={[this.state.markers[1], this.state.markers[0]]}
                        markers={this.state.markers}
                        addMarker={e=> this.addMarker(e)}
                    />
                    <div className="form-group" style={{marginTop: "1.6em"}}>
                        <input type="text"
                               name='name'
                               onChange={e => this.onChange(e)}
                               className="form-control"
                               placeholder="Name Of Food Stall"
                        />
                    </div>
                    <button
                        type='submit'
                        className='btn btn-block btn-primary'>
                        ADD
                    </button>
                </form>
            </div>

    )
    }
}

export default AddStall