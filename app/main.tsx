import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { calculateTimeDifference } from './components/DifferenceTime';
import {styles} from './style'

const tempData: Order[] = [{
  id: '3213',
  name: 'Стол 1',
  replacements: ['12:00', '12:16', '12:34', '12:50'],
}]

type Order = {
  id: string;
  name: string;
  replacements: string[];
};

export default function Main() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrderName, setNewOrderName] = useState<string>('');

  useEffect(()=> {
    setOrders(tempData)
  }, [])

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const addNewOrder = (): void => {
    if (!newOrderName.trim()) return;
    setOrders([
      ...orders,
      {
        id: Date.now().toString(),
        name: `Стол ${newOrderName}`,
        replacements: [getCurrentTime()],
      },
    ]);
    setNewOrderName('');
  };

  const handleButtonClick = (id: string): void => {
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
      <Text style={styles.title}>Смена {new Date().toLocaleDateString('ru-RU')}</Text>

      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.table}>{item.name}</Text>
            <View style={styles.row}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {item.replacements.map((rep, idx) => (
                <Text key={idx} style={styles.cell}>
                  {rep}
                </Text>
              ))}
              </ScrollView>
            </View>
            <Text style={styles.timeHasPassed}>прошло с последней смены: {
            calculateTimeDifference(item.replacements[item.replacements.length - 1])
            }</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.replaceButton]}
                onPress={() => handleButtonClick(item.id)}
              >
                <Text style={styles.buttonText}>Заменил</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.closeButton]}
                onPress={() => handleDeleteTable(item.id)}
              >
                <Text style={styles.buttonText}>Закрыл</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          value={newOrderName}
          placeholder="Номер стола"
          onChangeText={setNewOrderName}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNewOrder}>
          <Text style={styles.addButtonText}>Отнес гостю</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


