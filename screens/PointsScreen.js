import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PointsScreen({ navigation }) {
  const points = 100; // Example: Points earned by the user
  const badges = ["Green Warrior", "Eco-Friendly", "Planet Protector"]; // Example badges

  const shareApp = () => {
    // Share app logic (Use Share API or similar)
    alert("Share the app link with your friends!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Points</Text>
      <Text style={styles.pointsText}>{points} Points</Text>

      <Text style={styles.header}>Your Badges</Text>
      {badges.map((badge, index) => (
        <Text key={index} style={styles.badgeText}>
          {badge}
        </Text>
      ))}

      <View style={styles.button}>
        <Button title="Share App" onPress={shareApp} color="green" />
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
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pointsText: {
    fontSize: 18,
    marginBottom: 30,
  },
  badgeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 40,
    width: "80%",
  },
});
