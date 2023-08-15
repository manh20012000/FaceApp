import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './StyleInfor'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
const Infor = ({ navigation }) => {
  // thêm infor
    
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerBody}>
          <TouchableOpacity style={styles.shop}>
            <Text>Xem shop</Text>
          </TouchableOpacity>
          <View style={styles.setting}>
            <TouchableOpacity>
              <AntDesign name="setting" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="shoppingcart" size={24} color="white" />

            </TouchableOpacity>
            <TouchableOpacity>

              <FontAwesome5 name="facebook-messenger" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.canhan}>
          <View style={{ backgroundColor: 'white', width: 70, height: 70, borderRadius: 30, marginLeft: 20 }}></View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>name</Text>
            <TouchableOpacity style={{ padding: 4, width: 92, backgroundColor: '#CFCFCF', alignItems: 'center', borderRadius: 5 }}>
              <Text>thành viên </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
              <Text style={{ color: 'white' }}>0 theo dõi</Text>
              <Text style={{ color: 'white' }}>|</Text>
              <Text style={{ color: 'white' }}>1 nguoi theo dõi</Text></View>

          </View>
        </View>
      </View>


      <View style={styles.body}>
       <View style={{justifyContent:'space-around',flexDirection:'row'}}> 
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 4,flex:1 }}>
          <View style={{flexDirection:'row',flex:1}}>
            <FontAwesome name="newspaper-o" size={24} color="black" />
            <Text>    đơn hàng</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 4,flex:1 }}>
          <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
            <Text>  lịch sư mua hàng</Text>
            <AntDesign name="right" size={24} color="black" />
          </View>

        </TouchableOpacity>
        </View>
           
        <View style={styles.donhang}>
        </View>
        <TouchableOpacity 
           onPress={()=>{
            navigation.navigate('ThemInfor');
           }}
        style={styles.themThongTin}>
        <Ionicons name="add" size={24} color="black" />
        <Text>Thêm thông tin cá nhân </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Infor;
