import React from "react";
import { FlatList, ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import { Order } from "./types/OrderType";
import { Card } from "./components/card/Card";
import { Menu } from "./components/menu/Menu";
import { useOrders } from "./hooks/useOrder";

export default function Main() {
  const { orders, addOrder, deleteOrder } = useOrders();

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleUpdateTime = async (id: string): Promise<void> => {
    const order = orders.find((order) => order.id === id);
    if (order) {
      const updatedOrder: Order = {
        ...order,
        replacements: [...order.replacements, getCurrentTime()],
      };
      await addOrder(updatedOrder);
    }
  };

  const handleDeleteTable = async (id: string): Promise<void> => {
    await deleteOrder(id);
  };

  console.log(!!orders);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Смена {new Date().toLocaleDateString("ru-RU")}
        </Text>
        <Menu />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders.length > 0 ? (
          <FlatList
            data={orders}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                item={item}
                handleUpdateTime={handleUpdateTime}
                handleDeleteTable={handleDeleteTable}
              />
            )}
          />
        ) : (
          <Text> Добавить заказ?</Text>
        )}
      </ScrollView>
    </View>
  );
}
