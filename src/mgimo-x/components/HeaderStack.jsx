import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, ICON_SIZE } from "../settings/fonts";

// Верхняя часть для того, чтобы была кнопка вернуться обратно
export const HeaderStack = ({ navigator }) => {
    if (navigator === null) return;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigator.goBack();
                }}
            >
                <Icon name="angel-left" size={25} color="#000" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 45,
        height: 50,
        width: "100%",
        paddingLeft: 28,
    },
});
