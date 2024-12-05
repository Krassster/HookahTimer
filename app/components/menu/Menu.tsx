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
import { ModalAddOrder } from "../modalAddOrder/ModalAddOrder";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";

type MenuProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export const Menu: React.FC<MenuProps> = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddOrderVisible, setIsAddOrderVisible] = useState(false);

  const toggleMenu = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddOrder = () => {
    setIsModalVisible(false);
    setIsAddOrderVisible(true);
  };

  const handleCloseShift = () => {
    navigation.goBack();
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
                onPress={handleAddOrder}
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
      {isAddOrderVisible && (
        <ModalAddOrder onClose={() => setIsAddOrderVisible(false)} />
      )}
    </View>
  );
};
