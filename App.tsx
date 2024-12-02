import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';

type Order = {
  name: string;
  installation: string;
  replacements: string[];
  lastReplacement: string;
};

export default function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrderName, setNewOrderName] = useState<string>('');

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const addNewOrder = (): void => {
    if (!newOrderName.trim()) return;
    setOrders([
      ...orders,
      {
        name: `Стол ${newOrderName}`,
        installation: getCurrentTime(),
        replacements: ['', '', '', ''],
        lastReplacement: '',
      },
    ]);
    setNewOrderName('');
  };

  const handleButtonClick = (index: number): void => {
    setOrders((prevOrders) =>
      prevOrders.map((order, i) => {
        if (i !== index) return order;

        const currentTime = getCurrentTime();
        const replacements = [...order.replacements];
        let updatedLastReplacement = order.lastReplacement;

        const emptyIndex = replacements.findIndex((time) => time === '');
        if (emptyIndex !== -1) {
          replacements[emptyIndex] = currentTime;
        } else {
          updatedLastReplacement = currentTime;
        }

        return {
          ...order,
          installation: order.installation || currentTime,
          replacements,
          lastReplacement: updatedLastReplacement,
        };
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Смена {new Date().toLocaleDateString('ru-RU')}</Text>

      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.installation}</Text>
            {item.replacements.map((rep, idx) => (
              <Text key={idx} style={styles.cell}>
                {rep}
              </Text>
            ))}
            <Text style={styles.cell}>{item.lastReplacement}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonClick(index)}
            >
              <Text style={styles.buttonText}>Заменил</Text>
            </TouchableOpacity>
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
        <Button title="Отнес гостю" onPress={addNewOrder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  cell: { flex: 1, textAlign: 'center', borderWidth: 1, padding: 8 },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  controls: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', marginRight: 10, padding: 10 },
});
