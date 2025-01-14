import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation

export default function DetailInfo() {
  const router = useRouter(); // Get access to router

  return (
    <ImageBackground
      source={{ uri: "ВАШ_ФОН_URL" }} // Insert your background URL here
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Button for navigation, positioned in the top left corner */}
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => router.push('/')}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>HEALTHBAND</Text>
        <Text style={styles.subtitle}>Detail info</Text>

        {/* Days of the week */}
        <View style={styles.days}>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <View
              key={index}
              style={[styles.day, index === 0 ? styles.alertDay : null]}
            >
              <Text style={styles.dayText}>{day}</Text>
            </View>
          ))}
        </View>

        {/* Heart rate information */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Heart rate</Text>
          <Text style={styles.blockValue}>57</Text>
          <Text style={styles.blockText}>
            For the patient, this is normal since you have set the norm at 55
            beats per minute
          </Text>
          <Button title="Set a standard" onPress={() => {}} />
        </View>

        {/* Saturation information */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Saturation</Text>
          <Text style={styles.blockValue}>95%</Text>
          <Button title="Set a standard" onPress={() => {}} />
        </View>

        {/* Water information */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Water</Text>
          <Text style={styles.blockValue}>3 cups - 750 ml</Text>
          <Text style={styles.blockText}>
            The given rate is 2500 ml, the patient needs to drink 1750 ml - 7
            cups, provided that the cups are 250 ml each
          </Text>
          <Button title="Set a standard" onPress={() => {}} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    padding: 20,
    flex: 1,
  },
  backButtonContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1, // Ensures button is above other elements
  },
  backButtonText: {
    fontSize: 24, // Adjust text size
    color: "#000", // Set button text color
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  day: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 10,
    margin: 2,
  },
  alertDay: {
    backgroundColor: "red",
  },
  dayText: {
    color: "#fff",
    fontWeight: "bold",
  },
  block: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  blockTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  blockValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  blockText: {
    marginBottom: 10,
  },
});
