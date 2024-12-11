import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store"
import { SplashScreen, Stack, useRouter, useSegments } from 'expo-router';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache={
  async getToken(key:string){
    try {
      return SecureStore.getItemAsync(key)

    } catch (error) {
      return null;
    }
  },
  async saveToken(key:string,value:string){
    try {
return SecureStore.setItemAsync(key,value)       
    } catch (error) {
      return 
    }
  }
}

export {ErrorBoundary} from "expo-router"

SplashScreen.preventAutoHideAsync()

const InitialLayout=()=>{

  const{isLoaded,isSignedIn}=useAuth()
const segments=useSegments()
const router=useRouter()
const [loaded, error] = useFonts({
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  ...FontAwesome.font,
});


useEffect(()=>{
  if(error) throw error
},[error])

useEffect(()=>{
  if(loaded){
    SplashScreen.hideAsync()
  }
},[loaded])

useEffect(()=>{
  if(!isLoaded) return ;

  const authSegments=['(auth)', 'otp', 'verify'];

  const inTabsGroup=authSegments.includes(segments[0])

if(isSignedIn && !inTabsGroup){
  router.replace('/(tabs)/chats')
}else if(!isSignedIn)
{
router.replace("/")
}

},[isSignedIn])
if (!loaded || !isLoaded) {
  return <View />;
}

  return (
   <Stack>
     <Stack.Screen name="index" options={{ headerShown: false }} />
     <Stack.Screen
        name="otp"
        options={{ headerTitle: 'Enter Your Phone Number', headerBackVisible: false }}
      />
       <Stack.Screen
        name="verify/[phone]"
        options={{
          title: 'Verify Your Phone Number',
          headerShown: true,
          headerBackTitle: 'Edit number',
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

   </Stack>
  )
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  )
}

export default RootLayout