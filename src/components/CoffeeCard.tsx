import { Image, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import { router } from "expo-router";
import { useCart }from "../Context/CartContext";
import { colors } from '../styles/colors';

export default function CoffeeCard({ product }: any) {

  const { addToCart } = useCart();

  function handleDetails() {

    router.push({
      pathname: "/details",

      params: {
        name: product.name,
        type: product.type,
        price: product.price,
        description: product.description,
        rating: product.rating,

        image:
          Image.resolveAssetSource(
            product.image
          ).uri,
      },
    });
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handleDetails}
    >

      <Image
        source={product.image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.type}>
        {product.type}
      </Text>

      <View style={styles.footer}>

        <Text style={styles.price}>
          R$ {product.price}
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    width: "48%",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 12,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 16,
  },

  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  type: {
    color: "#999",
    marginTop: 5,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
  },

  button: {
    width: 35,
    height: 35,
    backgroundColor: colors.color1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

});