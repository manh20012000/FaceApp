import { StyleSheet, Text, View, FlatList, Item, TextInput, ScrollView, TouchableOpacity, } from 'react-native'
import { React, useState } from 'react'
import DataOjs from '../../Data/DataObj.js'
import FlatItem from './FlatItem.js'
import styles from './StyleTrangchu.js'
import SeeDeTail from './SeeDeTail.js'
import { Feather } from '@expo/vector-icons';
const TrangChu = ({ navigation }) => {
  const [data, setData] = useState(DataOjs);

  return (

    <View style={styles.container}>
      <View style={{
        width: 340, backgroundColor: 'white', margin: 10, borderRadius: 40,
        padding: 8, flexDirection: 'row',
        justifyContent: 'space-between'

      }}>
        <TextInput
          placeholder="Tim kiem"
          style={{ fontSize: 18, width: '75%' }}
        >

        </TextInput>
        <Feather name="search" size={24} color="black" />
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