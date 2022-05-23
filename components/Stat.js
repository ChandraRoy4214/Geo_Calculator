import React from 'react'
import {View, Text, ScrollView} from 'react-native'


function Stat(item) {
    const {score, text} = item

  return (
    <View style={{ flex:1, flexDirection:'column',  borderColor:'violet', borderWidth:2, borderRadius:15 ,justifyContent:'center', alignItems:'center', flexWrap:'wrap', marginLeft:10, width:154, marginBottom:10,  }} >
     <Text style={{ fontSize:36, fontWeight:"800",  }} > {score} </Text>
     <Text  style={{ fontSize:18, fontWeight:"600",  }}  >  {text} </Text>
    </View>
    
  )
}

export default Stat