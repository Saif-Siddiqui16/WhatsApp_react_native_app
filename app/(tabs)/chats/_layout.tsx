import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
<Stack.Screen 
name='index'
options={{
  title:'Chats',
  headerLargeTitle:true,
  headerTransparent:true,
  headerBlurEffect:"regular",
  headerLeft:()=>(
    <TouchableOpacity>
              <Ionicons
                name="ellipsis-horizontal-circle-outline"
                color={Colors.primary}
                size={30}
              />
            </TouchableOpacity>
  ),
  headerRight:()=>(
    <View style={{ flexDirection: 'row', gap: 30 }}>
    <TouchableOpacity>
      <Ionicons name="camera-outline" color={Colors.primary} size={30} />
    </TouchableOpacity>
    <Link href="/(modals)/new-chat" asChild>
      <TouchableOpacity>
        <Ionicons name="add-circle" color={Colors.primary} size={30} />
      </TouchableOpacity>
    </Link>
  </View>
  ),
  headerStyle:{
    backgroundColor:"#fff"
  },
  headerSearchBarOptions:{
    placeholder:'Search'
  }
}}
/>
 <Stack.Screen
        name="[id]"
options={{
  title:''
}}
        />


    </Stack>
  )
}

export default Layout