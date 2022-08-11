import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { Icon, ICON_SIZE } from "../settings/fonts";

import * as colors from "../settings/colors";

// Верхняя часть для того, чтобы была кнопка вернуться обратно
export const HeaderStack = ({ navigator }) => {
    if (navigator === null) return;

    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => {
                    navigator.goBack();
                }}
                activeOpacity={0.9}
                style={styles.block}
            >
                <View style={styles.block}>
                    <Icon
                        name="angel-left"
                        size={22}
                        color={colors.FONT_DARK_COLOR}
                        style={{ marginRight: 5 }}
                    />
                    <Text
                        style={{
                            fontSize: 14,
                            fontFamily: "Montserrat",
                            color: colors.FONT_DARK_COLOR,
                        }}
                    >
                        Назад
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 50,
        height: 50,
        width: "100%",
        paddingLeft: 20,
    },
    block: {
        height: 40,
        width: 90,
        borderRadius: 50,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        opacity: 0.9,
    },
});
