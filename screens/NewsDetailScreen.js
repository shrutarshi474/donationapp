import React from "react";
import { View, Text, Button, StyleSheet, Image, Linking } from "react-native";

export default function NewsDetailScreen({ route, navigation }) {
  const { title, description, content, url, urlToImage } = route.params;

  return (
    <View style={styles.container}>
      {/* Display the news image */}
      {urlToImage && (
        <Image source={{ uri: urlToImage }} style={styles.newsImage} />
      )}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.content}>{content}</Text>

      {/* Button to open full article in a web browser */}
      <Button
        title="Read Full Article"
        onPress={() => Linking.openURL(url)}
        color="green"
      />

      {/* Button to go back */}
      <Button
        style={styles.butt}
        color="#1b4508"
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  butt: {
    paddingTop: 5,
  },
  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
});
