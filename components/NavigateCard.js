import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Screen from './Screen'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setDestination } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
    const GOOGLE_MAP_APIKEY = 'AIzaSyCs9mal3EcA_mtBmdtYiz9vbsRgljah2ns';
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <Screen style={tw`bg-white flex-1`}>
            {/* <Text style={tw`text-center pb-5 text-xl font-bold`}>Good morning, Khalid</Text> */}
            <View style={tw`border-t border-gray-100 flex-shrink relative z-20 bg-white`}>
                <View style={tw`bg-white pb-2`}>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                loaction: details.geometry.location,
                                description: data.description
                            }))
                            navigation.navigate('RideOptionsCard')
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        styles={toInputBoxStyles}
                        enablePoweredByContainer={false}
                    />
                </View>
            </View>
            <View style={tw`px-3 bg-white relative z-10 justify-between flex-1`}>
                <NavFavourites />
                <View style={tw`mt-3 flex-row justify-evenly py-3 border-t border-gray-100`}>
                    <TouchableOpacity 
                        style={tw`flex-row bg-black w-24 px-4 py-3 rounded-full border border-black`}
                        onPress={() => navigation.push('RideOptionsCard')}
                    >
                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tw`text-white text-center pl-3`}>Ride</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={tw`flex-row bg-white w-24 px-4 py-3 rounded-full border border-black`}
                    >
                        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                        <Text style={tw`text-black text-center pl-3`}>Ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    textInput: {
        fontSize: 15,
        backgroundColor: '#A9A9A9',
        borderRadius: 5,
        borderEndWidth: 1,
        borderColor: '#ddd'
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})

 







// import React from 'react'
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import tw from 'tailwind-react-native-classnames'
// import Screen from './Screen'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { setDestination } from '../slices/navSlice'
// import { useDispatch } from 'react-redux'
// import { useNavigation } from '@react-navigation/native'
// import NavFavourites from './NavFavourites'
// import { Icon } from 'react-native-elements'


// const NavigatCard = () => {
  
   
//     const dispatch = useDispatch();
//     const navigation = useNavigation();
//     //const origin = useSelector(selectOrigin)

//     return (
//         <Screen style={tw`bg-white flex-1`}>
//         {/* <Text style={tw`text-center pb-5 text-xl font-bold`}>Good morning, Khalid</Text> */}
//         <View style={tw`border-t border-gray-100 flex-shrink relative z-20 bg-white`}>
//             <View style={tw`bg-white pb-2`}>
//                 <GooglePlacesAutocomplete
//                     placeholder='Where to?'
//                     nearbyPlacesAPI="GooglePlacesSearch"
//                     debounce={400}
//                     onPress={(data, details = null) => {
//                         dispatch(setDestination({
//                             loaction: details.geometry.location,
//                             description: data.description
//                         }))
//                     }}
//                     minLength={2}
//                     fetchDetails={true}
//                     returnKeyType={"search"}
//                     onFail={error => console.error(error)}
//                     query={{
//                         key: GOOGLE_MAP_APIKEY,
//                         language: 'en',
//                     }}
//                     styles={toInputBoxStyles}
//                     enablePoweredByContainer={false}
//                 />
//             </View>
//         </View>
//         <View style={tw`px-3 bg-white relative z-10 justify-between flex-1`}>
//             <NavFavourites />
//             <View style={tw`mt-3 flex-row justify-evenly py-3 border-t border-gray-100`}>
//                 <TouchableOpacity 
//                     style={tw`flex-row bg-black w-24 px-4 py-3 rounded-full border border-black`}
//                     onPress={() => navigation.push('RideOptionsCard')}
//                 >
//                     <Icon name="car" type="font-awesome" color="#A9A9A9" size={16} />
//                     <Text style={tw`text-white text-center pl-3`}>Ride</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                     style={tw`flex-row bg-white w-24 px-4 py-3 rounded-full border border-black`}
//                 >
//                     <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
//                     <Text style={tw`text-black text-center pl-3`}>Ride</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     </Screen>

//         // <SafeAreaView style={tw`bg-white flex-1`}>
//         //     <View style={tw`border-t border-gray-200 flex-shrink`}>
//         //         <View >
//         //             <GooglePlacesAutocomplete 
//         //                placeholder='Where from?'
//         //                nearbyPlacesAPI="GooglePlacesSearch"
//         //                debounce={400}
//         //                styles={toInputBoxStyles}
//         //                onPress={(data, details = null) => {
//         //                    dispatch(setOrigin({
//         //                        location: details.geometry.location,
//         //                        description: data.description
//         //                    }))
//         //                }}
//         //                minLength={2}
//         //                fetchDetails={true}
//         //                returnKeyType={"search"}
//         //                onFail={error => console.error(error)}
//         //                query={{
//         //                    key: GOOGLE_MAP_APIKEY,
//         //                    language: 'en',
//         //                }}                       
//         //             />

//         //            <GooglePlacesAutocomplete 
//         //                 placeholder='Destination?'
//         //                 nearbyPlacesAPI='GooglePlacesSearch'
//         //                 debounce={200}
//         //                 styles={toInputBoxStyles}
//         //                 fetchDetails={true}                        
//         //                returnKeyType={"search"}
//         //                 enablePoweredByContainer={false}
//         //                 minLength={3}
//         //                 query={{
//         //                     key: GOOGLE_MAP_APIKEY,
//         //                     language: 'en',
//         //                 }}
//         //                 onPress={(data, details= null) =>{
//         //                         dispatch(setDestination({
//         //                             location: details.geometry.location,
//         //                             description: data.description,
//         //                         }))
//         //                         navigation.navigate('RideOptionsCard')
//         //                 }}                        
//         //             />
//         //         </View>
//         //         <NavFavourites/>
//         //     </View>
//         //     <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
//         //         <TouchableOpacity 
//         //         onPress={() => navigation.navigate('RideOptionsCard')}
//         //         style={tw`flex flex-row justify-between bg-gray-200 w-24 px-4 py-3 rounded-full`} >
//         //             <Icon name="car" type="font-awesome" color="black" size={16}/>
//         //             <Text style={tw`text-black text-center`}>Rides</Text>
//         //         </TouchableOpacity>

//         //         <TouchableOpacity 
//         //          onPress={() => navigation.navigate('EatsScreen')}
//         //         style={tw`flex flex-row justify-between bg-gray-200  w-24 px-4 py-3 rounded-full`} >
//         //             <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
//         //             <Text style={tw`text-black text-center`}>Eats</Text>
//         //         </TouchableOpacity>
//         //     </View>
//         // </SafeAreaView>
//     )
// }

// export default NavigatCard

// const toInputBoxStyles = StyleSheet.create({
//     container:{
//         backgroundColor: "white",
//         paddingTop: 3,
//         flex: 0,
//     },
//     textInput:{
//         height: 50,
//          margin: 12,
//          padding: 10,
//          borderRadius:9,
//          backgroundColor:'#A9A9A9'
//     },
//     textInputContainer:{
//         paddingHorizontal: 8,
//         paddingBottom: 0,
       
//     },
// });