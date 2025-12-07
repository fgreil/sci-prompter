import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNav from "./DrawerNav";

const Stack = createNativeStackNavigator();

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace("Main"), 1000);
  }, []);

  return (
    <View><Text>Splash Screen</Text></View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={DrawerNav} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
