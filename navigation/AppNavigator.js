import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./MainNavigator";
import AuthScreen from "../screens/AuthScreen";


const AppNavigator = (props) => {
    // AUTHSCREENS NAVIGATION -TRUE OR FALSE
   const isAuth = false;

return(
<NavigationContainer>
    {isAuth && <MainNavigator/>}
    {!isAuth && <AuthScreen/>}
</NavigationContainer>
  );

};
export default AppNavigator;