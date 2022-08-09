import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";

export const News = (data) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: "https://odin.mgimo.ru/images/news3725/DSC04642.jpg",
                }}
            />
            {/* Решить вопрос с передачей значения для новостей */}
            <Text style={{ fontSize: 18, position: "absolute", top: 20 }}>
                {data.name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 20,
    },

    image: {
        height: 220,
        borderRadius: 10,
    },
});
