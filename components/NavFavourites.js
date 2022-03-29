import React from 'react'
import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'

const  data = [
    {
        id:"123",
        icon:"home",
        location:"Home",
        destination: "Code Street, London, Uk"
    },
    {
        id:"456",
        icon:"briefcase",
        location:"Work",
        destination: "London Eye, London, Uk"
    }
]
const NavFavourites = () => {
    const dispatch = useDispatch()
    return (
       <FlatList 
        data={data}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() =>(
            <View
             style={[tw`bg-gray-200`,{height: 0.5}]}
            />
        )}
        renderItem={({item}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
              <Icon 
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={item.icon}
                type='ionicon'
                color={'white'}
                size={18}
              /> 
              <View>
                  <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                  <Text style={tw`text-gray-500`}>{item.destination}</Text>
              </View>

           </TouchableOpacity>
        )}
       />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})