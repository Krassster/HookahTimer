import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Order } from "@/app/types/OrderType";
import * as ordersService from "@/app/services/orders.services";

interface OrdersContextProps {
  orders: Order[];
  reloadOrders: () => Promise<void>;
  addOrder: (order: Order) => Promise<void>;
  deleteOrder: (id: string) => Promise<void>;
  updateOrder: (order: Order) => Promise<void>;
}

const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    reloadOrders();
  }, []);

  const reloadOrders = async () => {
    const allOrders = await ordersService.getAllOrders();
    setOrders(allOrders);
  };

  const addOrder = async (order: Order): Promise<void> => {
    const allOrders = await ordersService.getAllOrders();

    const isDuplicateName = allOrders.some((o) => o.name === order.name);
    if (isDuplicateName) {
      throw new Error(`Такой стол уже существует`);
    }

    allOrders.push(order);

    await ordersService.saveAllOrders(allOrders);
    await reloadOrders();
  };

  const updateOrder = async (updatedOrder: Order): Promise<void> => {
    const allOrders = await ordersService.getAllOrders();
    const orderIndex = allOrders.findIndex((o) => o.id === updatedOrder.id);

    allOrders.splice(orderIndex, 1);
    allOrders.push(updatedOrder);

    await ordersService.saveAllOrders(allOrders);
    await reloadOrders();
  };

  const deleteOrder = async (id: string) => {
    const allOrders = await ordersService.getAllOrders();
    const updatedOrders = allOrders.filter((o) => o.id !== id);

    await ordersService.saveAllOrders(updatedOrders);
    await reloadOrders();
  };

  return (
    <OrdersContext.Provider
      value={{ orders, reloadOrders, addOrder, deleteOrder, updateOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersContext;
