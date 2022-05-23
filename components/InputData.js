import React, {useState} from 'react'
import { Text, TextInput, StyleSheet, View ,Button, Keyboard} from 'react-native'
import {computeDistance, computeBearing} from './helper.js'


const initialState ={
  lat1: 0,
  long1: 0,
  lat2: 0,
  long2: 0,
  distance: 0,
  bearing:0
 }


function InputData( ) {

 const [ input, setInput ] = useState(initialState)
//  const [errorMsg, setErrorMsg] = useState(0)

 const handleClear = () => {
  setInput( initialState )
 }

 const handleCalculate = (lat1, lat2, lat3, lat4) => {
    const distance = computeDistance(lat1, lat2, lat3, lat4)
    const bearing = computeBearing(lat1, lat2, lat3, lat4)
    // console.log('distance: ', distance)
    // console.log('bearing: ', bearing)

    setInput({...input, distance:distance, bearing:bearing})

 }



  return (
    <View style={{ marginTop:10, margin:10,  paddingHorizontal:10 }} >
      <TextInput placeholder='Enter latitude for point 1 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setInput({...input, lat1 : text }) } }
          value={input.lat1}
          // onFocus={() => {setErrorMsg(1)}}
          style={styles.inputField} >
          
       </TextInput>
     
       {/* {
        typeof(input.lat1) != 'number' && errorMsg == 1 &&
       <Text style={styles.error} >
          Must be Number
       </Text>
       } */}
      <TextInput placeholder='Enter longitude for point 1 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setInput({...input, long1:text}) } }
          value={input.long1}
          // onFocus={() => {setErrorMsg(2)}}
          style={styles.inputField} >
       </TextInput>
       
       {/* {
        typeof(input.long1) != 'number' && errorMsg == 2 &&
       <Text style={styles.error} >
          Must be Number
       </Text>
       } */}
      <TextInput placeholder='Enter latitude for point 2 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setInput({...input, lat2:text}) } }
          value={input.lat2}
          // onFocus={() => {setErrorMsg(3)}}
         style={styles.inputField} >
       </TextInput>
       
       {/* {
      
        typeof(input.lat2) != 'number' && errorMsg == 3 &&
       <Text style={styles.error} >
          Must be a Number
       </Text>
       } */}
      <TextInput placeholder='Enter longitude for point 2 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setInput({ ...input, long2:text}) } }
          value={input.long2}
          // onFocus={() => {setErrorMsg(4)}}
         style={styles.inputField } >
       </TextInput>
       {
         console.log(typeof(input.long2))
       }
       
       {/* {
        typeof(input.long2) != 'number' && errorMsg == 4 &&
       <Text style={styles.error} >
          Must be a Number
       </Text>
       } */}

     {/* =======================  add button  ================================= */}
<View style={{ marginTop:30 }} >
            <Button title='Calculate' onPress={() => {
              Keyboard.dismiss()
              handleCalculate(input.lat1, input.long1, input.lat2, input.long2)}
              } />
            <Text></Text>
            <Button title='Clear' onPress={handleClear} />
</View>

<View style={{ marginTop:20 }} >
  <Text style={styles.output}  > Distance: {input.distance} </Text>
    <Text style={styles.output} > Bearing: {input.bearing.toFixed(3)} deg </Text>

</View>
    </View>
  )
}

const styles = StyleSheet.create({
 inputField: {
   fontSize: 18,
   borderBottomWidth: 1,
   width:'100%',
   fontWeight:'600',
   borderColor:'grey',
   color:'black'
 },
 output:{
    color: 'black',
    fontSize:20,
    marginBottom:10,
    fontWeight:'600'
 }
 ,
 error:{
   color:'red'
 }
 
})

export default InputData