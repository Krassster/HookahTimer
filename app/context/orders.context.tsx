import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Order } from "../types/OrderType";
import * as ordersService from "../services/orders.services";

interface OrdersContextProps {
  orders: Order[];
  reloadOrders: () => Promise<void>;
  addOrder: (order: Order) => Promise<void>;
  deleteOrder: (id: string) => Promise<void>;
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
    const fetchedOrders = await ordersService.getAllOrders();
    setOrders(fetchedOrders);
  };

  const addOrder = async (order: Order): Promise<void> => {
    const existingOrders = await ordersService.getAllOrders();
    const updatedOrders = existingOrders.filter((o) => o.id !== order.id);

    updatedOrders.push(order);
    await ordersService.saveAllOrders(updatedOrders);

    reloadOrders();
  };

  const deleteOrder = async (id: string) => {
    await ordersService.removeOrder(id);
    await reloadOrders();
  };

  return (
    <OrdersContext.Provider
      value={{ orders, reloadOrders, addOrder, deleteOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersContext;
