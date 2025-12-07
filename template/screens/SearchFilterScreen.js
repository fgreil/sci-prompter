import { View, Text, Button } from "react-native";

export default function SearchFilterScreen({ navigation }) {
  return (
    <View>
      <Text>Search Filter</Text>
      <Button title="Back to Search" onPress={() => navigation.goBack()} />
    </View>
  );
}
