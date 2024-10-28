import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function ThankYouScreen({ route, navigation }) {
  // Retrieve donation details from navigation params
  const { item, quantity, totalCO2Saved } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.ibb.co/kgvh4Tc/Whats-App-Image-2024-10-20-at-6-21-43-PM.jpg",
        }} // Replace with your actual logo URL or image source
        style={styles.logo}
      />
      <Text style={styles.thankYouText}>Thank You for Your Donation!</Text>

      {/* Display donated item and quantity */}
      <Text style={styles.confirmationText}>
        You have donated {quantity}kg of {item}.
      </Text>
      <Text style={styles.confirmationText}>
        CO2 Emissions Saved: {totalCO2Saved} kg.
      </Text>

      {/* Confirmation message */}
      <Text style={styles.confirmationMessage}>
        Your generous donation will help in making the world a greener place.
        We'll notify you about the next steps.
      </Text>

      {/* Button to go back to dashboard */}
      <Button
        title="Back to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
        color="green"
      />
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
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 20,
  },
  confirmationMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});
