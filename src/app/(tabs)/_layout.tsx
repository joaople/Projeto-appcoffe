import { Tabs} from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false,

      tabBarActiveTintColor: "#C67C4E",
      tabBarInactiveTintColor: "#B0B0B0",

      tabBarStyle: {
          backgroundColor: "#fff",
          height: 70,
          borderTopWidth: 0,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: "absolute",
        },}} >

      <Tabs.Screen 
        name="index" 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ), 
        }}/>

      <Tabs.Screen 
        name="details" 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ), }} />

      <Tabs.Screen 
        name="cart" 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ), 
        }} />
    </Tabs>
  );
}
