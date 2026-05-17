import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import CoffeeCard from "../../components/CoffeeCard";
import products from "../../data/products";
import { colors } from "../../styles/colors";

export default function Home() {

  const [selectedCategory, setSelectedCategory] =
    useState("All Coffee");

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (item) => {

      const matchesCategory =

        selectedCategory === "All Coffee"

          ? true
          : item.type === selectedCategory;

      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch
      );
    }
  );

  return (

    <View style={styles.container}>

      <FlatList

        style={{
          paddingTop: 60,
        }}

        data={filteredProducts}

        keyExtractor={(item) => item.id}

        numColumns={2}

        columnWrapperStyle={{
          justifyContent: "space-between",
        }}

        showsVerticalScrollIndicator={false}

        contentContainerStyle={{
          paddingBottom: 120,
          paddingHorizontal: 20,
        }}

        ListHeaderComponent={
          <>

            <View style={styles.header}>

              <Text style={styles.locationText}>
                Localização
              </Text>

              <Text style={styles.cityText}>
                Brasil, Teresina-PI
              </Text>

              <View style={styles.searchContainer}>

                <View style={styles.inputContainer}>

                  <Ionicons
                    name="search"
                    size={20}
                    color={colors.color3}
                  />

                  <TextInput
                    placeholder="pesquisar"
                    placeholderTextColor="#999"
                    style={styles.input}

                    value={search}

                    onChangeText={setSearch}
                  />

                </View>

                <TouchableOpacity
                  style={styles.filterButton}
                >

                  <Ionicons
                    name="options"
                    size={22}
                    color={colors.color4}
                  />

                </TouchableOpacity>

              </View>

              <View style={styles.banner}>

                <View>

                  <Text style={styles.promo}>
                    Promo
                  </Text>

                  <Text style={styles.bannerText}>
                    Compre dois e leve outro GRÁTIS!
                  </Text>

                </View>

              </View>

            </View>

            <View style={styles.categories}>

              <TouchableOpacity
                style={
                  selectedCategory ===
                  "All Coffee"

                    ? styles.activeCategory

                    : styles.category
                }

                onPress={() =>
                  setSelectedCategory(
                    "All Coffee"
                  )
                }
              >

                <Text
                  style={
                    selectedCategory ===
                    "All Coffee"

                      ? styles.activeText

                      : styles.categoryText
                  }
                >
                  All Coffee
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={
                  selectedCategory ===
                  "Macchiato"

                    ? styles.activeCategory

                    : styles.category
                }

                onPress={() =>
                  setSelectedCategory(
                    "Macchiato"
                  )
                }
              >

                <Text
                  style={
                    selectedCategory ===
                    "Macchiato"

                      ? styles.activeText

                      : styles.categoryText
                  }
                >
                  Macchiato
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={
                  selectedCategory ===
                  "Latte"

                    ? styles.activeCategory

                    : styles.category
                }

                onPress={() =>
                  setSelectedCategory(
                    "Latte"
                  )
                }
              >

                <Text
                  style={
                    selectedCategory ===
                    "Latte"

                      ? styles.activeText

                      : styles.categoryText
                  }
                >
                  Latte
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={
                  selectedCategory ===
                  "Espresso"

                    ? styles.activeCategory

                    : styles.category
                }

                onPress={() =>
                  setSelectedCategory(
                    "Espresso"
                  )
                }
              >

                <Text
                  style={
                    selectedCategory ===
                    "Espresso"

                      ? styles.activeText

                      : styles.categoryText
                  }
                >
                  Espresso
                </Text>

              </TouchableOpacity>

            </View>

          </>
        }

        renderItem={({ item }) => (
          <CoffeeCard
            product={item}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.color4,
  },

  header: {
    backgroundColor: colors.color3,
    paddingTop: 40,
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  locationText: {
    color: colors.color4,
    fontSize: 14,
  },

  cityText: {
    color: colors.color4,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  inputContainer: {
    flex: 1,
    height: 55,
    backgroundColor: colors.color4,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    color: colors.color4,
    marginLeft: 10,
  },

  filterButton: {
    width: 55,
    height: 55,
    backgroundColor: colors.color1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },

  banner: {
    marginTop: 25,
    backgroundColor: colors.color1,
    borderRadius: 30,
    padding: 25,
    marginBottom: 20,
  },

  promo: {
    backgroundColor: colors.color3,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    color: colors.color4,
    fontWeight: "bold",
  },

  bannerText: {
    marginTop: 15,
    color: colors.color4,
    fontSize: 38,
    fontWeight: "bold",
    width: 250,
    lineHeight: 48,
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 25,
  },

  activeCategory: {
    backgroundColor: colors.color1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },

  activeText: {
    color: colors.color4,
    fontWeight: "bold",
  },

  category: {
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  categoryText: {
    color: colors.color3,
  },

});