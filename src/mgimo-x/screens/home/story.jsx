import { View, StyleSheet } from "react-native";

export const StoryComponent = (iconUrl, storyUrl) => {
    return <View style={styles.block}></View>;
};

const styles = StyleSheet.create({
    block: {
        width: 100,
        height: 100,
        backgroundColor: "#000",
    },
});
