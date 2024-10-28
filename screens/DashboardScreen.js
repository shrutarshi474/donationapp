import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function DashboardScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  // Retrieve the user's name from navigation route params

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name);
        }
      }
    };

    fetchUserName();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome message with name */}
      <Text style={styles.welcomeText}>Welcome, {userName}!</Text>

      {/* Logo */}
      <Image
        source={{
          uri: "https://i.ibb.co/kgvh4Tc/Whats-App-Image-2024-10-20-at-6-21-43-PM.jpg",
        }} // Replace with your actual logo URL or image source
        style={styles.logo}
      />

      {/* About the app section */}

      <ScrollView style={styles.scrollView}>
        <Text style={styles.droptext}>
          GreenoKeeper is an innovative app designed to promote sustainability
          through efficient waste material recycling and collection. Developed
          by high school student Preet Pannu, the app offers a range of
          user-friendly features including pickup and drop-off services, the
          ability to choose convenient time slots, and a unique tool to
          calculate CO2 emissions saved. These features empower communities to
          manage their waste responsibly while fostering greater awareness and
          participation in recycling efforts. By providing these comprehensive
          services, GreenoKeeper aims to make a significant impact on
          environmental conservation and encourage a more sustainable future.
        </Text>
      </ScrollView>

      {/* Show Points button */}
      <View style={styles.button}>
        <Button
          title="Show Points"
          onPress={() => navigation.navigate("Points")}
          color="green"
        />
      </View>

      {/* Environmental News Section */}
      <Button
        title="News"
        onPress={() => navigation.navigate("News")}
        color="green"
      />
      <Text style={styles.sectionHeader}>Environmental News</Text>
      <Text style={styles.newsText}>
        Read about the latest environmental issues, climate change initiatives,
        and tips on living a greener life. Stay informed and contribute to
        saving the planet!
      </Text>

      {/* Donate button */}
      <View style={styles.button}>
        <Button
          title="Donate"
          onPress={() => navigation.navigate("Donation")}
          color="green"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  scrollView: {
    padding: 10,
  },
  droptext: {
    fontSize: 14,
    lineHeight: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  aboutText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    marginBottom: 20,
    width: "80%",
  },
});
