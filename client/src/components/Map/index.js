import React from 'react';
import GoogleMap from 'google-map-react-redo';
import Marker from './Marker';

export default () => {
	const props = {
		bootstrapURLKeys: {
			key: process.env.REACT_APP_GOOGLE_API_KEY
		},
		center: [
			39.0891859,
			-85.8804074
		],
		zoom: 10,
		options (maps) {
			return {
				zoomControlOptions: {
					position: maps.ControlPosition.RIGHT_BOTTOM,
					style: maps.ZoomControlStyle.SMALL
				},
				mapTypeControlOptions: {
					position: maps.ControlPosition.TOP_RIGHT
				},
				mapTypeControl: true,
				scrollwheel: false,
				gestureHandling: 'cooperative'
			};
		}
	};
	const markerCoords = {
		lat: 39.0891859,
		lng: -85.8804074
	};
	return (
		<GoogleMap { ...props }>
			<Marker
				lat={markerCoords.lat}
				lng={markerCoords.lng} />
		</GoogleMap>
	);
};
