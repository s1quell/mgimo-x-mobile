import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as colors from "../../settings/colors";
import { Agenda } from "react-native-calendars";
import { calendar_styles } from "./components/Calendar";

export const ScheduleScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header_block}>
                <Text style={styles.header_text}>Расписание</Text>
            </View>

            {/* Календарь с выбранной неделей */}
            <View style={styles.calendar_block}>
                <Agenda
                    renderEmptyData={() => {
                        return (
                            <ScrollView
                                style={{
                                    backgroundColor: "#FFF",
                                }}
                            ></ScrollView>
                        );
                    }}
                    firstDay={1}
                    theme={calendar_styles.calendar_theme}
                    style={styles.calendar}
                ></Agenda>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: "#FFF", height: "100%" },

    calendar_block: {
        width: "100%",
        height: "100%",
    },

    header_block: {
        paddingTop: 75,
        paddingHorizontal: 0,
        height: 250,
    },

    calendar: {},

    header_text: {
        color: colors.MGIMO_COLOR,
        fontSize: 32,
        fontFamily: "Montserrat-Black",
    },
});
