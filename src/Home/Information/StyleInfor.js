import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const styles= StyleSheet.create({
    header:{
        flex:0.18,
        backgroundColor:'#FF6600',
        paddingTop:40
      }
      ,shop:{
         backgroundColor:'white',
          padding:10,
          flex:0.6
           

      },headerBody:{
           flexDirection:'row',
           width:'100%',
           justifyContent:'space-between'
      },setting:{
        flexDirection:'row',
        justifyContent:'space-around',
        flex:0.4,
        alignItems:'center',
      },
      canhan:{
         marginTop:10,
     
        flexDirection:'row',
      },
      themThongTin:{
         flexDirection:'row',
         justifyContent:'space-between',
         marginRight:4,
      }
      
}) 
 
export default styles
