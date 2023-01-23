import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';


import CardScreen from "./screens/CardsTabScreens/CardScreen";
import CardsScreen from "./screens/CardsTabScreens/CardsScreen";

import ExploreScreen from "./screens/ExploreTabScreens/ExploreScreen";

import CodeScreen from "./screens/CodeScreen";
import AccountScreen from "./screens/AccountTabScreens/AccountScreen";

const BottomTabNavigator = createBottomTabNavigator();

const CardsStackNavigator = createStackNavigator();
const ExploreStackNavigator = createStackNavigator();
const AccountStackNavigator = createStackNavigator();

;

export const CardsNavigator = () => {
    return (
        <CardsStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <CardsStackNavigator.Screen
                name="Cards"
                component={CardsScreen}
            />
            <CardsStackNavigator.Screen
                name="Card"
                component={CardScreen}
            />

        </CardsStackNavigator.Navigator>
    );
}

export const ExploreNavigator = () => {
    return (
        <ExploreStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <ExploreNavigator.Screen
                name="Explore"
                component={ExploreScreen}
            />

        </ExploreStackNavigator.Navigator>
    )
}

export const AccountNavigator = () => {
    return (
        <AccountStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <AccountNavigator.Screen
                name="Account"
                component={AccountScreen}
            />

        </AccountStackNavigator.Navigator>
    )
}




export const MainNavigator = () => {
    return (
        <BottomTabNavigator.Navigator screenOptions={{ headersShown: false}}>
            <BottomTabNavigator.Screen
                name="CardsNavigator"
                component={CardsNavigator}
                options={{
                    tabBarLabel: "Cards",
                    tabBarIcon: () => <FontAwesome5 name="wallet" size={22} color="black" />
                }}
            />
            <BottomTabNavigator.Screen
                name="ExploreNavigator"
                component={ExploreNavigator}
                options={{
                    tabBarLabel: "Explore",
                    tabBarIcon: () => <FontAwesome5 name="search" size={24} color="black" />
                }}
            />
            <BottomTabNavigator.Screen
                name="Code"
                component={CodeScreen}
                options={{
                    tabBarLabel: "Code",
                    tabBarIcon: () => <MaterialIcons name="qr-code" size={24} color="black" />
                }}
            />
            <BottomTabNavigator.Screen
                name="AccountNavigator"
                component={AccountNavigator}
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color="black" />
                }}
            />
        </BottomTabNavigator.Navigator>
    );
}

export default function Routes() {
    const state = useContext(true);

    return (
        <MainNavigator/>
    );
}