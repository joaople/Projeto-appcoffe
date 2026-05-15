import { Stack } from "expo-router";
import { CartProvider }
from "../Context/CartContext";

export default function Layout() {

  return (

    <CartProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(auth)"
        />
        <Stack.Screen
          name="(tabs)"
        />
      </Stack>

    </CartProvider>
  );
}