import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const BoxedIcon = ({name,backgroundColor}:{
    name:typeof Ionicons.defaultProps,
    backgroundColor:string
}) => {
  return (
    <View style={{backgroundColor,padding: 4, borderRadius: 6}}>
      <Ionicons name={name} size={22} color={'#fff'}/>
    </View>
  )
}

export default BoxedIcon