import { View, Text, Button } from "react-native";

export default function ExploreScreen({ navigation }) {
  return (
    <View>
      <Text>Explore</Text>
      <Button title="Open Article" onPress={() => navigation.navigate("SearchFlow", { screen: "Article" })} />
      <Button title="Search" onPress={() => navigation.navigate("SearchFlow")} />
    </View>
  );
}
