import React,{ useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, View,FlatList, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import Screen from './Screen'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'

const data = [
    {
        id:"ubar-X-123",
        title:"UbarX",
        multiplier:1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id:"ubar-X-456",
        title:"Ubar XL",
        multiplier:1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id:"ubar-X-789",
        title:"Ubar LUX",
        multiplier:1.75,
        image: "https://links.papareact.com/7pf",
    },
];
const SEARCH_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    useEffect(() =>{
        if(!origin || !destination) navigation.push('NavigateCard')
    }, [origin, destination])

    const travelConst = (item) => {
        return ((travelTimeInformation?.duration?.value * SEARCH_CHARGE_RATE * item?.multiplier) / 100).toFixed(2)
    }

    const onChoose = () =>{
        Alert.alert('configurations!!!', `Car: ${selected.title} \nPrice: $${travelConst(selected)} \nDistence: ${travelTimeInformation?.distance?.text} \n${travelTimeInformation?.duration.text} Travel time`)
    }
    return (
        <Screen
         style={tw`bg-white h-full`}>
        <View style={tw`items-center flex-row justify-center mb-3`}>
            <TouchableOpacity
                style={{ left: 10, position: 'absolute', zIndex: 100 }}
                onPress={() => navigation.push("NavigateCard")}
            >
                <Icon
                    type="antdesign"
                    name="arrowleft"
                    color="black"
                    size={23}
                    style={tw`p-3`}
                />
            </TouchableOpacity>
            <Text style={tw`text-center text-xl font-bold`}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
        </View>
        <View style={tw`flex-1 mt-2`}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={tw`flex-row items-center justify-between px-5 ${selected?.id === item.id && 'bg-gray-100'}`}
                        onPress={() => setSelected(item)}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                        <View style={tw`flex-row items-center justify-between flex-1`}>
                            <View>
                                <Text style={tw`text-xl font-bold text-black`}>{item.title}</Text>
                                <Text style={tw`text-gray-600`}>{travelTimeInformation?.duration?.text} Travel time</Text>
                            </View>
                            <Text style={tw`text-gray-800 text-lg`}>
                                ${travelConst(item)}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
        <View>
            <TouchableOpacity
                style={tw`bg-black py-3 m-3 rounded-lg ${!selected && 'bg-gray-300'}`}
                disabled={!selected}
                onPress={onChoose}
            >
                <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </View>
    </Screen>
)
}

export default RideOptionsCard

const styles = StyleSheet.create({
image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
}
})
//         <SafeAreaView style={tw`bg-white flex-grow pb-5`}>
//             <View>
//                 <TouchableOpacity 
//                 onPress={() => navigation.navigate('NavigateCard')}
//                  style={tw`absolute top-3 left-5  p-3 rounded-full`}>
//                     <Icon name="chevron-left" type="fontawesome"/>
//                 </TouchableOpacity>
//                 <Text style={tw`text-center py-5 text-xl`}>
//                     Select a ride - {travelTimeInformation?.distance.text}
//                     </Text>
//             </View>
//             <FlatList
//                 data={data}
//                 keyExtractor={item => item.id}
//                 renderItem={({item:{id,title,image},item}) =>(
//                     <TouchableOpacity
//                         onPress={() => setSelected(item)}
//                         style={tw`flex-row justify-between items-center px-10 ${
//                             id === selected?.id && "bg-gray-200"
//                         }`}
//                     >
//                         <Image style={{
//                             width:100,
//                             height:80,
//                             resizeMode: "contain"
//                             }} 
//                             source={{uri:image}}
//                                 />
//                         <View style={tw`ml-6`}>
//                             <Text style={tw`text-xl font-semibold`}>{title}</Text>
//                             <Text>{travelTimeInformation?.duration.text}Travel time...</Text>
//                         </View>
//                         <Text style={tw`text-xl ml-8`}>$99</Text>
//                     </TouchableOpacity>
//                 )}
//             />
//             <View>
//                 <TouchableOpacity disabled={!selected} style={tw`bg-black rounded-full py-3 m-3 pb-5 ${!selected && "bg-gray-300"}`}>
//                     <Text style={tw`text-center text-white text-xl`}>
//                         Choose {selected?.title}
//                         </Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     )
// }

// export default RideOptionsCard

// const styles = StyleSheet.create({})