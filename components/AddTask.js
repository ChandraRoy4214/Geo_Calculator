import React, {useState} from 'react'
import { Text, TextInput, View ,Button} from 'react-native'

function AddTask({addItem }) {

 const [text, setText] = useState()



  return (
    <View style={{ flexDirection:'column', marginTop:10, margin:10, alignItems:'center', paddingHorizontal:10 }} >
      <TextInput placeholder='Enter latitude for point 1 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setText(text) } }

         style={{ borderColor:'grey', borderBottomWidth:1,color:'red', width:'100%', letterSpacing: 1.2,  fontSize:16, fontWeight:'700', borderRadius:5}} >
       </TextInput>
      <TextInput placeholder='Enter longitude for point 1 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setText(text) } }

         style={{ borderColor:'grey', borderBottomWidth:1, color:'#000C66', width:'100%', letterSpacing: 1.2,  fontSize:16, fontWeight:'700', borderRadius:5}} >
       </TextInput>
      <TextInput placeholder='Enter latitude for point 2 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setText(text) } }

         style={{ borderColor:'grey', borderBottomWidth:1, color:'#000C66', letterSpacing: 1.2, width:'100%', fontSize:16, fontWeight:'700', borderRadius:5}} >
       </TextInput>
      <TextInput placeholder='Enter longitude for point 2 ' 
          placeholderTextColor={'grey'}
          paddingLeft={10}
          onChangeText={ (text) => { setText(text) } }

         style={{ borderColor:'grey', borderBottomWidth:1, color:'#000C66', width:'100%', letterSpacing: 1.2,  fontSize:16, fontWeight:'700', borderRadius:5}} >
       </TextInput>

     {/* =======================  add button  ================================= */}
            <Button title='Calculate' onPress={ () => {addItem(text)} } />
            <Button title='Clear' onPress={ () => {addItem(text)} } />
    </View>
  )
}

export default AddTask