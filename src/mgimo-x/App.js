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
    // Подключение сторонних шрифтов в программу
    const [loaded] = useFonts({
        // Подключение семейства шрифтов Montserrat
        Montserrat: require("./assets/fonts/Montserrat/Montserrat-Medium.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
        "Montserrat-Black": require("./assets/fonts/Montserrat/Montserrat-Black.ttf"),

        // Подключение семейства шрифтов Proxima
        Proxima: require("./assets/fonts/Proxima/Proxima-Regular.ttf"),
        "Proxima-Bold": require("./assets/fonts/Proxima/Proxima-Bold.ttf"),
        "Proxima-Black": require("./assets/fonts/Proxima/Proxima-Black.ttf"),
        "Proxima-Italic": require("./assets/fonts/Proxima/Proxima-Italic.ttf"),
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
