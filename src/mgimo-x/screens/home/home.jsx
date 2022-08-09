import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";

import * as font_sizes from "../../settings/fonts";
import * as colors from "../../settings/colors";

//#region Стилизация CSS

//#endregion

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header_component}>
                <Text style={styles.header}>Главная</Text>
                <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../../assets/icons/user.png")}
                />
            </View>

            {/* Отображение историй */}
            <ScrollView></ScrollView>

            <ScrollView>
                <Text>Hello world</Text>
                <Text>Hello world</Text>
                <Text>Hello world</Text>
                <Text>Hello world</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFF",
    },
    header_component: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 13,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    header: {
        color: colors.HEADER_COLOR,
        fontSize: font_sizes.HEADER,
        fontFamily: "Montserrat-Bold",
    },
});
