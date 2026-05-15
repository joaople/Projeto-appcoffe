import { Image, ScrollView, StyleSheet, Text, TouchableOpacity,View,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useCart }from "../../Context/CartContext";
import { colors } from "../../styles/colors";

export default function Details() {

  const {
    name,
    type,
    price,
    description,
    rating,
    image,
  } = useLocalSearchParams();

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] =
    useState("M");

  function handleAddToCart() {

    addToCart({
      id: String(name),
      name,
      type,
      price: Number(price),
      description,
      rating,
      image,
    });
  }

  return (

    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}

        contentContainerStyle={{
          paddingBottom: 260,
        }}
      >

        <Image
          source={{
            uri: image as string,
          }}

          style={styles.image}

          resizeMode="cover"
        />

        <View style={styles.info}>

          <Text style={styles.name}>
            {name}
          </Text>

          <Text style={styles.type}>
            {type}
          </Text>

          <View style={styles.ratingContainer}>

            <Ionicons
              name="star"
              size={18}
              color="#FFB800"
            />

            <Text style={styles.rating}>
              {rating || "4.8"}
            </Text>

          </View>

        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Descrição
          </Text>

          <Text style={styles.description}>
            {description}
          </Text>

        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Tamanho 
          </Text>

          <View style={styles.sizes}>

            <TouchableOpacity
              style={
                selectedSize === "S"

                  ? styles.activeSize

                  : styles.sizeButton
              }

              onPress={() =>
                setSelectedSize("S")
              }
            >

              <Text
                style={
                  selectedSize === "S"

                    ? styles.activeSizeText

                    : styles.sizeText
                }
              >
                S
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedSize === "M"

                  ? styles.activeSize

                  : styles.sizeButton
              }

              onPress={() =>
                setSelectedSize("M")
              }
            >

              <Text
                style={
                  selectedSize === "M"

                    ? styles.activeSizeText

                    : styles.sizeText
                }
              >
                M
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedSize === "L"

                  ? styles.activeSize

                  : styles.sizeButton
              }

              onPress={() =>
                setSelectedSize("L")
              }
            >

              <Text
                style={
                  selectedSize === "L"

                    ? styles.activeSizeText

                    : styles.sizeText
                }
              >
                L
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

      <View style={styles.footer}>

        <View>

          <Text style={styles.priceLabel}>
            Preço:
          </Text>

          <Text style={styles.price}>
            R$ {price}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.buyButton}

          onPress={handleAddToCart}
        >

          <Text style={styles.buyText}>
            Adicionar ao carrinho
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
  },

  image: {
    width: "100%",
    height: 320,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  info: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
  },

  type: {
    color: colors.color3,
    marginTop: 6,
    fontSize: 15,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  rating: {
    marginLeft: 6,
    fontWeight: "bold",
    fontSize: 16,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  description: {
    color: "#666",
    lineHeight: 24,
    fontSize: 15,
  },

  sizes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  activeSize: {
    width: 95,
    height: 50,
    backgroundColor: colors.color4,
    borderWidth: 1,
    borderColor: colors.color1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  activeSizeText: {
    color: colors.color1,
    fontWeight: "bold",
    fontSize: 16,
  },

  sizeButton: {
    width: 95,
    height: 50,
    backgroundColor: colors.color2,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  sizeText: {
    fontSize: 16,
    color: colors.color3,
  },

  footer: {
    position: "absolute",
    bottom: 80,
    width: "100%",
    backgroundColor: colors.color4,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },

  priceLabel: {
    color: colors.color3,
    fontSize: 14,
  },

  price: {
    color: colors.color1,
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },

  buyButton: {
    width: 200,
    height: 60,
    backgroundColor: colors.color1,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  buyText: {
    color: colors.color4,
    fontSize: 18,
    fontWeight: "bold",
  },

});