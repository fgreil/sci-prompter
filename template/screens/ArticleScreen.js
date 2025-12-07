import { View, Text, Button } from "react-native";

export default function ArticleScreen({ navigation }) {
  return (
    <View>
      <Text>Article</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Add to Favorites" onPress={() => alert("Added!")} />
    </View>
  );
}
