import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeTabs" component={Tabs} />
    </Drawer.Navigator>
  );
}
