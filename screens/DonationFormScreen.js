import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DonationFormScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPickUp, setIsPickUp] = useState(false);
  const [quantity, setQuantity] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // CO2 emissions per kg based on material type
  const CO2_EMISSIONS = {
    Paper: 0.46,
    Plastic: 1.02,
    Glass: 0.31,
    Metal: 5.86,
  };

  const calculateCO2Saved = () => {
    const co2PerKg = CO2_EMISSIONS[selectedItem];
    const totalCO2Saved = quantity * co2PerKg;
    return totalCO2Saved.toFixed(2); // returns CO2 saved in kg
  };

  // Handle date change
  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // Handle time change
  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  // Form submission handler
  const handleSubmit = () => {
    const totalCO2Saved = calculateCO2Saved();
    if (
      selectedItem &&
      quantity &&
      (homeAddress || !isPickUp) &&
      date &&
      time
    ) {
      const donationDetails = `
        Donating ${quantity}kg of ${selectedItem}.\n
        ${
          isPickUp
            ? `Pick-up at ${homeAddress}`
            : "Drop-off at Safeer Tower, Abu Dhabi"
        }.\n
        ${
          isPickUp
            ? `Pick-up Time: ${date} at ${time}\nPhone: ${phoneNumber}`
            : ""
        }
      `;
      Alert.alert("Form Submitted", donationDetails);
      navigation.navigate("Thankyou", {
        item: selectedItem,
        quantity: quantity,
        date: date.toLocaleString(),
        totalCO2Saved: totalCO2Saved,
      });
    } else {
      Alert.alert("Error", "Please fill in all required fields.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://i.ibb.co/kgvh4Tc/Whats-App-Image-2024-10-20-at-6-21-43-PM.jpg",
        }} // Replace with your actual logo URL or image source
        style={styles.logo}
      />
      <Text style={styles.header}>Donate Items</Text>
      <Text>Material</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedItem(value)}
        items={[
          { label: "Paper", value: "Paper" },
          { label: "Plastic", value: "Plastic" },
          { label: "Glass", value: "Glass" },
          { label: "Aluminum Cans", value: "Aluminum Cans" },
          { label: "Old Mobiles", value: "Old Mobiles" },
        ]}
        placeholder={{ label: "Select item to donate", value: null }}
        style={pickerSelectStyles}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter quantity (kg)"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <View style={styles.switchContainer}>
        <Text>Drop Off</Text>

        <Switch value={isPickUp} onValueChange={setIsPickUp} />
        <Text>Pick Up</Text>
      </View>
      {isPickUp && (
        <View>
          <Text style={styles.sectionHeader}>Enter Pick-Up Details</Text>

          {/* Home Address Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your home address"
            value={homeAddress}
            onChangeText={setHomeAddress}
          />
          <View>
            <Button
              title="Pick Date"
              color="green"
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
            <Text>Selected Date: {date.toLocaleDateString()}</Text>
          </View>

          {/* Time Picker */}
          <View>
            <Button
              title="Pick Time"
              color="green"
              onPress={() => setShowTimePicker(true)}
            />
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onChangeTime}
              />
            )}
            <Text>Selected Time: {time.toLocaleTimeString()}</Text>
          </View>

          {/* Phone Number Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      )}

      {/* Drop-Off Section */}
      {!isPickUp && (
        <View style={styles.locationSection}>
          <Text style={styles.sectionHeader}>Drop-Off Location:</Text>
          <Text style={styles.info}>350, Safeer Tower, Abu Dhabi</Text>

          <View>
            <Button
              title="Pick Date"
              color="green"
              onPress={() => setShowDatePicker(true)}
            />
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
            <Text style={styles.info}>
              Selected Date: {date.toLocaleDateString()}
            </Text>
          </View>

          {/* Time Picker */}
          <View>
            <Button
              style={styles.red}
              title="Pick Time"
              color="green"
              onPress={() => setShowTimePicker(true)}
            />
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onChangeTime}
              />
            )}
            <Text style={styles.info}>
              Selected Time: {time.toLocaleTimeString()}
            </Text>
          </View>

          {/* Phone Number Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      )}
      {/* Submit Button */}
      <Button title="Submit Donation" onPress={handleSubmit} color="green" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  info: {
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationSection: {
    alignItems: "center",
    marginBottom: 20,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 20,
  },
};
