import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View, } from "react-native";

export default function CoffeeCard({ product }: any) {

  function handleDetails() {

    router.push({
      pathname: "/(tabs)/details",

      params: {
        name: product.name,
        type: product.type,
        price: product.price,
      },
    });
  }

  return (
    <TouchableOpacity
      onPress={handleDetails}
    >
      <View>

       <Image
        source={product.image}
          style={{ width: 120, height: 120 }}
      />

        <Text>
          {product.name}
        </Text>

        <Text>
          {product.type}
        </Text>

        <Text>
          R$ {product.price}
        </Text>

      </View>
    </TouchableOpacity>
  );
}