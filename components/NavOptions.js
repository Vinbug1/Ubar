import React from 'react'
import { FlatList, Text, TouchableOpacity, View,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {Icon} from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id:"456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
    {
        id:"789",
        title: "Laundry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVvFBoJmK8HCXzYaQwFn5mNzwZ9IOdfBNntA&usqp=CAU",
        screen: "LaundryScreen",
    },
    {
        id:"012",
        title: "Cleaning ",
        image: "data:image/jpeg;base64,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",
        screen: "CleaningScreen",
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
   // const origin = useSelector(selectOrigin)
    return (
        
        <FlatList                   
         data={data}
         numColumns={2}
         contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}
        keyExtractor={(item) => item.id} 
         renderItem={({item}) => (   
             <TouchableOpacity
              onPress={()=> navigation.navigate(item.screen)}
                style={tw`p-3 pl-6 pb-4 pt-8 bg-white m-2 w-40 mt-1 flex rounded-md justify-center items-center`}                              
             >
                 <View>
                     <Image
                     style={{width:120, height:120, resizeMode:'contain'}}
                        source={{
                            uri: item.image
                        }}
                     />
                     <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                     <Icon 
                     style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                     name="arrowright" color="white" type="antdesign" />
                 </View>
                
             </TouchableOpacity>
         )}
        />
    )
}

export default NavOptions