import React from 'react'
import { StyleSheet, Text,View,SafeAreaView, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
// import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setDestination, setOrigin } from '../slices/navSlice';


const HomeScreen = () => {
     const dispatch = useDispatch();
     const GOOGLE_MAP_APIKEY = 'AIzaSyCs9mal3EcA_mtBmdtYiz9vbsRgljah2ns';

    return (
        <SafeAreaView style={tw`bg-gray-500 h-full`}>         
            <View style={tw`p-5`}>
              <Image 
              style={{width: 100,height:100, resizeMode:'contain'}}
                source={{
                    uri:"https://links.papareact.com/gzs",
                }}
              />
                    <View style={tw`mb-3`}>
                    <GooglePlacesAutocomplete
                        placeholder='enter location?'
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setOrigin({
                                loaction: details.geometry.location,
                                description: data.description
                            }))
                            dispatch(setDestination(null))
                        }}
                        minLength={2}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onFail={error => console.error(error)}
                        query={{
                            key: GOOGLE_MAP_APIKEY,
                            language: 'en',
                        }}
                        styles={{
                            container: {
                                flex: 0,
                            },
                            textInput: {
                                fontSize: 15
                            }
                        }}
                        enablePoweredByContainer={false}
                    />
                </View>
                <NavOptions />
            {/* <NavFavourites /> */}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{    
        paddingTop:30,
    },
    text: {
        fontSize: 25,
        fontWeight: '500'
      }
})