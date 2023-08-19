import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trangchu from '../Home/TrangChu/Trangchu.js'
import { FontAwesome5 } from '@expo/vector-icons';
import Message from '../Home/GioHang/Message.js';
import Infor from '../Home/Information/Infor.js';
import { Feather } from '@expo/vector-icons';
import Add from '../Home/Add/Add.js';
import { MaterialIcons } from '@expo/vector-icons';
import RecodViedeo from '../AddVideo/RecodVieao.js';
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
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../Image/home.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          )
        }}

      />
      <bottonTad.Screen
        name='Message'
        component={Message}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="facebook-messenger" size={24} color="white" />
          )
        }}
      />
      <bottonTad.Screen
        name='RecodViedeo'
        component={RecodViedeo}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../Image/new-video.png')}
              style={{
                width: 35,
                height: 25,
              }}
            />
          )
        }}

      />
      <bottonTad.Screen
        name='Vieo'
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="ondemand-video" size={30} color="white" />

          )
        }}
      />
      <bottonTad.Screen
        name='Infor'
        component={Infor}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../Image/user.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          )
        }}

      />

    </bottonTad.Navigator>


  );
}
export default BootonGate;