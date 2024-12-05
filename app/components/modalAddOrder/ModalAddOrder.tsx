import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ModalAddOrderStyles as styles } from "./ModalAddOrder.styles";
import { useState } from "react";
import { getCurrentTime } from "../../utilities/GetCurrentTime";
import { useOrders } from "../../hooks/useOrder";

export const ModalAddOrder = ({ onClose }: { onClose: () => void }) => {
  const { addOrder } = useOrders();
  const [newOrderName, setNewOrderName] = useState<string>("");

  const addNewOrder = async () => {
    if (!newOrderName.trim()) return;

    const newOrder = {
      id: Date.now().toString(),
      name: `Стол ${newOrderName}`,
      replacements: [getCurrentTime()],
    };

    await addOrder(newOrder);
    setNewOrderName("");
    onClose();
  };

  return (
    <Modal transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            value={newOrderName}
            placeholder="Номер стола"
            onChangeText={setNewOrderName}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => onClose()}>
              <Text style={styles.addButtonText}>Отмена</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={addNewOrder}>
              <Text style={styles.addButtonText}>Отнес гостю</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
