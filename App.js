import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, Keyboard, SafeAreaView, StyleSheet } from 'react-native'
import InputData from './components/InputData';




const App = () =>  {

  return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container} >
           <Text style={{ fontSize:18, fontWeight:'700',  textAlign:'center', backgroundColor:'darkblue',color:'white', paddingTop:20, paddingBottom:20 }} > Geo Calculator </Text>
          <InputData />
      </SafeAreaView>
   </TouchableWithoutFeedback>

  )
}

 
const styles = StyleSheet.create({
 container: {
   backgroundColor: "#fff",
   flex: 1
 },
});


export default App