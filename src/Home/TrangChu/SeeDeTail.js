import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView,FlastList} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Styles.js'
import { FontAwesome5 } from '@expo/vector-icons';
import DataOjs from '../../Data/DataObj.js';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import BootemSheet from '../Add/BootemSheet.js';
const SeeDeTail = ({ route }) => {
  const data = route.params;
    const bootemsheet=()=>{
      // alert('dnjsndsdfghjhgfdsdfg')
      return (  
        
       <BootemSheet></BootemSheet>
       )
    }
  return (

    <View style={{ flex: 1, backgroundColor: 'pink', marginTop: 40 }}>
      <View style={styles.timkiem}>
        <TextInput style={{ fontSize: 23, width: 300 }}
          placeholder='nhap tim kiem '
        >
        </TextInput>
        <TouchableOpacity>
          <FontAwesome5 name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.anhBiaf}>

        </View>

        <View style={styles.giaBan}>

          <Text style={{ fontSize: 18, fontWeight: '800', alignItems: 'center' }}>Giá:$</Text>
          <Text style={{ fontSize: 18, fontWeight: '800', alignItems: 'center' }}>Đã bán:   $</Text>
        </View>
        <View style={styles.QuangCao}>
          <Text style={{ fontSize: 18, fontWeight: '500', alignItems: 'center' }}>Tên sản phẩm </Text>

        </View>
        <View style={styles.canhan}>
             <View><Text>ảnh bìa</Text></View>
              <View>
                <Text> tến sop</Text>
                <Text>Địa điểm</Text>
                <Text>Online</Text>
              </View>
              <TouchableOpacity style={{width:100,height:45,justifyContent:'center',alignItems:'center',backgroundColor:'#FF6600'}}>
                <Text style={{color:'white',fontWeight:'600'}}> Sem shop</Text>
              </TouchableOpacity>
        </View>

        <View style={styles.cmt}>
          <TextInput style={{ fontSize: 23, width: 300 }}
            placeholder='nhap phan hoi'
          >
          </TextInput>
          <TouchableOpacity>
            <Ionicons name="send" size={24} color="black" />
          </TouchableOpacity>

        </View>
        <View style={{flexDirection:"row",justifyContent:'space-around',backgroundColor:'white',marginTop:2,padding:3}}>
          <Text style={{fontSize:18}}>giá sao 5*     </Text>
          <Text style={{fontSize:18}}> đã bán        sản phẩm </Text>   
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity>
             <FontAwesome name="share" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
         <AntDesign name="message1" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={{width:'100%',padding:10,backgroundColor:'#FF6600',marginTop:3}}
          onPress={bootemsheet}>
            <Text style={{fontWeight:'900'}}>Xem chi tiết </Text>
          </TouchableOpacity>
        </View>
      </View >
       <View style={styles.xemthem}>
             
       </View>
    </View>
  )
}
export default SeeDeTail
