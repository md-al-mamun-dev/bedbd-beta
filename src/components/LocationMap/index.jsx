"use client"
// import Image from 'next/image'
import styles from './index.module.css'
import { useLoadScript } from '@react-google-maps/api';
import { GoogleMap, Marker, Circle, MarkerClusterer } from '@react-google-maps/api';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const LocationMap = () => {
    // const [markerIcon, setMarkerIcon] = useState({url:'fabicon.svg'})

    // Variable need to put into Envirnment variable
    const API_KEY = 'AIzaSyDh9eU4Ft9T1jBvJuA8O4mYRbzjXGBwee4'
    const MAP_ID = "2459d1fbcf391924"

    const mapRef = useRef
    const mapCenter = useMemo(()=>  ({lat: 23.811056, lng: 90.407608}), [])
    const fixedZoomLevel  = 15


    const onLoad = useCallback(map => (mapRef.current = map), [])


    const {isLoaded} = useLoadScript({
        googleMapsApiKey: API_KEY,
        libraries:['places']
    })


    // const markerIcon = {
    //   url: 'https://example.com/custom-marker.png', // Replace with the URL of your custom marker icon
    //   scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
    // };
    const markerRef = useRef(null);
    const markerIcon = {
      url: 'fabicon.svg', // Replace with the URL of your custom marker icon
      scaledSize: { width: 48, height: 48 }, // Adjust the size as needed
    };




    
    const defaultOptions = {
        strokeOpacity: 0.5,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
      };
      const closeOptions = {
      ...defaultOptions,
      zIndex: 3,
      fillOpacity: 0.05,
      strokeColor: "#8BC34A",
      fillColor: "#8BC34A",
    };
    const middleOptions = {
      ...defaultOptions,
      zIndex: 2,
      fillOpacity: 0.05,
      strokeColor: "#FBC02D",
      fillColor: "#FBC02D",
    };

    const mapOptions = useMemo(()=>({
        // disableDefaultUI: true, 
        // zoomControl: false, 

        streetViewControl: false, 
        fullscreenControl: false, 
        scaleControl: false, 
        mapTypeControl: false, 


        rotateControl: false, 
        clickableIcons:false,

        maxZoom:fixedZoomLevel,
        minZoom:6, 
        draggable: false,
        mapId: "2459d1fbcf391924",
    }), [])  

    if(!isLoaded) return <div>Loading...</div>

    return (<GoogleMap  zoom={fixedZoomLevel} 
                        center={mapCenter} 
                        options={mapOptions}
                        onLoad={onLoad}
                        mapContainerClassName='map-container'>
                <div className={`marker-class`}>
                    <Marker position={mapCenter} 
                      ref={markerRef}
                      options={{icon:markerIcon}}/>
                </div>

                
                <Circle  center={mapCenter} radius={250} options={closeOptions}/>
                <Circle center={mapCenter} radius={500} options={middleOptions}/>

            </GoogleMap>)


}

export default LocationMap