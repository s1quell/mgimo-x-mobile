import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/home/HomeScreen";
import { ScheduleScreen } from "../screens/Schedule Screen/ScheduleScreen";
import { MapScreen } from "../screens/Map Screen/MapScreen";
import { AccountScreen } from "../screens/Account Screen/AccountScreen";

import { HomeNavigator } from "../navigation/stack/HomeNavigator";

import * as font from "../settings/fonts";

import React from "react";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;

                        switch (route.name) {
                            case "Главная":
                                iconName = "home";
                                break;
                            case "Расписание":
                                iconName = "schedule";
                                break;
                            case "Карта":
                                iconName = "map-solid";
                                break;
                            case "Аккаунт":
                                iconName = "user";
                                break;
                        }

                        if (route.name === "Главная") {
                        } else if (route.name === "Расписание") {
                        }

                        // You can return any component that you like here!
                        return (
                            <font.Icon
                                name={iconName}
                                size={font.ICON_SIZE}
                                color={color}
                            />
                        );
                    },
                    headerShown: false,
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Главная" component={HomeNavigator} />
                <Tab.Screen name="Расписание" component={ScheduleScreen} />
                <Tab.Screen name="Карта" component={MapScreen} />
                <Tab.Screen name="Аккаунт" component={AccountScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
