import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView} from 'react-native'
import { React, useState } from 'react'
import styles from './StyleFlatItem.js'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, EvilIcons, AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeeDeTail from './SeeDeTail.js';
import Navigete from '../../navigate/Navigate.js';
const FlatItem = (props) => {

  const numberLike = props.item.like;
  const binhluan = props.item.comment;
  const [isLiked, setIsLiked] = useState(false);
  const [number, setNumber] = useState(0);

  const [nblike, setnblike] = useState(numberLike)
  const handlePress = () => {

    props.setData(prev => {

      const DataCopy = [...prev];

      const index = DataCopy.findIndex(item => item.id === props.item.id)
      if (nblike === numberLike) {
        setnblike(nblike + 1);
      } else {
        setnblike(nblike - 1);

      }
      // DataCopy[index].like=nblike;

      return DataCopy;
    })
    setIsLiked(!isLiked);
  };
  const DetaiHandress = () => {
    const gtri = props.index
    // su kien nhan vao see detail
    props.navigation.navigate('SeeDeTail', props.item);
    return <SeeDeTail />
  }
  //   }

  return (
   
    <View style={styles.contain}>
   
      <TouchableOpacity
        onPress={DetaiHandress}
        style={{ backgroundColor: 'white', width: '95%', height: 140, justifyContent: 'center', flexDirection: 'row' }}>
        <View style={styles.image}>
        <Image 
             style={{width:150,height:150}}
           source={{
                  uri:props.item.image
                      }}
           ></Image>
        </View>
        <View style={styles.Infor}>
          <View style={{ flex: 2, backgroundColor: 'green' }}>
            <Text style={{ fontSize: 15 }}>thong tin gioi thiêu mô ta </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, flex: 1, marginLeft: 4, textAlign: 'center' }}>Sản phẩm cò lại </Text>
            <Text style={{ fontSize: 15, flex: 1, marginRight: 4 }}>giá:    $</Text>
          </View>
        </View>

      </TouchableOpacity>
    </View>
  )
}
export default FlatItem;
