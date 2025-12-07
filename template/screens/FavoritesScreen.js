import { View, Text, Button } from "react-native";

export default function FavoritesScreen({ navigation }) {
  return (
    <View>
      <Text>Favorites</Text>
      <Button title="Open Article" onPress={() => navigation.navigate("SearchFlow", { screen: "Article" })} />
    </View>
  );
}
