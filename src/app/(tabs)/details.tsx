import { View, Text } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function Details() {

  const { name,type,price,} = useLocalSearchParams();

  return (
    <View>

      <Text>{name}</Text>

      <Text>{type}</Text>

      <Text>R$ {price}</Text>

    </View>
  );
}