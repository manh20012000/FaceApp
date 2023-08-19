import { StyleSheet, Text, View, FlatList, Item, TextInput, ScrollView, TouchableOpacity, } from 'react-native'
import { React, useState } from 'react'
import DataOjs from '../../Data/DataObj.js'
import FlatItem from './FlatItem.js'
import styles from './StyleTrangchu.js'
import SeeDeTail from './SeeDeTail.js'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const TrangChu = ({ navigation }) => {
  const [data, setData] = useState(DataOjs);
  return (
    <View style={styles.container}>
      
      <View style={{ justifyContent: 'space-around',flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity style={{
          width: 340, backgroundColor: 'white', marginHorizontal: 15, marginVertical: 10, borderRadius: 40,
          padding: 8, flexDirection: 'row',
          justifyContent: 'space-between'
        }}
          onPress={() => {
            navigation.navigate('Timkiem')
          }}
        >
          <Text> nhập tìm kiếm </Text>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="bells" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
      </View>
    
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <FlatItem item={item} index={index} navigation={navigation}
              setData={setData} data={data}
            />
          )
        }}
      >
      </FlatList>
    </View>
  )
}
export default TrangChu;