import React, { useState }from 'react'
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
// import Images from '../../assets/images/Images'
// const items = [ 
// {  
//     id:"1",
//     image :Images.bugger,
    
//     text :"Ola food",
// },
// {
//     id:"2",
//     image :Images.pizza,
//     text:"Yo food",
// },
// {
//     id:"3",
//     image :Images.shawama,
//     text:"Enus food",
// },
// { 
//     id:"4",
//     image : Images.bread,
//     text :"Kings-food,"
// },
// {  
//     id:"5",
//     image : Images.dessert,
//     text :"Ola food",
// },
// {  
//     id:"6",
//     image : Images.fastfood,
//     text : "french-food,"
// },
// {
//     id:"7",
//     image : Images.pandoyam,
//     text:"GoldenPanny-food",
// },
// {
//     id:"8",
//     image : Images.softdrinks,
//     text:"Olas food",
// },
// {   
//     id:"9",
//     image :Images.shopping,
//     text:"Sweet-food",
// }
// ];

const Categories = (props) => {
   const [selectCategories, setSelectCategories] = useState([]);   
   const [restaurantData,setRestaurantData] = useState([]);
    
    return (
        <View style={{marginTop: 10,backgroundColor:"white", paddingTop:10,paddingleft:20,borderRadius:3}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={true}>
                <>
                {props.categories.map((item,index) =>( 
                    <TouchableOpacity key={index}  onPress={() => onSelectCategory(item)}>
                        <View 
                             
                             style={{
                                  padding:9,
                                   paddingBottom:9 * 2,
                                   alignItems:'center', 
                                   marginLeft:10,
                                   marginBottom:8, 
                                   borderRadius:28,
                                   backgroundColor:(selectCategories?.id == item.id) ?'#118DFF' : '#eee',
                                   alignItems:'center',
                                   justifyContent: 'center',                                                                      
                                     }}
                                     >
                        <View style={{backgroundColor:'white', width:50, height:50, borderRadius:22,padding:7,alignItems:'center',justifyContent: 'center'}}>
                                <Image source={{uri: item.image}}
                                style={{width:"100%",height:35, }} resizeMode="contain"
                                />
                        </View>
                            <Text style={{fontSize:13, fontWeight:"normal"}}>{item.name}</Text>
                        </View> 

                    </TouchableOpacity>
                 ))}
                </>
            </ScrollView>
        </View>
        )
  function  onSelectCategory(category){
            let restaurant = restaurantData.filter(a => a.categories.includes(category.id))
            setRestaurantData(restaurant)
            setSelectCategories(category)
          } 
}

export default Categories;

const styles = StyleSheet.create({})