import { View, ScrollView, Text, StyleSheet } from "react-native";

import * as font from "../../settings/fonts";
import * as colors from "../../settings/colors";

export const PerformanceHome = (firstBlock) => {
    return (
        <View style={{ height: 220 }}>
            <ScrollView
                horizontal={true}
                style={{
                    marginTop: -20,
                    width: "100%",
                }}
                showsHorizontalScrollIndicator="false"
            >
                <View style={styles.block}>
                    <Text style={styles.header_text}>Расписание</Text>
                </View>
                <View style={styles.block}></View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header_text: {
        color: colors.FONT_DARK_COLOR,
        fontFamily: "Montserrat-Bold",
        fontSize: font.HEADER_2,
    },
    container: {
        height: 200,
    },
    block: {
        paddingVertical: 20,
        paddingHorizontal: 25,
        height: 200,
        borderRadius: 10,
        width: 320,
        marginLeft: 20,
        marginRight: 10,
        elevation: 1,
        shadowColor: colors.SHADOW_COLOR,
        shadowOpacity: 0.13,
        shadowOffset: { width: 2, height: 2 },
        backgroundColor: "#fff",
    },
});
