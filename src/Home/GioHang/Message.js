import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const Message = ({ navigation }) => {
  return (
    <View style={styles.contain}>

      <View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row' }}><Ionicons name="arrow-back-sharp" size={24} color="black" />
          <Text style={{ fontSize: 18, color: 'white' }}>Giỏ Hàng</Text>
        </TouchableOpacity>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 0.4,

        }}>
          <TouchableOpacity>
            <FontAwesome5 name="facebook-messenger" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: 'white' }}>Sửa</Text>
          </TouchableOpacity>

        </View>
      </View>
      <FlatList></FlatList>
       
       <View>
        
       </View>

    </View>
  )
}
export default Message;
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: 'orange'
  },
  header: {
    width: '100%',
    height: '5%',
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
  ,
})