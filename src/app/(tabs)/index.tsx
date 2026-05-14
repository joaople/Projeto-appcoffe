import { FlatList, StyleSheet, View } from "react-native";
import CoffeeCard from '../../components/CoffeeCard';
import products from "../../data/products";

export default function Home() {
  return (
    <View style={styles.container}>

      <FlatList
        data={products}

        keyExtractor={(item) => item.id}

        numColumns={2}

        renderItem={({ item }) => (
          <CoffeeCard product={item} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});