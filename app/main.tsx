import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, TextInput, View, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import { Order } from './components/types/OrderType';
import { Card } from './components/card/Card';
import { Menu } from './components/menu/Menu';
import { getAllOrders } from './services/orders.services';

const tempData: Order[] = [{
  id: '3213',
  name: 'Стол 1',
  replacements: ['12:00:12', '12:16:24', '12:34:54', '12:50:24'],
}]



export default function Main() {
  const [orders, setOrders] = useState<Order[]>([]);
  
  useEffect(()=> {
    const fetchData = async () => {
      const saveOrders = await getAllOrders()
      setOrders(saveOrders)
    }
    fetchData()
  }, [])

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' , second: '2-digit'});
  };

 

  const handleUpdateTime = (id: string): void => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id !== id) return order;

        order.replacements.push(getCurrentTime())

        return {
          ...order,
        };
      })
    );
  };

  const handleDeleteTable = (id: string) => {
    setOrders((prevOrders) => 
    prevOrders.filter((order) => order.id !== id)
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Смена {new Date().toLocaleDateString('ru-RU')}</Text>
        <Menu />
      </View>
      <ScrollView showsVerticalScrollIndicator={false }>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card item={item} handleUpdateTime={handleUpdateTime} handleDeleteTable={handleDeleteTable}/>
        )}
      />
      </ScrollView>
    </View>
  );
}


