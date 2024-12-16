import { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useOrders } from "@/app/hooks/useOrder";
import { getCurrentTime } from "@/app/utilities/GetCurrentTime";

import { ModalAddOrderStyles as styles } from "./ModalAddOrder.styles";

export const ModalAddOrder = ({ onClose }: { onClose: () => void }) => {
  const { addOrder } = useOrders();
  const [newOrderName, setNewOrderName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const addNewOrder = async () => {
    if (!newOrderName.trim()) return;

    const newOrder = {
      id: Date.now().toString(),
      name: newOrderName,
      replacements: [getCurrentTime()],
    };

    try {
      await addOrder(newOrder);
      setNewOrderName("");
      onClose();
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <Modal transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            value={newOrderName}
            placeholder="Введите номер стола"
            onChangeText={setNewOrderName}
            placeholderTextColor="#D8D8D8"
            textAlignVertical="center"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={addNewOrder}>
              <Text style={styles.addButtonText}>добавить</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => onClose()}>
              <Text style={styles.closeButtonText}>отмена</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
