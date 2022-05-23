import React from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import Stat from './Stat'

const data = [
 { score:56, text:'Attack Rating', id:1 },
 { score:32, text:'Career Wins', id:2 },
 { score:47, text:'defense rating', id:3 },
 { score:18, text:'Career Errors', id:4 },
 { score:78, text:'Winner%', id:5 },
 { score:'02', text:'Error%', id:6 },
]

function StatsList() {
  return (
     
    <View style={StyleSheet.container} > 
    {
     data.map((item) => <Stat key={item.id} {...item} /> )
    }
    </View>
  
  )
}


const style = StyleSheet.create({
  container: {
    display:'grid'
  },
  scrollView :{
      flex:1
  }
})

export default StatsList