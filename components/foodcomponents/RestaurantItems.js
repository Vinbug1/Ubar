import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const RestaurantItems = (props) => {   
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}> 
            { props.restaurantData.map((item,index) => (
                <View  key={index} style={{ marginTop:10, padding:10, backgroundColor:"white", borderRadius:8}}>         
                     <View style={{ borderRadius:8}}>
                            <Image source={{ uri: item.image }}
                                style={{width:"100%", height:200 }} resizeMode='cover' />
                                {/* <TouchableOpacity style={{position:'absolute', right: 20, top: 20}}>
                                    <MaterialCommunityIcons name='heart-outline' size={25} color='white'/>
                                </TouchableOpacity> */}
                     </View>
                    
                     <RestaurantInfor
                      name={item.name} 
                      rating={item.rating}
                       contact={item.contact}
                        address={item.address}/>                    
                </View>
            ))}   
        </TouchableOpacity>
     )
   }


export default RestaurantItems;

 const RestaurantInfor =(props)=>(
    <View style={{flexDirection: 'row',justifyContent:'space-between' ,alignItems:'center',marginTop:10}}>
    <View>
        <Text style={{fontSize: 15,fontWeight:"bold"}}>{props.name}</Text> 
        {/* <Text style={{fontSize:15,color:"#C0C0C0"}}>30 - 45 - min </Text> */}
        <Text  style={{fontSize: 15, fontWeight:"normal"}}>{props.address}</Text>       
    </View>
    <View  style={{
        backgroundColor:"#DCDCDC",  justifyContent:'center', alignItems:'center',borderRadius:15, paddingRight: 2}}>
        <Text  style={{fontSize: 15, fontWeight:"normal"}}>{props.rating}</Text>
        <Text  style={{fontSize: 15, fontWeight:"normal"}}>{props.contact}</Text>
    </View>
   
</View>
 )
const styles = StyleSheet.create({});