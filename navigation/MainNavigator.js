import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import ChatSettingScreen from '../screens/ChatSettingScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatScreen from "../screens/ChatScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 
//BOTTOM-TAB NAVIGATION
const TabNavigator = () => {
  return (
    <Tab.Navigator
 //screenOptions={{headerTitle:''}}
    >
      <Tab.Screen name= "ChatList" 
      component={ChatListScreen} 
      options={{tabBarLabel: 'Chats',
      tabBarIcon:() => { 
        return<Ionicons name=
        "chatbubbles-outline" 
        size={24} color="#00FF5C" />}
    }}/>
      
      <Tab.Screen name= "Settings" 
      component={SettingsScreen}
      options={{tabBarLabel: 'Settings',
      tabBarIcon:({color,size}) => { 
        return<Ionicons name=
        "settings-outline" 
        size={size} color= {color} />}
        }}/>
    </Tab.Navigator>
  )
}

const MainNavigator = props => {
    return (
 <Stack.Navigator>
        <Stack.Screen name="Home" 
            component={TabNavigator} 
            options={{ headerShown: false }}/>
            
        <Stack.Screen name="ChatScreen"    
             component={ChatScreen} 
             options={{
              headerTitle: "",
              headerBackTitle: "Back"}}/>

        <Stack.Screen name="ChatSetting"    
             component={ChatSettingScreen} 
             options={{
              headerTitle: "Settings",
              headerBackTitle: "Back"}}/>
              
           
 </Stack.Navigator>

    );
};

export default MainNavigator;