// Importing libraries, such as:
// Styled Components - css styling react components
// Expo Fonts - add custom app font
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { Home } from "./screens/home/home";
import { Loading } from "./screens/loading/loading";

// Importing font's settings
import { useFonts } from "expo-font";
import * as font from "./settings/fonts";

export default function App() {
    // Добавление сторонних шрифтов в программу
    const [loaded] = useFonts({
        Montserrat: require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
        "Montserrat-Black": require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
        Icons: require("./assets/fonts/Icons/fontello.ttf"),
    });

    if (!loaded) {
        return <Loading />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Home />
            <font.Icon name="plane" />
        </SafeAreaView>
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
