import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { React } from "react";
import { PerformanceHome } from "./PerformanceHome";
import { News } from "./news";
import { axios } from "axios";

import { LinearGradient } from "expo-linear-gradient";

import * as font from "../../settings/fonts";
import * as colors from "../../settings/colors";

//#region Стилизация CSS

//#endregion

export const Home = () => {
    // fetch("https://reactnative.dev/movies.json")
    //     .then((response) => response.json())
    //     .then((json) => {
    //         json.movies;
    //         Alert.alert("Успешно", "Вот так!");
    //     })
    //     .catch((error) => {
    //         Alert.alert("Ошибка", error);
    //     });

    const title = [{ name: "Hello world" }];

    return (
        <View style={styles.container}>
            <View style={styles.header_component}>
                <Text style={styles.header}>Главная</Text>
                <font.Icon
                    name="message"
                    size={font.ICON_SIZE}
                    color={colors.ICON_CHATS_COLOR}
                />
            </View>
            <ScrollView
                style={{
                    position: "absolute",
                    top: 40,
                    height: "100%",
                    width: "100%",
                }}
            >
                <View
                    style={{
                        marginTop: 250,
                        height: "auto",
                        backgroundColor: "#fff",
                        flex: 1,
                    }}
                >
                    <PerformanceHome></PerformanceHome>

                    <LinearGradient
                        colors={["#0652C5", "#D4418E"]}
                        start={{ x: 0.5, y: 0.0 }}
                        end={{ x: 0.5, y: 1.0 }}
                        locations={[0.1, 1]}
                        style={styles.registration}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontFamily: "Montserrat-Bold",
                                fontSize: 20,
                                flexWrap: "wrap",
                                marginHorizontal: 20,
                                textAlign: "center",
                            }}
                        >
                            Вступление в Студенческий совет
                        </Text>
                    </LinearGradient>

                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 30,
                            direction: 1,
                        }}
                    >
                        <Text style={styles.news}>Новости</Text>
                        <Text style={styles.events}>Мероприятия</Text>
                    </View>
                    <View height={1000}>
                        {title.map((title) => (
                            <News>{title.name}</News>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Нижняя часть главного экрана */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.MGIMO_COLOR,
        maxWidth: 1000,
        width: "100%",
    },
    header_component: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 80,
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header: {
        color: colors.HEADER_COLOR,
        fontSize: font.HEADER,
        fontFamily: "Montserrat-Black",
    },

    news: {
        fontFamily: "Montserrat-Bold",
        color: colors.MGIMO_COLOR,
        fontSize: 28,
        marginTop: 10,
        marginLeft: 20,
    },
    events: {
        fontFamily: "Montserrat-Bold",
        color: "#BABABA",
        fontSize: 28,
        marginVertical: 10,
        marginLeft: 20,
    },
    registration: {
        marginRight: 20,
        marginLeft: 20,
        height: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});
