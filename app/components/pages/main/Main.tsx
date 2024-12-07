import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Main.styles";
import { Order } from "../../../types/OrderType";
import { Card } from "../../card/Card";
import { Menu } from "../../menu/Menu";
import { useOrders } from "../../../hooks/useOrder";
import { ModalAddOrder } from "../../modalAddOrder/ModalAddOrder";
import { getCurrentTime } from "../../../utilities/GetCurrentTime";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
import { Box } from "@/components/ui/box";

type MainProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export const Main: React.FC<MainProps> = ({ navigation }) => {
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

  const handleDeleteOrder = async (id: string): Promise<void> => {
    await deleteOrder(id);
  };

  return (
    <Box className="flex-1">
      <Box style={styles.headerContainer}>
        <Text style={styles.header}>
          Смена {new Date().toLocaleDateString("ru-RU")}
        </Text>
      </Box>

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

      {isModalVisible && <ModalAddOrder onClose={toggleModal} />}

      <Menu navigation={navigation} />
    </Box>
  );
};
