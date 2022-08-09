// Importing libraries, such as:
// Styled Components - css styling react components
// Expo Fonts - add custom app font
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

// Importing font's settings
import * as font from "./settings/fonts";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: font.HEADER }}>
                Open up App.js to start working on your app!
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
