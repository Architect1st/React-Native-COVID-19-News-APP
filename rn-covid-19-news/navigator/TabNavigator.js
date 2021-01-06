import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Ionicons } from "@expo/vector-icons";
import StaticsScreen from "../screens/StaticsScreen";
import InfoScreen from "../screens/InfoScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
  },
  {
    mode: "modal",
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={24}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const StaticsStack = createStackNavigator({
  Statics: StaticsScreen,
});

StaticsStack.navigationOptions = {
  tabBarLabel: "Statics",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-stats"
      size={24}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen,
  },
  {
    mode: "modal",
  }
);

InfoStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Info",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-paper"
        size={24}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  StaticsStack,
  InfoStack,
});

export default TabNavigator;
