import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../../screens/home/HomeScreen";
import { ArticleScreen } from "../../screens/home/ArticleScreen";

const Stack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Главная" component={HomeScreen} />
            <Stack.Screen name="Статья" component={ArticleScreen} />
        </Stack.Navigator>
    );
};
