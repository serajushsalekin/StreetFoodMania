import React, {Component} from "react"
import MyMap from "./map";
import { geolocated } from "react-geolocated";


const DEFAULT_LAT = 90.38559436798096
const DEFAULT_LNG = 23.859014504018376

class Home extends Component{
    state = {
        coords: this.props.coords
    }


    render() {
        const { coords } = this.props
        const lat = coords ? coords.latitude : DEFAULT_LAT
        const lng = coords ? coords.longitude : DEFAULT_LNG
        return (
            <React.Fragment>
                { coords ?
                    <MyMap
                        loc={[lat,lng]}
                        markers={[lat,lng]}
                    />
                : 'Loading.....'
                }

            </React.Fragment>
        )

    }
}


export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Home)