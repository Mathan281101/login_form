const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge57 from "./screens/AndroidLarge57";
import AndroidLarge63 from "./screens/AndroidLarge63";
import AndroidLarge46 from "./screens/AndroidLarge46";
import AndroidLarge55 from "./screens/AndroidLarge55";
import Property1Component2 from "./components/Property1Component2";
import AndroidLarge56 from "./screens/AndroidLarge56";
import AndroidLarge54 from "./screens/AndroidLarge54";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "NunitoSans12pt-Regular": require("./assets/fonts/NunitoSans12pt-Regular.ttf"),
    "NunitoSans12pt-Bold": require("./assets/fonts/NunitoSans12pt-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge57"
              component={AndroidLarge57}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge63"
              component={AndroidLarge63}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge46"
              component={AndroidLarge46}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge55"
              component={AndroidLarge55}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge56"
              component={AndroidLarge56}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge54"
              component={AndroidLarge54}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
