import React from "react"
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import '../static/css/map.css'


class MyMap extends React.Component {

    render() {
        return (
            <Map
                bounceAtZoomLimits={true}
                maxBoundsViscosity={0.95}
                maxBounds={[
                    [20.6, 92.683333],
                    [26.5, 88.3416665]
                ]}
                center={this.props.loc||this.props.markers}
                onClick={this.props.addMarker}
                zoom={16}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={this.props.loc || this.props.markers}>
                    <Popup>
                        <span>lat {this.props.loc[0]} <br/> lng {this.props.loc[1]}</span>
                        {/*<span>lat {this.props.markers[0]} <br/> lng {this.props.markers[1]}</span>*/}
                    </Popup>
                </Marker>
            </Map>
        );
    }
}

export default MyMap