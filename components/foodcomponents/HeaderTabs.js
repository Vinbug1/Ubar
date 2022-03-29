import React, { useState } from 'react'
import { SafeAreaView,StyleSheet, Text, TouchableOpacity, View,FlatList,Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

//import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderTabs = () => {
   // const [activeTab,setActiveTab] = useState('Delivery')
   function renderHeader() {
       return (
           <View style={{flexDirection: 'row', height: 50, backgroundColor: 'white',borderRadius:5}}>
               <TouchableOpacity style={{width:50,paddingLeft: 18,justifyContent: 'center'}}>               
                     <Ionicons name='ios-location-outline' size={22}/>            
               </TouchableOpacity>
               <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                     <View 
                     style={{
                         width: '70%',
                         height:"80%",
                         backgroundColor:'#eee',
                         justifyContent: 'center',
                         alignItems: 'center', 
                         borderRadius:20 }}>
                         <Text style={{fontSize:20}}>Location</Text>
                     </View>
               </View>
               <TouchableOpacity style={{width:50,paddingLeft: 18,justifyContent: 'center'}}>
               <Ionicons name='basket' size={22}/> 
               </TouchableOpacity>
           </View>
       )
   }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
        </SafeAreaView>
        // <View style={{flexDirection: "row", alignSelf: "center"}} >
        //     <HeaderButton 
        //     text="Delivery" 
        //     btnColor="black"
        //     textColor="white" 
        //     activeTab={activeTab} 
        //     setActiveTab={setActiveTab}
        //     />

        //     <HeaderButton 
        //     text="PickUp" 
        //     btnColor="white"
        //      textColor="black" 
        //      activeTab={activeTab}
        //       setActiveTab={setActiveTab}
        //       />
            
        // </View>
    )
}

export default HeaderTabs

// const HeaderButton = (props) =>
//     <View>   
//         <TouchableOpacity style={{
//             backgroundColor: props.activeTab === props.text ? "black" : "white",
//             paddingVertical: 6,
//             paddingHorizontal: 16,
//             borderRadius: 30}}
//             onPress={() => props.setActiveTab(props.text)}
//             >
//             <Text style={{color: props.activeTab === props.text ? "white" :"black",fontSize:15,fontWeight:'900'}}>{props.text}</Text>
//         </TouchableOpacity> 
//     </View>

const styles = StyleSheet.create({
    container:{
        flex:1, backgroundColor:"gray" 
    },
    shadow: {
        shadowColor:"#000",
        shadowOffset:{
            width:0, height:3,
        },
        shadowOpacity: 0.1,
        shadowRadius:3,
        elevation:1,
    }
})