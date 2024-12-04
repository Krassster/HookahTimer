import {
  GestureResponderEvent,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MenuStyles as styles } from "./Menu.styles";
import { Hamburger } from "../hamburger/Hamburger";
import { useState } from "react";
import { ModalAddTable } from "../ModalAddTable/ModalAddTable";

export const Menu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddTableVisible, setIsAddTableVisible] = useState(false);

  const toggleMenu = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddTable = () => {
    setIsModalVisible(false);
    setIsAddTableVisible(true);
  };

  const handleCloseShift = () => {
    console.log("Закрыть смену");
    setIsModalVisible(false);
  };

  const clickOutside = (e: GestureResponderEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Hamburger onPress={toggleMenu} />

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={toggleMenu}>
        <TouchableWithoutFeedback onPress={clickOutside}>
          <View style={styles.modalOverlay}>
            <View style={styles.menu}>
              <TouchableOpacity
                onPress={handleAddTable}
                style={styles.menuItem}>
                <Text style={styles.menuText}>Добавить стол</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCloseShift}
                style={styles.menuItem}>
                <Text style={styles.menuText}>Закрыть смену</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {isAddTableVisible && (
        <ModalAddTable onClose={() => setIsAddTableVisible(false)} />
      )}
    </View>
  );
};
