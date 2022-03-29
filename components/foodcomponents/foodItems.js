import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const FoodItems = (props) => {   
    return (
        <TouchableOpacity  style={{marginBottom: 30}}> 
            {props.foodData.map((item,index) => (
                <View  key={index} style={{ marginTop:10, padding:10, backgroundColor:"white", borderRadius:8}}>         
                     
                     <View style={{ borderRadius:8}}>
                            <Image source={{ uri: item.image }}
                                style={{width:"100%", height:200 }}
                                 resizeMode='cover' />
                                 <View
                                  style={{
                                      position:"absolute",
                                      bottom:0,
                                      height:40,
                                      width:300 * 0.3,
                                      backgroundColor:'#eee',
                                      borderTopRightRadius:8,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}>
                                        <Text style={{fontSize:15,fontWeight:'normal',color:"black"}}>30 - 43 min</Text>
                                 </View>
                     </View>
                     <View>
                        <TouchableOpacity style={{position:'absolute', right: 20, top: 20}}>
                                        <MaterialCommunityIcons name='star' size={25} color='#118DFF'/>
                        </TouchableOpacity>             
                    </View>                    
                     <FoodInfor name={item.name} rating={item.rating} price={item.price}/> 
                </View>
            ))}   
        </TouchableOpacity>
     )
   }


export default FoodItems;
 const IconImg = (props) => (
    <>
              <TouchableOpacity style={{position:'absolute', right: 20, top: 20}}>
                  <MaterialCommunityIcons name='heart-outline' size={25} color='white'/>
              </TouchableOpacity>
     </> 
 );

 const FoodInfor =(props)=>(
    <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>

    <View>
        <Text style={{fontSize: 15,fontWeight:"normal"}}>{props.name}</Text> 
        <Text style={{fontSize: 15, fontWeight:"normal"}}>${props.price}</Text>             
        <Text  style={{fontSize: 15, fontWeight:"normal"}}>{props.categories}</Text>
    </View>

    <View  style={{ justifyContent:'center', alignItems:'center',borderRadius:15, paddingRight: 2 }}>
        <Text  style={{fontSize: 15, fontWeight:"normal"}}>{props.rating}</Text>
    </View>
   
</View>
 )
const styles = StyleSheet.create({});