import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DashboardScreen from "./screens/DashboardScreen";
import PointsScreen from "./screens/PointsScreen";
import DonationFormScreen from "./screens/DonationFormScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import NewsScreen from "./screens/NewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          initialParams={{ name: "Ray" }}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen name="Points" component={PointsScreen} />
        <Stack.Screen name="Donation" component={DonationFormScreen} />
        <Stack.Screen name="Thankyou" component={ThankYouScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
