import React from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search'
import Videoplayer from './src/screens/Videoplayer' 
import Explore from './src/screens/Explore' 
import Subscriptions from './src/screens/Subscriptions' 
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import {createStore,combineReducers} from 'redux'
import {Provider,useSelector} from 'react-redux'
import {reducering} from './src/reducers/reducer'
import {themereducer} from './src/reducers/Themereducer'

const rootreducer=combineReducers({
  homedata:reducering,
  enabledarkmode:themereducer
})

const store=createStore(rootreducer)

const Stack=createStackNavigator()
const Tabs=createBottomTabNavigator()

const mydarktheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'#4a4848',
    iconColor:"white",
    tabColor:"white",
    searchColor:"white",
    bgColor:"#615f5f"
  }
}

const mydefaulttheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabColor:"red",
    searchColor:"#e0dcdc",
    bgColor:"#f5eded"
  }
}

const MainHome=()=>{
  const {colors} = useTheme()
  return(
    <Tabs.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = "home";
        } else if (route.name === 'Explore') {
          iconName = "explore";
        } else if (route.name === 'Subscriptions'){
          iconName= "subscriptions";
        }
        return <MaterialIcons name={iconName} size={24} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabColor,
      inactiveTintColor: 'gray',
    }}>
        <Tabs.Screen name="Home" component={Home}/>
        <Tabs.Screen name="Explore" component={Explore}/>
        <Tabs.Screen name="Subscriptions" component={Subscriptions}/>
    </Tabs.Navigator>
  )
}

export default ()=>{
  return(
    <Provider store={store}>
      <Navig />
    </Provider>
  )
}

export function Navig() {
  let currenttheme=useSelector((state)=>{
    return state.enabledarkmode
  })
  return (
    <NavigationContainer theme={currenttheme?mydarktheme:mydefaulttheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="MainHome" component={MainHome}/>
          <Stack.Screen name="Search" component={Search}/>
          <Stack.Screen name="Videoplayer" component={Videoplayer}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
