import React, { useRef, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useDispatch, useSelector } from 'react-redux'
import tailwind from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
//import { GOOGLE_MAP_APIKEY } from '@env'
import { Icon } from 'react-native-elements'
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

const Map = () => {
    const GOOGLE_MAP_APIKEY = 'AIzaSyCs9mal3EcA_mtBmdtYiz9vbsRgljah2ns';
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        })
    }, [origin, destination])

    useEffect(() => {
        if(!origin || !destination) return;
        getTravelTime()
    }, [origin, destination, GOOGLE_MAP_APIKEY])
    
    const getTravelTime = async () => {
        const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_APIKEY}`
        const data = await fetch(URL).then(response => response.json()).catch(error =>data.error_message)
        // if(data.status !== 'OK') return alert(data.error_message)
        dispatch(setTravelTimeInformation(data.rows[0],data.elements[0]))
    }

    return (
        <View style={tailwind`flex-1 relative`}>
            <TouchableOpacity
                style={[ tailwind`bg-white p-3 rounded-full shadow-lg`,{ top: Constants.statusBarHeight, left: 20, position: 'absolute', zIndex: 100 }]}
                onPress={() => navigation.push("Home")}
            >
                <Icon
                    type="antdesign"
                    name="home"
                    color="black"
                    size={16}
                    // style={}
                />
            </TouchableOpacity>

            <MapView
                ref={mapRef}
                style={tailwind`flex-1 relative z-10`}
                initialRegion={{
                    latitude: origin?.loaction.lat,
                    longitude: origin?.loaction.lng,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
                mapType="mutedStandard"
            >
                {!!origin && !!destination && (
                    <MapViewDirections
                       
                        origin={origin.description}
                        destination={destination.description}
                       // lineDashPattern={[0]}
                        apikey={GOOGLE_MAP_APIKEY}
                        strokeWidth={2}
                        strokeColor="black"
                        onError={error => console.log("Directions error: ", error)}
                    />
                )}
                {origin?.loaction && (
                    <Marker
                        coordinate={{
                            latitude: origin?.loaction.lat,
                            longitude: origin?.loaction.lng,
                        }}
                        title="Origin"
                        description={origin.description}
                        identifier="origin"
                    >
                        <Image source={require('../assets/custom_pin.png')} style={{ height: 45, width: 45 }} />
                    </Marker>
                )}
                {destination?.loaction && (
                    <Marker
                        coordinate={{
                            latitude: destination?.loaction.lat,
                            longitude: destination?.loaction.lng,
                        }}
                        title="Destination"
                        description={destination.description}
                        identifier="destination"
                    >
                        <Image source={require('../assets/custom_pin.png')} style={{ height: 45, width: 45 }} />
                    </Marker>
                )}
            </MapView>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({})




// import React, { useRef, useEffect } from 'react'
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import MapView, { Marker } from 'react-native-maps'
// import { useDispatch, useSelector } from 'react-redux'
// import tw from 'tailwind-react-native-classnames'
// import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice'
// import MapViewDirections from 'react-native-maps-directions'
// import { Icon } from 'react-native-elements'
// import Constants from 'expo-constants'
// import { useNavigation } from '@react-navigation/native'

// const GOOGLE_MAP_APIKEY = 'AIzaSyCs9mal3EcA_mtBmdtYiz9vbsRgljah2ns';
// const Map = () => {
//     const origin = useSelector(selectOrigin)
//     const destination = useSelector(selectDestination)
//     const mapRef = useRef(null)
//     const navigation = useNavigation()
//     const dispatch = useDispatch()

//     useEffect(() => {
//         if (!origin || !destination) return;
//         mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
//             edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
//         })
//     }, [origin, destination])

//     useEffect(() => {
//         if(!origin || !destination) return;
//         getTravelTime()
//     }, [origin, destination, GOOGLE_MAP_APIKEY])
//     const getTravelTime = async () => {
//         const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_APIKEY}`
//         const data = await fetch(URL).then(response => response.json())
//        if(data.status !== 'OK') return alert(data.error_message)
//         dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
//     }
    
//     // const getTravelTime = async() =>{
//     //     const    URL = (`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_APIKEY}`)
//     //         const data = await fetch(URL).then(response => response.json()).catch(err => err.json)
//     //          if(data.status !== 'OK') return alert(data.error_message)
//     //          //dispatch(setTravelTimeInformation(data.rows[0],data.elements[0]))
//     //     };

//     return (
//         <View style={tw`flex-1 relative`}>
//             <TouchableOpacity
//                 style={[ tw`bg-white p-3 rounded-full shadow-lg`,{ top: Constants.statusBarHeight, left: 20, position: 'absolute', zIndex: 100 }]}
//                 onPress={() => navigation.push("HomeScreen")}
//             >
//                 <Icon
//                     type="antdesign"
//                     name="home"
//                     color="black"
//                     size={16}
//                     // style={}
//                 />
//             </TouchableOpacity>

