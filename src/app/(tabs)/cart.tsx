import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import { Ionicons }from "@expo/vector-icons";
import { useCart }from "../../Context/CartContext";
import { colors } from "../../styles/colors";

export default function Cart() {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total =
    cartItems.reduce(

      (acc: number, item: any) =>

        acc +
        item.price *
        item.quantity,

      0
    );

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Carrinho
      </Text>

      <FlatList
        data={cartItems}

        keyExtractor={(item) =>
          item.id
        }

        contentContainerStyle={{
          paddingBottom: 260,
        }}

        renderItem={({ item }) => (

          <View style={styles.card}>

            <Image
              source={
                typeof item.image ===
                "string"

                  ? {
                      uri:
                        item.image,
                    }

                  : item.image
              }

              style={styles.image}
            />

            <View style={styles.info}>

              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.type}>
                {item.type}
              </Text>

              <Text style={styles.price}>
                R$ {item.price}
              </Text>

            </View>

            <View style={styles.actions}>

              <TouchableOpacity
                style={
                  styles.actionButton
                }

                onPress={() =>
                  decreaseQuantity(
                    item.id
                  )
                }
              >

                <Ionicons
                  name="remove"
                  size={18}
                  color={colors.color3}
                />

              </TouchableOpacity>

              <Text
                style={styles.quantity}
              >
                {item.quantity}
              </Text>

              <TouchableOpacity
                style={
                  styles.actionButton
                }

                onPress={() =>
                  increaseQuantity(
                    item.id
                  )
                }
              >
                <Ionicons
                  name="add"
                  size={18}
                  color={colors.color3}
                />

              </TouchableOpacity>

            </View>

          </View>
        )}
      />

      <View style={styles.footer}>

        <View
          style={
            styles.totalContainer
          }
        >
          <Text
            style={
              styles.totalLabel
            }
          >
            Total:
          </Text>

          <Text style={styles.total}>
            R$ {total.toFixed(2)}
          </Text>

        </View>

        <TouchableOpacity
          style={
            styles.checkoutButton
          }
        >

          <Text
            style={
              styles.checkoutText
            }
          >
            comprar
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.color4,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  type: {
    color: colors.color3,
    marginTop: 5,
  },

  price: {
    marginTop: 10,
    fontWeight: "bold",
    color: colors.color1,
  },

  actions: {
    alignItems: "center",
  },

  actionButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.color4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  quantity: {
    marginVertical: 10,
    fontWeight: "bold",
  },

  footer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    backgroundColor: colors.white,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopWidth: 1,
    borderColor: colors.white,
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  totalLabel: {
    fontSize: 18,
    color: colors.color3,
  },

  total: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.color1,
  },

  checkoutButton: {
    height: 60,
    backgroundColor: colors.color1,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  checkoutText: {
    color: colors.color4,
    fontSize: 18,
    fontWeight: "bold",
  },

});