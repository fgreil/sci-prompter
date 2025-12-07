import { View, Text, Button } from "react-native";

export default function SearchScreen({ navigation }) {
  return (
    <View>
      <Text>Search</Text>
      <Button title="Filter" onPress={() => navigation.navigate("SearchFilter")} />
      <Button title="Article" onPress={() => navigation.navigate("Article")} />
    </View>
  );
}
