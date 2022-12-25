import 'react-native-gesture-handler';
import { Button, LogBox, StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';


import AppNavigator from './navigation/AppNavigator';

LogBox.ignoreLogs(('AsyncStorage has been extracted'));

SplashScreen.preventAutoHideAsync();

   // SENT TO APP NAVIGATOR
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
 
// //BOTTOM-TAB NAVIGATION
// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//     //screenOptions={{headerTitle:''}}
//     >
//       <Tab.Screen name= "ChatList" 
//       component={ChatListScreen} 
//       options={{tabBarLabel: 'Chats',
//       tabBarIcon:() => { 
//         return<Ionicons name=
//         "chatbubbles-outline" 
//         size={24} color="#00FF5C" />}
//     }}/>
      
//       <Tab.Screen name= "Settings" 
//       component={SettingsScreen}
//       options={{tabBarLabel: 'Settings',
//       tabBarIcon:({color,size}) => { 
//         return<Ionicons name=
//         "settings-outline" 
//         size={size} color= {color} />}
//         }}/>
//     </Tab.Navigator>
//   )
// }


export default function App() {

   //SPLASH SCREEN
const [appIsLoaded, setAppIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAppIsLoaded(true);
    }, 2000);
    
       //LOAD FONTS
    const prepare = async ()=> {
      //TRY CATCH HANDLES ALL ERROR ON HANDLE
      try {
        await Font.loadAsync
        ({
          "black": 
          require("./assets/fonts/Roboto.Black.ttf"),
          //LOAD MORE FONTS WITH PATTERN
        });
       } 
       catch (error) {
        console.log.error();
      }
      finally {
        setAppIsLoaded(true);
      }
    };
    prepare();
  }, []);

  const onLayout = useCallback(async() => {
  if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded){
    return null;
  }

  // STACK NAVIGATION
  return (
    <SafeAreaProvider 
    style={styles.container} 
    onLayout={onLayout}>
       <AppNavigator/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  label:{
    color: 'black',
    fontsize: 20,
    fontFamily: 'black',

  },
});
