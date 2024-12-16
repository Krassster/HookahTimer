import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { ModalAddOrder } from "@/components/modalAddOrder/ModalAddOrder";

import { AddButtonStyles as styles } from "./AddButton.styles";

export const AddButton = () => {
  const [isAddOrderVisible, setIsAddOrderVisible] = useState(false);

  const handleAddOrder = () => {
    setIsAddOrderVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapper} onPress={handleAddOrder}>
        <Icon name="add" size={25} color="#fff" />
      </TouchableOpacity>
      {isAddOrderVisible && (
        <ModalAddOrder onClose={() => setIsAddOrderVisible(false)} />
      )}
    </View>
  );
};
