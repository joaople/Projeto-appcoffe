import { createContext, useContext, useState,} from "react";

const CartContext =
  createContext<any>(null);

export function CartProvider({
  children,
}: any) {

  const [cartItems, setCartItems] =
    useState<any[]>([]);

  function addToCart(product: any) {

    const itemExists =
      cartItems.find(
        (item) =>
          item.id === product.id
      );

    if (itemExists) {

      const updatedCart =
        cartItems.map((item) => {

          if (
            item.id === product.id
          ) {

            return {
              ...item,

              quantity:
                item.quantity + 1,
            };
          }

          return item;
        });

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,

        {
          ...product,

          quantity: 1,
        },
      ]);
    }
  }

  function increaseQuantity(
    id: string
  ) {

    const updatedCart =
      cartItems.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            quantity:
              item.quantity + 1,
          };
        }
        return item;
      });

    setCartItems(updatedCart);
  }
  function decreaseQuantity(
    id: string
  ) {

    const updatedCart =
      cartItems
        .map((item) => {

          if (
            item.id === id
          ) {

            return {
              ...item,

              quantity:
                item.quantity - 1,
            };
          }

          return item;
        })

        .filter(
          (item) =>
            item.quantity > 0
        );

    setCartItems(updatedCart);
  }

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}

    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}