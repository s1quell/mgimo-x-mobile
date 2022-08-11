import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderStack } from "../../components/HeaderStack";
import { MarkdownView } from "react-native-markdown-view";
import * as md from "../../settings/markdown_style";

import * as font from "../../settings/fonts";

export const ArticleScreen = ({ navigation, route }) => {
    const { title, pictureUrl } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{ uri: pictureUrl }}
                ></Image>
                <Text>{title}</Text>
                <MarkdownView style={styles.mdPresenter} styles={md.styles}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo soluta beatae aperiam molestias esse minus
                    voluptate harum. Blanditiis tempore voluptas aut eius
                    facilis officiis eum repellendus similique eveniet! Error,
                    esse!
                </MarkdownView>
                <HeaderStack navigator={navigation} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    },

    image: {
        position: "relative",
        height: 220,
        width: "100%",
    },

    mdPresenter: {
        marginHorizontal: 10,
        marginVertical: 20,
    },
});
