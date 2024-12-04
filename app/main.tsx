import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { Order } from "./types/OrderType";
import { Card } from "./components/card/Card";
import { Menu } from "./components/menu/Menu";
import { useOrders } from "./hooks/useOrder";
import { ModalAddTable } from "./components/ModalAddTable/ModalAddTable";
import { getCurrentTime } from "./utilities/GetCurrentTime";

export default function Main() {
  const { orders, addOrder, deleteOrder } = useOrders();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>Добавить стол</Text>
              </TouchableOpacity>
            </View>

            {isModalVisible && <ModalAddTable onClose={toggleModal} />}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
