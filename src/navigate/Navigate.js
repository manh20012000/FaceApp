import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../Home/ScreenHome/ScreenHome.js';
import Danhmuc from '../Home/Danhmuc/Danhmuc.js';
import GioHang from '../Home/GioHang/GioHang.js';
import Infor from '../Home/Information/Infor.js';
import Login from '../Login/Login.js';
import SeeDeTail from '../Home/TrangChu/SeeDeTail.js';
import Dangky from '../Login/Dangky.js';
import AddInfor from '../Home/Information/AddInfor.js';
export const NameScreen = {
  SCREEN_Home: 'Home',
  SCREEN_Login: 'Login',

};
const Stack = createNativeStackNavigator();
const Navigete = () => {
  return (
    <NavigationContainer style={{
      flex: 1
    }}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='Login'
          component={Login}

        />
        <Stack.Screen

          name='Home'
          component={ScreenHome}
        />
        <Stack.Screen

          name='SeeDeTail'
          component={SeeDeTail}

        />
      
        <Stack.Screen
          name='dangky'
          component={Dangky}
        />
         <Stack.Screen
          name='ThemInfor'
          component={AddInfor}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Navigete;