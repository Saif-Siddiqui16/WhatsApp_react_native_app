import welcomeImage from "../assets/images/welcome.png";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const WelcomScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: welcome_image }} style={styles.welcome} />
      <Text style={styles.headline}>Welcome to WhatsApp Clone</Text>
      <Text style={styles.description}>
        Read our <Text style={styles.link}>Privacy Policy</Text>.
        {`Tap "Agree & Continue" to accept the `}
        <Text style={styles.link}>Terms of Service</Text>.
      </Text>
      <Link href={"/otp"} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default WelcomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  welcome: {
    width: "100%",
    height: 300,
    borderRadius: 60,
    marginBottom: 80,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    marginVertical: 10,
    fontWeight: "500",
  },
});
