import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, ActivityIndicator,
} from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './StyleLogin'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [taikhoan, setName] = useState('');
  const [matkhau, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const login = async () => {

    try {
      // const dataLog = await axios.post('https://muddy-teddy-fawn.cyclic.app/api/login', { taikhoan: taikhoan, matkhau: matkhau })
      // console.log(dataLog)
      // if (dataLog.status == 200) {
      //   console.log(typeof (dataLog.status))
      //   setLoading(true);
      //   // Giả sử rằng việc đăng nhập mất 2 giây
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('Home');
          setPass('');
          setName('');
          // Sau đó, điều hướng đến trang Home

        }, 2000);
      // }
      // else {
      //   alert('dang nhập thất bại')
      // }

    } catch (eror) {
      console.log(eror)
    }
  }
  const [hienthi, setHienthi] = useState(true);

  const anhien = () => {
    setHienthi(!hienthi);

  }
// nhap form ddnag kys 
   const sigin=()=>{
    navigation.navigate('dangky');
   }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.font}> Dang Nhap</Text>
        <Image source={require('../Image/logo.png')}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.body}>
        <View style={styles.bodycon}>
          <Text tyle={styles.Txt}>UserName</Text>
          <View style={styles.IuserName}>
            <FontAwesome name="user" size={24} color="black" />
            <TextInput
              placeholder="nhap user name"
              style={styles.textinput}
              value={taikhoan}
              onChangeText={(taikhoan) => setName(taikhoan)}
            />
          </View>
          <Text tyle={styles.Txt}>PassWord</Text>
          <View style={[styles.IPass, styles.IuserName]}>
            <Ionicons name="key-sharp" size={24} color="black" />
            <TextInput
              placeholder="nhap pass word"
              style={styles.textinput}
              secureTextEntry={hienthi}
              titleAler='vui long nhap thong tin chinh sac'
              value={matkhau}
              onChangeText={(matkhau) =>{setPass(matkhau)} }
            />
            <TouchableOpacity
              onPress={anhien}
            >
              <Ionicons name={hienthi ? 'eye-off' : 'eye'} size={30} color="black"
                style={styles.eye}
              />
            </TouchableOpacity>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',
          alignItems:'center',padding:5,
         
        }}>
            <TouchableOpacity style={styles.foget}
            >
            <Text style={{fontSize:15}}>Fot paswwod?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              onPress={sigin}
          >
            <Text style={{fontSize:20,fontWeight:'500'}}>Sigin</Text>
          </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            style={styles.button}
            onPress={login}
          >
            <LinearGradient colors={['#faf', '#3b5998', '#192f6a']}
              style={styles.linagradine} >
              <Text style={styles.btnTxt}>Login</Text>
            </LinearGradient>
            <Spinner
              visible={loading}
              textContent={'Đangs tải...'}
              textStyle={{ color: '#FFF' }}
            />
          </TouchableOpacity>
          <View style={styles.ViewIcon}>

            <Text
              style={styles.labelwith} >Login With</Text>
            <TouchableOpacity style={styles.icon} >
              <FontAwesome5 name="facebook-f" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} >
              <AntDesign name="google" size={34} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} >
              <AntDesign name="twitter" size={34} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <View style={styles.flooter}>

      </View>

    </View>
  )
}
export default Login
