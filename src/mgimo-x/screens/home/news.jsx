import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const News = ({ title, onPress }) => {
    const [date, setDate] = React.useState("12.05.2022");

    const pictureUrl =
        "https://mgimo.ru/upload/iblock/338/dod-odin-18-02-21_113.jpg";
    const author = "Студенческий совет * 22.05.2022";

    // Метод вызывается когда выбирается статья и передаются параметры для //полной статьи
    const pressing = () => {
        onPress({ title, pictureUrl, author });
    };

    return (
        <TouchableOpacity style={styles.container} onPress={pressing}>
            <Image
                style={styles.image}
                source={{
                    uri: pictureUrl,
                }}
            />

            <LinearGradient
                colors={["transparent", "rgba(50,50,50,0.8)"]}
                style={styles.block}
            >
                {/* Заголовок новости */}
                <Text
                    style={{
                        fontFamily: "Montserrat-Bold",
                        color: "#fff",
                        fontSize: 20,
                        marginBottom: 2,
                    }}
                >
                    {title}
                </Text>
                {/* Информация кто написал статью */}
                <Text
                    style={{
                        fontFamily: "Montserrat",
                        color: "#D7D7D7",
                        fontSize: 14,
                    }}
                >
                    {"Студенческий совет"}
                </Text>
            </LinearGradient>

            {/* Дата создания статьи */}
            <View style={styles.top_content}>
                <View
                    style={{
                        backgroundColor: "#FF9D3C",
                        height: 28,
                        width: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "#fff",
                            fontFamily: "Montserrat-Black",
                            fontSize: 16,
                        }}
                    >
                        {"#ДОД"}
                    </Text>
                </View>

                <Text
                    style={{
                        color: "#C0C0C0",
                        fontFamily: "Montserrat",
                        fontSize: 13,
                    }}
                >
                    {date}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 220,
        marginTop: 10,
        marginHorizontal: 10,

        elevation: 1,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 0 },
    },

    image: {
        height: 220,
        position: "absolute",
        width: "100%",
        borderRadius: 10,
    },

    block: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        position: "absolute",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    top_content: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 20,
        justifyContent: "space-between",
    },
});
