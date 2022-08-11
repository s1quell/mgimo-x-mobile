// Importing libraries, such as:
// Styled Components - css styling react components
// Expo Fonts - add custom app font
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { Navigation } from "./navigation/Navigation";

// Importing font's settings
import { useFonts } from "expo-font";
import * as font from "./settings/fonts";

export default function App() {
    // Добавление сторонних шрифтов в программу
    const [loaded] = useFonts({
        Montserrat: require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
        "Montserrat-Black": require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),
        Icons: require("./assets/fonts/Icons/fontello.ttf"),
    });

    if (!loaded) {
        return <View></View>;
    }

    return <Navigation />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
