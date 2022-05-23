import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

function Task({deleteTask, task}) {
  const {text, id} = task;
  
  return (
    <TouchableOpacity >
   <View style={{ backgroundColor:'#7EC8E3', paddingHorizontal:20, height:60, borderBottomColor:'white',    borderBottomWidth:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }} >
        <Text style={{ fontSize:18,  fontWeight:'500', textTransform:'capitalize',  color:'black'  }} > {text} </Text>
      
        <Text onPress={() => { deleteTask(id) }} >
        <Icon size={40} style={{fontWeight:'bold'}} color='firebrick' >x</Icon>
        </Text>
    
    </View>
    </TouchableOpacity>
  )
}

export default Task