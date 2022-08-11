import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as colors from "../../settings/colors";

export const ScheduleScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header_block}>
                <Text style={styles.header_text}>Расписание</Text>
            </View>

            <ScrollView></ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},

    header_block: {
        paddingTop: 75,
        paddingHorizontal: 30,
        height: 250,
    },

    header_text: {
        color: colors.MGIMO_COLOR,
        fontSize: 32,
        fontFamily: "Montserrat-Black",
    },
});
