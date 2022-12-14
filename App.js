import { StatusBar, View } from 'react-native';
import React from 'react';
import HomePage from './Screens/HomPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  NotoSerif_400Regular,
  NotoSerif_700Bold,
} from '@expo-google-fonts/noto-serif';
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import
  {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import SingleProductPage from './Screens/singleProductPage';
import Bag from './Screens/Bag';
import { BagProvider } from './providers/bagProvider';
import Loginpage from './Screens/loginPage';
import SignUppage from './Screens/sign_upPage';
import Myaccount from './Screens/myAccount';
import Checkout from './Screens/checkOut';
import { AuthProvider } from './providers/AuthProvider';

const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    NotoSerif_400Regular,
    NotoSerif_700Bold,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });


  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <AuthProvider>
        <BagProvider>
          <NavigationContainer>
            <StatusBar barStyle = 'dark-content'/>
            <Stack.Navigator >
              <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} />
              <Stack.Screen name="SinglePage" component={SingleProductPage} options={{headerShown: false}} />
              <Stack.Screen name="Bag" component={Bag} options={{headerShown: false}} />
              <Stack.Screen name="LoginPage" component={Loginpage} options={{headerShown: false}} />
              <Stack.Screen name="SignUpPage" component={SignUppage} options={{ title: "T???o t??i kho???n" }} />
              <Stack.Screen name="MyAccount" component={Myaccount} options={{ headerShown: false }} />
              <Stack.Screen name="CheckOut" component={Checkout} options={{headerShown: false}}/>
            </Stack.Navigator>
          </NavigationContainer>
        </BagProvider>
      </AuthProvider>
  );}
};

export default App;