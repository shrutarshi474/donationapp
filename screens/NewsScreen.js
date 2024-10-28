import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import axios from "axios";

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch news from the API
  const fetchNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: "environment",
          apiKey: "d6ad906e134440d098cec2d78405024c", // Replace with your NewsAPI key
        },
      });
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // UseEffect to call the fetchNews function when the screen loads
  useEffect(() => {
    fetchNews();
  }, []);

  // Render each news item with image, title, and description
  const renderItem = ({ item }) => (
    <View style={styles.newsItem}>
      {/* Display news image */}
      {item.urlToImage && (
        <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text numberOfLines={3} style={styles.description}>
        {item.description}
      </Text>

      {/* Read More Button */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NewsDetail", {
            title: item.title,
            description: item.description,
            content: item.content,
            url: item.url,
            urlToImage: item.urlToImage, // Passing image URL to detail page
          })
        }
      >
        <Text style={styles.readMore}>Read More</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading News...</Text>
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  newsItem: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
  },
  newsImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  readMore: {
    marginTop: 10,
    color: "green",
    fontWeight: "bold",
  },
});
