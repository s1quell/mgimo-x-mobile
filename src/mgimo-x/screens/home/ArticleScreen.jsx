import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderStack } from "../../components/HeaderStack";
import { MarkdownView } from "react-native-markdown-view";
import * as md from "../../settings/markdown_style";

import * as font from "../../settings/fonts";
import * as colors from "../../settings/colors";

export const ArticleScreen = ({ navigation, route }) => {
    const { title, pictureUrl, author } = route.params;

    const [opacity, setOpacity] = React.useState(1);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                opacity={opacity}
                source={{ uri: pictureUrl }}
            ></Image>

            {/* Хештег статьи */}
            <View
                style={{
                    position: "absolute",
                    direction: "rtl",
                    width: "100%",
                    opacity: opacity,
                }}
            >
                <View
                    style={{
                        backgroundColor: "#FF9D3C",
                        height: 28,
                        width: 100,
                        top: 55,
                        left: 20,
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
            </View>
            <ScrollView height={"100%"}>
                <View style={styles.content}>
                    {/* Заголовок статьи */}
                    <Text style={styles.header}>{title}</Text>

                    {/* Дополнительная информация о статье */}
                    <Text style={styles.articleInfo}>
                        Студенческий совет МГИМО 02.05.2022
                        {"\n"}
                        Репортер: Яна Печерская
                    </Text>

                    {/* Статья */}
                    <MarkdownView style={styles.mdPresenter} styles={md.styles}>
                        ## Открытие
                        {"\n"}
                        Встречу открыла директор Одинцовского филиала МГИМО
                        Е.А.Козловская. Она подробно рассказала о кампусе,
                        уровнях образования, которые реализуются на его базе, и
                        индивидуальных образовательных траекториях.
                        {"\n\n"}
                        {">"} Набор в МГИМО-Одинцово не превышает **240
                        человек** на программы бакалавриата и 200 человек на
                        программы магистратуры. {"\n"}Директор Одинцовского
                        филиала МГИМО Елена Александровна Козловская
                        {"\n\n"}
                        ##Факультеты
                        {"\n"}
                        На базе кампуса действуют пять факультетов, два из них
                        уникальные — Факультет лингвистики и межкультурной
                        коммуникации и Факультет финансовой экономики.
                        {"\n\n"}
                        Елена Александровна также подчеркнула, что Одинцовский
                        филиал — инновационная цифровая площадка МГИМО. Именно
                        здесь в дополнение к традиционным мгимовским
                        направлениям открыты программы по цифровой экономике,
                        искусственному интеллекту, науке о данных, финансовых
                        технологиях, лингвистике, психологии. Каждый год в
                        МГИМО-Одинцово появляются принципиально новые программы.
                        В 2021 году открываются четыре магистерские программы,
                        которые отражают актуальные запросы рынка труда:
                        «Цифровое право», «Экономика IT и управление данными»,
                        «Современная педагогика и образовательный дизайн» и
                        «Событийный менеджмент».
                        {"\n\n"}
                        Е.А.Козловская пригласила всех абитуриентов на очный
                        день открытых дверей, который состоится 18 февраля: «Это
                        возможность познакомиться с кампусом и в режиме выставки
                        встретиться с руководителями программ, деканами,
                        заместителями директоров и получить ответы на
                        интересующие абитуриентов вопросы».
                        {"\n\n"}
                        **Студенческий совет МГИМО-Одинцово**
                        {"\n"}
                        Яна Печерская
                    </MarkdownView>
                </View>

                <View
                    style={{
                        height: "auto",
                        marginTop: 10,
                        marginBottom: 40,
                        marginHorizontal: 15,
                        flexDirection: "row",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Proxima-Bold",
                            fontSize: 20,
                            color: colors.FONT_GRAY_COLOR,
                        }}
                    >
                        Понравилась статья?
                    </Text>

                    <font.Icon
                        style={{ marginLeft: 15 }}
                        name="like"
                        size={20}
                        color={colors.FONT_GRAY_COLOR}
                    />
                    <font.Icon
                        style={{ marginLeft: 15 }}
                        name="dislike"
                        size={20}
                        color={colors.FONT_GRAY_COLOR}
                    />
                </View>
            </ScrollView>
            <HeaderStack navigator={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },

    header: {
        marginLeft: 15,
        marginTop: 20,
        fontSize: 28,
        fontFamily: "Proxima-Bold",
    },

    image: {
        position: "absolute",
        height: 282,
        width: "100%",
    },

    mdPresenter: {
        marginHorizontal: 15,
        marginVertical: 5,
    },

    content: {
        backgroundColor: "#FFF",
        marginTop: 282,
    },

    articleInfo: {
        marginLeft: 15,
        marginTop: 10,
        fontFamily: "Proxima",
        fontSize: 14,
        color: colors.FONT_GRAY_COLOR,
    },
});
