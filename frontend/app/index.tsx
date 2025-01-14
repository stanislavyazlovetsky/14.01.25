import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>HEALTBAND</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper.
          </Text>
          <Button title="Read more" onPress={() => router.push("./detalinfo")} />
        </View>
      </View>

      {/* Body */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Heart rate</Text>
        <Text style={styles.sectionValue}>57</Text>
        <View style={styles.buttonRow}>
          <Button title="Set a standard" onPress={() => alert("Set Heart Rate Standard")} />
          <Button title="Read more" onPress={() => router.push("./detalinfo")} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saturation</Text>
        <Text style={styles.sectionValue}>95%</Text>
        <View style={styles.buttonRow}>
          <Button title="Set a standard" onPress={() => alert("Set Saturation Standard")} />
          <Button title="Read more" onPress={() => router.push("./detalinfo")} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Water</Text>
        <Text style={styles.sectionValue}>3 cups</Text>
        <View style={styles.buttonRow}>
          <Button title="Add" onPress={() => alert("Add Water")} />
          <Button title="Read more" onPress={() => router.push("./detalinfo")} />
        </View>
      </View>

      {/* SOS Button */}
      <TouchableOpacity style={styles.sosButton} onPress={() => alert("SOS Pressed")}>
        <Text style={styles.sosButtonText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    elevation: 3,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 10,
  },
  section: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionValue: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sosButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  sosButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
