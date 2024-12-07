import Welcome from "./app/components/pages/welcome/Welcome";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { OrdersProvider } from "./app/context/orders.context";
import { Main } from "./app/components/pages/main/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./app/components/settings/Settings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider mode="light">
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
    </GluestackUIProvider>
  );
}
