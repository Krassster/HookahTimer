import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import Welcome from "@/components/pages/welcome/Welcome";
import { Main } from "@/components/pages/main/Main";
import Settings from "@/components/pages/settings/Settings";

import { OrdersProvider } from "@/app/context/orders.context";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OrdersProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </OrdersProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
