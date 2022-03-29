import { useFocusEffect } from '@react-navigation/native';
import React,{useState,useCallback} from 'react'
import { View,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Categories from '../components/foodcomponents/Categories';
import HeaderTabs from '../components/foodcomponents/HeaderTabs';
//import RestaurantItems, { localRestaurants } from '../components/foodcomponents/RestaurantItems';
import SearchBar from '../components/foodcomponents/SearchBar';
import Tabs from '../navigation/tabs'
import axios from 'axios';
import baseURL from "../assets/common/baseUrl";
import FoodItems from '../components/foodcomponents/foodItems';
import RestaurantItems from '../components/foodcomponents/RestaurantItems';



const EatsScreen = () => {
    const [restaurantData,setRestaurantData] = useState([]);
    const [categories,setCategories] = useState([]);
    const [foodCtg, setfoodCtg] = useState([]);
    const [selectCategories, setSelectCategories] = useState([]);
    const [currentLocation, setCurrentLocation] = useState([]);
   // const [activeTab, setActiveTab] = useState('Delievery')
    const [foodData, setFoodData] = useState([]);

    useFocusEffect((
      useCallback(() => {       
        // restuarant
        axios.get(`${baseURL}restaurants`).then((res) => {
          setRestaurantData(res.data);
        }).catch((error) => {
          console.log('Api call error')
        })

        axios.get(`${baseURL}categories`).then((res) => {
          setCategories(res.data);
        }).catch((error) => {
          console.log('Api call error')
        })

        axios.get(`${baseURL}foods`).then((res) => {
          setFoodData(res.data);
        }).catch((error) => {
          console.log('Api call error')
        })
        return () => {
          setRestaurantData([]);
          setCategories([]);
          setFoodData([]);
        }
      },
      [],
      )))

    return (
            <SafeAreaView  style={tw`p-1 pt-7 flex-1 bg-gray-500`}>
              <View style={{paddingBottom:46}}>
                    <HeaderTabs />                               
              </View>           
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Categories categories={categories} />
                   {/* <RestaurantItems  restaurants={restaurantData} /> */}                 
                   <FoodItems foodData={foodData}/>
                 
                </ScrollView>
                <View style={{paddingBottom:44,backgroundColor:'transparent'}}>
                  <Tabs/>
                </View>
            </SafeAreaView>
    );
 
}

export default EatsScreen

