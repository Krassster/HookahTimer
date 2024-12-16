// Не используется в данном варианте

import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { useNavigationState } from "@react-navigation/native";
import { ModalAddOrder } from "@/components/modalAddOrder/ModalAddOrder";
import { saveAllOrders } from "@/app/services/orders.services";
import { Props } from "@/app/types/navigation";

import { MenuStyles as styles } from "./Menu.styles";

export const Menu: React.FC<Props> = ({ navigation }) => {
  const [isAddOrderVisible, setIsAddOrderVisible] = useState(false);

  const handleAddOrder = () => {
    setIsAddOrderVisible(true);
  };

  const handleCloseShift = () => {
    saveAllOrders([]);
    navigation.goBack();
  };

  const routes = useNavigationState((state) => state.routes);
  const currentRoute = routes[routes.length - 1]?.name;

  const getIconStyle = (route: string) => {
    const isActive = currentRoute === route;
    return {
      backgroundColor: isActive ? "#fff" : "#000",
      color: isActive ? "#000" : "#fff",
      borderColor: "#fff",
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.iconWrapper,
          {
            backgroundColor: getIconStyle("Main").backgroundColor,
            borderColor: getIconStyle("Main").borderColor,
          },
        ]}
        onPress={() => navigation.navigate("Main")}>
        <Icon name="home" size={25} color={getIconStyle("Main").color} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={handleAddOrder}>
        <Icon name="add" size={25} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.iconWrapper,
          {
            backgroundColor: getIconStyle("Settings").backgroundColor,
            borderColor: getIconStyle("Settings").borderColor,
          },
        ]}
        onPress={() => navigation.navigate("Settings")}>
        <Icon
          name="settings"
          size={25}
          color={getIconStyle("Settings").color}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={handleCloseShift}>
        <Icon name="exit" size={25} color="#fff" />
      </TouchableOpacity>
      {isAddOrderVisible && (
        <ModalAddOrder onClose={() => setIsAddOrderVisible(false)} />
      )}
    </View>
  );
};
