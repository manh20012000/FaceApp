import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import styles from './StyleFlatItem.js'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, EvilIcons, AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeeDeTail from './SeeDeTail.js';
const FlatItem = (props) => {
  const numberLike = props.item.like;
  const binhluan = props.item.comment;

  const [nblike, setnblike] = useState(numberLike)
  const [isLiked, setIsLiked] = useState(false);
  const [number, setNumber] = useState(0);
  const handlePress = () => {
    setIsLiked(!isLiked);
    if (nblike === numberLike) {
      setnblike(nblike + 1);
    } else {
      setnblike(nblike - 1);
    }
  };
  // chuyển sang trang detail
  const DetaiHandress = () => {
          props.navigation.navigate('SeeDeTail',props.index);
  }

  return (
    <View style={styles.contain}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: props.item.avatar }}
            style={{
              width: 39,
              height: 44,
              borderRadius: 100, marginHorizontal: 6
            }} ></Image>
          <View >
            <Text style={styles.title}>{props.item.titleNameName}</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.item.Time}</Text>
          </View>

        </View>
        <TouchableOpacity style={styles.detail}
          onPress={DetaiHandress}
        ><Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>See Detail</Text></TouchableOpacity>
      </View>
      <View style={{ marginBottom: 10, paddingHorizontal: 6 }}><Text>{props.item.status}</Text></View>
      <View style={styles.bodyView}>
        <Image
          source={{ uri: props.item.image }}
          style={{
            width: 390,
            height: 440,
          }}
        ></Image>
      </View>
      <View
        style={styles.bodyView2}>
        <Text style={styles.titleTxt}>Money:{props.item.Money} $</Text>
        <Text style={styles.titleTxt}>Kilometer:{props.item.Kilomet} </Text>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <AntDesign name="staro" size={24} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 15 }}>{props.item.Flow}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 20 }} >{nblike} Like</Text>
        <Text style={{ fontSize: 20 }}>{binhluan.length} Bình luận</Text>
      </View>
      <View style={{
        height: 50,
        marginHorizontal: 10,
        flexDirection: 'row',
      }}>
        <TouchableOpacity style={{
          backgroundColor: 'black',
          flex: 1,
          alignItems: 'center', justifyContent: 'center', borderColor: 'white',
          borderWidth: 2
        }}
          onPress={handlePress}>
          <Text style={{ color: 'white' }} >
            <AntDesign name="hearto" size={24} color={isLiked ? 'red' : 'white'} /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: 'black',
          flex: 1,
          alignItems: 'center', justifyContent: 'center', borderColor: 'white',
          borderWidth: 2
        }}
        >
          <Text style={{ color: 'white' }} ><EvilIcons name="comment" size={34} color="white" /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: 'black',
          flex: 1,
          alignItems: 'center', justifyContent: 'center', borderColor: 'white',
          borderWidth: 2
        }}
        >
          <Text style={{ color: 'white' }} ><FontAwesome name="share" size={24} color="white" /></Text>
        </TouchableOpacity>



      </View>

    </View>
  )
}
export default FlatItem;