//             <MapView
//                 ref={mapRef}
//                 style={tw`flex-1`}
//                 initialRegion={{
//                     latitude: origin?.loaction.lat,
//                     longitude: origin?.loaction.lng,
//                     latitudeDelta: 0.002,
//                     longitudeDelta: 0.002,
//                 }}
//                 mapType="mutedStandard"
//             >
//                 {!!origin && !!destination && (
//                     <MapViewDirections
//                         origin={origin.description}
//                         destination={destination.description}
//                        // lineDashPattern={[0]}
//                         apikey={GOOGLE_MAP_APIKEY}
//                         strokeWidth={3}
//                         strokeColor="black"
//                         onError={error => console.log("Directions error: ", error)}
//                     />
//                 )}
//                 {origin?.loaction && (
//                     <Marker
//                         coordinate={{
//                             latitude: origin?.loaction.lat,
//                             longitude: origin?.loaction.lng,
//                         }}
//                         title="Origin"
//                         description={origin.description}
//                         identifier="origin"
//                     >
//                         <Image source={require('../assets/custom_pin.png')} style={{ height: 45, width: 45 }} />
//                     </Marker>
//                 )}
//                 {destination?.loaction && (
//                     <Marker
//                         coordinate={{
//                             latitude: destination?.loaction.lat,
//                             longitude: destination?.loaction.lng,
//                         }}
//                         title="Destination"
//                         description={destination.description}
//                         identifier="destination"
//                     >
//                         <Image source={require('../assets/custom_pin.png')} style={{ height: 45, width: 45 }} />
//                     </Marker>
//                 )}
//             </MapView>
//         </View>
//     )
// }

// export default Map

// const styles = StyleSheet.create({})



// // import React, { useRef,useEffect,useState } from 'react'
// // import { StyleSheet, Text, View, } from 'react-native'
// // import tw from 'tailwind-react-native-classnames'
// // import MapView, { Marker,PROVIDER_GOOGLE} from 'react-native-maps';
// // import { selectDestination, selectOrigin, setTravelTimeInformation} from '../slices/navSlice';
// // import { useDispatch, useSelector } from 'react-redux';
// // import MapViewDirections from 'react-native-maps-directions';

// // import { useNavigation } from '@react-navigation/native'


// // const Map = () => {

// //     const [region, setRegion] = useState({
// //         latitude: origin?.loaction.lat,
// //         longitude: origin?.loaction.lng,
// //         latitudeDelta: 0.001,
// //         longitudeDelta: 0.005,
// //       });
    
// //    const GOOGLE_MAP_APIKEY = 'AIzaSyCs9mal3EcA_mtBmdtYiz9vbsRgljah2ns';
// //    const  origin = useSelector(selectOrigin);
// //     const destination = useSelector(selectDestination);
// //     const mapRef = useRef(null);
// //     const dispatch = useDispatch();
     
// //     useEffect(() => {
// //         if (!origin || !destination) return;  
// //         mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
// //             edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
// //         })
// //     }, [origin,destination]);

// //     useEffect(() => {
// //         if (!origin || !destination) return; 
// //         getTravelTime();
// //     },[origin,destination,GOOGLE_MAP_APIKEY])

// //     const getTravelTime = async() =>{
// //     const    URL = (`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAP_APIKEY}`)
// //         const data = await fetch(URL).then(response => response.json())
// //         if(data.status !== 'OK') return alert(data.error_message)
// //         dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
// //     };

// //     return (             
// //     <MapView
// //     ref={mapRef}
// //     style={{flex: 1}}
// //     provider={PROVIDER_GOOGLE}
// //     initialRegion={{
// //         latitude: 37.78825,
// //         longitude: -122.4324,
// //         latitudeDelta:  0.0922,
// //         longitudeDelta: 0.0421,
// //     }}
// //     mapType="mutedStandard"    
// //     onRegionChangeComplete={(region) => setRegion(region)}
// //     >
// //         { origin && destination && (
// //             < MapViewDirections         
// //             origin={origin.description}
// //             destination={destination.description}
// //             apikey={GOOGLE_MAP_APIKEY}
// //             strokeWidth={3}
// //             strokeColor="black"
// //             onError={error => console.log("Directions error: ", error)}
// //             />
// //         )}
// //           {origin?.location &&(
// //                     <Marker
// //                         coordinate={{
// //                             latitude: origin.location.lat,
// //                             longitude: origin.location.lng,
// //                          }}
// //                          title="Origin"
// //                          description={origin.description}
// //                          identifier="origin"
// //                        />
// //                 )}

// //                  {destination?.location &&(
// //                     <Marker
// //                         coordinate={{
// //                             latitude: destination.location.lat,
// //                             longitude: destination.location.lng,
// //                          }}
// //                          title="Destination"
// //                          description={destination.description}
// //                          identifier="destination"  
// //                      />
// //                 )}
// //         </MapView>
// //     )
// // }

// // export default Map

// // const styles = StyleSheet.create({})