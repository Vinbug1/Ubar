import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator,BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen';
import Svg,{ Path } from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/FontAwesome';
import RestaurantItems from '../components/foodcomponents/RestaurantItems';
import FoodItems from '../components/foodcomponents/foodItems';


 const  Tab = createBottomTabNavigator();
 const TabBarCustomeButton = ({accessibilityState, children,onPress}) =>{
     var  isSelected = accessibilityState.selected;
     if(isSelected) {
            return(
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', position: 'absolute', top:0}}>
                            <View style={{flex:1, backgroundColor:"white",}}></View>
                        <Svg 
                            width={75}
                            height={61}
                            viewBox="0 0 75 64"
                        >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={"white"}
                        />
                        </Svg>
                        <View style= {{
                            flex:1, backgroundColor:"white" }}></View>
                    </View>
                    <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height:50,
                        borderRadius:25,
                        backgroundColor: "white",
                    }}
                    onPress={onPress}>
                        {children}
                    </TouchableOpacity>
                </View>
            )
     }else{
        return(
            <TouchableOpacity
                style={{
                    flex:1,
                    height: 60,
                    backgroundColor:"white"
                }}
                activeOpacity={1}
                onPress={onPress}
                >
                {children}
            </TouchableOpacity>
        )
     }
 }
 const CustomTabBar = (props) =>{ 
     if (isIphoneX()) {         
         return (
             <View>
                <View 
                style={{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    right:0,
                    height:10,
                    backgroundColor:"transparent"}}>
                </View>
             <BottomTabBar {...props.props}/>
             </View>
         )
     }else{
        <BottomTabBar {...props.props}/>
     }
 }
const tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            showLabel: false,
             tabBarStyle:{
                 borderTopWidth:0,
                 backgroundColor:"white",
                  evaluation: 0
                }
            }} 
            // tabBar={(props) => (
            //     <CustomTabBar  
            //      props={props}
            //     />
            //     )}
         >

        <Tab.Screen
            name="Restaurants"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                     name="cutlery"
                      color={color}
                       size={23}
                        />
                  ),
                  tabBarButton: (props) => (
                      <TabBarCustomeButton
                        {...props}
                      />
                  )
            }}
        />
        <Tab.Screen 
            name="Foods"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                     name="heart"
                      color={color}
                       size={23}
                        />
                  ),
                  tabBarButton: (props) =>(
                    <TabBarCustomeButton
                      {...props}
                    />
                )                
            }}
        />
        <Tab.Screen
            name="Search"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                     name="search"
                      color={color}
                       size={23}
                        />
                  ),
                  tabBarButton: (props) =>(
                    <TabBarCustomeButton
                      {...props}
                    />
                )                  
            }}
        />
        <Tab.Screen
            name="User"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon 
                     name="user"
                      color={color}
                       size={23}
                        />
                  ),
                  tabBarButton: (props) =>(
                    <TabBarCustomeButton
                      {...props}
                    />
                )
            }}
        />
        
    </Tab.Navigator>
  );
};

export default tabs;

const styles = StyleSheet.create({});
