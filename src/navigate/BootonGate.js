import React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trangchu from '../Home/TrangChu/Trangchu.js'

import GioHang from '../Home/GioHang/GioHang.js';
import Infor from '../Home/Information/Infor.js';
import { Feather } from '@expo/vector-icons';
import Add from '../Home/Add/Add.js';
const bottonTad = createBottomTabNavigator();

const BootonGate = (navigation) => {
  return (

    <bottonTad.Navigator

      screenOptions={{
        tabBarStyle: { backgroundColor: 'black', },
        headerShown: false,
        tabBarActiveTintColor: 'red',

      }}
    >
      <bottonTad.Screen
        name='TrangChu'
        component={Trangchu}
       options={{
           tabBarIcon:({focused})=>(
             <Image
             source={require('../Image/home.png')} 
              style={{  width:25,
                         height:25,}}
            />
           )
       }}

      />
      <bottonTad.Screen
        name='GioHang'
        component={GioHang}
        options={{
          tabBarIcon:({focused})=>(
            <Image
            source={require('../Image/taixuong.png')} 
             style={{  width:25,
                        height:25,}}
           />
          )
      }}
      />

     
      <bottonTad.Screen
        name='Add'
        component={Add}
        options={{
          tabBarIcon:({focused})=>(
            <Image
            source={require('../Image/plus-button.png')} 
             style={{  width:25,
                        height:25,}}
           />
          )
      }}
      />
 <bottonTad.Screen
        name='Infor'
        component={Infor}
        options={{
          tabBarIcon:({focused})=>(
            <Image
            source={require('../Image/user.png')} 
             style={{  width:25,
                        height:25,}}
           />
          )
      }}

      />
    </bottonTad.Navigator>


  );
}
export default BootonGate;