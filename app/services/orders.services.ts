import AsyncStorage from "@react-native-async-storage/async-storage";
import { Order } from "../types/OrderType";

export const saveAllOrders = async (orders: Order[]) => {
  try {
    await AsyncStorage.setItem("orders", JSON.stringify(orders));
  } catch (error) {
    console.error("Ошибка при сохранении всех заказов:", error);
  }
};

export const getAllOrders = async (): Promise<Order[]> => {
  try {
    const orders = await AsyncStorage.getItem("orders");
    return orders ? JSON.parse(orders) : [];
  } catch (error) {
    console.error("Ошибка при загрузке всех заказов:", error);
    return [];
  }
};

export const saveOrder = async (order: Order) => {
  const orders = await getAllOrders();
  const updatedOrders = orders.filter((o) => o.id !== order.id).concat(order);
  await saveAllOrders(updatedOrders);
};

export const removeOrder = async (id: string) => {
  const orders = await getAllOrders();
  const updatedOrders = orders.filter((o) => o.id !== id);
  await saveAllOrders(updatedOrders);
};
