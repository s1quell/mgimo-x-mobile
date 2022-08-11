import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { React } from "react";
import { PerformanceHome } from "./PerformanceHome";
import { News } from "./News";

import { LinearGradient } from "expo-linear-gradient";

import * as font from "../../settings/fonts";
import * as colors from "../../settings/colors";

//#region Стилизация CSS

//#endregion

export const HomeScreen = ({ navigation }) => {
    // fetch("https://reactnative.dev/movies.json")
    //     .then((response) => response.json())
    //     .then((json) => {
    //         json.movies;
    //         Alert.alert("Успешно", "Вот так!");
    //     })
    //     .catch((error) => {
    //         Alert.alert("Ошибка", error);
    //     });

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
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                }}
            >
                <View style={{ backgroundColor: "#FFF", height: 300 }}></View>
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
                        marginBottom: 40,
                        height: "auto",
                        backgroundColor: "#fff",
                        flex: 1,
                    }}
                >
                    <PerformanceHome />

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

                    {/* Выбор между мероприятиями и новостями */}
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 30,
                            direction: 1,

                            height: "auto",
                        }}
                    >
                        <Text style={styles.news}>Новости</Text>
                        <Text style={styles.events}>Мероприятия</Text>
                    </View>

                    {/*  */}
                    <News
                        title={"День открытых дверей МГИМО Одинцово"}
                        onPress={(item) => {
                            navigation.navigate("Статья", {
                                title: item.title,
                                pictureUrl: item.pictureUrl,
                                author: item.author,
                            });
                        }}
                    />

                    <News title={"День открытых дверей МГИМО Одинцово"} />
                    <News title={"День открытых дверей МГИМО Одинцово"} />
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
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        height: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});
