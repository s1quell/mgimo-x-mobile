import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../../screens/Home/HomeScreen";
import { ArticleScreen } from "../../screens/Home/ArticleScreen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "#FFF" },
            }}
        >
            <Stack.Screen name="Главная" component={HomeScreen} />
            <Stack.Screen name="Статья" component={ArticleScreen} />
        </Stack.Navigator>
    );
};
