import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, useSegments } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const TabsLayout = () => {
  const segments=useSegments()
  return (
  
    <Tabs>
      <Tabs.Screen 
      name="updates"
      options={{
        title:'Updates',
        tabBarIcon:({size,color})=>(
          <MaterialIcons name="update" size={size} color={color}/>
        )
      }}
      />
        <Tabs.Screen
          name="calls"
          options={{
            title: 'Calls',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="phone-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
           <Tabs.Screen
          name="communities"
          options={{
            title: 'Communities',
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="chats"
          options={{
            title: 'Chats',
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="chatbubbles" size={size} color={color} />
            ),
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.background,
              display: segments[2] === '[id]' ? 'none' : 'flex',
            },
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ size, color }) => <Ionicons name="cog" size={size} color={color} />,
            headerShown: false,
          }}
        />
    </Tabs>
   
  )
}

export default TabsLayout