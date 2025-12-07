import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "./screens/ExploreScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import HistoryScreen from "./screens/HistoryScreen";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="SearchFlow" component={SearchStack}
        options={{ tabBarButton: () => null }} // hidden tab for search flow
      />
    </Tab.Navigator>
  );
}
