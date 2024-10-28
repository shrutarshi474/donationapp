import React from "react";
import { View, Button, Image, StyleSheet, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Centered Logo */}
      <Image
        source={{
          uri: "https://i.ibb.co/kgvh4Tc/Whats-App-Image-2024-10-20-at-6-21-43-PM.jpg",
        }} // Replace with your actual logo URL or image source
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to GreenOKeeper</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <View>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate("Sign In")}
            color="green"
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("Sign Up")}
            color="green"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20, // Space between logo and welcome text
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40, // Space between welcome text and buttons
  },
  buttonContainer: {
    width: "80%", // Adjust button width if needed
    justifyContent: "center",
  },
  button: {
    marginBottom: 20, // Space between Sign In and Sign Up buttons
  },
});
