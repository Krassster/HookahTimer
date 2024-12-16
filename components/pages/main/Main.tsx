import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { AddButton } from "@/components/AddButton/AddButton";
import { Card } from "@/components/card/Card";
import { ModalAddOrder } from "@/components/modalAddOrder/ModalAddOrder";

import { Props } from "@/app/types/navigation";
import { useOrders } from "@/app/hooks/useOrder";
import { Order } from "@/app/types/OrderType";
import { getCurrentTime } from "@/app/utilities/GetCurrentTime";

import { styles } from "./Main.styles";

export const Main: React.FC<Props> = ({ navigation }) => {
  const { orders, deleteOrder, updateOrder } = useOrders();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleUpdateTime = async (id: string) => {
    const order = orders.find((order) => order.id === id);
    if (order) {
      const updatedOrder: Order = {
        ...order,
        replacements: [...order.replacements, getCurrentTime()],
      };
      await updateOrder(updatedOrder);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    await deleteOrder(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          Смена {new Date().toLocaleDateString("ru-RU")}
        </Text>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            item={item}
            handleUpdateTime={handleUpdateTime}
            handleDeleteOrder={handleDeleteOrder}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.addButton}>
        <AddButton />
      </View>
      {isModalVisible && <ModalAddOrder onClose={toggleModal} />}

      {/* <Menu navigation={navigation} /> */}
    </View>
  );
};
